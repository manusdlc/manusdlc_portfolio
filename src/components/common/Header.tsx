import { Link } from "react-router-dom"


function Header() {
    return (
        <section id="intro">
            <Link to="/">
                <div className="nickname">manusdlc</div>
                <div className="name">Manuel Salomon de las Casas</div>
            </Link>
        </section >
    );
}

export default Header
