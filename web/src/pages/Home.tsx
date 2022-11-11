import { useState } from "react"
import {RightFloatButton } from "../components/RightFloatButton"
import {Textarea } from "../components/Textarea"


export function Home(){

    const [separator,setSeparator] =  useState<string>(",")
    const [range,setRange] =  useState<number>(10)
    const [result,setResult] =  useState<string>("")
    const[copied,setCopied] =  useState<boolean>(false)


    function copyToCliboard(){
        navigator.clipboard.writeText(result)
        setCopied(true)
        setTimeout(() => setCopied(false),2000)
    }


    function applySeparatorRules(text:string):string{
        const text_raw =  text.replaceAll(" ","")
        const applyRange =  new RegExp(`.{1,${range}}`,'g')
        const parts:RegExpMatchArray| null = text_raw.match(applyRange)
        if(parts){
            const result_filtered = parts.filter((item, index) => parts.indexOf(item) === index)
            const result:string = result_filtered.join(`${separator}`)

            return result
        }else{
            throw new Error("Tamanho do texto menor que o intervalo especificado")
        }
    }

    function handleInputChange(words:string){
        if(words.length >0){

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

                <Textarea
                    className="w-[30vw] h-[40vh]"
                    onChange={e => handleInputChange(e.currentTarget.value)} 
                    type="text" 
                    placeholder="Coloque seu texto aqui"
                />
            </div>


            <div className="relative">
                <Textarea
                    readOnly
                    className="w-[30vw] h-[40vh] box-border"
                    value={result}
                    contentEditable={false}
                    />
                    
                    {
                        result != '' ?(
                            <RightFloatButton
                                disabled = {copied ==true} 
                                onClick={() => copyToCliboard()}
                                title={copied==true ? "Copiado!":"Copiar"}
                            />
                    
                        ) : null
                    }

            </div>

        </div>
    )
}