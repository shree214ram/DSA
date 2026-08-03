To answer your question: No, sensitive data is never stored as plain text in your database. Based on the implementation we just reviewed, we are using a "defense-in-depth" approach to ensure that even if someone gains access to your database, they cannot read the sensitive information.

Here is how you can verify where the data is stored and the encryption/masking applied to each column.

1. The PDF File Content
When a user uploads a document, the entire file is encrypted before it ever touches the disk or the database.

Table: tax_documents
Column: content (stored as a BYTEA or binary large object).
Security: This is AES-encrypted. If you query this directly in your database (e.g., using pgAdmin or psql), you will see a binary blob that is unreadable.
Verification SQL:
sql
SELECT file_name, content FROM tax_documents WHERE id = <your_id>;
You will see the content is binary data, not the text of your payslip.
2. The PII Audit Logs (Original Sensitive Values)
To support the "Reveal" feature in your UI, we store the original values (like the actual Name or Aadhaar number). However, we do not store them as plain text.

Table: audit_logs
Column: old_value
Security: This is AES-encrypted and then Base64-encoded. Even though it is in a text column, the text looks like a random scrambled string (e.g., hK3u9/X...).
Verification SQL:
sql
SELECT action, source_provenance, old_value FROM audit_logs WHERE document_id = <your_id>;
Look at the old_value column; it will contain scrambled characters.
3. The Masked PII Data
This is the data that is safe for the UI and the data we send to the LLM (Gemini).

Table: audit_logs
Column: new_value
Security: This is Masked/Redacted. We only keep non-sensitive parts (like the last 4 digits of an account number) to help the user identify which field is which.
Verification SQL:
sql
SELECT action, source_provenance, new_value FROM audit_logs WHERE document_id = <your_id>;
You will see values like RA*** SH*** or XXXXXXXX9012.
Summary Table for your reference:
Data Type	Column	Format in DB	Why?
Full PDF	tax_documents.content	AES Binary	Prevents unauthorized file access.
Raw PII	audit_logs.old_value	AES Base64 String	Stores original data securely for "Reveal" feature.
Masked PII	audit_logs.new_value	Scrubbed Text	Safe for display in the "Tokenization Audit" UI.
How to programmatically verify decryption works:
You can verify the encryption is working correctly by using the getDecryptedValue method in DocumentService.java. It fetches the scrambled old_value, reverses the Base64, runs it through the EncryptionService using your secret key, and returns the original text only to the authenticated session.