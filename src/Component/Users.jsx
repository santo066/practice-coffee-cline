import { useState } from "react"
import { useLoaderData } from "react-router-dom"

export default function Users() {
    const loadeduser = useLoaderData()
    const [users, setusers] = useState(loadeduser)
    const hendeldelete = id => {
        fetch(`https://practice-coffee-iqtpq7j0o-santos-projects-eeedc48b.vercel.app/users/${id}`,{
            method:'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount>0)
            {
                alert('deleted successfully')
                const remaininguser=users.filter(user=>user._id !== id)
                setusers(remaininguser)
            }
        })
    }
    return (
        <div>
            <h2>users: {loadeduser.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Creation At</th>
                            <th>Last Login</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user => <tr key={user._id}>
                                <th>1</th>
                                <td>{user.email}</td>
                                <td>{user.creationat}</td>
                                <td>{user.lastlogin}</td>
                                <td>
                                    <button onClick={() => hendeldelete(user._id)} className="btn">X</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}