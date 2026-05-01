import java.io.*;
import java.net.*;
import java.util.*;
import java.util.concurrent.CopyOnWriteArrayList;

public class Server {

    // ✅ Thread-safe list (better than Vector)
    static List<ClientHandler> clients = new CopyOnWriteArrayList<>();
    static int clientCount = 0;

    public static void main(String[] args) {
        try (ServerSocket serverSocket = new ServerSocket(6000)) {
            System.out.println("Chat Server started on port 6000...");

            while (true) {
                Socket socket = serverSocket.accept();
                clientCount++;

                DataInputStream din = new DataInputStream(socket.getInputStream());
                DataOutputStream dout = new DataOutputStream(socket.getOutputStream());

                ClientHandler handler = new ClientHandler(socket, din, dout);
                clients.add(handler);

                new Thread(handler).start();
            }

        } catch (IOException e) {
            System.out.println("Server error: " + e.getMessage());
        }
    }

    // ✅ Broadcast to all except sender
    static void broadcast(String message, ClientHandler sender) {
        for (ClientHandler client : clients) {
            if (client != sender && client.isActive) {
                try {
                    client.dout.writeUTF(message);
                    client.dout.flush();
                } catch (IOException e) {
                    client.close();
                }
            }
        }
    }
}


class ClientHandler implements Runnable {

    private Socket socket;
    private String userName;
    DataInputStream din;
    DataOutputStream dout;
    volatile boolean isActive;

    public ClientHandler(Socket socket, DataInputStream din, DataOutputStream dout) {
        this.socket = socket;
        this.din = din;
        this.dout = dout;
        this.isActive = true;
    }

    @Override
    public void run() {
        try {
            // ✅ Read username first
            userName = din.readUTF();
            System.out.println(userName + " connected.");

            Server.broadcast("🔵 " + userName + " joined the chat.", this);

            String message;

            while (isActive) {
                message = din.readUTF();

                if (message.equalsIgnoreCase("exit")) {
                    Server.broadcast("🔴 " + userName + " left the chat.", this);
                    break;
                }

                Server.broadcast(userName + ": " + message, this);
            }

        } catch (IOException e) {
            System.out.println(userName + " disconnected unexpectedly.");
        } finally {
            close();
        }
    }

    // ✅ Clean removal + resource cleanup
    public void close() {
        isActive = false;
        Server.clients.remove(this);   // 🔥 immediate removal

        try {
            if (din != null) din.close();
            if (dout != null) dout.close();
            if (socket != null) socket.close();
        } catch (IOException ignored) {}

        System.out.println(userName + " connection closed.");
    }
}