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