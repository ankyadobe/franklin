var container = document.querySelector('.dynamic-content-container');
var ulElement = container.getElementsByTagName('ul')[0];
ulElement.id = 'data-list';

var request = new XMLHttpRequest();
request.open('GET', 'http://localhost:3000/franklin-spreadsheet.json', true);
request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    var data = JSON.parse(this.response).data;
    var list = document.getElementById('data-list');
    for(var i=0; i<data.length; i++){
        var listItem = document.createElement('li');
        listItem.innerHTML = 'Day: ' + data[i].Day + ', Assignment: ' + data[i].Assignment + ', Destination: ' + data[i].Destination + ', Status: ' + data[i].Status + ', Review Status: ' + data[i]['Review Status'];
        list.appendChild(listItem);
    }
  } else {
    console.log('Server returned an error');
  }
};
request.onerror = function() {
  console.log('Connection error');
};
request.send();