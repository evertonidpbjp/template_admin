import styles from './users.module.css'
import Link from 'next/link'

export default function Users(){

   return (
    <div className={styles.users}>
        <h1>  Users </h1>
        <br />
        <Link href="/dashboard/products"> Ir para Products</Link>
    </div>
    
    
   )
}