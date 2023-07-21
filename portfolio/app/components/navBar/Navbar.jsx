import Link from "next/link"
import styles from './Navbar.module.css'

export default function Navbar() {
    const links = [
        {name: 'home', route: '/'},
        {name: 'about', route: '/about'},
    ]

    return (
        <>
            <div>
                <nav className={styles.container}>
                    <ul className='flex'>
                        {
                            links.map(link => (
                                <li key={link.route}>
                                    <Link href={link.route}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </>
    )
}