const signup = document.querySelector(".signup");
const login = document.querySelector(".login");
const signin_btn = document.getElementById("signin_btn");
const send = document.getElementById("send");
const trans_signup = document.getElementById("trans_signup");

const logo_icon = document.getElementById("logo_icon");

const signup_fullname = document.getElementById("signup_fullname");
const signup_userName = document.getElementById("signup_userName");
const signup_email = document.getElementById("signup_email");
const signup_password = document.getElementById("signup_password");
const signup_conf_password = document.getElementById("signup_conf_password");

const signup_btn = document.getElementById("signup_btn");
const inputs_signup=document.querySelectorAll(".inputs input")

let checkbox=document.getElementById("checkbox")





function chickInput(){
    inputs_signup.forEach(input => {
        
        if (input.value=="") {
            
            input.style.background="red"
            
        }
        setTimeout(() => {
            input.style.background="white"
        }, 1000); 
    })
}



trans_signup.onclick=function(){
    signup.classList.add("active")
    login.classList.remove("active")
    logo_icon.className="fa-solid fa-user-plus"
    logo_icon.style.color="#4b6df7"
    logo_icon.style.background="#f4f6fb"
}

signin_btn.onclick = function () {
     login.classList.add("active")
     signup.classList.remove("active")
};


let signupArr=JSON.parse(localStorage.getItem("singup"))||[]


signup_btn.onclick=function(){
    
        chickInput()
        if (signup_fullname.value==""||signup_userName.value==""||signup_email.value==""||signup_password.value==""){return console.log("error")}
        if (signup_password.value!==signup_conf_password.value){return console.log("password not confirm")}
        
        const isExist=signupArr.some(user=>{
           return user.userName==signup_userName.value
        })

        if (isExist){return console.log(`user name is exite`);}
    
        
    
    
    
    let userSingUpData={
        fullName:signup_fullname.value,
        userName:signup_userName.value,
        email:signup_email.value,
        password:signup_password.value
    }
    
    signupArr.push(userSingUpData)
    localStorage.setItem("singup",JSON.stringify(signupArr))
    console.log("adding")
    
    
    
    
    
    logo_icon.className="fa-regular fa-circle-check"
    logo_icon.style.color="rgb(78, 236, 78)"
    logo_icon.style.background="rgb(85, 145, 8)"
    
    
    
    
    
    
    
    signup_fullname.value=""
    signup_userName.value=""
    signup_email.value=""
    signup_password.value=""
    signup_conf_password.value=""

    setTimeout(() => {
    login.classList.add("active")
    signup.classList.remove("active")
    }, 2000);
    
}








let username=document.getElementById("username")
let password=document.getElementById("password")
let msg=document.querySelector(".msg")
let inputs_login=document.querySelectorAll("form .input")



 
function chickInput_login(){
    inputs_login.forEach(input => {
        
        if (input.value=="") {
            
            input.style.background="rgba(255, 0, 0, 0.51)"
            
        }
        setTimeout(() => {
            input.style.background="white"
        }, 1000); 
    })
}

 
send.onclick=function(){


let userFind = signupArr.find(user=>
    user.userName==username.value
)





    if (username.value==""||password.value=="") {
     msg.innerHTML=`wrong Login`
     msg.style.color="red"
     chickInput_login()
     return;
    }

 if (!userFind) {
        msg.innerHTML=`user is Not found <span>Sign up</span>`;
        msg.style.color = "red";
        return;
    }

    if (username.value==userFind.userName&&password.value==userFind.password) {
        msg.innerHTML=`Successful login...
        <div>Welcome ${userFind.fullName}</div>
        `
        msg.style.color="rgb(5, 158, 5)"
        msg.style.font_weight= "bold";
        
        setTimeout(() => {
            location.href="index2.html"
        }, 2000);
        return;
    }

    if (username.value==userFind.userName&&password.value!=userFind.password) {
        msg.innerHTML=`Password Wrong`
        msg.style.color="red"
        return;
    }
 

}
