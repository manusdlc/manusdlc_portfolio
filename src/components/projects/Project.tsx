import Header from '../common/Header'

function withHeader(sectionId: string, Project: React.ComponentType) {
    return (
        <section id={sectionId}>
            <Header />
            <br />
            <Project />
        </section>
    );
}

export default withHeader
