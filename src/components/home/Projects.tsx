import cern from "../../assets/cern.jpg"
import cuckoo from "../../assets/cuckoo.jpg"
import robotito from "../../assets/robotito.jpg"
import { Link } from "react-router-dom"

interface Project {
    title: string,
    subtitle: string,
    img: string
    path: string
}

const PROJECTS: Project[] = [
    {
        title: "Probabilistic Filters with Metadata",
        subtitle: "Analyzing and implementing production-ready Cuckoo Filters for billions of records with metadata",
        img: cuckoo,
        path: 'projects/filter'
    },
    {
        title: "Research Archiver for C.E.R.N",
        subtitle: "Implementing a thesis conducted at the Conseil Européen pour la Recherche Nucléaire for the preservation of data",
        img: cern,
        path: 'projects/cern'
    },
    {
        title: "Robotito: my Unmanned Ground Vehicle",
        subtitle: "Building and programming an autonomous robot for electrical subtations",
        img: robotito,
        path: 'projects/robotito'
    }
]

function Projects() {
    return (
        <section id="projects">
            <div className="centered-div">
                {PROJECTS.map((project, index) => (
                    <Link to={project.path}>
                        <div key={index} className="project">
                            <img src={project.img} className="project-img" />
                            <div className="project-title">
                                {project.title}
                                <div className="project-subtitle">
                                    {project.subtitle}
                                </div>
                            </div>
                        </div>

                    </Link>
                ))}
            </div>
        </section>
    );
}

export default Projects;