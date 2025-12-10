//Code inspired by tutorial from the course 50 Projects in 50 Days - HTML, CSS, and JavaScript by Brad Traversy and Florin Pop, adapted for class//

/*Initial variables:
the variable quiz will not change as this is fixed for every user.
the variable answerEls will remain the same because the answer property is set. and I'm using querySelectorAll because all of my <input> tags have the class answer. 
the variable questionEl will not change because the questions are set.
the a, b, c, and d_text variables are also set properties.
the button variable will perform a singular function and will not change.
the score will be tallied and thus not constant.
the question index value will change based on question number so it must be a let.
*/
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById ("submitquiz");
let score = 0;
let currentQuiz = 0;

/*Define initial arrays:
the quizData array allows me to add all of the questions as objects. Within each object I've assigned values to each property (question, a, b, c, d, answer) so that it can populate on the webpage using DOM.

*/
const quizData = [
    {
        question: "Question 1: Where was the Nuyorican Poet’s Cafe first housed?",
        a: "The auditorium of PS. 41",
        b: "The Mulberry Street Library",
        c: "Miguel Algarín’s living room",
        d: "The Sunshine Cafe on East 6th Street",
        correct: "c",
    },
    {
        question: "Question 2: In what way does the Lesbian Herstory Archives differ from a traditional archive?",
        a: "All books are catalogued alphabetically according to first name (not last name)",
        b: "Most materials can be handled by any user of the archive",
        c: "You can eat and drink inside the archive",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "Question 3: In Seneca Village, one would have found…",
        a: "High rates of African American property ownership",
        b: "A few instances of property owned by African American women (very rare at the time)",
        c: "Higher rates of school attendance than in other parts of New York",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "Question 4: What is Native Knowledge 360?",
        a: "A permanent exhibition at the Museum of the American Indian",
        b: "A magazine published by the Museum of the American Indian",
        c: "An educational program run by, and through, the Museum of the American Indian",
        d: "A protest movement criticizing the Museum of the American Indian",
        correct: "c",
    },
];


/*Function to display the current question
function loadQuiz sets up the way the quiz will execute. the loadQuiz is based on the position of the array. 
the answer starts with  with the options property of the question displayed. 
*/
loadQuiz();


function loadQuiz(){

    deselectAll();
    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

/* Function to deselect answers from previous question
function deselectAll() creates a boolean phrase using the forEach property to go through each radio option. they should not be checked because checked is false.

*/

function deselectAll(){
    answerEls.forEach(answerEl => answerEl.checked = false);
}

/* Function to save answers that are checked
function getSelected captures each answer. if the answer is selected then it is saved by using return to capture that value.

*/

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

/* Function to add up score and end the quiz
 * Event listeners set up a function to run whenever an action is done. in this case, it is the click event for the button. once this happens, the saved value from the chosen radio button is placed as new const answer. this is then put into the if function that measures whether the entered value answer is compared to the correct property from the quizData array. this is done via a boolean equation, if this is true, the score is increased by one. then the quizData object array advances to the next position via currentQuiz++. then if the array is finished, (using the if, else) a message pops up that inputs the total score.


*/

submitButton.addEventListener("click", () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;

        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered ${score} out of 4 answers correctly.</h2>`;
        }
    }
});



