import {ButtonHTMLAttributes} from 'react'


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    title:string
    icon?:SVGAElement
}

export function Button({title,...rest}:ButtonProps){
    return(
        <button
            type='button'
            className='p-2 bg-slate-500 rounded-lg text-slate-900 font-semibold hover:bg-slate-200'
            {...rest}
        >
            {title}
        </button>
    )
}