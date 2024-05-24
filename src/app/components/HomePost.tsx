import {ObjectPost} from "@/app/post/type/PostType";
import Image from "next/image";
interface HomePostProps{
    objectPost: ObjectPost;
}

export const HomePost: React.FC<HomePostProps> = ({objectPost})=>{
    const loader = ()=>{
        return objectPost.imgURL
    }
    return(
        <div className="" key={objectPost.id}>
            <div className="flex flex-col items-center w-96">
                <h2 className="text-xl text-center">{objectPost.title}</h2>
                <p className="text-lg">{objectPost.date}</p>
                <Image
                    loader={loader}
                    src={objectPost.imgURL}
                    width="600"
                    height="50"
                    alt="image"
                    className="w-64"/>
                <div className="flex justify-evenly w-full mt-5">
                    <button className="bg-yellow-200 p-1 w-20 rounded-md border-black border hover:bg-yellow-300">EDITAR</button>
                    <button className="bg-red-400 p-1 w-20 rounded-md border-black border hover:bg-red-500 ">APAGAR</button>
                </div>
            </div>

        </div>
    )
}