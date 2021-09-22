//DOM

const input = document.querySelector('input');

const key = document.querySelector('input.key');

const keyUp = document.querySelector('input.key-up');

const log = document.querySelector('.values');

const container = document.querySelector('.container');

const header = document.querySelector('.header');

const title = document.querySelector('.title');

const option = document.querySelectorAll('.option');

const controls = document.querySelector('.controls');

const gameOver = document.querySelector('.game-over');

const restart = document.querySelector('.restart');

const result = document.querySelector('.result');

const phone = document.querySelector('.phone');
phone.innerText = 'Call a friend';

const fifty = document.querySelector('.fifty-fifty');
fifty.innerText = 50 + ':' + 50;

const audience = document.querySelector('.audience');
audience.innerText = 'Audience';

let score = document.querySelector('.score');
let points = 100000
score.innerText = 'Score:' + ' ' + points;

let count = 0

//Input

input.addEventListener('input', element => {
    log.textContent = 'Are you ready' + ' ' + element.target.value + '?';
});

//
key.addEventListener('keypress', element => {
    alert("Let's get started!!!");
});

//

keyUp.addEventListener('keyup', element => {
    alert("Just another event listener");
});

//

input.addEventListener('focus', element => {
    element.target.style.background = 'darkblue';
});

//Questions

let questions = {

    title: [

    "1. What sort of animal is Walt Disneys Dumbo?",

    "2. What was the name of the Spanish waiter in the TV sitcom Fawlty Towers?",

    "3. Which battles took place between the Royal Houses of York and Lancaster?",

    "4. Which former Beatle narrated the TV adventures of Thomas the Tank Engine?",

    "5. Queen Anne was the daughter of which English Monarch?",

    "6. Who composed 'Rhapsody in Blue'?",

    "7. What is the Celsius equivalent of 77 degrees Fahrenheit?",

    "8. Suffolk Punch and Hackney are types of what?",

    "9. Which Shakespeare play features the line Neither a borrower nor a lender be?",

    "10. Which is the largest city in the USA's largest state",             
],

option: [

    ['A. Deer', 'B. Rabbit', 'C. Elephant', 'D. Donkey'],

    ['A. Manuel', 'B. Pedro', 'C. Alfonso', 'D. Javier'],

    ['A. Thirty Years War', 'B. Hundred Years War', 'C. War of the Roses', 'D. English Ringo Starr'],

    ['A. John Lennon', 'B. Paul McCartney', 'C. George Harrison', 'D. Ringo Starr'],

    ['A. James II', 'B. Henry VIII', 'C. Victoria', 'D. William I'],

    ['A. Irving Berlin', 'B. George Gershwin', 'C. Aaron Copland', 'D. Cole Porter'],

    ['A. 15', 'B. 20', 'C. 25', 'D. 30'],

    ['A. Carriage', 'B. Wrestiling style', 'C. Cocktail', 'D. Horse'],

    ['A. Hamlet', 'B. Macbeth', 'C. Othello', 'D. The Merchant of Venice'],

    ['A. Dallas', 'B. Los Angeles', 'C. New York', 'D. Anchorage'],
    
],

correctAnswer: [

    'C. Elephant',

    'A. Manuel',

    'C. War of the Roses',

    'D. Ringo Starr',

    'A. James II',

    'B. George Gershwin',

    'C. 25',

    'D. Horse',

    'A. Hamlet',

    'D. Anchorage',
    

]
};

console.log(questions.option[0][2]);

//Questions ---> The DOM

title.innerText = questions.title[0];

questions.option[count].forEach(elem => {
    let html = `<li class="option">${elem}</li>`;
    document.querySelector('ul').innerHTML += html
})

document.querySelectorAll('.option').forEach(elem  => {
    elem.addEventListener('mouseover', () => {
        elem.style.backgroundColor = 'orange';
    });
    
    elem.addEventListener('mouseout', () => {
        elem.style.backgroundColor = '';
    });

    restart.addEventListener('click', () => {
        location.reload()
    })

    elem.addEventListener('click', e => {
        if(e.target.textContent == questions.correctAnswer[count]){
            count++
            console.log(count)
            points += 100000
            score.innerText = 'Score:' + ' ' + points;
            if(count < 10){ 
                title.innerText = questions.title[count]
            }
            if(count === 10){
                container.style.display = 'none';
                result.style.display = 'block';
                restart.style.display = 'block';
            }
            document.querySelectorAll('.option').forEach((elem, index) => {
                if(count < 10){
                    elem.textContent = questions.option[count][index] //count tæller hver array og index tæller hver string i array'et
                    

                }
            })

            elem.style.backgroundColor = 'limegreen';
        }else {
            elem.style.backgroundColor = 'red';
            setTimeout(() => {
                container.style.display = 'none';
                gameOver.style.display = 'block';
            }, 500)
        }

        
    })
});



restart.addEventListener('click', () => {
    location.reload()
})



//Variables

let userAnswer = '';




















