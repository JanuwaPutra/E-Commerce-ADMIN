import { useEffect, useState } from "react"

export  const useOrigin = ()=>  {
    const [Mounted, setMounted] = useState(false)
    const origin = typeof window !== "undefined" && window.location.origin? window.location.origin : ''

    useEffect(()=>{
        setMounted(true)
    },[])

    if(!Mounted){
        return ''
    }

    return origin
}