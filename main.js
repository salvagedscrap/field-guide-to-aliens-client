
const fetchUrl= 'https://startrek-field-guide-api-demo.herokuapp.com/api/'
document.querySelector('a').addEventListener('click', apiRequest)




async function apiRequest(){
    const alienName = document.querySelector('input').value


    try {
        const response = await fetch(`${fetchUrl}${alienName}`)
        const data     = await response.json()
        console.log(data);
        console.log(data.features);

        document.querySelector('#alienName').innerText = data.speciesName
        document.querySelector('#alienWorld').innerText = data.homeworld
        document.querySelector('#alienFeatures').innerText = data.features
        document.querySelector('#alienFacts').innerText = data.interestingFact
        document.querySelector('#alienExamples').innerText = data.notableExamples
        document.querySelector('#alienImage').src=data.image
    } catch (error) {
        console.log(error);
    }


}