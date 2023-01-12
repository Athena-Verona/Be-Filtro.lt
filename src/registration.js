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

    // Validate input fields
    // if(validate_email(email) == false ) {
    //     console.log('Error: Elektroninis paštas neatitinka reikalavimų');
    //     $(document).ready(function(){
    //         $(".email input").css("border", "1px solid rgb(190, 13, 13, .8)");
    //         $(".email input").css("filter", "drop-shadow(0 4px 4px rgb(190, 13, 13, .8)");
    //     });

    //     // Don't run the code anymore
    //     return
    // } 
    // if(validate_password(password) == false) {
    //     console.log('Error: Slaptažodis turi būti ilgesnis nei 6 simboliai');
    //     $(document).ready(function(){
    //         $(".password input").css("border", "1px solid rgb(190, 13, 13, .8)");
    //         $(".password input").css("filter", "drop-shadow(0 4px 4px rgb(190, 13, 13, .8)");
    //     });

    //     // Don't run the code anymore
    //     return
    // } 
    if(validate_fields(username) == false) {
        console.log('Error: Nėra vartotojo vardo');

        // Don't run the code anymore
        return
    } if(confirm_password(password, password_repeat) == false) {
        console.log('Error: Slaptažodžiai nesutampa');
        $(document).ready(function(){
            $(".password input").css("border", "1px solid rgb(190, 13, 13, .8)");
            $(".password input").css("filter", "drop-shadow(0 4px 4px rgb(190, 13, 13, .8)");
            $(".password-repeat input").css("border", "1px solid rgb(190, 13, 13, .8)");
            $(".password-repeat input").css("filter", "drop-shadow(0 4px 4px rgb(190, 13, 13, .8)");
        });

        // Don't run the code anymore
        return
    }

    // Firebase authentication 
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => { // Authentication successful
        $(document).ready(function(){
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
            alert("Toks el. paštas jau užregistruotas.");
        } else if(errorCode === 'auth/invalid-email') {
            alert("Neteisingai įvestas el. paštas");
            $(document).ready(function(){
                $(".email input").css("border", "1px solid rgb(190, 13, 13, .8)");
                $(".email input").css("filter", "drop-shadow(0 4px 4px rgb(190, 13, 13, .8)");
            });
        } else if(errorCode === 'auth/weak-password') {
            alert("Slaptažodis turi susidaryti bent iš 6 simbolių");
        }
        const errorMessage = error.message;
        // alert(errorMessage);
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

function validate_fields(field) {
    if(field == null) {
        return false
    } if(field.lenght <= 0) {
        return false
    } else {
        return true
    }
}
    
function confirm_password(password, password_repeat) {
    if(password != password_repeat) {
        return false
    } else {
        return true
    }
}

// Firebase ▲-▲
// Main ▼-▼


// Page loading function
$(document).ready(function(){
    $(function(){
        $('.main').hide().fadeIn('slow');
    });
});

import './styles/registration.css';

// Main ▲-▲