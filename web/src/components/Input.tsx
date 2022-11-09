import { InputHTMLAttributes } from "react"


export function Input({...rest}:InputHTMLAttributes<HTMLInputElement>){
    return(
        <input
            {...rest}
            className="text-center bg-[#41414D] rounded-lg w-[30vw] h-[40vh] font-semibold text-lg text-[#fff]"
        />
    )
}