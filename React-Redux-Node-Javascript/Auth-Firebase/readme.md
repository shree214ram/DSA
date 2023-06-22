# Live Project with Client {Satish ND } Important information 
shree214ram@gmail.com/Test@123 

# Apply Auth firbase Login/Logout/Register
https://www.youtube.com/watch?v=Vv_Oi7zPPTw&ab_channel=webdecoded

# Upload image 
https://firebase.google.com/docs/storage/web/list-files
https://www.youtube.com/watch?v=pJ8LykeBDo4&ab_channel=FullstackSimplified

# upload multiple files 
https://stackoverflow.com/questions/41673499/how-to-upload-multiple-files-to-firebase

# permission related issues {Missing or insufficient permissions.FirebaseError: Missing or insufficient permissions.}
https://medium.com/firebase-tips-tricks/how-to-fix-firestore-error-permission-denied-missing-or-insufficient-permissions-777d591f404#:~:text=This%20message%20is%20the%20same%20for%20all%20platforms%2C,changing%20the%20rules%20in%20Cloud%20Firestore%20Security%20Rules.

# Cloud Function {for making rest api same like AWS Lambda} 
https://firebase.google.com/docs/functions

# How to test cloud function locally 
    https://firebase.google.com/docs/functions/local-emulator#windows
    https://www.youtube.com/watch?v=J0j1uhelY7M&ab_channel=CodeParser

   1. set GOOGLE_APPLICATION_CREDENTIALS=C:\Users\Ambika\Desktop\React_Project\mystoremywebapp-firebase-adminsdk-fmpyp-ad8bffa2a1.json


    2. firebase emulators:start

    3. If any Issues 

        # first way to resolve 
            https://stackoverflow.com/questions/64633727/how-to-fix-running-scripts-is-disabled-on-this-system
        ```cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at https:/go.microsoft.com/```
            It is as follows:

            First, Open PowerShell with Run as Administrator.
            Then, run this command in PowerShell
        ### Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
        ### After that type Y and press Enter.

        # second way to resolve 
            https://lazyadmin.nl/powershell/running-scripts-is-disabled-on-this-system/
            powershell -ExecutionPolicy Bypass -File script.ps1

        ### powershell -ExecutionPolicy Bypass -File C:\Users\Ambika\AppData\Roaming\npm\firebase.ps1

    4. !!  functions: Failed to load function definition from source: FirebaseError: There was an error reading functions\package.json:
    functions\lib\index.js does not exist, can't deploy Cloud Functions
    # npm run-script build 

# Difference between Google Cloud Vs Google Firebase 
https://blog.back4app.com/firebase-vs-google-cloud/
https://medium.com/google-developers/whats-the-relationship-between-firebase-and-google-cloud-57e268a7ff6f

https://us-central1-mystoremywebapp.cloudfunctions.net/AddUserInfo

https://us-central1-mystoremywebapp.cloudfunctions.net/UploadImage

/mystoremywebapp/functions


# Postman token 
postman://auth/callback?code=119baa6cafc9af7daf5625b5d49830c85171a8bfa931a1a54860bbd1279b7fa8




