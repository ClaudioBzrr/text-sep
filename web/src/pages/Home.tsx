import { useState } from "react"
import { Button } from "../components/Button"
import { Input } from "../components/Input"


export function Home(){

    const [separator,setSeparator] =  useState<string>(",")
    const [range,setRange] =  useState<number>(10)
    const [result,setResult] =  useState<string>("")


    function copyToCliboard(){
        navigator.clipboard.writeText(result)
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

                <Input
                    className="w-[30vw] h-[40vh]"
                    onChange={e => handleInputChange(e.currentTarget.value)} 
                    type="text" 
                    placeholder="Coloque seu texto aqui"
                />
            </div>


            <div>
                <Button 
                    onClick={() => copyToCliboard()}
                    title="Copiar"
                />
                <Input 
                    className="w-[30vw] h-[40vh]"
                    value={result}
                    contentEditable={false}
                />

            </div>

        </div>
    )
}