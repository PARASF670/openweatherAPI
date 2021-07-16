var submit = document.getElementById("Submit");
submit.onclick = function (e) {
    e.preventDefault();
var key = '7fa2af5a9c5898bae3feb88d0028e851';
var lat = document.getElementById("lat").value;
var long = document.getElementById("long").value;
var request = new XMLHttpRequest();
request.open('GET','https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid='+key,true);
request.send();
request.onload = function () {
    try {
        var data = JSON.parse(this.response);
        console.log(data.weather[0].main + ' Description: ' +data.weather[0].description);
    }
    catch (error) {
        alert(error.name);        
    }
}


}


