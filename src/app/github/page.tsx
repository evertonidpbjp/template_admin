import Cabecalho from "./Cabecalho/index";
import RepositoryCard from "./RepositoryCard";
import UserProfile from "./UserProfile";
import React from "react";
import styles from "./global.module.css"
import Botao from "./Botao/botao"

export default function Github() {

    return (

        <React.Fragment>

     <Cabecalho />
     <div className={styles.container}> 
            <div className={styles.profile}>  
             <UserProfile />

            </div>

          
             
            <div className={styles.coluna2}>
               <ul>  
                  <li className={styles.linha}> <RepositoryCard />    </li>     
                  <li className={styles.linha}> <RepositoryCard />    </li>    
                  <li className={styles.linha}> <RepositoryCard />    </li>    
               </ul>
            </div>

            <div className={styles.coluna}>
            <ul>   
                  <li className={`${styles.linha} ${styles.button}`}>    <Botao />          </li>
                  <li className={styles.linha}> <RepositoryCard />    </li>     
                  <li className={styles.linha}> <RepositoryCard />    </li>    
                  <li className={styles.linha}> <RepositoryCard />    </li>    
               </ul>
            </div> 
                '   
      
            <div>

           </div>
             <div>        '


            </div>
        </div>
    
        </React.Fragment>

    );
}



