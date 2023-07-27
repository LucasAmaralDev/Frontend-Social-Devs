import style from "./CardPost.module.css";


export function CardPost(props) {
    console.log(props.post)

    return (
        <div className={style.cardpost}>

            <div className={style.headerCardPost}>

                <a className={style.user} href="#">
                    {props.post.user.avatar ? <img src={props.post.user.avatar} alt="avatar" /> : <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />}
                    <h1>{props.post.user.name}</h1> <span>@{props.post.user.username}</span>
                </a>

                <div className={style.date}>

                    <span>
                        {
                            // Converter date em dateonly por extenso com hora e minuto
                            new Date(props.post.date).toLocaleDateString('pt-BR', {
                                day: '2-digit',
                                month: 'long',
                                year: 'numeric'
                            })
                        }
                    </span>

                </div>  

            </div>

            <div className={style.contentCardPost}>
                <p>{props.post.text}</p>
            </div>

        </div>
    )
}