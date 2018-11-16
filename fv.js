
function validation(){
    var name = document.getElementById('name').value ;
    var  mail=document.getElementById('mail').value ;
    var password=document.getElementById('myInput').value ;
    var address=document.getElementById('address').value;
    var phone=document.getElementById('phone').value;
    var country=document.getElementById('country').value;


    var regrex= /^[0-9]+$/g;

    var regrexstrnum= /^[a-zA-Z0-9 ]+$/g;
    var verif= /^[^.][a-zA-Z0-9!#$%&'*+-/=?^_`{|}~][^..]+@[\w\d.-_~]+[^!#$%&'*+/=?^"`{@|}..].[a-z]{2,4}[^\-]$/g;
    var ret= mail.match(verif)

    if(name==''){
        alert("Please enter your name.")
        return false
    }
   
    else if(mail==''){
        alert("please enter your mail")
        return false
    }
    else if (country=='0'){
        alert ("Select your country"); validecountry =false;
        return false;
    }
    else if(phone==''){
        alert("Insert your phone number"); 
    }
    else if((!phone.match(regrex))||(phone.length<8)){
        alert("Invalid phone number"); 
        return false;
    }
    else if(ret==null){
        alert("invalid email")
        return false
    }
    else if(address==''){
        alert("Insert your address"); 
    }
    else if(!address.match(regrexstrnum)){
       alert("Invalid address"); 
       return false;

   }
    else if(password.length<8){
        alert("The password has less than 8 characters")
        return false
    }
    
   

   
}
function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}