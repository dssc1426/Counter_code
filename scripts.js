const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");
const counterid = document.getElementById("counterid");
let count=0;

increasebtn.onclick = function(){
    count++;
    counterid.textContent = count;
}

decreasebtn.onclick = function(){
    count--;
    counterid.textContent = count;
}
resetbtn.onclick = function(){
    count =  0;
    counterid.textContent = count;
}