import { ThumbsUp, TrashSimple } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';


export function Comment() {
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/diego3g.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Eduardo</strong>
                            <time title="10 de julho às 18:30" dateTime="2023-07-10 18:45:30">Cerca de 1h atrás</time>
                        </div>
                        <button title='Apagar Comentário'>
                            <TrashSimple size={24} />
                        </button>
                    </header>

                    <p>Muito Bom!!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}