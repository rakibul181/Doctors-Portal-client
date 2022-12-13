import { useEffect, useState } from "react"

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false)
    const [isAdminLoading, setIsAdminLoading] = useState(true)   
    useEffect(() => {
        if (email) {
            fetch(`https://doctor-portal-server-sigma.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsAdmin(data.isAdmin)
                       (false)
                })
        }
    }, [email])

    return [isAdmin, isAdminLoading]
}

export default useAdmin