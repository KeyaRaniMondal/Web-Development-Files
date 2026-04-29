import java.io.*;
import java.net.*;
import java.util.*;

public class Server {

    static Vector<ClientHandler> clients = new Vector<>();
    static int clientCount = 0;

    public static void main(String[] args) {
        try (ServerSocket serverSocket = new ServerSocket(6000)) {
            System.out.println("Chat Server started on port 6000...");

            while (true) {
                Socket socket = serverSocket.accept();
                clientCount++;
                String clientId = "Client" + clientCount;
                System.out.println(clientId + " connected from " + socket.getInetAddress());

                DataInputStream din = new DataInputStream(socket.getInputStream());
                DataOutputStream dout = new DataOutputStream(socket.getOutputStream());

                ClientHandler handler = new ClientHandler(socket, clientId, din, dout);
                clients.add(handler);
                new Thread(handler).start();
            }

        } catch (IOException e) {
            System.out.println("Server error: " + e.getMessage());
        }
    }

    static void broadcast(String message) {
        synchronized (clients) {
            Iterator<ClientHandler> iterator = clients.iterator();
            while (iterator.hasNext()) {
                ClientHandler client = iterator.next();
                if (!client.isActive) {
                    iterator.remove();
                    continue;
                }
                try {
                    client.dout.writeUTF(message);
                } catch (IOException e) {
                    client.isActive = false;
                    iterator.remove();
                }
            }
        }
    }
}

class ClientHandler implements Runnable {

    Socket socket;
    String clientId;
    String userName;
    DataInputStream din;
    DataOutputStream dout;
    volatile boolean isActive;

    public ClientHandler(Socket socket, String clientId,
                         DataInputStream din, DataOutputStream dout) {
        this.socket = socket;
        this.clientId = clientId;
        this.din = din;
        this.dout = dout;
        this.isActive = true;
    }

    @Override
    public void run() {
        try {
            userName = din.readUTF();
            Server.broadcast(userName + " joined the chat.");

            String received;
            while (isActive && (received = din.readUTF()) != null) {
                if (received.equalsIgnoreCase("exit")) {
                    isActive = false;
                    Server.broadcast(userName + " left the chat.");
                    break;
                }
                Server.broadcast(userName + ": " + received);
            }
        } catch (IOException e) {
            System.out.println(clientId + " error: " + e.getMessage());
        } finally {
            close();
        }
    }

    private void close() {
        isActive = false;
        try {
            socket.close();
        } catch (IOException ignored) {
        }
    }
}
