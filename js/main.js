var dateEl = document.getElementById("date");
var imgEl = document.getElementById("img");
var pageNumEl = document.getElementById("page_num");
var titleEl = document.getElementById("title");


function getStrip(){

}

function callApi(uri, callback){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            console.log(data);
            callback(data)
        }
    };
    
    xhttp.open("GET", uri, true);
    xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhttp.setRequestHeader('Access-Control-Allow-Credentials', true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    
    xhttp.send();

}

function fillData(data){
    dateEl.innerHTML = ""+ data.ttile +"";
    imgEl.innerHTML = ""+ data.img +"";
    pageNumEl.innerHTML = ""+ data.num +"";
    titleEl.innerHTML = ""+ data.ttile +"";
}

function home(){
    callApi("https://cyber-city-comics-oleh.herokuapp.com/api.php?num=0", fillData);
}