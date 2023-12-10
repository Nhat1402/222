const loginForm  = document.getElementById("login"); // lay id của html có ten login-form
const rightUsername = "nhat"; // taikhoan
const rightPassword = "123456"; // mat khau


loginForm.addEventListener("submit", function(){
    const username = document.getElementById("username").value; //lay id của html có ten là username 
    const password = document.getElementById("password").value;
    if  (username != rightUsername || password != rightPassword){
        alert("login Fail!");
    }else{
        alert("login success!");
         window.location.href = "./web/web.html"; // chuyen trang web
    }

    
    alert( "username: " + username +    "\npassword" + password);
    
});
