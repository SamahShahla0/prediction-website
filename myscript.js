const dogResult = document.getElementById('dog-result');
const enteredName = document.getElementById('name');
const submit_button = document.getElementById('submit-btn');

window.addEventListener = ('load', getDogResult())

function getDogResult() {
    console.log('page is fully loaded');
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            if ('${data.status}' == "success") {
                dogResult.innerHTML = `<img src="${data.message}"/>`
            }
            else {
                alert("error, can't find image")
            }
        })
};

submit_button.onclick =
    function getInputValue() {
        console.log("button clicked")
        var input_text = document.querySelector('#iname')
        console.log(input_text.value)


    
}


