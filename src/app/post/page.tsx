"use client";
import React, {FormEvent} from 'react';
import {FormInput} from "@/app/post/components/formInput";
import axios from "axios";
import {API_URL} from "../../../config/configuration";
import {Header} from "@/app/components/Header";
import {useRouter} from "next/navigation";

const Page = () => {

    const router = useRouter()

    const handleSubmit = (formEvent: FormEvent<HTMLFormElement>) => {
        formEvent.preventDefault();

        const formData: FormData = new FormData(formEvent.currentTarget);

        if (formData.get("title") === "") {
            window.alert("titulo está vazio, adicione um titulo")
        }
        else if (formData.get("image") === "") {
            window.alert("O link da imagem está vazia, adicione um link para a imagem")
        }
        else if (formData.get("date") === "") {
            window.alert("A data está vazia, por favor preencher ela")
        }
        else {
            const data = {
                title: formData.get("title"),
                date: formData.get("date"),
                imgURL: formData.get("image")
            }

            try {
                axios.post(API_URL + "/posts", data)
                router.push("/")
            } catch (error) {
                console.log(error)
            }
            console.log(data)
        }

    }

    return (
        <div>
            <Header/>
            <form onSubmit={handleSubmit}
                  className="flex p-12 border border-green-800 flex-col h-screen gap-10 items-center justify-center">
                <FormInput inputType="text" text="Título" elementName="title"/>
                <FormInput inputType="text" text="Link Imagem" elementName="image"/>
                <FormInput inputType="date" text="Link Imagem" elementName="date"/>
                <button type="submit" className="border-black border-2 bg-green-200 hover:bg-green-300 ">Enviar</button>
            </form>
        </div>

    );
};

export default Page;