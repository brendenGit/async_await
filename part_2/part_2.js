//part 2

const baseURL = 'https://deckofcardsapi.com/api/deck/';
const pullCardBtn = document.getElementById('pullCardBtn');
const cardPile = document.getElementById('cardPile');

//part 2.1
async function getOneCard() {
    try {
        const card = await axios.get(`${baseURL}/new/draw`)
        const suit = card.data.cards[0].suit;
        const value = card.data.cards[0].value;
        console.log(`${value} of ${suit}`);
    }
    catch (error) {
        console.log(error);
    };
};

//part 2.2
async function getTwoCards() {
    const cards = [];
    try {
        let res = await axios.get(`${baseURL}/new/draw`)
        const deckId = res.data.deck_id;
        cards.push(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`);

        res = await axios.get(`${baseURL}/${deckId}/draw`);
        cards.push(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`);

        for (let card of cards) {
            console.log(card);
        }
    }
    catch (error) {
        console.log(error);
    };
}

//part 3.3
let deckId;
async function drawCard() {
    let res;
    try {
        if(!deckId) {
            res = await axios.get(`${baseURL}/new/draw`)
            deckId = res.data.deck_id;
        } else {
            res = await axios.get(`${baseURL}/${deckId}/draw`)
        }
        if(res.data.remaining === 0) {
            pullCardBtn.disabled = true;
        }
        const cardImgEle = document.createElement('img');
        cardImgEle.classList.add('card');
        cardImgEle.src = res.data.cards[0].images.svg;
        cardImgEle.style.transform = `translate(${Math.random() * (60 - 40) + 40}px, ${Math.random() * (60 - 40) + 40}px) rotate(${-40 + Math.random() * 80}deg)`;
        cardPile.appendChild(cardImgEle);
    }
    catch (error) {
        console.log(error);
    };
};
pullCardBtn.addEventListener('click', drawCard);