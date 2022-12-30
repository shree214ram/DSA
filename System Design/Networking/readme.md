1. what is TCP/IP :- 

2. What is TCP 3 way Handshacking :-
   https://www.geeksforgeeks.org/tcp-3-way-handshake-process/
2. What is ssl (Secure Socket Layer) :- 

3. What is TLS Handshacking :-
   https://www.geeksforgeeks.org/transport-layer-security-tls-handshake/

   Transfer Layer Security :- Secured socket Layer V3.0 and TLS V1.0


            Sender                  Reciver 

         1. Sync                 1. SYN ACK
         2. ACK ClientHello      2. Service Hello Certificate
         3. Client Key Exchange  3. Change Chiper Specific
         4. Application Data     4. Application Data 

         
         1. With a TLS enabled service, a sender sends a ClientHello (as referred in protocol). This includes information about Client.
         2. Then server responds with ServerHello message (selecting highest version of TLS supported by Client) and then chooses a cipher suite from list in ClientHello message. The server also transmits its Digital certificate and a final ServerHelloDone message.
         3. Client validates certificate. Client then sends ClientKeyExchange message. Here client chooses a key exchange mechanism to securely establish a shared secret with server. Client also needs to send ChangeCipherSpec indicating that it is switching to secure communication now, which is finally followed by Finished message for indicating a successful handshake.
         4. Server replies with ChangeCipherSpec and an encrypted Finished message once shared secret is received.
         Session key is Shared Symmetric Encryption Key used in TLS sessions to encrypt data being sent back and forth.
4. What is the difference between SSL and TSL :- 
   
   https://www.geeksforgeeks.org/difference-between-secure-socket-layer-ssl-and-transport-layer-security-tls/?ref=rp