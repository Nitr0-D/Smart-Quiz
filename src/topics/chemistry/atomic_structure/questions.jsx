


function Question() {

    const questions_database = [
        'What are the three main subatomic particles?',
        'Where are protons located in an atom?',
        'What determines an element\'s atomic number?',
        'What are isotopes?'
    ]

    let index = 0

    let question = document.querySelector('h2').textContent

    



    return(
        <>
            <h2>{questions_database[0]}</h2>
        </>
    )
}


function Options() {
    return(
        <>
            <button className="options"><h4>A</h4> Protons, neutrons, and molecules</button><br />
            <button className="options"><h4>B</h4> Protons, neutrons, and molecules</button><br />
            <button className="options"><h4>C</h4> Atoms, molecules, and compunds</button><br />
            <button className="options"><h4>D</h4> Electrons, photons, and neutrons</button>
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