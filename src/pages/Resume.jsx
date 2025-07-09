import { studies, experiences } from '../data/resume';

function Resume() {
    return (
        <>
            <h1>Resume Page</h1>
            
            <h2>Experiencies</h2>
            <ul>
                {experiences.map(experiencie => {
                    return (
                    <li key={experiencie.id}>
                        <h3>Título: {experiencie.title}</h3>
                        <p>Compañía: {experiencie.company}</p>
                        <p>Duración: {experiencie.date}</p>
                    </li>)
                })}
            </ul>
            
            <h2>Studies</h2>
            <ul>
                {studies.map(study => {
                    return (
                    <li key={study.id}>
                        <h3>Título: {study.title}</h3>
                        <p>Institución: {study.institution}</p>
                        <p>Duración: {study.date}</p>
                    </li>)
                })}
            </ul>
        </>
    )
};

export default Resume;