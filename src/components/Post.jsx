import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://avatars.githubusercontent.com/u/110792669?v=4" />

                    <div className={styles.authorInfo}>
                        <strong>Eduardo Lazzaretti</strong>
                        <span>Desenvolvedor</span>
                    </div>
                </div>


                <time title="10 de julho às 18:30" dateTime="2023-07-10 18:45:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, 
                evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href="#"> jane.design/doctorcare</a></p>

                <p><a href="#"> #novoprojeto #nlw #rocketseat</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedBack</strong>

                <textarea placeholder="Deixe um comentário"></textarea>

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>

        </article>
    )
}