username = "";
function LogIn(){
    username = document.getElementById("UserName").value;
    localStorage.setItem("User_Name",username);
    window.location("kwitter_room.html");
}