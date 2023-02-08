"use strict";

const cards = document.querySelectorAll(".card");
const changeButtons = document.querySelectorAll(".header__time-stamp");
const dataContainer = []

function rednerCards(timeOption, data) {
    cards.forEach(card => {
        let cardData = card.getAttribute('data-type');
        data.forEach(el => {
            console.log(el.title.toLowerCase());

            if (el.title.toLowerCase() === cardData) {
                if (timeOption === 'daily') {
                    card.querySelector('.card__time').textContent = `${el.timeframes.daily.current}hrs`
                    card.querySelector('.card__last-act').textContent = `last day: ${el.timeframes.daily.previous}hrs`
                }
                if (timeOption === 'weekly') {
                    card.querySelector('.card__time').textContent = `${el.timeframes.weekly.current}hrs`
                    card.querySelector('.card__last-act').textContent = `last week: ${el.timeframes.weekly.previous}hrs`
                }
                if (timeOption === 'monthly') {
                    card.querySelector('.card__time').textContent = `${el.timeframes.monthly.current}hrs`
                    card.querySelector('.card__last-act').textContent = `last month: ${el.timeframes.monthly.previous}hrs`
                }
            }
        })
    })
}

const DataFetch = function (timeStamp) {

    fetch('data.json')
        .then((response) => response.json())
        .then((data) => {
            rednerCards(timeStamp, data)
            console.log(data);

        })
        .catch((error) => {
            alert('Error:', error)
        });

}

DataFetch('daily');

changeButtons.forEach(btn => {
    btn.addEventListener('click', function () { DataFetch.call(this, this.getAttribute('data-option')) })
})





