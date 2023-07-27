import { useState } from "react"
import styles from './ModalEditProfile.module.css'
import { useForm } from "react-hook-form"
import { editProfile } from "../../services/userServices"


export function ModalEditProfile(props) {
    const [openModal, setOpenModal] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm()

    async function enviarFormulario(data) {
        console.log(data)

        const retorno = await editProfile(data)

        if (retorno.error) {
            alert(retorno.error)
            return
        }

        if (retorno.message){
            setOpenModal(false)
            props.carregarPerfil()
        }
    }


    return (
        <>
            <div className={props.estilo}>
                <button onClick={() => {setOpenModal(!openModal)}}>Editar Meu Perfil</button>
            </div>



            {
                openModal &&

                <>
                    <div className={styles.bg}>
                        <div className={styles.modal}>

                            <div className={styles.headerModal}>
                                <h1>Editar Perfil</h1>
                                <button onClick={() => setOpenModal(false)}>Fechar</button>
                            </div>

                            <form onSubmit={handleSubmit(enviarFormulario)}>
                                <div className={styles.form}>

                                    <div>
                                        <input type="text" id="name" name="name" defaultValue={props.dados.name} placeholder="Nome" {...register("name", {
                                            required: {
                                                value: true,
                                                message: "O campo nome é obrigatório"
                                            }
                                        })} />
                                        {errors.name && <span className={styles.error}>{errors.name.message}</span>}
                                    </div>

                                    <div>
                                        <input type="text" id="username" name="username" defaultValue={props.dados.username} placeholder="Username" {...register("username", {
                                            required: {
                                                value: true,
                                                message: "O campo username é obrigatório"
                                            }
                                        })} />
                                        {errors.username && <span className={styles.error}>{errors.username.message}</span>}
                                    </div>

                                    <div>
                                        <textarea type="text" id="bio" name="bio" placeholder="Bio" defaultValue={props.dados.bio} {...register("bio")} />
                                    </div>

                                    <div>
                                        <input type="text" id="avatar" name="avatar" placeholder="URL Avatar Imagem" defaultValue={props.dados.avatar} {...register("avatar")} />
                                    </div>
                                </div>

                                <div className={styles.footerModal}>
                                    <button type="submit">Salvar</button>
                                    <button onClick={() => setOpenModal(false)}>Cancelar</button>
                                </div>


                            </form>

                        </div>

                    </div>
                </>
            }
        </>
    )
}