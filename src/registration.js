// Firebase ▼-▼

// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";

// Import Firebase config
import firebaseConfig from "./utils/firebase-config"

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth();
const database = getDatabase();

// Event Listener
submitData.addEventListener('click', (e) => {
    e.preventDefault();
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var password_repeat = document.getElementById("password_repeat").value;  

    // Custom authentication error checks
    var username_len = document.getElementById('username').value.length;
    var email_len = document.getElementById('email');
    var password_len = document.getElementById('password');
    if(username_len < 2) {
        console.log('Vartotojo vardas turi susidaryti bent iš 2 simbolių.');

        document.getElementById("alert-text").innerHTML = "Vartotojo vardas turi susidaryti bent iš 2 simbolių.";
        
        $("#username").css("border", "1px solid rgb(190, 13, 13, .8)");
        $("#username").css("filter", "drop-shadow(0 4px 4px rgb(190, 13, 13, .8)");

        // Don't run the code anymore
        return
    } if(username_len > 15) {
        console.log('Vartotojo vardas pasiekė 15 simbolių limitą.');

        document.getElementById("alert-text").innerHTML = "Vartotojo vardas pasiekė 15 simbolių limitą.";

        $("#username").css("border", "1px solid rgb(190, 13, 13, .8)");
        $("#username").css("filter", "drop-shadow(0 4px 4px rgb(190, 13, 13, .8)");

        // Don't run the code anymore
        return
    } else if(!(email_len && email_len.value)) {
        console.log('Įveskite el. paštą.');

        $("#email").css("border", "1px solid rgb(190, 13, 13, .8)");
        $("#email").css("filter", "drop-shadow(0 4px 4px rgb(190, 13, 13, .8)");

        // Don't run the code anymore
        return
    } else if(!(password_len && password_len.value)) {
        console.log('Įveskite slaptažodį.');

        $("#password").css("border", "1px solid rgb(190, 13, 13, .8)");
        $("#password").css("filter", "drop-shadow(0 4px 4px rgb(190, 13, 13, .8)");

        // Don't run the code anymore
        return
    } else if(!(password == password_repeat)) {
        console.log('Slaptažodžiai nesutampa.');

        document.getElementById("alert-text").innerHTML = "Slaptažodžiai nesutampa.";

        $("#password").css("border", "1px solid rgb(190, 13, 13, .8)");
        $("#password").css("filter", "drop-shadow(0 4px 4px rgb(190, 13, 13, .8)");
        $("#password_repeat").css("border", "1px solid rgb(190, 13, 13, .8)");
        $("#password_repeat").css("filter", "drop-shadow(0 4px 4px rgb(190, 13, 13, .8)");

        // Don't run the code anymore
        return
    } 

    // Firebase authentication 
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => { // Authentication successful
        $(document).ready(function(){
            $("#username").css("border", "1px solid transparent");
            $("#username").css("filter", "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))");
    
            $("#email").css("border", "1px solid transparent");
            $("#email").css("filter", "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))");
    
            $("#password").css("border", "1px solid transparent");
            $("#password").css("filter", "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))");
            $("#password_repeat").css("border", "1px solid transparent");
            $("#password_repeat").css("filter", "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))");

            document.getElementById("alert-text").innerHTML = "";
            
            $("#submitData").fadeTo(100, 0);
            $('.loading')
            .delay(200)
            .queue(function(next){ 
                $(this).hide().fadeIn('fast');
                next(); 
                $(this).css("visibility", "visible");
                next(); 
            });
        });

        console.log('Paskyra sukurta!');
        const user = userCredential.user;
        const d = new Date();

        // Stores users to realtime database
        set(ref(database, 'users/' + user.uid), {
            username: username,
            email: email,
            last_login:  d.toLocaleDateString('en-CA'),
        })

        setTimeout(function() { location.href = "index.html"; }, 2000);
    }).catch((error) => { // Authentication unsuccessful
        const errorCode = error.code;
        if(errorCode === 'auth/email-already-in-use') {
            console.log("Toks el. paštas jau užregistruotas.");

            document.getElementById("alert-text").innerHTML = "Toks el. paštas jau užregistruotas.";

            $("#email").css("border", "1px solid rgb(190, 13, 13, .8)");
            $("#email").css("filter", "drop-shadow(0 4px 4px rgb(190, 13, 13, .8)");
        } if(errorCode === 'auth/invalid-email') {
            console.log("Neteisingai įvestas el. paštas.");

            $("#email").css("border", "1px solid rgb(190, 13, 13, .8)");
            $("#email").css("filter", "drop-shadow(0 4px 4px rgb(190, 13, 13, .8)");
        } if(errorCode === 'auth/weak-password') {
            console.log("Slaptažodis turi susidaryti bent iš 6 simbolių.");

            document.getElementById("alert-text").innerHTML = "Slaptažodis turi susidaryti bent iš 6 simbolių.";

            $("#password").css("border", "1px solid rgb(190, 13, 13, .8)");
            $("#password").css("filter", "drop-shadow(0 4px 4px rgb(190, 13, 13, .8)");
        }
        const errorMessage = error.message;
        // alert(errorMessage);
    }); 
    $(document).ready(function(){
        $("#username").css("border", "1px solid transparent");
        $("#username").css("filter", "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))");

        $("#email").css("border", "1px solid transparent");
        $("#email").css("filter", "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))");

        $("#password").css("border", "1px solid transparent");
        $("#password").css("filter", "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))");
        $("#password_repeat").css("border", "1px solid transparent");
        $("#password_repeat").css("filter", "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))");

        document.getElementById("alert-text").innerHTML = "";
    });
});

// var query = firebase.database().ref("users").orderByKey();
//     query.once("value")
//         .then(function (snapshot) {
//             snapshot.forEach(function (childSnapshot) {
//                 var key = childSnapshot.key; // "ada"

//                 // Cancel enumeration
//                 return true;
//             });
//         });

// function validate_email(email) {
//     var expression = /^[^@]+@\w+(\.\w+)+\w$/
//     if(expression.test(email) == true) {
//         // Email is good
//         return true
//     } else {
//         return false
//     }
// }

// Firebase ▲-▲
// Main ▼-▼

$(document).ready(function(){
    // Page loading function
    $(function(){$('.main').hide().fadeIn('slow');});
});

import './styles/registration.css';

// Main ▲-▲