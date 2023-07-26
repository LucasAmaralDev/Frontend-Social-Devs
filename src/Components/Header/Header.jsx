import styles from './Header.module.css'

export function Header() {

    return (
        <div className={styles.base}>

            <section className={styles.header}>
                <div>
                    <h1>Social Devs</h1>
                </div>


                <nav>
                    <a href="/">Pagina Inicial</a>
                    <a href="#">Nova Publicação</a>
                    <a href="/myprofile">Perfil</a>
                    <a href="#">Sair</a>

                </nav>


            </section>

        </div>
    )
}