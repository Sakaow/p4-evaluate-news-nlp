function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let urlDataForm = document.getElementById('name').value
    Client.validURL(urlDataForm)

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
        document.getElementById('results').innerHTML = res.message
    })
}

async function retrieveData ()
export { handleSubmit }
