import {useEffect, useState} from "react"

export const Profile = () => {
    const [user, setUser] = useState()
    const fetchUser = async () => {
        const res = await fetch("https://randomuser.me/api/")
        const newUser = await res.json()
        setUser(newUser.results[0])
    }
    useEffect(() => {
        fetchUser()
    }, [])

    if (!user) return null

    return (
        <div>
            <h1>Profile</h1>
            <p></p>
            <p>{user.name.first} {user.name.last}</p>
        </div>
    )
}
