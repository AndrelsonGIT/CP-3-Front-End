"use client";
import axios, {AxiosResponse} from "axios";
import {API_URL} from "../../config/configuration";
import {ObjectPost} from "@/app/post/type/PostType";
import {useEffect, useState} from "react";
import {HomePost} from "@/app/components/HomePost";

import {Header} from "@/app/components/Header";
export default function Home() {
  const [posts, setPosts] = useState<ObjectPost[]>([])

  useEffect(() => {
    getItems()
  }, []);
  const getItems = async ()=>{
    try{
      const response: AxiosResponse<ObjectPost[]> = await axios.get(API_URL + "/posts")
      setPosts(response.data)
    }
    catch(error){
      window.alert("Não foi possivel pegar os dados.")
    }

    const dataTest = {

    }
  }

  return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-20 p-24">
        <Header/>
        {!posts ? (
            <div className="mx-auto">
              <h2>Carregando os dados</h2>
            </div>
        ) : posts.map((post)=>(
            <div key={post.id}>
              <HomePost objectPost={post}/>
            </div>
        ))}


      </main>
  );
}
