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
            callback(data)
        }
    };
    xhttp.open("GET", uri, true);
    xhttp.send();

}

function fillData(data){
    dateEl.innerHTML = ""+ data.ttile +"";
    imgEl.innerHTML = ""+ data.img +"";
    pageNumEl.innerHTML = ""+ data.num +"";
    titleEl.innerHTML = ""+ data.ttile +"";
}

function home(){
    callApi("https://xkcd.com/info.0.json", fillData);
}