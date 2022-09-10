const dogResult = document.getElementById('dog-result');
const enteredName = document.getElementById('name');
const submit_button = document.getElementById('submit-btn');

async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data.name);
    //console.log(data_name);
}

window.addEventListener = ('load', getDogResult())

function getDogResult() {
    console.log('page is fully loaded');
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            console.log(data.status);
            if (data.status == "success") {
                dogResult.innerHTML = `<img src="${data.message}"/>`;
            }
            else {
                alert("error, can't find image");
            };
        });
};

submit_button.onclick =
    function getInputValue() {
        var input_text = document.querySelector('#iname');
        new_name = input_text.value;
        console.log(new_name);
        
    

        const api_url = 
        "https://api.agify.io/?name=nour";

        getapi(api_url);
    };

    

