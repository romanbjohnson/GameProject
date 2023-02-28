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

        {  question: "Where was the first robot in space created?",
             answers: ["", ""],
             correct: "", 
            level: "medium hard",
        }, 

        {  question: "Where is the first artificial intelligence-based robot created?",
        answers: ["", ""],
        correct: "", 
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
            level: "easy",
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

         { question: "What city is associated with the Challenger explosion?",
            answers: ["", ""],
            correct: "",
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
            level: "easy",
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

]




function addCategory(addCategory)   {
    const column = document.createElement('div')
    column.classList.add('genre-column')

    const genreTitle = document.createElement('div')
    genreTitle.classList.add('genre-title')
    genreTitle.innerTextn= category.genre
}

spacejeopardyCategories.forEach(category => addCategory(category))

