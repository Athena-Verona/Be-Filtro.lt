// Page essentials -------------------------------------------------------

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
  app.get("/candidate", async (req, res) => {
    // get data
    const name = req.query.name;
    const surname = req.query.surname;

    const citiesCol = collection(db, "partijos");
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map((doc) => doc.data());
  
    // return data
    res.json(cityList);
  });
  app.post("/newcomment", async (req, res) => { // naudok sita location darant siuntima i backenda
    //app.post sukuri handleri backendui kuris veiks su http postu
    // kai nusiunti duomenis is frontend (komentarai yra frontend) i backenda naudojam app.post o kai duomenis paimam is failo app.get, dabar nenaudojam
    // const doc = {
    //   data: req.body,
    //   likes: 0,
    // };


    // Gintare Staneva (/html/member.html?name=gintare&surname=staneva) // 
    // Ivan Stanev (/html/member.html?name=ivan&surname=stanev)
    // Vaidas Grigutis (/html/member.html?name=vaidas&surname=grigutis)

    const komentarai = collection(db, "komentaras");
    // sukuria visa collection komentaro
    const komentaras = await addDoc(komentarai, req.body);
    // priededa komentara i real time database
  
    // return data
    res.status(200);
  });
app.use(express.static("."));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
