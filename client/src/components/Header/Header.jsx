
import logo from "../../assets/icons/logo2.svg"
import "./Header.scss"
import {Link} from "react-router-dom"

function Header({path}) {
    const portfolioId = sessionStorage.getItem('userId') 

    if (!portfolioId) {
        return <p>Loading .....</p>
    }
    return (
        <div className="header">
            <img className="header__logo" src={logo} alt="investors Logo" />
            <section className="header__links">
                <Link to="/explore">
                    <button className={path.path === "/explore" || path.path === "/:id/detail"? "header__links-active" : "header__links-notActive"}>Explore</button>
                </Link>
                <Link to={`/portfolio/${portfolioId}`}>
                    <button className={path.path === "/explore" || path.path === "/:id/detail" ? "header__links-notActive": "header__links-active"}>Portfolio</button>
                </Link>
            </section>
        </div>
    )
}

export default Header
