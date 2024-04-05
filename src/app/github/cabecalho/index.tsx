import logo from '../../assets/logo.png'
import Image from 'next/image'
import styles from "./cabecalho.module.css"

export default function Header (){
  return (

   <header className={styles.header}>
    <Image src={logo} height={48} width={50} alt="logo" /> 
  </header>

  )
 
    
}