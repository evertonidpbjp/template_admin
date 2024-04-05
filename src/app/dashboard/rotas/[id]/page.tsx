import { useRouter } from "next/navigation"

export default function Rotas ({params} : {params: {id: string} }){
  // const router = useRouter();
    
    return (
        <div>
            {params.id}

        </div>
    )
}