import useTasks from '@/hooks/useTasks'
import styles from './page.module.css'
import { useContext } from 'react'

export default function Home() {
  const task = useTasks(<></>,{name:'',description:'',done:true})
  return (
    <main className={styles.main}>
      
    </main>
  )
}
