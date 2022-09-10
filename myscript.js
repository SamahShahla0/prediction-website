const dogResult = document.getElementById('dog-result')
const enteredName = document.getElementById('name')
//const submit_button = documnet.getElementById('submit-btn')
window.addEventListener = ('load', getDogResult())


function getDogResult() {
    console.log('page is fully loaded');
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            dogResult.innerHTML = `<img id="fetched-image" src="${data.message}"/>`
        })
};
