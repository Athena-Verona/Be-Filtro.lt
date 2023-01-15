// Firebase ▼-▼

// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, getDoc, query, where, onSnapshot } from "firebase/firestore";

// Import Firebase config
import firebaseConfig from "./utils/firebase-config"

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);

// Collection reference

const querySnapshot = await getDocs(collection(db, "partijos"));
let titles = [], imgs = [], nicks = [];
const img_titles = [];

querySnapshot.forEach((doc) => {
    titles.push(doc.data().pavadinimas);
    imgs.push("../assets/" + doc.data().pavadinimas + ".png");
    nicks.push(doc.data().nick);
});

for(let i = 0; i < titles.length; i++) {
    img_titles.push({title: titles[i], image: imgs[i], nick: nicks[i]});
}

function template(card) {
    return `
        <div id="party-info">
            <div class="top-text">
                <div class="img"><img src="${card.image}"></div>
                <div class="h"><h1> ${card.title} </h1></div>
            </div>
            <hr>
            <p> ${card.nick} </p>
        </div>
    `
}
const map = img_titles.map(card => template(card));
const html = map.join(' ');
document.querySelector('.parties').innerHTML = html;

// Firebase ▲-▲
// Main ▼-▼

// Import essential functions
import pageEssentials from "./utils/navbar";
import './styles/parties.css';

// Initialize essential functions
pageEssentials()

// Main ▲-▲
