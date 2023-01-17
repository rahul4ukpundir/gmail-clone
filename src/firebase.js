import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBgmrpCQpMCF-i-_RYnl2-tqnbpk71gm4A",
    authDomain: "clone-56a45.firebaseapp.com",
    projectId: "clone-56a45",
    storageBucket: "clone-56a45.appspot.com",
    messagingSenderId: "649415274112",
    appId: "1:649415274112:web:918a84754f41150ff94065"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()

//  signInWithPopup(auth, provider)
//   .then((result) => {
//     debugger;
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     return result.user;
//     // ...
//   }).catch((error) => {
//     debugger
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });


 


