var container = document.querySelector('.magazine-listing-wrapper');
var ulElement = container.getElementsByTagName('ul')[0];
ulElement.id = 'magazine-list';

var request = new XMLHttpRequest();
request.open('GET', 'http://localhost:3000/query-index.json', true);
request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    var data = JSON.parse(this.response).data;
    var list = document.getElementById('magazine-list');
    for(var i=0; i<data.length; i++){
        var listItem = document.createElement('li');
        if(data[i].path.includes("/capstone/magazines")) {
          listItem.innerHTML = '<a href = ' + data[i].path + '>' + data[i].title + '</a>'
          list.appendChild(listItem);
        }
        
    }
  } else {
    console.log('Server returned an error');
  }
};
request.onerror = function() {
  console.log('Connection error');
};
request.send();