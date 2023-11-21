const baseURL = 'http://numbersapi.com/';

async function getNumberFact(num) {
    try  {
        const res = await axios.get(`${baseURL}${num}/trivia`);
        console.log(res.data);
    } 
    catch(error) {
        console.log(error.message);
    };
};

const factsDivEle = document.getElementById('facts');

async function getMultipleNumberFacts(numberList) {
    try {
        for(let num of numberList) {
            let fact = await axios.get(`${baseURL}${num}/trivia`);
            const factEle = document.createElement('p');
            factEle.innerText = fact.data;
            factsDivEle.appendChild(factEle);
        };
    }
    catch(error) {
        console.log(error);
    };
};