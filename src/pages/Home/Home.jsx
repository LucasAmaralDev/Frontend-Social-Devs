import { useEffect, useState } from "react"
import { Header } from "../../Components/Header/Header"
import { CardPost } from "../../Components/CardPost/CardPost"

import styles from './Home.module.css'


const { getPosts } = require('../../services/userServices')

export function Home() {
    const [posts, setPosts] = useState([])

    async function carregarPosts() {
        const result = await getPosts()
        console.log(result)
        setPosts(result)
    }


    useEffect(() => {

        carregarPosts()
    }, [])

    return (
        <div>
            <Header carregarPosts={carregarPosts} />


            <div className={styles.posts}>

                {
                    posts && posts.map((post) => {
                        return (
                            <CardPost key={post.id} post={post} />
                        )
                    })
                }


            </div>
        </div>
    )
}