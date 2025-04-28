import Navlink from "./NavLink"

function Header() {
    var userName = "JAFFAR AMAN"

    return (
        <div>
            <h1 className="bgColor" >HEADER add: {2 + 2} {userName}   </h1>
            <Navlink/>
        </div>
    )
}

export default Header