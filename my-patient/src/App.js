import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "./App.css";
import DocPage from "./Components/JS/DocPage.js";
import Homepage from "./Components/JS/Homepage.js";
import { base } from "./utils/firebase.js";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [doc, setDoc] = useState({});
  const [docs, setDocs] = useState([]);
  const db = base.database();
  // pull in DB data so we can find list of docs for login screen
  useEffect(() => {
    db.ref().on("value", (snap) => {
      setDocs(snap.val().Doctors);
    });
  }, [db]);

  // listen for authentication state changes
  useEffect(() => {
    base.auth().onAuthStateChanged((user) => {
      if (user) {
        setDoc(docs.filter((doc) => doc.email === user.email)[0]);
        setLoggedIn(true);
      }
    });
  });

  return (
    <div className="App">
      {loggedIn && doc ? ( // simulate routing to different pages based on whether someone is loggedIn
        <DocPage
          doc={doc}
          logout={() => {
            base.auth().signOut();
            setDoc({});
            setLoggedIn(false);
          }}
          remove={(patient) => {
            let dIdx = docs.findIndex((elem) => elem.name === doc.name);
            let patients = doc.Patients.filter(
              (elem) => elem.patientName !== patient.patientName
            );
            let newDocInfo = doc;
            newDocInfo.Patients = patients;
            db.ref("/Doctors")
              .child(dIdx)
              .update(newDocInfo)
              .catch((error) => alert(error));
          }}
        />
      ) : (
        <Homepage docs={docs} />
      )}
    </div>
  );
}

export default App;
