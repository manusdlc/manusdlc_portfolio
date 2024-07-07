import Header from '../common/Header'
import Intro from './Intro'
import Projects from './Projects'

function Home() {
    return (
        <section id="home">
            <Header />
            <br />
            <Intro />
            <br />
            <Projects />
        </section>
    );
}

export default Home;