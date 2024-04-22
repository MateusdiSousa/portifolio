import { useState } from "react"

export function ProjLIst() {
    const flask = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"
    const html = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
    const css = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
    const sqlalchemy = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original-wordmark.svg"


    interface Projeto {
        nome: string
        desc: string
        tecnologias: string[]
        img : string
    }


    const [projeto, setProjeto] = useState<Projeto>(
        {
            nome: 'S.O.S API', desc: `Service Out System SOS

        É um sistema de ordem de serviços com o objetivo principal de informar computadores com mau funcionamento dentro do campus FATEC prof. Jessen Vidal e também navegar de forma dinâmica pelo mapa da FATEC.`, tecnologias: [flask, html, css, sqlalchemy]
        , img: `public/sosapi.png`}
    )


    return (
        <>
            <h2 className="text-white text-6xl text-center font-sans p-10 mb-20 bg-line-color">Projetos</h2>
            {/* lado esquerdo */}
            <div className="flex flex items-center">
                <div className="xl:py-4  max-w-3xl">
                    <div className="xl:py-4  max-w-3xl">
                        <h2 className="text-white text-left text-5xl pb-10">{projeto.nome}</h2>

                        <p className="text-xl font-sans font-medium">
                            {projeto.desc}
                        </p>

                    </div>

                    <div className="xl:py-4  max-w-3xl">
                        <h2 className="text-white text-left text-5xl pb-10">Tecnologias</h2>

                        <div className="flex flex items-center">
                            {projeto.tecnologias.map((url) =>
                                <img className="w-20 mx-2" src={url} alt="" />
                            )}
                        </div>

                    </div>
                </div>

                {/* linha */}
                <div className=" h-96 border-4  border-line-color mx-40"></div>

                
            <div className="items-center justify-center" >
                <img src="public/sosapi.png" alt="" className="mb-8 " />
                <button></button>
            </div>
            </div>
        </>

    )
}