import { useState } from "react"

interface Props {
    setCurrentSection: Function
}

export function Navbar(props: Props) {
    const [dropDown, setDropDown] = useState(false)

    return (

        <nav className="bg-white border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-black rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
                        <li>
                            <button onClick={() => props.setCurrentSection('home')} className="block py-2 px-3 text-black" aria-current="page">Home</button>
                        </li>
                        <li>
                            <button onClick={() => props.setCurrentSection('contato')} className="block py-2 px-3 text-black" aria-current="page">Contato</button>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-black">Projetos</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-black">GitHub</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-black">Linkedin</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
