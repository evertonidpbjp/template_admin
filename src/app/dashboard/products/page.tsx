import Link from "next/link"
import styles from "./products.module.css";

export default function Products (){

    return (
        <div className={styles.products}>
            <h1> Products </h1>
            <Link href="/dashboard/"> Voltar para Home</Link>
        </div>
    )
}