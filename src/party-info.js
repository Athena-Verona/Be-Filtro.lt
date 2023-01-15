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

// import { q_members, q_gov_members } from "./utils/party-info-queries";
// import { query1 } from "./utils/party-info-snapshot";

// query1(q_members, q_gov_members);

// Firebase ▲-▲
// Main ▼-▼

// Import essential functions
import pageEssentials from "./utils/navbar";
import './styles/party-info.css';

// Initialize essential functions
pageEssentials()

// Main ▲-▲
