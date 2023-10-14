import { useLoaderData } from "react-router-dom";
import CoffeeList from "./CoffeeList";
import Swal from "sweetalert2";
import { useState } from "react";


const CoffeeEdit = () => {
    const loaderCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loaderCoffees);

    const deleteCoffee = (id) => { 

        Swal.fire({
            title: 'Are you sure?',
            text: 'This action cannot be undone.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, proceed',
            cancelButtonText: 'No, cancel',
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffees/${id}`,{
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                            // The user clicked the "Confirm" button
                            Swal.fire('Successfully', 'Coffee is Deleted.', 'success');
                        setCoffees(coffees.filter(coffee => coffee._id !== id))
                    }
                })              
              // Add your code to execute when confirmed
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              // The user clicked the "Cancel" button or closed the modal
              Swal.fire('Cancelled', 'The action was cancelled.', 'error');
              // Add your code to execute when canceled
            }
          });    
     }


    return (
        <div>
        <h3 className=" text-5xl font-semibold text-center">This is coffees</h3>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
            {
                coffees.map(coffee => 
                    <CoffeeList
                    key={coffee._id}
                    coffee={coffee}
                    deleteCoffee ={deleteCoffee}
                    ></CoffeeList>)
            }

        </div>
    </div>
    );
};

export default CoffeeEdit;