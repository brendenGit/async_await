//part 2

const baseURL = 'https://deckofcardsapi.com/api/deck/'

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
