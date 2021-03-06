import fetch from "node-fetch"

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let urlDataForm = document.getElementById('inputURL').value;
    let invalidURL = document.getElementById('invalid');

    if(!urlDataForm && urlDataForm === ''){
        invalidURL.innerHTML = "Please enter a valid URL";  
        // invalidURL.style.color = "red";
        // invalidURL.style.background = "black";

    } else{
    (Client.validURL(urlDataForm))

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/information', {
        method: "POST",        
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        // send url back to the server
        body: JSON.stringify({urlDataForm}),
    })
    .then((res) => res.json())
    .then(function(res) {
        console.log('Data from the MC-API', res);
        document.getElementById('results').innerHTML = `Agreement:  ${res.agreement}`;
        document.getElementById('subjectivity').innerHTML = `Subjectivity:  ${res.subjectivity}`;
        document.getElementById('scores').innerHTML = `Polarity:  ${scores(res.score_tag)}`;
        document.getElementById('confidence').innerHTML = `Confidence: ${res.confidence}`;
        
    })
    .catch(err => {
        console.log(err)
    });
    }

    function scores(text){
        if ( text === 'P+' ) {
            return 'Strong positive';
        } else if (text === 'P') {
            return 'Positive';
        } else if (text === 'NEU') {
            return 'Neutral';
        } else if (text === 'N') {
            return 'Negative';
        } else if ( text === 'N+') {
            return 'Strong negative';
        } else {
            return 'Without polarity';
        }
    }
        
}


export { handleSubmit }
