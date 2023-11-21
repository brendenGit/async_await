//part 1

const baseURL = 'http://numbersapi.com/';
const factsDivEle = document.getElementById('facts');

//part 1.1
async function getNumberFact(num) {
    try {
        const res = await axios.get(`${baseURL}${num}/trivia`);
        console.log(res.data);
    }
    catch (error) {
        console.log(error.message);
    };
};

//part 1.2
async function getMultipleNumberFacts(numberList) {
    try {
        for (let num of numberList) {
            let fact = await axios.get(`${baseURL}${num}/trivia`);
            const factEle = document.createElement('p');
            factEle.innerText = fact.data;
            factsDivEle.appendChild(factEle);
        };
    }
    catch (error) {
        console.log(error);
    };
};

//part 1.3
async function getFourFacts(num) {
    const facts = [];
    try {
        for(let i = 0; i < 4; i++) {
            let fact = await axios.get(`${baseURL}${num}/trivia`);
            facts.push(fact.data);
        }
        for(let fact of facts) {
            const factEle = document.createElement('p');
            factEle.innerText = fact;
            factsDivEle.appendChild(factEle);
        }
    }
    catch (error) {
        console.log(error);
    };
};