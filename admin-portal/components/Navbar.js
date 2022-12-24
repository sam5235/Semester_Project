import styles from '../styles/Navbar.module.css'
import Link from "next/link"
const Navbar = () => {
   return(
    <div className={styles.navbar}>
        <div className={styles.link}>
           <Link href="/"> Home</Link>
           <Link href="/about"> Register Hospital</Link>
           <Link href="/profile">Profile</Link>
        </div>
    </div>
   )
}

export default Navbar