document.getElementById("bob").onclick = function(){
    var table = document.getElementById("ikan");
    
    if(table.style.display === "none"){ // tabel tersembunyi
        table.style.display ="block"; //tabel muncul
        this.textContent = "Hide Details";

    }else {
        table.style.display = "none";
        this.textContent = "show details";
    }
}
document.getElementById("kepin").onclick = function(){
    var table = document.getElementById("sapi");


    if(table.style.display === "none"){ // tabel tersembunyi
        table.style.display ="block"; // tabel muncul
        this.textContent = "Hide Details";

    }else {
        table.style.display = "none";
        this.textContent = "show details";
    }
}
document.getElementById("stuart").onclick = function(){
    var table = document.getElementById("ayam");


    if(table.style.display === "none"){ // tabel tersembunyi
        table.style.display ="block"; // tabel muncul
        this.textContent = "Hide Details";

    }else {
        table.style.display = "none";
        this.textContent = "show details";
    }
}