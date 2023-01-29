import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://media.istockphoto.com/id/1288297502/photo/solar-system-planets-orbiting-the-sun-3d-illustration.jpg?b=1&s=170667a&w=0&k=20&c=6oj7cQqQdyeqBAbDx-6FWQBf98alw_2t3hpWFZqOXW8="
            />
            
            <div className={styles.profile}>
                <Avatar src="https://github.com/christiancmatos.png"/>

                <strong>Christian Matos</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
} 