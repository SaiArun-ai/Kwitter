var firebaseConfig = {
      apiKey: "AIzaSyAXWTOwjExc0BlOx-0Sb5Hdejx2QzrkLis",
      authDomain: "kwitter-417f8.firebaseapp.com",
      databaseURL: "https://kwitter-417f8-default-rtdb.firebaseio.com",
      projectId: "kwitter-417f8",
      storageBucket: "kwitter-417f8.appspot.com",
      messagingSenderId: "742706274017",
      appId: "1:742706274017:web:799d2a5b886c88bcf821a0",
      measurementId: "G-YH4022V19X"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
     row = "<div class = 'roomname' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div>"
     document.getElementById("Output").innerHTML += row;
     //End code
     });});}
     getData();
  
  function LogOut(){
      window.location = "index2.html";
  }
  var n = 0;
  var h = document.getElementById("UsernameInputs").value;
  function addUsername(){  
    Supper = "username" + n ;
    Username = "<input type = 'text' id = '" + Supper  + "'  class = 'form-control' placeholder = '#Usernames (Type only one on each input)'>";
    var S = "";
    if(document.getElementById("UsernameInputs").value == S){
      document.getElementById("UsernameInputs").innerHTML = Username;
    }else{
      h = h + Username;
      document.getElementById("UsernameInputs").innerHTML = h;
    } 
    n += 1;
  }
  /*var user__name = localStorage.getItem("Username");
  document.getElementById("user_name").innerHTML = "Welcome " + user__name;
  */
  function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").update({
        purpose:"adding room name"
      });
      localStorage.setItem("roomname",room_name);
      window.location = "kwitter_page.html";
  }
  function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",roomname);
    window.location= "kwitter_page.html";
  }
  
