import { Header } from "./components/Header";
import {Post} from "./components/Post";
import { Sidebar } from "./components/Sidebar";


import styles from "./App.module.css";

import './global.css';

const posts = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/duds-la.png',
      name:'Eduardo Lazzaretti',
      role: 'Desenvolvedor'
    },
    content:[
      {type: 'paragraph', content:'Fala galeraa 👋',},

      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return,' },
      {type: 'paragraph', content:'evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},

      {type: 'link', content:'jane.design/doctorcare'},

    ],
    publishedAt: new Date('2023-07-12 18:30:30'),
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/maikbrito.png',
      name:'Mayk Brito',
      role: 'Desenvolvedor'
    },
    content:[
      {type: 'paragraph', content:'Fala galeraa 👋',},

      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return,' },
      {type: 'paragraph', content:'evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},

      {type: 'link', content:'jane.design/doctorcare'},

    ],
    publishedAt: new Date('2023-07-10 18:30:30'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
          <Sidebar />
          <main>
            {posts.map(post =>{
              return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />)
            })}
          </main>
      </div>
    </div>
  )
}

export default App
