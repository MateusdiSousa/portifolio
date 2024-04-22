export function AboutMe() {
    return (
        <div className="flex flex items-center h-full mt-64 mb-40">

            {/* lado esquerdo */}
            <div className="xl:py-4  max-w-3xl ">
                <h2 className="text-white text-left text-7xl pb-10">Sobre Mim</h2>

                <p className="text-3xl font-sans font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita suscipit est optio voluptate totam, nulla rem quisquam? Aliquam necessitatibus id dicta incidunt ratione fugit maxime labore quos, deleniti atque nisi.
                </p>

            </div>

            {/* linha */}
            <div className="mx-40 h-96 border-4  border-line-color mx-4"></div>

            {/* lado direito */}

            <div className=" flex justify-center bg-line-color rounded-full" >
                <img src="public/picrewme.png" alt="" className="border-8 border-line-color rounded-full w-24 h-12 sm:w-32 sm:h-32 md:w-32 md:h-32 lg:w-96 lg:h-96" />
            </div>
        </div>
    )
}