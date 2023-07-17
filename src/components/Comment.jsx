import { ThumbsUp, TrashSimple } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';


export function Comment({content, onDeleteComment}) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1);

    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/duds-la.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Eduardo</strong>
                            <time title="10 de julho às 18:30" dateTime="2023-07-10 18:45:30">Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Apagar Comentário'>
                            <TrashSimple size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}