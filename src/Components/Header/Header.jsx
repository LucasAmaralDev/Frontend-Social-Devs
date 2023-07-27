import { useState } from 'react'
import { Modal } from '../Modal/Modal'
import styles from './Header.module.css'

export function Header(props) {

    const [openModalPost, setOpenModalPost] = useState(false)

    async function logout() {
        localStorage.removeItem("token")
        window.location.href = "/login"
    }

    async function modalPost() {
        setOpenModalPost(!openModalPost)
    }

    return (
        <div className={styles.base}>

            <section className={styles.header}>
                <div className={styles.nameSite}
                onClick={() => {window.location.href = '/'}}>
                    <h1>Social Devs</h1>
                </div>


                <nav>
                    <a href="/">Pagina Inicial</a>
                    <a href="#" onClick={modalPost}>Nova Publicação</a>
                    <a href="/myprofile">Perfil</a>
                    <a href="#" onClick={logout}>Sair</a>

                </nav>


            </section>

            {openModalPost && <Modal modalPost={modalPost} carregarPosts={props.carregarPosts} />}

        </div>
    )
}