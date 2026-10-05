function show(id){
document.querySelectorAll("section").forEach(s=>s.style.display="none");
document.getElementById(id).style.display="block";
}


function searchCars(){

let s=search.value.toLowerCase();

document.querySelectorAll(".car").forEach(c=>
c.style.display=c.innerText.toLowerCase().includes(s)?"block":"none");

}


function showCreate(){
loginBox.style.display="none";
createBox.style.display="block"
}


function showLogin(){
createBox.style.display="none";
loginBox.style.display="block"
}


function createUser(){

let n=newUser.value,p=newPass.value;

if(!n||!p){
createMsg.innerHTML="Enter all details.";
return
}

localStorage.setItem("user",n);
localStorage.setItem("pass",p);

createMsg.innerHTML="Account created! Please login.";

}


function login(){

let n=loginUser.value,p=loginPass.value;

if(!localStorage.getItem("user")){
userMsg.innerHTML="Account not found. Please create an account.";
return;
}

if(n==localStorage.getItem("user")&&p==localStorage.getItem("pass")){

localStorage.setItem("login","yes");

user.innerHTML=n;

userMsg.innerHTML="Login successful! Welcome "+n+".";

setTimeout(()=>show("booking"),700);

}else{

userMsg.innerHTML="Invalid login details. Try again.";

}

}


function selectCar(price){

if(localStorage.getItem("login")!="yes"){

alert("Please login before booking.");

show("account");

return;

}

carSelect.value=price;

calculateTotal();

show("booking");

}


function calculateTotal(){

amount.innerHTML=Number(carSelect.value)*(Number(days.value)||1);

}


function book(){

if(localStorage.getItem("login")!="yes"){

bookMsg.innerHTML="Please login before booking.";

return;

}

if(!date.value){

bookMsg.innerHTML="Please select a pickup date.";

return;

}

let car=carSelect.options[carSelect.selectedIndex].text;

let b=localStorage.getItem("user")+" | "+car+" | "+days.value+" day(s) | "+date.value+" | ₹"+amount.innerHTML+" | "+paymentMethod.value;

localStorage.setItem("booking",b);

bookMsg.innerHTML="Payment successful!<br>Booking confirmed successfully!";

}


function compare(){

let a=car1,b=car2;

if(a.value==b.value){

compareMsg.innerHTML="Please select two different cars.";

return;

}

let p1=Number(a.value),p2=Number(b.value);

compareMsg.innerHTML=
"<b>"+a.options[a.selectedIndex].text+"</b> → ₹"+p1+"/day<br>"+
"<b>"+b.options[b.selectedIndex].text+"</b> → ₹"+p2+"/day<br>"+
"<b>Price Difference:</b> ₹"+Math.abs(p1-p2)+"/day";

}


function adminLogin(){

if(adminUser.value=="admin"&&adminPass.value=="admin123"){

adminMsg.innerHTML="Admin login successful!";

show("dashboard");

}else{

adminMsg.innerHTML="Invalid admin login.";

}

}


function inventory(){

adminResult.innerHTML=
"<b>Vehicle Inventory</b><br>"+
"Hyundai i10 - Available<br>"+
"Honda City - Available<br>"+
"Mahindra XUV - Booked<br>"+
"Tata Nexon - Available<br>"+
"Toyota Innova - Maintenance";

}


function bookingInfo(){

adminResult.innerHTML=
"<b>Latest Booking</b><br>"+
(localStorage.getItem("booking")||"No bookings available.");

}


function maintenance(){

adminResult.innerHTML=
"<b>Maintenance Schedule</b><br>"+
"Hyundai i20 - Checked<br>"+
"Honda City - Checked<br>"+
"Mahindra XUV - Checked<br>"+
"Tata Nexon - Checked<br>"+
"Toyota Innova - Maintenance Due";

}