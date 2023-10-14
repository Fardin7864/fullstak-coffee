import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const loaderCoffee = useLoaderData();
    const navigate = useNavigate();
    const handleSubmit = (e) => { 
        e.preventDefault();
        const coffee = {name: e.target.name.value, price: e.target.price.value, test: e.target.test.value, photo: e.target.photo.value}

        fetch(`http://localhost:5000/coffees/${loaderCoffee._id}`,{
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffee)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                Swal.fire('Updated', 'Updated successfully', 'success')
                navigate(-1)
            }
        })
    }
    return (
        <div>
            <h3 className=" text-4xl font-semibold text-center">Update : {loaderCoffee.name}</h3>
            <div className=" flex justify-center items-center">
            <form onSubmit={handleSubmit}>
                <div className=" flex gap-6">
                <div>
                    <input type="text" name="name" defaultValue={loaderCoffee.name} className="border border-gray-400 text-lg py-2 px-2 mt-4 rounded-lg" placeholder="Name"/>
                </div>
                <div>
                    <input type="text" name="price" defaultValue={loaderCoffee.price} className="border border-gray-400 text-lg py-2 px-2 mt-4 rounded-lg" placeholder="Price"/>
                </div>
                </div>
               <div className=" flex gap-6">
               <div>
                    <input type="text" name="test" defaultValue={loaderCoffee.test} className="border border-gray-400 text-lg py-2 px-2 mt-4 rounded-lg" placeholder="Test"/>
                </div>
                <div>
                    <input type="text" name="photo" defaultValue={loaderCoffee.photo} className="border border-gray-400 text-lg py-2 px-2 mt-4 rounded-lg" placeholder="photo"/>
                </div>
               </div>
                <input type="submit" value="Add Coffee"  className="btn btn-primary my-3"/>
            </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;