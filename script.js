const Password = document.querySelector("#txtPassword");
const Checkbox = document.querySelector("#show");

Checkbox.addEventListener('click',function(){
    const type = Password.getAttribute("type")=== "password" ? "text" : "password";
    Password.setAttribute("type",type);
});