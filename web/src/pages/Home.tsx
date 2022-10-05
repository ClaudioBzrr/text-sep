import { useState } from "react"


export function Home(){

    const [separator,setSeparator] =  useState<string>(",")
    const [text,setText] =  useState<string>("")
    const [range,setRange] =  useState<number>(10)
    const [result,setResult] =  useState<string>("")


    function applySeparatorRules(text:string):string{
        const applyRange =  new RegExp(`.{1,${range}}`,'g')
        const parts:RegExpMatchArray| null = text.match(applyRange)
        if(parts){
            const result:string = parts.join(`${separator}`)

            return result
        }else{
            throw new Error("Tamanho do texto menor que o intervalo especificado")
        }
    }

    function handleInputChange(words:string){
        if(words.length >0){

            setText(words)
            try{
                setResult(applySeparatorRules(words))
            }catch(err){
                alert(err)
            }
        }else{
            setResult("")
        }
    }


    return(
        <div className="w-screen h-screen flex flex-row items-center justify-around bg-[#191622]">

            <div>
                <input
                    onChange={e => handleInputChange(e.currentTarget.value)} 
                    type="text" 
                    placeholder="Coloque seu texto aqui" 
                    className="text-center bg-[#41414D] rounded-lg w-[30vw] h-[40vh] font-semibold text-lg text-[#fff]"
                />

            </div>

            <div className="text-center bg-[#41414D] rounded-lg w-[30vw] h-[40vh]">
                {
                    result
                }
            </div>

        </div>
    )
}