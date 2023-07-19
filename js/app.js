const upperset="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset="abcdefghijklmnopqrstuvwxyz";
const numberset="1234567890";
const symbolset="!@#$%^&*()+_~/";

//selectors
const passbox=document.getElementById("pass-box");
const totalchar=document.getElementById("total-char");
const upperinput=document.getElementById("upper-case");
const lowerinput=document.getElementById("lower-case");
const numberinput=document.getElementById("numbers");
const symbolinput=document.getElementById("symbols");


function randomset(dataset){
    return dataset[Math.floor(Math.random()*dataset.length)];
}

function gpword(password=""){
   if(upperinput.checked){
    password += randomset(upperset);
   }
   if(lowerinput.checked){
    password += randomset(lowerset);
   }
   if(numberinput.checked){
    password += randomset(numberset);
   }
   if(symbolinput.checked){
    password += randomset(symbolset);
   }
   if(password.length < totalchar.value)
   {
    return gpword(password);
   }
   passbox.innerText=trim(password,totalchar.value);
}

function trim(s,num){
    if(s.length > num)
    {
        return s.substr(0,num);
    }
    else{
        return s;
    }
}
gpword
document.getElementById("btn").addEventListener(
    "click",
    function(){
        gpword();
    }
)
// gpword();