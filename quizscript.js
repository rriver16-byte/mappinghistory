

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
        question: "Question 1: What is the capital of France?",
        a: "Paris",
        b: "London",
        c: "Berlin",
        d: "Nagasaki",
        correct: "a",
    },
    {
        question: "Question 2: What is the largest planet in our solar system?",
        a: "Mars",
        b: "Jupiter",
        c: "Earth",
        d: "Pluto",
        correct: "b",
    },
    {
        question: "Question 3: Is Nicki Minaj badmind?",
        a: "Yes",
        b: "Never",
        c: "Hotties",
        d: "Lil Kim was right",
        correct: "a",
    },
    {
        question: "Question 4: When is the last time a rookie qb started a Browns game and won?",
        a: "1974",
        b: "1995",
        c: "Never",
        d: "2020",
        correct: "b",
    },
];


/*Function to display the current question and capture user input
function loadQuiz sets up the way the quiz will execute. the loadQuiz is based on the position of the array. the answer starts with  with the options property of the question displayed. the .push method captures all of the answers given. then the if...else conditional tells the program how to keep moving through each index item (question) and when to stop and show results.

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



