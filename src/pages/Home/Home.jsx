import { useEffect, useState } from "react"
import { Header } from "../../Components/Header/Header"
import { CardPost } from "../../Components/CardPost/CardPost"

import styles from './Home.module.css'


const { getPosts, getMyInfo } = require('../../services/userServices')

export function Home() {
    const [posts, setPosts] = useState([])
    const [myInfo, setMyInfo] = useState(null)

    async function carregarPosts() {

        const token = localStorage.getItem("token")

        console.log(token)

        if (!token) {
            window.location.href = "/login"
            return
        }

        const result = await getPosts()

        if (result.error){
            localStorage.removeItem("token")
            window.location.href = "/login"
        }

        setPosts(result)
    }

    async function carregarMinhasInformacoes() {
        const result = await getMyInfo()

        if (result.error) {
            alert(result.error)
            return
        }

        setMyInfo(result)
        console.log(result)
    }


    useEffect(() => {

        carregarPosts()
        carregarMinhasInformacoes()
    }, [])

    return (
        <div>
            <Header carregarPosts={carregarPosts} />


            <div className={styles.posts}>

                {
                    posts.length > 0 && posts.map((post) => {
                        return (
                            <CardPost key={post.id} post={post} />
                        )
                    })
                }


            </div>
        </div>
    )
}