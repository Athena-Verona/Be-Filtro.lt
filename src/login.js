// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { 
    getAuth, onAuthStateChanged, signOut, 
    signInWithEmailAndPassword, createUserWithEmailAndPassword 
} from "firebase/auth";
import { getDatabase, set, ref, update } from "firebase/database";

// Import Firebase config
import firebaseConfig from "./utils/firebase-config"

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize services
// const analytics = getAnalytics();
const auth = getAuth();
const database = getDatabase();

// Event Listener
login.addEventListener('click', (e) => {
    e.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        document.getElementById('lock').innerHTML = "lock_open";
        $(document).ready(function(){
            $("#login").fadeTo(100, 0);
            $('.loading')
            .delay(100)
            .queue(function(next){ 
                $(this).hide().fadeIn('fast');
                next(); 
                $(this).css("visibility", "visible");
                next(); 
            });
        });

        const user = userCredential.user;
        const d = new Date();
        console.log('Logged in!');

        // Updates realtime database
        update(ref(database, 'users/' + user.uid), {
            last_login: d.toLocaleDateString('en-CA')
        })

        setTimeout(function() { location.href = "index.html"; }, 2000);
    }).catch((error) => {
        const errorCode = error.code;
        if(errorCode === 'auth/user-not-found') {
            alert("Toks vartotojas neegzistuoja");
        }
        const errorMessage = error.message;
        console.log(errorMessage);
    });
}); 

import './styles/login.css';