



    const questions_database = [
        'What are the three main subatomic particles?',
        'Where are protons located in an atom?',
        'What determines an element\'s atomic number?',
        'What are isotopes?'
    ]

    const answers_database = [
        [
            'Protons, neutrons, and molecules',
            'Protons, neutrons, and molecules',
            'Atoms, molecules, and compounds',
            'Electrons, photons, and neutrons'
        ],
        [
            'Nucleus',
            'Valence shell',
            'Orbital',
            'Neutron'
        ]
    ]
    let index = 0
    let count = 0

function Question() {

    return(
        <>
            <h2>{questions_database[index]}</h2>
        </>
    )
}


function Options() {


    
    index = 1
    count = 0


    function nextQuestion() {
        if(index < questions_database.length) {
             index = index
             let questionvessel = document.querySelector('h2')
             questionvessel.textContent = questions_database[index]
             index = index + 1
        } else if (index = questions_database.length + 1) {

        }    
    }

    

   


    return(
        <>
            <button className="options" onClick={() => {
                nextQuestion()
                }}><h4>A</h4>{answers_database[count][0]}</button><br />
            <button className="options" onClick={() => {
                nextQuestion()
                }}><h4>B</h4>{answers_database[count][1]}</button><br />
            <button className="options" onClick={() => {
                nextQuestion()
                }}><h4>C</h4>{answers_database[count][2]}</button><br />
            <button className="options" onClick={() => {
               nextQuestion()
                }}><h4>D</h4>{answers_database[count][3]}</button>
        </>
    )
}

export default function QuestionsPage() {


    return(
        <>
            <Question/>
            <Options />
        </>
    )
}