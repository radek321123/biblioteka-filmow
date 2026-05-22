"use client"


import {useRouter} from "next/navigation";

export default function NotFound({ params }) {

    const router  = useRouter()

    function goBack(){
        router.back()
    }

    return (
        <>
            <p>Not found page not-found.jsx</p>
            <button onClick={goBack}>go back</button>
        </>
    )
}

