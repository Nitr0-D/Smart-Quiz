import { Route, useNavigate, Routes } from "react-router-dom"
import AtomicStructureLayout from "./atomic_structure"


function Head() {
    return(
        <>
        <h2>Chemistry</h2>
        <h4>Choose a topic to get started</h4>
        </>
    )
}

function Topics() {
    const navigate = useNavigate()
    return(
        <>
        <button className="subjectsel" onClick={() => navigate('topics/chemistry/atomic_structure')}>
            Atomic Structure
        </button><br/>
       
        </>
    )
}

 function ChemistryTopicsChoiceLayout() {
    return(
        <>
        <Head />
        <Topics />
        </>
    )
}


export default function ChemistryTopicsChoice() {
        return(
        <>
        <Routes>
            <Route path='/' element={<ChemistryTopicsChoiceLayout />} />
            <Route path='/topics/chemistry/atomic_structure/*' element={<AtomicStructureLayout />} />
        </Routes>
        </>
        )

}
