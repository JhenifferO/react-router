import { NavLink } from "react-router-dom";
import styles from '../Menu/menu.module.css'

export default function Menu () {
    return <>
        <nav>
            <ul className={styles.list}>
                <li className={styles.list_item}>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li className={styles.list_item}>
                    <NavLink to='/product'>Products</NavLink>
                </li>
            </ul>
        </nav>
    </>
}