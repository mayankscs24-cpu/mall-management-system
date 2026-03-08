
let shops = [];
function addShop(){

let shopName = document.getElementById("shopName").value;
let ownerName = document.getElementById("ownerName").value;

if(shopName === "" || ownerName === ""){
alert("Please enter shop details");
return;
}


let shop = {
name: shopName,
owner: ownerName
};

shops.push(shop);

displayShops();


document.getElementById("shopName").value="";
document.getElementById("ownerName").value="";

}


function displayShops(){

let list = document.getElementById("shopList");
list.innerHTML="";


shops.forEach(function(shop){

let li = document.createElement("li");
li.innerText = shop.name + " - Owner: " + shop.owner;

list.appendChild(li);

});

}
