import {ObjectPost} from "@/app/post/type/PostType";
import {FormInput} from "@/app/post/components/formInput";
import {FormEvent, useState} from "react";
import axios from "axios";
import {API_URL} from "../../../../config/configuration";

interface PostEditProps{
    objectPostValue: ObjectPost;
}

export const PostEdit: React.FC<PostEditProps> = ({objectPostValue})=>{

    const handleSubmit = async (formEvent: FormEvent<HTMLFormElement>)=>{
        formEvent.preventDefault()
        const formData: FormData = new FormData(formEvent.currentTarget);

        const updatedTitle: string = formData.get("editTitle")?.toString() || objectPostValue.title
        const updatedImgURL: string = formData.get("editImgURL")?.toString() || objectPostValue.imgURL
        const updatedDate: string = formData.get("editDate")?.toString() || objectPostValue.date

        const dataRequest = {
            title: updatedTitle,
            imgURL: updatedImgURL,
            date: updatedDate
        }

        const url = `${API_URL}/posts/${objectPostValue.id}`

        try{
            await axios.patch(url, dataRequest)
            window.location.reload()
        }
        catch(error){
            console.log(error)
            window.alert("Não foi possivel efetuar a atualização")
        }

    }

    return(
        <main className="p-3 mx-2">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 items-center">
                <FormInput inputType="text" elementName="editTitle" text="Novo nome"/>
                <FormInput inputType="text" elementName="editImgURL" text="Novo link imagem"/>
                <FormInput inputType="date" elementName="editDate" text="Nova data"/>
                <button type="submit" className="p-1 bg-green-500 border border-black w-1/2 hover:bg-green-600">Enviar alterações</button>
            </form>
        </main>
    )
}

