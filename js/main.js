async function requestFoxPicture() {
    const url = 'https://randomfox.ca/floof/'
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.image) {
            setPicture(data.image, '#foxes');
        } else {
            throw new Error('Could not fetch fox image.');
        }
    } catch (error) {
        console.log(error);
    }
}

async function requestFirstDogPicture() {
    const url = 'https://dog.ceo/api/breeds/image/random'
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.status === 'success') {
            setPicture(data.message, '#dog');
        } else {
            throw new Error('Could not fetch dog1 image.');
        }
    } catch (error) {
        console.log(error);
    }
}

async function requestRandomImage() {
    const url = 'https://picsum.photos/500'
    try {
        const response = await fetch(url);
        if (response.url) {
            setPicture(response.url, '#randomImage');
        } else {
            throw new Error('Could not fetch randomImage image.');
        }
    } catch (error) {
        console.log(error);
    }
}

async function requestRandomActivity() {
    const url = 'https://www.boredapi.com/api/activity'
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.activity) {
            setText(data.activity, '#thingToDo');
        } else {
            throw new Error('Could not fetch bored text.');
        }
    } catch (error) {
        console.log(error);
    }
}

async function requestRandomNumberFact() {
    const url = 'http://numbersapi.com/' + randomInt(100000) + '?notfound=floor';
    try {
        const response = await fetch(url);
        const data = await response.text();
        if (response.ok) {
            setText(data, '#numberFact');
        } else {
            throw new Error('Could not fetch number text.');
        }
    } catch (error) {
        console.log(error);
    }
}

async function requestKanyeQuote() {
    const url = 'https://api.kanye.rest/';
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.quote) {
            setText(data.quote, '#kanyeQuote');
        } else {
            throw new Error('Could not fetch kanye quote text.');
        }
    } catch (error) {
        console.log(error);
    }
}

async function requestDadJoke() {
    const url = 'https://icanhazdadjoke.com/';
    try {
        const response = await fetch(url, {
            headers: {
                Accept: 'application/json'
            },
        });
        const data = await response.json();
        if (data.status === 200) {
            setText(data.joke, '#dadJoke');
        } else {
            throw new Error('Could not fetch dadJoke text.');
        }
    } catch (error) {
        console.log(error);
    }
}

async function requestGame() {
    const url = 'https://www.cheapshark.com/api/1.0/deals?upperPrice=15&pageSize=1&sortBy=Savings';
    try {
        const response = await fetch(url);
        const data = await response.json();
        const firstGame = data[0];
        if (firstGame.title) {
            setText(`game title: ${firstGame.title}`, '#gameTitle');
            setText(`original price ${firstGame.normalPrice}`, '#gameOriginalPrice');
            setText(`sale price ${firstGame.salePrice}`, '#gameSalePrice');
        } else {
            throw new Error('Could not fetch game text.');
        }
    } catch (error) {
        console.log(error);
    }
}

function setText(value, selector) {
    let textField = document.querySelector(selector);
    textField.innerHTML = value;
    console.log(textField.innerHTML);
}

function setPicture(url, selector) {
    let imageField = document.querySelector(selector);
    imageField.src = url;
    console.log(imageField.src);
}

function randomInt(max) {
    return Math.floor(Math.random() * max) + 1
}



function main() {
    requestFoxPicture();
    requestFirstDogPicture();
    requestRandomImage();
    requestRandomActivity();
    // requestRandomNumberFact();
    requestKanyeQuote();
    requestDadJoke();
    requestGame();
}

main();