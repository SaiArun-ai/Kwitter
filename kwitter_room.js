var firebaseConfig = {
      apiKey: "AIzaSyB_UsrDLCCE5Fi-9Asf2JLpZqpuLCBkvuA",
      authDomain: "kwitter-e79f1.firebaseapp.com",
      projectId: "kwitter-e79f1",
      storageBucket: "kwitter-e79f1.appspot.com",
      messagingSenderId: "861072531839",
      appId: "1:861072531839:web:1d809ae8410c85f088ba4a",
      measurementId: "G-ELTDC7RJCE"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
