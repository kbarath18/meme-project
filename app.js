let meme = document.getElementById("meme");
let title = document.getElementById("title");
let getMemeBtn = document.getElementById("get-meme-btn");


function getMeme(){
    fetch('https://meme-api.com/gimme')
    .then(res => res.json())
    .then(data => {
        meme.src = data.url; // get meme image url
        title.textContent = data.title;
    })
    .catch(error => console.log('Error while fetching meme:', error));
}

getMeme();

getMemeBtn.addEventListener("click", getMeme);
