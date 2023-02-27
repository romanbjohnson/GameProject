const game = document.getElementById ('game')
const scoreDisplay = document.getElementById ('score')


const jeopardyCategories = [
    {
        genre: "WHO",
        questions: [
            
            { question: "Who was the first American in space?",
              answers: "["Buzz Aldrin", "Mae Jemison"]",
              correct: "",
              level: "easy"


                
           
        //need to add toLowercase function for the answer input so that any answer that is correct will result

             },

       ]

    },
    {
        genre: "WHERE",
        questions: [

          {  question: "Where is the world did the first person in the world come from to arrive in space?",
             answers: "["", ""]",
             correct: "", 
             level: "moderate"


         }, 

        ]  
         
      //need to add toLowercase function for the answer input so that any answer that is correct will result

           },

    {
        genre: "WHAT",
        questions: [ 

        { question: "What city is the headquarters for NASA located?",
            answers: 
            correct: 
            level: "medium-hard"

    


              
         
      //need to add toLowercase function for the answer input so that any answer that is correct will result

           },

    
        ]    


   },
   {
         genre: "WHEN",
         questions: [ 

         { question: "When did the first person walk on the moon?",
            answers: 
            correct: 
            level: "hard"


              
         
  
           },

        ] 

  },
  {
         genre: "WHY",
         questions: [  

         { question: "Why was Apollo 11 planned?",
            answers: "",
            correct: "",
            level:  "hardest"

           },

        ]
},



]
