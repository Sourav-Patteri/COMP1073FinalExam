let main = document.querySelector('main');
let button = document.querySelector('button');
button.addEventListener('click', getJson);

let requestURL = 'https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/cats.json';

function displayJson(jsonObj) {
    let cats = jsonObj.cats;
    let section = document.createElement('section');
    for (let i = 0; i < cats.length; i++) {
        //create HTML elements dynamically for each product in the JSON Result object.
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let img = document.createElement('img');
        let ul = document.createElement('ul');
        // img.src = `${cats[i].photo}`; // this won't work because the link in photo is only the link to github not to the actual image
        let name = cats[i].name.toLowerCase();
        img.src = `https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/assets/`+`${name}`+`.jpg`;//I dont think this is how you wanted it but the photo prop doesnt point to the necessary place
        img.alt = `${cats[i].name}`;
        h2.textContent = `${i+1}) ${cats[i].name}`;
        h3.textContent = `Species - ${cats[i].species}`;
        p.textContent = `${cats[i].name} is ${cats[i].age} years old and likes - `;
        for(let a = 0; a < cats[i].favFoods.length; a++){
            let li = document.createElement('li');
            li.innerHTML = cats[i].favFoods[a];
            ul.append(li);
        }
        article.append(h2);
        article.append(h3);
        article.append(p);
        article.append(ul);
        article.append(img);
        section.append(article);
        main.append(section);
    }
}
//a function that accesses the information from the server using an XMLHTTPRequest (XHR) object with params for URL and callback function
function loadAsset(requestURL) {
    return new Promise(function(resolve, reject) {
        // executor
        //creating new XMLHttpRequest object, it will allow us to fetch data without a page refresh
        let request = new XMLHttpRequest();
        //opening a new request
        request.open('GET', requestURL); // accessing the JSON file using a XMLHttpRequest object
        //response type
        request.responseType = 'json';
        request.onload = function() {
            if (request.status === 200) {//200 is either loading or done
                resolve(request.response);
            } else {
                // If it fails, reject the promise with a error message
                reject(Error('JSON didn\'t load successfully; error code:' + request.statusText));
            }
        };
        request.onerror = function() {
            // Also deal with the case when the entire request fails to begin with
            // This is probably a network error, so reject the promise with an appropriate message
            reject(Error('There was a network error.'));
        };
        // Send the request
        request.send();
    });
}

async function getJson() {
    try {
        let catsPromise = await loadAsset(requestURL);
        displayJson(catsPromise);
    } catch (e) {
        console.log(e);
    }
}