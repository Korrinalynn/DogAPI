const baseURL = 'https://efa-cors-anywhere.herokuapp.com/https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1';
// console.log('Hello');

let para = document.querySelector('.p');

function catFacts() {
    //console.log("hello");
    fetch(baseURL)
        .then(response => response.json())
        .then(json => facts(json));
}

function facts(json) {
    while (para.firstChild) {
        para.removeChild(para.firstChild);
      }
    console.log(json[0].fact);
    let paragraph = document.createElement('p');
    paragraph.innerText = json[0].fact;
    para.appendChild(paragraph);
}