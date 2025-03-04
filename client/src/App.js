import React, { useState } from "react";

const questions = [
  {
    question: "What does HTML stand for?",
    choices: [
      "HyperText Markup Language",
      "HyperText Markdown Language",
      "High-level Text Machine Learning",
      "Hyper Transfer Markup Logic",
    ],
    answer: "HyperText Markup Language",
  },
  {
    question: "What is the purpose of CSS?",
    choices: [
      "To structure content",
      "To style content",
      "To write backend logic",
      "To store data in a database",
    ],
    answer: "To style content",
  },
  {
    question: "Which programming language is used for React?",
    choices: ["Python", "Java", "JavaScript", "C++"],
    answer: "JavaScript",
  },
];

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  const handleAnswerClick = (choice) => {
    if (choice === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.quizBox}>
        {!quizStarted ? (
          <button style={styles.button} onClick={startQuiz}>
            Start Quiz
          </button>
        ) : showScore ? (
          <div style={styles.scoreContainer}>
            <h2>Your Score: {score} / {questions.length}</h2>
            <button style={styles.button} onClick={startQuiz}>Start New Quiz</button>
          </div>
        ) : (
          <div style={styles.quizContent}>
            <div style={styles.questionBox}>
              <h2 style={styles.question}>{questions[currentQuestion].question}</h2>
            </div>
            <div style={styles.choicesContainer}>
              {questions[currentQuestion].choices.map((choice, index) => (
                <button key={index} style={styles.choiceButton} onClick={() => handleAnswerClick(choice)}>
                  {choice}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#fff",
  },
  quizBox: {
    border: "3px solid black", // Full border around the quiz
    borderRadius: "10px",
    padding: "20px",
    backgroundColor: "#f5f5f5",
    width: "50%",
    textAlign: "center",
    boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.2)", // Adds a nice shadow effect
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  quizContent: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  questionBox: {
    border: "2px solid black",
    padding: "15px",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
  },
  question: {
    fontSize: "20px",
    margin: 0,
  },
  choicesContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  choiceButton: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "2px solid black",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    transition: "background 0.3s ease",
  },
  scoreContainer: {
    border: "2px solid black",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
  },
};

export default App;
