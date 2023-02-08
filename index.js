"use strict";

const cards = document.querySelectorAll(".card");
const changeButtons = document.querySelectorAll(".header__time-stamp");
const dataContainer = []


// const data = [
//     {
//         "title": "Work",
//         "timeframes": {
//             "daily": {
//                 "current": 5,
//                 "previous": 7
//             },
//             "weekly": {
//                 "current": 32,
//                 "previous": 36
//             },
//             "monthly": {
//                 "current": 103,
//                 "previous": 128
//             }
//         }
//     },
//     {
//         "title": "Play",
//         "timeframes": {
//             "daily": {
//                 "current": 1,
//                 "previous": 2
//             },
//             "weekly": {
//                 "current": 10,
//                 "previous": 8
//             },
//             "monthly": {
//                 "current": 23,
//                 "previous": 29
//             }
//         }
//     },
//     {
//         "title": "Study",
//         "timeframes": {
//             "daily": {
//                 "current": 0,
//                 "previous": 1
//             },
//             "weekly": {
//                 "current": 4,
//                 "previous": 7
//             },
//             "monthly": {
//                 "current": 13,
//                 "previous": 19
//             }
//         }
//     },
//     {
//         "title": "Exercise",
//         "timeframes": {
//             "daily": {
//                 "current": 1,
//                 "previous": 1
//             },
//             "weekly": {
//                 "current": 4,
//                 "previous": 5
//             },
//             "monthly": {
//                 "current": 11,
//                 "previous": 18
//             }
//         }
//     },
//     {
//         "title": "Social",
//         "timeframes": {
//             "daily": {
//                 "current": 1,
//                 "previous": 3
//             },
//             "weekly": {
//                 "current": 5,
//                 "previous": 10
//             },
//             "monthly": {
//                 "current": 21,
//                 "previous": 23
//             }
//         }
//     },
//     {
//         "title": "Self Care",
//         "timeframes": {
//             "daily": {
//                 "current": 0,
//                 "previous": 1
//             },
//             "weekly": {
//                 "current": 2,
//                 "previous": 2
//             },
//             "monthly": {
//                 "current": 7,
//                 "previous": 11
//             }
//         }
//     }
// ]

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


// rednerCards('daily', data)

const clickfn = function (timeStamp) {

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



clickfn('daily');

changeButtons.forEach(btn => {
    btn.addEventListener('click', function () { clickfn.call(this, this.getAttribute('data-option')) })
})





