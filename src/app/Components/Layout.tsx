import Cabecalho from "./Cabecalho"
import Conteudo from "./Conteudo"
import MenuLateral from "./MenuLateral"

interface LayoutProps {
    titulo: string
    subtitulo: string
    children?: any
}

export default function Layout (props: LayoutProps){
  return (
    <div className={`flex h-screen w-screen`}>
         <MenuLateral />
     
      <div className={`flex flex-col bg-gray-300 w-screen dark:bg-black`}>
        <Cabecalho  titulo={props.titulo} subtitulo={props.subtitulo}/>
        <Conteudo>
            <h3> Conteúdo</h3>
        </Conteudo>
      </div>
      

    </div>
  )
}