import java.io.*;         // IO classes: DataInputStream, DataOutputStream, BufferedReader, etc.
import java.net.*;        // Networking classes: ServerSocket, Socket.
import java.util.*;       // For ArrayList.

// ─────────────────────────────────────────────
//  Task 3: Shared list of all connected clients
// ─────────────────────────────────────────────
public class Server_Lab4 {

    // static list so every ClientHandler can access it
    static ArrayList<ClientHandler> clients = new ArrayList<>();
    static int clientCount = 0; // simple counter for logging

    public static void main(String[] args) {
        try {
            ServerSocket ss = new ServerSocket(6000);
            System.out.println("Server started. Waiting for clients...");

            while (true) {                        // accept clients forever
                Socket s = ss.accept();           // blocks until a client connects
                clientCount++;
                System.out.println("Client " + clientCount + " connected.");

                // Task 7: ask the client for its name before starting the handler
                // (name is sent as the very first UTF string by the client)
                DataInputStream tempDin = new DataInputStream(s.getInputStream());
                String clientName = tempDin.readUTF();   // receive name from client
                System.out.println("Client name: " + clientName);

                // Task 3: create handler and add to shared list
                ClientHandler handler = new ClientHandler(s, clientName, tempDin);
                clients.add(handler);

                // start the thread for this client
                new Thread(handler).start();
            }

        } catch (Exception e) {
            System.out.println(e);
        }
    }

    // ─────────────────────────────────────────────
    //  Task 4: Broadcast a message to all clients
    //          except the sender
    // ─────────────────────────────────────────────
    public static void broadcast(String message, ClientHandler sender) {
        // iterate over a copy to avoid ConcurrentModificationException
        for (ClientHandler client : new ArrayList<>(clients)) {
            if (client != sender) {           // don't echo back to sender
                client.sendMessage(message);
            }
        }
    }
}

// ─────────────────────────────────────────────────────────────────────────────
//  ClientHandler  –  one instance per connected client, runs in its own thread
// ─────────────────────────────────────────────────────────────────────────────
class ClientHandler implements Runnable {

    private Socket socket;
    private DataInputStream  din;
    private DataOutputStream dout;
    // Task 7: store the client's chosen name instead of a number
    private String clientName;

    public ClientHandler(Socket socket, String clientName, DataInputStream din) {
        try {
            this.socket     = socket;
            this.clientName = clientName;
            this.din        = din;                                          // already opened in Server
            this.dout       = new DataOutputStream(socket.getOutputStream());
            // Task 2: NO BufferedReader(System.in) – server never types manually
        } catch (IOException e) {
            System.out.println(e);
        }
    }

    // helper so broadcast() can push a message to this client
    public void sendMessage(String message) {
        try {
            dout.writeUTF(message);
            dout.flush();
        } catch (IOException e) {
            System.out.println("Error sending to " + clientName + ": " + e);
        }
    }

    @Override
    public void run() {
        String message;
        try {
            // Task 4 & 5: read messages and forward them; stop on "exit"
            while (true) {
                message = din.readUTF();          // blocks until client sends something

                // Task 5: handle client exit gracefully
                if (message.equalsIgnoreCase("exit")) {
                    System.out.println(clientName + " has left the chat.");
                    Server_Lab4.broadcast(clientName + " has left the chat.", this);
                    break;                        // exit the loop → finally block cleans up
                }

                // Task 7: format as  "Name: message"
                String formatted = clientName + ": " + message;
                System.out.println(formatted);            // log on server console

                // Task 4: forward to every OTHER client
                Server_Lab4.broadcast(formatted, this);
            }

        } catch (IOException e) {
            System.out.println(clientName + " disconnected unexpectedly: " + e);
        } finally {
            // Task 5: remove from shared list and close resources
            Server_Lab4.clients.remove(this);
            try {
                din.close();
                dout.close();
                socket.close();
            } catch (IOException e) {
                System.out.println(e);
            }
        }
    }
}