//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBjdt3HhRyypfE7KWFkmBftrdkQD0htMCI",
      authDomain: "kwitter-708cd.firebaseapp.com",
      databaseURL: "https://kwitter-708cd-default-rtdb.firebaseio.com",
      projectId: "kwitter-708cd",
      storageBucket: "kwitter-708cd.appspot.com",
      messagingSenderId: "218356705674",
      appId: "1:218356705674:web:e93434511deba762930073"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
    
function send(){
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0 
  });
  document.getElementById("msg").value = "";   
}
      

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}