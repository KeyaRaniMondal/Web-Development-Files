import java.io.*;   // IO classes
import java.net.*;  // Networking classes

/**
 * Updated Client – Tasks 6 & 7
 *
 * Task 6 : Send and receive messages simultaneously using two threads:
 *           • SenderThread   – reads from keyboard, writes to server
 *           • ReceiverThread – reads from server, prints to console
 *
 * Task 7 : Asks the user for a name on startup and sends it to the server
 *           as the very first message so the server can label broadcasts.
 */
public class Client_Lab4 {

    public static void main(String[] args) {

        try {
            Socket s = new Socket("localhost", 6000); // connect to server

            DataInputStream  din  = new DataInputStream(s.getInputStream());
            DataOutputStream dout = new DataOutputStream(s.getOutputStream());
            BufferedReader   br   = new BufferedReader(new InputStreamReader(System.in));

            // ── Task 7: ask for name and send it immediately ──────────────────
            System.out.print("Enter your name: ");
            String name = br.readLine();
            dout.writeUTF(name);   // server reads this before creating ClientHandler
            dout.flush();
            System.out.println("Connected to chatroom as " + name + ". Type \"exit\" to quit.\n");

            // ── Task 6: two threads so sending & receiving happen simultaneously ──

            // Receiver thread – continuously prints messages from other clients
            Thread receiverThread = new Thread(() -> {
                try {
                    String incoming;
                    while (true) {
                        incoming = din.readUTF();           // blocks until server sends something
                        System.out.println(incoming);       // print broadcast message
                    }
                } catch (IOException e) {
                    // server closed the connection (e.g. we typed "exit")
                    System.out.println("[Disconnected from server]");
                }
            });
            receiverThread.setDaemon(true);   // dies when main thread (sender) exits
            receiverThread.start();

            // Sender thread (runs on main thread) – reads keyboard, sends to server
            String userInput;
            while (true) {
                userInput = br.readLine();        // blocks until user types a line
                if (userInput == null) break;     // stream closed (Ctrl-D / Ctrl-Z)

                dout.writeUTF(userInput);         // send to server
                dout.flush();

                // Task 5 support: if user typed "exit", stop sending
                if (userInput.equalsIgnoreCase("exit")) {
                    System.out.println("[You have left the chat]");
                    break;
                }
            }

            // clean up
            dout.close();
            din.close();
            s.close();

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}