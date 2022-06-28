import { ArrowCircleRight } from "phosphor-react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
    const { slug } = useParams<{ slug:string }>()

    return(
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                { slug 
                ? <Video lessonSlug={slug} />
                : (
                    <div className='flex-1 pt-[40vh] text-gray-100 text-xl'>
                        <span className='flex flex-row items-center justify-center gap-2'>
                        Clique em uma aula para começar
                        <ArrowCircleRight size={24} weight="light" className='animate-pulse text-green-400' />
                        </span>
                    </div>
                )}
                <Sidebar />
            </main>
        </div>
    )
}