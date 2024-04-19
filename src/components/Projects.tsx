import cern from "../assets/cern.jpg"
import cuckoo from "../assets/cuckoo.jpg"
import filter from "../assets/filter.jpg"
import robotito from "../assets/robotito.jpg"

function Projects() {
    return (
        <section id="projects">
            <div className="project_card">
                <div>
                    <img src={cuckoo} alt="killer bird" height="200" width="140" />
                    <img src={filter} alt="filter" height="200" width="150" />
                </div>
                <p>Cuckoo Filter for billions of records with metadata</p>
            </div>
            <br/>
            <div className="project_card">
                <img src={cern} alt="particle smasher" height="260" width="290" />
                <p> Archiver for physics research at CERN</p>
            </div>
            <br/>
            <div className="project_card">
                <img src={robotito} alt="robotito" height="260" width="290" />
                <p> Autonomous robot for electrical substations inspection</p>
            </div>
        </section>
    )
}

export default Projects