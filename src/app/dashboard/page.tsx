"use client";
import { useRouter } from "next/navigation"


export default function Dashoard (){
  const router = useRouter()

  function irParaUsers(){
     router.push("/dashboard/users")
  }
    return (
      <>
             <h1> Dashboard </h1>
             <button onClick={irParaUsers}> Ir para users </button>
      </>
      
       
    )
}