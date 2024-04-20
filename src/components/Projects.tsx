import cern from "../assets/cern.jpg"
import cuckoo from "../assets/cuckoo.jpg"
import robotito from "../assets/robotito.jpg"

interface Project {
    title: string,
    img: string
}

const PROJECTS: Project[] = [
    { title: "Probabilistic filter with metadata for billions of records", img: cuckoo },
    { title: "Archiver for physics reserach at CERN", img: cern },
    { title: "Autonomous robot for electrical substation inspection", img: robotito }
]

function Projects() {
    return (
        <section id="projects">
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="project">
                        <img src={project.img} className="project-img" />
                        <div className="project-title"> {project.title} </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects