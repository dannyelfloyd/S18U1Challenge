import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects"; 

function Projects() {
    return (
        <>
        <h1>Projects Pages</h1>
        <ul>
            {projects.map(project => {
                return(
                    <li key={project.id}>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        <img src={project.image} alt ={project.name}/>
                        <a href={project.url}>See more</a>
                    </li>
                )
            })}
        </ul>
        </>
    );
}

export default Projects;