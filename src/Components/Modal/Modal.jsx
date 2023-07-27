
import { createPost } from '../../services/postsServices';
import styles from './Modal.module.css'
import { useState } from 'react';

export function Modal(props) {
    const [countCharacters, setCountCharacters] = useState(180)
    const [textPost, setTextPost] = useState("")

    function countCharactersText(event) {
        const text = event.target.value
        const count = 180 - text.length
        setCountCharacters(count)
        setTextPost(text)
    }

    async function enviarFormulario() {

        try {

            if (!textPost) {
                alert("O campo texto é obrigatório")
                return
            }

            const retorno = await createPost({ text: textPost })

            if (retorno.error) {
                alert(retorno.error)
                return
            }

            if (retorno.id) {
                if (props.carregarPosts) {
                    props.carregarPosts()
                }
            }

            props.modalPost()

        } catch (error) {

            alert(error)

        }


    }

    return (
        <div className={styles.bg}>

            <div className={styles.modal}>

                <div className={styles.headerModal}>
                    <h1>Nova Publicação</h1>
                    <button onClick={props.modalPost}>Fechar</button>
                </div>

                <div className={styles.form}>

                    <textarea onChange={(e) => countCharactersText(e)} type="text" id="text" name="text" placeholder="Texto" maxLength="180" >
                    </textarea>
                    <p>{countCharacters} restantes</p>

                </div>

                <div className={styles.footerModal}>
                    <button onClick={props.modalPost}>Cancelar</button>
                    <button onClick={enviarFormulario}>Publicar</button>
                </div>


            </div>

        </div>
    )

}