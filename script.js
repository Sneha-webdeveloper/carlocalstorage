
function store(){
    car={
        brand:Brand.value,
        rs:carPrice.value,
        key:carkey.value
    }
    if(car.brand=="" || car.rs==""||car.key==""){
        alert("please fill the input field")
    }
    else{
if(car.key in localStorage){
alert("already exist")
}else{
localStorage.setItem(car.key,JSON.stringify(car))
alert("Record stored succesfully")
}}
}
  


function retrieve()
{
    let key=retkey.value
    let car=JSON.parse(localStorage.getItem(key))
    result.innerHTML=`<div class="card" style="width: 18rem;">
   
    <div class="card-body">
      <h5 class="card-title">Car Details</h5>
     
    <ul class="list-group list-group-flush">
      <li class="list-group-item">car Brand:${car.brand}</li>
      <li class="list-group-item">Price:${car.rs}</li>
      <li class="list-group-item">Key:${car.key}</li>
    </ul>
    <div class="card-body">
      
    </div>
  </div>` 
}



function remove() {
  let key = document.getElementById("delKey").value; // Corrected to match the HTML ID
  if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
      document.getElementById("result").innerHTML = ""; 
      alert("Record deleted successfully");
  } else {
      alert("Record not found");
  }
}
function deleteall(){
localStorage.clear()
document.getElementById("result").innerHTML = "";
}