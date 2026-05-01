import java.io.*;
import java.net.*;

public class Client1 {

    public static void main(String[] args) {
        try {
            BufferedReader console = new BufferedReader(new InputStreamReader(System.in));

            System.out.print("Enter your name: ");
            String name = console.readLine().trim();
            if (name.isEmpty()) name = "Anonymous";

            Socket socket = new Socket("localhost", 6000);

            DataInputStream din = new DataInputStream(socket.getInputStream());
            DataOutputStream dout = new DataOutputStream(socket.getOutputStream());

            // ✅ Send username first
            dout.writeUTF(name);
            dout.flush();

            // ✅ Thread for receiving messages
            Thread receiveThread = new Thread(() -> {
                try {
                    while (true) {
                        String msg = din.readUTF();
                        System.out.println(msg);
                    }
                } catch (IOException e) {
                    System.out.println("❌ Disconnected from server.");
                }
            });

            receiveThread.start();

            // ✅ Main thread for sending
            String msg;
            while ((msg = console.readLine()) != null) {
                dout.writeUTF(msg);
                dout.flush();

                if (msg.equalsIgnoreCase("exit")) {
                    break;
                }
            }

            socket.close();

        } catch (Exception e) {
            System.out.println("Client error: " + e.getMessage());
        }
    }
}