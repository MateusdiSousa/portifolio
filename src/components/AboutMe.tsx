export function AboutMe() {
    return (
        <div className="flex items-center justify-center h-full mt-40 sm:mt-44 md:mt-56 lg:mt-64 mb-40">
            
            {/* Lado esquerdo */}
            <div className="max-h-96 w-5/6 sm:w-96 md:w-1/2 lg:w-2/3 text-left">
                <h2 className="text-3xl sm:text-5xl pb-2 md:text-6xl lg:text-7xl text-font-bold text-white pb-10">Sobre Mim</h2>
                <p className="sm:text-xl md:text-2xl lg:text-3xl font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita suscipit est optio voluptate totam, nulla rem quisquam? Aliquam necessitatibus id dicta incidunt ratione fugit maxime labore quos, deleniti atque nisi.
                </p>
            </div>

            {/* Linha */}
            <div className="mx-2 sm:mx-2  md:mx-2 lg:mx-3 h-96 xl:mx-8"></div>

            {/* Lado direito */}
            <div className="flex items-center justify-center bg-main-color border-l-4 border-second-color p-10 sm:w-72 md:w-80 lg:w-96">
                <img src="public/picrewme.png" alt="" className=" border-second-color border-8 rounded-full " />
            </div>
        </div>
    )
}