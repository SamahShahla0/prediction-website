const dogResult = document.getElementById('dog-result');
const enteredName = document.getElementById('name');
const submit_button = document.getElementById('submit-btn');

//getting the object from the api
async function getapi(url) {
    // Storing response
    const response = await fetch(url);
    // Storing data in form of JSON
    var data = await response.json();
    return data;
}

window.addEventListener = ('load', getDogResult())
//fetching the dog image api to show random dog image
function getDogResult() {
    console.log('page is fully loaded');
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            //checking if the status of the object is success
            if (data.status == "success") {
                dogResult.innerHTML = `<img src="${data.message}"/>`;
            }
            else {
                alert("error, can't find image");
            };
        });
};

var predicted = 0;
submit_button.onclick =
    function getResults() {
        //an if condition to view results once when the submit button is clicked 
        if (predicted == 0 ){
            predicted = 1;
            var results="";
            const output_results = document.createElement("p")
            //get the entered name value
            var input_text = document.querySelector('#iname');
            new_name = input_text.value;
            //send the url of the age api to be fetched
            const api_url1 = "https://api.agify.io/?name="+new_name;
            const age = getapi(api_url1);
            //accessing the attributes of the object after being fetched, otherwise they will be pending results
            const getAge= () => {
                age.then((a) => {
                    results = "\nPredicted age is: " +a.age + "\n";
                    var y = document.createTextNode(results);
                    //appendig this result to the paragraph of all outputs
                    output_results.appendChild(y);
                });
            };
            getAge();

            const api_url2 = "https://api.genderize.io/?name="+new_name;
            //send the url of the gender api to be fetched
            const gender = getapi(api_url2);
            //accessing the attributes of the object after being fetched, otherwise they will be pending results
            const getGender= () => {
                gender.then((a) => {
                    results =  "\nPredicted gender is: " +a.gender + " with probability: " + a.probability;
                    var x = document.createTextNode(results);
                    //appendig this result to the paragraph of all outputs
                    output_results.appendChild(x);
                });
            };
            getGender();

            const api_url3 = "https://api.nationalize.io/?name="+new_name;
            //send the url of the nationality api to be fetched
            const nationality = getapi(api_url3);
            //accessing the attributes of the object after being fetched, otherwise they will be pending results
            const getNationality= () => {
                nationality.then((a) => {
                    results =   "\nPredicted nationality: " +a.country[0].country_id + " with probability: " + a.country[0].probability + " or " + a.country[1].country_id + " with probability: " + a.country[1].probability;
                    var z = document.createTextNode(results);
                    //appendig this result to the paragraph of all outputs
                    output_results.appendChild(z);
                    //style the output paragraph
                    output_results.classList.add("text-style");
                    output_results.classList.add("output-para");
                    //append the output paragraph the the body 
                    document.body.appendChild(output_results);
                });
            };
            getNationality();
        }  
    };

    

