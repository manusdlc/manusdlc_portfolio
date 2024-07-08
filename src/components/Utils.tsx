import Header from './common/Header'


function withHeader(sectionId: string, component: JSX.Element): JSX.Element {
    return (
        <section id={sectionId}>
            <Header />
            {component}
        </section>
    );
}

export default withHeader