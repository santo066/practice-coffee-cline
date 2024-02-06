import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../Provider/AuthProvider";

export default function Login() {
    const { login } = useContext(AuthContex)
    const hrndellogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        login(email, password)
           .then(result=>{
            console.log(result.user)
            const user={
                email,
                lastlogin:result.user?.metadata?.lastSignInTime,
            }
            //update
            fetch('https://practice-coffee-iqtpq7j0o-santos-projects-eeedc48b.vercel.app/users',{
                method:"PATCH",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
            })
           })
           .catch(error=>{
            console.log(error)
           })
    }
    return (
        <div>
            <div className='flex text-red-400 gap-6'>
                <Link to={'/addcoffee'}>Add Coffee</Link>
                <Link to={'/'}>home</Link>
                <Link to={'/signin'}>signin</Link>
                <Link to={'/login'}>Login</Link>
            </div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">log In now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={hrndellogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign IN</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}