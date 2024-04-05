"use client";
import { setCookie } from "cookies-next"
import { useRouter } from "next/navigation";
import { useEffect } from "react"


export default function Cookie (){

// tudo q se coloca dentro do useEffect é executado na inicialização
// e toda vez q o conteúdo da variável entre colchetes for modificada, o useEffect volta a ser executado
useEffect(() =>{
    setCookie("token", "conteúdo do cookie gerado")
  
}, [])



    return (
        <h1> Gerador de cookie</h1>
    )
}