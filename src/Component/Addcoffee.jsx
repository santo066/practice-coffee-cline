import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Addcoffee() {
    const hendeladdcoffee=(even)=>{
        even.preventDefault()
        const form=even.target;
        const name=form.name.value;
        const price=form.price.value;
        const details=form.details.value;
        const categary=form.categary.value;
        const photo=form.photo.value;
        const newcoffee={name,price,details,categary,photo}
        console.log(newcoffee)

        fetch('http://localhost:5000/coffees',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newcoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            Swal.fire({
                title: "success!",
                text: "Your file has been deleted.",
                icon: "success"
              });
        })
    }
    return (
        <div className="m-12 grid  justify-center">
            <Link to={'/'}>home</Link>
            <form onSubmit={hendeladdcoffee} >
                <div className="flex mb-8 gap-6">
                    <input type="text" className="bg-slate-300  w-[400px] h-8" name="name" placeholder="name" id="" />
                    <input type="text" name="price" className="bg-slate-300 w-[400px] h-8" placeholder="price" id="" />
                </div>
                <div className="flex mb-8 gap-6">
                    <input type="text" className="bg-slate-300  w-[400px] h-8" name="details" placeholder="details" id="" />
                    <input type="text" name="categary" className="bg-slate-300 w-[400px] h-8" placeholder="categary" id="" />
                </div>
                <input type="text" name="photo" className="bg-slate-300 w-full h-8 mb-6 " placeholder="photo url" id="" />
                <input type="submit" value="Add Coffee" className="bg-slate-500 h-11 w-40 rounded-full "  />
            </form>
        </div>
    )
}