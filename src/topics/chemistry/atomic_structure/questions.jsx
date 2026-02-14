import { useState } from "react";

export default function QuestionsPage() {

  const quiz = [
    {
      question: "What are the three main subatomic particles?",
      answers: [
        "Protons, neutrons, and electrons",
        "Protons, neutrons, and molecules",
        "Atoms, molecules, and compounds",
        "Electrons, photons, and neutrons"
      ]
    },
    {
      question: "Where are protons located in an atom?",
      answers: [
        "Nucleus",
        "Valence shell",
        "Orbital",
        "Neutron"
      ]
    },
    {
      question: "What determines an element's atomic number?",
      answers: [
        "Number of protons",
        "Number of neutrons",
        "Number of electrons",
        "Mass number"
      ]
    },
    {
      question: "What are isotopes?",
      answers: [
        "Atoms with same protons but different neutrons",
        "Atoms with different protons",
        "Molecules with different atoms",
        "Charged atoms"
      ]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  function nextQuestion() {
    if (currentIndex < quiz.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      
      <h2>{quiz[currentIndex].question}</h2>

      {quiz[currentIndex].answers.map((answer, index) => (
        <button
          key={index}
          className="options"
          onClick={nextQuestion}
          style={{ display: "block", margin: "10px 0" }}
        >
          <h4>{String.fromCharCode(65 + index)}</h4>
          {answer}
        </button>
      ))}

    </div>
  );
}
