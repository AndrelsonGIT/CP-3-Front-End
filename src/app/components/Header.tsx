import Link from "next/link";

export const Header =  ()=>{
    return(
        <header className="absolute top-0 z-10 bg-[#31D643] w-full h-16">
            <nav className="flex justify-between mx-20 h-full items-center text-white">
                <h1 className="justify-self-start text-black font-bold"><Link href="/">CHECKPOINT 03</Link></h1>
                <button className="w-32 bg-white text-black rounded-md h-9
                text-sm font-bold hover:bg-gray-100 shadow-2xl"><Link href="/post"> ADICIONAR POST</Link></button>

            </nav>
        </header>
    )
}