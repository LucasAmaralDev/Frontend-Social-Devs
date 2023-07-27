import { useEffect, useState } from 'react'
import { Modal } from '../Modal/Modal'
import styles from './Header.module.css'
import { set } from 'react-hook-form'

export function Header(props) {

    const [openModalPost, setOpenModalPost] = useState(false)

    const [logado, setLogado] = useState(false)

    async function logout() {
        localStorage.removeItem("token")
        window.location.href = "/login"
    }

    async function verificarToken() {

        const token = localStorage.getItem("token")

        if (token) {
            setLogado(true)
        }

    }

    useEffect(() => { verificarToken() }, [] )

    async function modalPost() {
        setOpenModalPost(!openModalPost)
    }

    return (
        <div className={styles.base}>

            <section className={styles.header}>
                <div className={styles.nameSite}
                    onClick={() => { window.location.href = '/' }}>
                    <h1>Social Devs</h1>
                </div>

                {
                    logado ?

                    <nav>
                        <a href="/">Inicio</a>
                        <a href="#" onClick={modalPost}>Publicar</a>
                        <a href="/myprofile">Perfil</a>
                        <a href="#" onClick={logout}>Sair</a>

                    </nav>

                    :

                    <nav>
                        <a href="/login">Login</a>
                        <a href="/register">Cadastro</a>
                    </nav>

                }



            </section>

            {openModalPost && <Modal modalPost={modalPost} carregarPosts={props.carregarPosts} />}

        </div>
    )
}