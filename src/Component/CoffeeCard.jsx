import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "../../src/app.css"

export default function CoffeeCard({ coffee,coffees,setcoffees }) {
    const { name, price, details, categary, photo,_id } = coffee

    const hendeldelete=(_id)=>{
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
            fetch(`https://practice-coffee-iqtpq7j0o-santos-projects-eeedc48b.vercel.app/coffees/${_id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)

                Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                      const reamainingcoffee= coffees.filter(coffee=>coffee._id !== _id)
                      setcoffees(reamainingcoffee)
            })
            }
          });
    }

    return (
        <div className=" w-96  bg-base-100 hover:shadow-2xl">
            <figure><img src={photo} alt="Shoes" className="w-full border1 h-[300px]" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <div className="card-actions ">
                    <button onClick={()=>hendeldelete(_id)} className="btn btn-error">delete</button>
                   <Link to={`/update/${_id}`}> <button className="btn btn-success">Update</button></Link>
                    <button className="btn btn-primary">details</button>
                </div>
            </div>
        </div>
    )
}