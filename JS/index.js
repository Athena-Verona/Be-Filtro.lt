// Page essentials --------------------------------------------------------
function textFill() {
  let text = "<span>L</span>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? <br> <br> <hr>";
  document.getElementById("fill-this-with-text-pls").innerHTML = text.repeat(60);
} window.onload = textFill;

// Firebase essentials ----------------------------------------------------
const express = require("express");
const app = express();
const port = 3000;

const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  collection,
  getDocs,
} = require("firebase/firestore/lite");

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjTkbvIAZfgp_thRlFqVlN8NcGkV5ge1Y",
  authDomain: "be-filtro.firebaseapp.com",
  databaseURL:
    "https://be-filtro-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "be-filtro",
  storageBucket: "be-filtro.appspot.com",
  messagingSenderId: "200756039756",
  appId: "1:200756039756:web:dd5b5a450abc0a76e0a4e9",
  measurementId: "G-9LEF4B4PY0",
};

const apps = initializeApp(firebaseConfig);
const db = getFirestore(app);

app.get("/politikas", async (req, res) => {
  // get data
  const politikasCol = collection(db, "politikas");
  const politikasSnapshot = await getDocs(politikasCol);
  const politikas = politikasSnapshot.docs.map((doc) => doc.data());

  // return data
  res.json(politikas);
});

app.get("/partijos", async (req, res) => {
    // get data
    const citiesCol = collection(db, "partijos");
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map((doc) => doc.data());
  
    // return data
    res.json(cityList);
  });

app.use(express.static("."));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
