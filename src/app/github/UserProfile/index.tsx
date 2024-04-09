import ProfileImage from '../../assets/profile_image.png';
import Image from 'next/image';
import styles from './userProfile.module.scss';

export default function UserProfile(){
   return (
     <div className={styles.container}>
        <div className={styles['container-avatar']}>
            <Image src={ProfileImage} alt="avatar" width="249"  height="249" /> 
            <div className={styles.meu_perfil}> Meu perfil </div>
        </div>

        <h1> Mike Mayers</h1>
        {/* <span> mikemayers@gmail.com</span>
        <p>
            Developer: Android, VueJs, Quasar Framework, React JS, NodeJs, Javascript, PHP, Bootstrap, HTML5 e CSS3.
        </p>

        <div className={styles['items-container']}>
            <span> @DEV2DEV</span>
            <span> Presidente Prudente </span>
            <span> mikemayers@gmail.com</span>
            <span> https://carreirafullstack.com.br </span>

        </div> */}
     </div>

   );
}