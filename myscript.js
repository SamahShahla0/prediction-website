const dogResult = document.getElementById('dog-result');
const enteredName = document.getElementById('name');
const submit_button = document.getElementById('submit-btn');

async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    return data;
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
        var results="";
        var input_text = document.querySelector('#iname');
        new_name = input_text.value;
        console.log(new_name);

        const api_url1 = "https://api.agify.io/?name="+new_name;
        const age = getapi(api_url1);
        const getAge= () => {
            age.then((a) => {
                console.log(a);
                results = results +"\n"+ "Predicted age is: " +a.age;
                console.log(results);

            });
        };
        getAge();


        const api_url2 = "https://api.genderize.io/?name="+new_name;
        const gender = getapi(api_url2);
        const getGender= () => {
            gender.then((a) => {
                console.log(a);
                results = results +"\n" + "Predicted gender is: " +a.gender;
                console.log(results);

            });
        };
        getGender();


        const api_url3 = "https://api.nationalize.io/?name="+new_name;
        const nationality = getapi(api_url3);
        const getNationality= () => {
            nationality.then((a) => {
                console.log(a);
                results = results +"\n" + "Predicted nationality: " +a.country[0].country_id + " or " + a.country[1].country_id ;
                console.log(results);

            });
        };
        getNationality();
        const output = document.createElement("p");
        





    };

    

