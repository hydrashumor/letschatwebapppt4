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
    document.getElementById("user_name").innerHTML = " welcome  "+user_name+" !";
    function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - " + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

}
function logout(){
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location = "index.html";     
}

