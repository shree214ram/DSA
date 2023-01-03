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

      SSL	TLS
      SSL stands for Secure Socket Layer.	TLS stands for Transport Layer Security.
      SSL (Secure Socket Layer) supports the Fortezza algorithm.	TLS (Transport Layer Security) does not support the Fortezza algorithm.
      SSL (Secure Socket Layer) is the 3.0 version.	TLS (Transport Layer Security) is the 1.0 version.
      In SSL( Secure Socket Layer), the "Message digest" is used to create a master secret.	In TLS(Transport Layer Security), a "Pseudo-random function" is used to create a master secret.
      In SSL( Secure Socket Layer), the "Message Authentication" Code protocol is used.	In TLS(Transport Layer Security), "Hashed Message Authentication" Code protocol is used.
      SSL (Secure Socket Layer) is more complex than TLS(Transport Layer Security).	TLS (Transport Layer Security) is simple.
      SSL (Secure Socket Layer) is less secured as compared to TLS(Transport Layer Security).	TLS (Transport Layer Security) provides high security.
      SSL is less reliable and slower.	TLS is highly reliable and upgraded. It provides less latency.
      SSL has been depreciated.	TLS is still widely used.
      SSL uses port to set up "explicit connection".	TLS uses protocol to set up "implicit connection".