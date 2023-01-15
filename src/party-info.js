// Firebase ▼-▼

// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, update } from "firebase/database";
import { getFirestore, collection, query, where, onSnapshot } from "firebase/firestore";

// Import Firebase config
import firebaseConfig from "./utils/firebase-config"

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const database = getDatabase(app);
const db = getFirestore(app);
const d = new Date(app);

// Collection reference
const colRef = collection(db, 'politikas2');

// Queries
const q_members = query(colRef, where("partija", "==", "Tėvynės sąjunga - Lietuvos krikščionys demokratai"), where("institucija", "==", "Seimas"));
const q_gov_members = query(colRef, where("partija", "==", "Tėvynės sąjunga - Lietuvos krikščionys demokratai"), where("institucija", "==", "Vyriausybė"));

// Realtime collection data
onSnapshot(q_gov_members, (snapshot) => {
    let gov_members = [];

    const ul_gov_members = document.getElementById("gov-members");

    snapshot.docs.forEach(doc => {
        gov_members.push(doc.id);
    });
    
    for (let i = 0; i < gov_members.length; i++) {
        const li = document.createElement("li");
    
        li.innerHTML = gov_members[i];
        ul_gov_members.appendChild(li); 
    }
})
onSnapshot(q_members, (snapshot) => {
    let members = [];

    const ul_members = document.getElementById("members");

    snapshot.docs.forEach(doc => {
        members.push(doc.id);
    });
    
    for (let i = 0; i < members.length; i++) {
        const li = document.createElement("li");
    
        li.innerHTML = members[i];
        ul_members.appendChild(li); 
    }
})

// submitDisc.addEventListener('click', (e) => {
//     e.preventDefault();
//     var caption = document.getElementById('caption').value;
//     var disc_text = document.getElementById('disc_text').value;
//     // var username = document.getElementById('disc_text').value;

//     set(ref(database, 'discussion/'), {
//         caption: caption,
//         disc_text: disc_text,
//         post_date: d.toLocaleDateString('en-CA'),
//     })  

//     if(validate_field(caption) = false) {
//         console.log('Komentaras negali būti mažesnis nei 4 simboliai')
//         return
//     }
//     // firebaseRef.push(Skelbti);
// });
// submitComment.addEventListener('click', (e) => {
//     e.preventDefault();
//     var comment = document.getElementById('comment_text').value;
//     // var username = document.getElementById('comment_text').value;

//     set(ref(database, 'comment/'), {
//         comment: comment,
//         post_date: d.toLocaleDateString('en-CA'),
//     })

//     // firebaseRef.push("");
// });

// function validate_field(caption) {
//     if(caption.lenght <4) {
//         return false;  
//     } else {
//         return true;  
//     }
// }

// Firebase ▲-▲
// Main ▼-▼

// Import essential functions
import pageEssentials from "./utils/navbar";
import './styles/party-info.css';

// Initialize essential functions
pageEssentials()

// Main ▲-▲
