

import React, { useEffect, useState } from 'react'
import { Header } from '../../Components/Header/Header'
import { getMyProfile } from '../../services/userServices'
import styles from './Myprofile.module.css'
import { CardPost } from '../../Components/CardPost/CardPost'
import { ModalEditProfile } from '../../Components/ModalEditProfile/ModalEditProfile'




function OrganizarPosts(props) {

    const posts = props.posts.reverse()
    const user = props.user

    console.log(posts)

    return (

        posts && posts.map(post => {
            const postMod = {
                ...post,
                user: { ...user }
            }

            return (
                <CardPost key={post.id} post={postMod} />
            )
        })


    )
}






export default function Myprofile() {

    const [profileInfo, setProfileInfo] = useState(null)

    async function carregarPerfil() {

        const retorno = await getMyProfile()

        if (retorno.error) {
            alert(retorno.error)
            return
        }

        console.log(retorno)
        setProfileInfo(retorno)
    }

    useEffect(() => {
        carregarPerfil()
    }, [])


    return (
        <div>
            <Header carregarPosts={carregarPerfil} />
            <main>
                {
                    profileInfo

                        ?
                        <>
                            <div className={styles.cardProfileInfo}>


                                <div className={styles.profileInfo}>

                                    <div className={styles.cardAvatarInfo}>
                                        <img src={profileInfo.avatar ? profileInfo.avatar : 'https://www.w3schools.com/howto/img_avatar.png'} alt="avatar" />

                                        <div className={styles.nameUsername}>
                                            <h1>{profileInfo.name}</h1>
                                            <p>@{profileInfo.username}</p>
                                            {profileInfo.bio && <p className={styles.bio}>{profileInfo.bio}</p>}
                                        </div>
                                    </div>

                                    <div className={styles.moreInfoProfile}>



                                        {profileInfo.sex &&
                                            <div className={styles.divInfo}>
                                                <h1>Sexo</h1>
                                                <p>{
                                                    profileInfo.sex === 'masc' ? "Masculino" :
                                                        profileInfo.sex === 'fem' ? "Feminino" : "Outro"
                                                }</p>
                                            </div>
                                        }

                                        {
                                            profileInfo.date_birth &&
                                            <div className={styles.divInfo}>
                                                <h1>Data de nascimento</h1>
                                                <p>{
                                                    new Date(profileInfo.date_birth).toLocaleDateString('pt-BR', {
                                                        day: '2-digit',
                                                        month: 'long',
                                                        year: 'numeric'
                                                    })
                                                }</p>
                                            </div>
                                        }

                                    </div>

                                </div>

                                <ModalEditProfile estilo={styles.modalEditProfile} dados={{
                                    id: profileInfo.id,
                                    name: profileInfo.name,
                                    bio: profileInfo.bio,
                                    avatar: profileInfo.avatar,
                                    username: profileInfo.username
                                }}
                                    carregarPerfil={carregarPerfil}
                                />

                                <div className={styles.posts}>
                                    <h1>Publicações</h1>

                                    <div className={styles.divPosts}>
                                        {
                                            profileInfo.posts.length > 0
                                                ? <OrganizarPosts posts={profileInfo.posts} user={{
                                                    avatar: profileInfo.avatar,
                                                    name: profileInfo.name,
                                                    username: profileInfo.username
                                                }} />
                                                : <p>Nenhuma publicação</p>
                                        }
                                    </div>
                                </div>
                            </div>
                        </>

                        : <p>Carregando...</p>

                }
            </main>
        </div>
    )
}
