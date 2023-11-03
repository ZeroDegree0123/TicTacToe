import { Link } from "react-router-dom"

import "./Menu.css"

export default function Menu() {
    return (
        <main className='menu'>
            <h1 className="menu-title">TIC-TAC-TOE</h1>
            <ul className="menu-selection-list">
                <li className="menu-list-item">
                    <Link className="menu-links" to="/game" ><p>Start</p></Link>
                </li>
                <li className="menu-list-item">
                    <Link className="menu-links"><p>Options</p></Link>
                </li>
                <li className="menu-list-item">
                    <Link className="menu-links"><p>Exit</p></Link>
                </li>
            </ul>
        </main>
    )
}
