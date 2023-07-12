import { Header } from "./components/Header";
import {Post} from "./components/Post";
import { Sidebar } from "./components/Sidebar";


import styles from "./App.module.css";

import './global.css';



export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
          <Sidebar />
          <main>
            <Post
              author="tigas"
              content="loren"
            />

            <Post
              author="tigas"
              content="loren"
            />
          </main>
      </div>
    </div>
  )
}

export default App
