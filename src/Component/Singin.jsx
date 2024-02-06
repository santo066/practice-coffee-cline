import { useContext } from "react";
import { AuthContex } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";

export default function Signin() {
    const { createUser } = useContext(AuthContex)
    const hendelsignin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                
                const creationat = result?.user?.metadata?.creationTime;

                const user = { email, creationat }
                fetch('https://practice-coffee-iqtpq7j0o-santos-projects-eeedc48b.vercel.app/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        form.reset()
                    })
            })
            .catch(error => {
                console.error(error)
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
                        <h1 className="text-5xl font-bold">Sign In now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={hendelsignin} className="card-body">
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