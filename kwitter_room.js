 //
 //ADD YOUR FIREBASE LINKS HERE
 var firebaseConfig = {
      apiKey: "AIzaSyBbFu48QXwewPQQRpvxKWrcdvcEGnG3Y6k",
      authDomain: "kwiter-79a61.firebaseapp.com",
      databaseURL: "https://kwiter-79a61-default-rtdb.firebaseio.com",
      projectId: "kwiter-79a61",
      storageBucket: "kwiter-79a61.appspot.com",
      messagingSenderId: "45651546077",
      appId: "1:45651546077:web:0a9ad1d975f8db7f59f034"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome " + user_name + "!"
 function addRoom()
      {
            room_name = document.getElementById("room_name").value; 
            firebase.database().ref("/").child(room_name).update({
                  purose : "adding room name"
            });
            localStorage.setItem("room_name",room_name);
            window.location = "kwitter_page.html";
      }
 
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id>#" + Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+= row; 

      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}
function logout() { 
      localStorage.removeItem("user_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}