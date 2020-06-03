const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [

  {
    question: 'How do you say the following time? 4.30',
    answers: [
      { text: 'It’s half past 4.', correct: true },
      { text: 'It’s thirty past 4.', correct: false },
      { text: 'It’s 4 and 30.', correct: false },
      { text: 'It’s 4 and half.', correct: false }
    ]
  },
  {
    question: 'How do you say the following time? 5.02',
    answers: [
      { text: 'It’s just over 5.', correct: false },
      { text: 'It’s just beyond 5.', correct: false },
      { text: 'It’s just gone 5.', correct: true },
      { text: 'All of the above.', correct: false }
    ]
  },
  {
    question: 'How do you say the following time? 3.45',
    answers: [
      { text: 'It’s 45 past 3.', correct: false },
      { text: 'It’s quarter 4.', correct: false },
      { text: 'It’s quarter past 4', correct: false },
      { text: 'It’s quarter to 4.', correct: true }
    ]
  },
  {
    question: 'How do you say the following time? 5.57',
    answers: [
      { text: 'It’s nearly 6.', correct: false },
      { text: 'It’s coming up to 6.', correct: false },
      { text: 'It’s almost 6.', correct: false },
      { text: 'All of the above.', correct: true }
    ]
  },
  {
    question: '12 A.M. is:',
    answers: [
      { text: '12 in the afternoon.', correct: false },
      { text: '12 at night.', correct: true },
    ]
  },
  {
    question: 'How do you say the following time? 11.04',
    answers: [
      { text: 'It’s eleven oh four.', correct: true },
      { text: 'It’s eleven zero four.', correct: false },
      { text: 'It’s four to eleven.', correct: false },
      { text: 'None of the above.', correct: false }
    ]
  },
  {
    question: 'How do you say the following time? 9',
    answers: [
      { text: 'It’s 9.', correct: false },
      { text: 'It’s 9 o’clock.', correct: false },
      { text: 'It’s exactly 9 o’clock.', correct: false },
      { text: 'All of the above.', correct: true }
    ]
  },
  {
    question: 'What is the time when I say “noon”?',
    answers: [
      { text: '11 in the morning.', correct: false },
      { text: '12 in the afternoon.', correct: true },
      { text: '12 at night.', correct: false },
      { text: '1 in the afternoon.', correct: false}
    ]
  },
  {
    question: '2.10 can be said as:',
    answers: [
      { text: '10 past 2.', correct: true },
      { text: '10 past 2 o’clock.', correct: false }
    ]
  },
  {
    question: 'How do you say the following time? 1.35',
    answers: [
      { text: 'Thirty-five past one.', correct: false },
      { text: 'One and thirty-five.', correct: false },
      { text: 'Twenty-five to two.', correct: true },
      { text: 'Thirty-five to two.', correct: false }
    ]
  }
  

]
