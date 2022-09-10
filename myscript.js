const dogResult = document.getElementById('dog-result');
const enteredName = document.getElementById('name');
const submit_button = document.getElementById('submit-btn');

window.addEventListener = ('load', getDogResult())

function getDogResult() {
    console.log('page is fully loaded');
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            dogResult.innerHTML = `<img src="${data.message}"/>`
        })
};

submit_button.onclick =
    function getAllData() {
        console.log("button clicked")
    
    }


