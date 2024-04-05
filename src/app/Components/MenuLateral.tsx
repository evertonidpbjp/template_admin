import MenuItem from "./MenuItem";
import { IconeAjustes, IconeCasa, IconeNotificacoes } from "./Icons/icones";

export default function MenuLateral(){
  return (
    <aside>
        <ul>
              <MenuItem  url="/home" texto="Início" icone={IconeCasa}/>  
              <MenuItem  url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
              <MenuItem  url="/notificacoes" texto="Notificações" icone={IconeNotificacoes} /> 
        </ul>
    </aside>
  )
}