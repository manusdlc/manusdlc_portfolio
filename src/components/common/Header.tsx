import { Link } from "react-router-dom"


function Header() {
    return (
        <section id="intro">
            <Link to="/">
                <div className="title">manusdlc</div>
                <div className="subtitle">Manuel Salomon de las Casas</div>
            </Link>
        </section >
    );
}

export default Header
