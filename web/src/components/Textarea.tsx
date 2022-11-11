import { InputHTMLAttributes } from "react"


export function Textarea({...rest}:InputHTMLAttributes<HTMLTextAreaElement>){
    return(
        
        <textarea
            {...rest}
            className="p-4 bg-[#41414D] rounded-lg w-[30vw] h-[40vh] font-semibold text-lg text-[#fff]"
        />
    )
}