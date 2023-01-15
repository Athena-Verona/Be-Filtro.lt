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
const app = initializeApp(firebaseConfig);

// Initialize services
// const analytics = getAnalytics();
const auth = getAuth(app);
const database = getDatabase(app);

// Event Listener
login.addEventListener('click', (e) => {
    e.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        document.getElementById('lock').innerHTML = "lock_open";
        $(document).ready(function(){
            $("#email").css("border", "1px solid transparent");
            $("#email").css("filter", "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))");
    
            $("#password").css("border", "1px solid transparent");
            $("#password").css("filter", "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))");

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
        if(errorCode == 'auth/user-not-found') {
            console.log("Toks vartotojas neegzistuoja.");

            document.getElementById("alert-text").innerHTML = "Toks vartotojas neegzistuoja.";

            $("#email").css("border", "1px solid rgb(190, 13, 13, .8)");
            $("#email").css("filter", "drop-shadow(0 4px 4px rgb(190, 13, 13, .8)");
        } else if(errorCode == 'auth/invalid-email') {
            console.log("Neteisingai įvestas el. paštas.");

            document.getElementById("alert-text").innerHTML = "Neteisingai įvestas el. paštas.";

            $("#email").css("border", "1px solid rgb(190, 13, 13, .8)");
            $("#email").css("filter", "drop-shadow(0 4px 4px rgb(190, 13, 13, .8)");
        } else if(errorCode == 'auth/wrong-password') {
            console.log("Neteisingas slaptažodis.");

            $("#password").css("border", "1px solid rgb(190, 13, 13, .8)");
            $("#password").css("filter", "drop-shadow(0 4px 4px rgb(190, 13, 13, .8)");
        } else if(errorCode == 'auth/too-many-requests') {
            console.log("Per daug prisijungimo bandymų! Bandykite vėliau.");

            document.getElementById("alert-text").innerHTML = "Apsiraminsi?";
        }
        const errorMessage = error.message;
        // console.log(errorMessage);
    });
    $(document).ready(function(){
        $("#email").css("border", "1px solid transparent");
        $("#email").css("filter", "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))");

        $("#password").css("border", "1px solid transparent");
        $("#password").css("filter", "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))");

        document.getElementById("alert-text").innerHTML = "";
    });
}); 

import './styles/login.css';