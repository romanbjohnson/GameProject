   //need to add toLowercase function for the answer input so that any answer that is correct will result



const game = document.getElementById ('game')
const scoreDisplay = document.getElementById ('score')


const spacejeopardyCategories = [
    {
        genre: "WHO",
        questions: [
            
            { question: "Who was the first American in space?",
              answers: ["Alan B. Shepard", "Mae Jemison"], 
              correct: ["Alan B. Shepard", "Alan B Shepard", "Alan Shepard"], 
              level: "easy",
             },

             { question: "Who was the first Russian in space?",
              answers: ["Yuri Gagarin", "Buzz Aldrich"], 
              correct: ["Yuri Gagarin"], 
              level: "medium",
             },

             { question: "Who was the first woman in space?",
              answers: ["Valentina Tereshkova", "Hayley Goldberger"], 
              correct: ["Valentina Tereshkova"], 
              level: "medium hard",
             },

             { question: "Who is the youngest person in space?",
              answers: ["Hayley Arceneaux", "Mary Johnanneson"], 
              correct: ["Hayley Arceneaux"], 
              level: "hard",
             },

            
       ]

    },
    {
        genre: "WHERE",
        questions: [

          {  question: "Where is the world (hint: country) did the first person in the world come from to arrive in space?",
             answers: ["Russia", "China"],
             correct: "Russia", 
            level: "easy",
        }, 

        {  question: "Where was the first person who arrived in space from?",
             answers: ["Russia", "China"],
             correct: "Russia", 
            level: "medium",
        }, 

        {  question: "Where can the biosphere be found?",
             answers: ["The lower part of the atmosphere, all of the hydrosphere, and the upper part of the lithosphere", "In the mantle"],
             correct: "The lower part of the atmosphere, all of the hydrosphere, and the upper part of the lithosphere", 
            level: "medium hard",
        }, 

        {  question: "Where is the Oort Cloud located?",
        answers: ["Just beyond Pluto", "On Mars"],
        correct: "Just beyond Pluto", 
       level: "hard",
        }, 

        ]  

           },

    {
        genre: "WHAT",
        questions: [ 

        { question: "What city [hint: Enter the Full Name of the City/ No Abbreviations Please] is the headquarters for NASA located?",
            answers: ["Washington District of Columbia", "Atlanta"],
            correct: "Washington District of Columbia",
            level: 'easy',
         },

         { question: "What city [hint: Enter the Full Name of the City/ No Abbreviations Please] is known as the Space City?",
            answers: ["Nashville", "Houston"],
            correct: "Houston",
            level: "medium",
         },

         { question: "What is L2 ?",
            answers: ["The place where the James Webb Telescope is", "The name of a NASA mission"],
            correct: "The place where the James Webb Telescope is",
            level: "medium-hard",
         },

         { question: "What state is associated with the Challenger explosion?",
            answers: ["Florida", "Georgia"],
            correct: "Florida",
            level: "hard",
         },

    
        ]    


   },

   {
         genre: "WHEN",
         questions: [ 

         { question: "When (hint: what year) did the first person walk on the moon?",
            answers: ["1961", "1971"], 
            correct: "1961", 
            level: 'easy',
           },

           { question: "When (hint: what year) did Goddard file the patent for his liquid fueled rocket?",
           answers: ["1920", "1914"], 
           correct: "1914", 
           level: "medium",
          },

          { question: "When (hint: what year) did Goddard launch his liquid fueled rocket?",
          answers: ["1926", "1946"], 
          correct: "1926", 
          level: "medium hard",
         },

         { question: "When (hint: what year) was the first time solar power was used in space?",
         answers: ["1958", "1988"], 
         correct: "1958", 
         level: "hard",
        },

        ] 

    },

    {
        genre: "WHY",
        questions: [ 

        { question: "Why does Mercury have craters?",
           answers: ["Its atmosphere is too thin to burn up meteoroids", "Its atmosphere is too cold to freeze the meteoroids"], 
           correct: "Its atmosphere is too thin to burn up meteoroids", 
           level: "easy",
          },

          { question: "Why is it not possible to walk on Jupiter, Saturn, Uranus, or Neptune?",
          answers: ["Because they do not have solid surfaces", "Because they do not have oxygen in their atmosphere"], 
          correct: "Because they do not have solid surfaces", 
          level: "medium",
         },

         { question: "Why did NASA invest millions of dollars in inventing a pen that could be used in space?",
         answers: [" Pens could not function in zero gravity.", "The pens could gather information about the space shuttle needed for the astronauts"], 
         correct: " Pens could not function in zero gravity.", 
         level: "medium hard",
        },

        { question: "Why did the Challenger space shuttle explode in 1987?",
        answers: ["The Challenger exploded due to an external tank explosion.", "The Challenger exploded due to a mismatch in gravity calculation of liftoff"], 
        correct: "The Challenger exploded due to an external tank explosion.", 
        level: "hard",
       },

       ] 

   },

]



let score = 0

 // Adds the title column
function addCategory(spacejeopardyCategories)   {
    const column = document.createElement('div')
    column.classList.add('genre-column')

    const genreTitle = document.createElement('div')
    genreTitle.classList.add('genre-title')
    genreTitle.innerText = spacejeopardyCategories.genre


    column.appendChild(genreTitle)
    game.append(column)
    
}


spacejeopardyCategories.forEach(category => addCategory(category))



    // Adds the question cards
    spacejeopardyCategories.questions.forEach(question => {
        const card = document.createElement('div')
        card.classList.add('card')
        column.append(card)

        // If statement used to display points on cards
        if (question.level === 'easy') {
            card.innerHTML = 100
        }
        if (question.level === 'medium') {
            card.innerHTML = 200
        }
        if (question.level === 'medium hard') {
            card.innerHTML = 300
        }

        if (question.level === 'hard') {
            card.innerHTML = 400
        }

        // gets all card information
        card.setAttribute('data-question', question.question)
        card.setAttribute('data-answer-1', question.answers[0])
        card.setAttribute('data-answer-2', question.answers[1])
        card.setAttribute('data-correct', question.correct)
        card.setAttribute('data-value', card.getInnerHTML())

        card.addEventListener('click', flipCard)
    })


// Loops through the spacejeopardyCategories array & addCategories function
spacejeopardyCategories.forEach(category => addCategory(category))

function flipCard() {
    this.innerHTML = ''
    this.style.fontSize = '15px'
    this.style.lineHeight = '30px'
    // creates the backside of the card
    const textDisplay = document.createElement('div')
    textDisplay.classList.add('card-text')
    textDisplay.innerHTML = this.getAttribute('data-question')
    const firstButton = document.createElement('button')
    const secondButton = document.createElement('button')

    // creates the answer buttons
    firstButton.classList.add('first-button')
    secondButton.classList.add('second-button')
    firstButton.innerHTML = this.getAttribute("data-answer-1")
    secondButton.innerHTML = this.getAttribute("data-answer-2")
    firstButton.addEventListener('click', getResult)
    secondButton.addEventListener('click', getResult)
    this.append(textDisplay, firstButton, secondButton)

    // disables the option to click multiple cards at once
    const allCards = Array.from(document.querySelectorAll('.card'))
    allCards.forEach(card => card.removeEventListener('click', flipCard))
}

function getResult() {
    const allCards = Array.from(document.querySelectorAll('.card'))
    allCards.forEach((card) => card.addEventListener('click', flipCard))

    const cardOfButton = this.parentElement

    // adds correct response value to score
    if (cardOfButton.getAttribute('data-correct') == this.innerHTML) {
        score = score + parseInt(cardOfButton.getAttribute('data-value'))
        scoreDisplay.innerHTML = score
        cardOfButton.classList.add('correct-answer')

        // removes children (all info on card) last to first
        setTimeout(() => {
            while (cardOfButton.firstChild) {
                cardOfButton.removeChild(cardOfButton.lastChild)
            }
            cardOfButton.innerHTML = cardOfButton.getAttribute('data-value')
        }, 100)
    } else {
        cardOfButton.classList.add('wrong-answer')
        setTimeout(() => {
            while (cardOfButton.firstChild) {
                cardOfButton.removeChild(cardOfButton.lastChild)
            }
            cardOfButton.innerHTML = 0
        }, 100)
    }
    // allows to select the next card
    cardOfButton.removeEventListener('click', flipCard)
}

