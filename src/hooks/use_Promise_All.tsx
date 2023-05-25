import React, {useState} from 'react'

export const use_Promise_All = () => {
    const [is_fetching, setis_fetching] = useState(false)  
    const [error_fetch, seterror_fetch] = useState<string | null >(null)  
    const get_Fetch = async (promesas:Promise<any>[],call_ok? : ()=> void , call_error? :()=>void)=>{
        seterror_fetch(null)
        try {
            setis_fetching(true)
            await Promise.all(promesas)
            setis_fetching(false)
            if (call_ok) {
                call_ok()
            }
        } catch (error) {
            console.log("error Promise All")
            console.log(error)
            seterror_fetch("error fetch data")
            setis_fetching(false)
            if (call_error) {
                call_error()
            }
        }
        
    }
    
    return {
        get_Fetch, is_fetching
    }
}
