import { useContext } from "react"

export const useToDos = () => {

    const contexto = useContext(todoContext)

    return contexto;
}