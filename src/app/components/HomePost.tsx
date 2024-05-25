import { ObjectPost } from "@/app/post/type/PostType";
import Image from "next/image";
import { useState } from "react";
import { PostEdit } from "@/app/post/edit/PostEdit";
import axios from "axios";
import {API_URL} from "../../../config/configuration";

interface HomePostProps {
    objectPost: ObjectPost;
}

export const HomePost: React.FC<HomePostProps> = ({ objectPost }) => {
    const [editPostIsActive, setEditPostIsActive] = useState<boolean>(false);

    const loader = () => {
        return objectPost.imgURL;
    };

    const deleteItem = ()=>{
        const url: string = `${API_URL}/posts/${objectPost.id}`;
        axios.delete(url).then(()=> window.location.reload())
    }

    return (
        <div>
            {editPostIsActive ? (
                <PostEdit objectPostValue={objectPost} />
            ) : (
                <div className="" key={objectPost.id}>
                    <div className="flex flex-col items-center w-96">
                        <h2 className="text-xl text-center">{objectPost.title}</h2>
                        <p className="text-lg">{objectPost.date}</p>
                        <Image
                            loader={loader}
                            src={objectPost.imgURL}
                            width={600}
                            height={400}
                            alt="image"
                            className="w-60 h-36"
                        />
                        <div className="flex justify-evenly w-full mt-5">
                            <button
                                className="bg-yellow-200 p-1 w-20 rounded-md border-black border hover:bg-yellow-300"
                                onClick={() => setEditPostIsActive(true)}
                            >
                                EDITAR
                            </button>
                            <button
                                className="bg-red-400 p-1 w-20 rounded-md border-black border hover:bg-red-500"
                                onClick={deleteItem}
                            >
                                APAGAR
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
