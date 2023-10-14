import Swal from 'sweetalert2'



const AddCoffee = () => {
     // handle submit
     const handleSubmit = (e) => { 
        e.preventDefault();
        const coffee = {name: e.target.name.value, price: e.target.price.value, test: e.target.test.value, photo: e.target.photo.value}
        fetch('http://localhost:5000/coffees',{
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(coffee)
        })
        .then(res => res.json())
        .then(data =>{
            if (data.acknowledged) {
                e.target.reset();
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee added successfully!',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                  })
            }
        })
      }
    return (
        <div className="border-2 border-red-300 flex justify-center">
            <form onSubmit={handleSubmit}>
                <div className=" flex gap-6">
                <div>
                    <input type="text" name="name" id="" className="border border-gray-400 text-lg py-2 px-2 mt-4 rounded-lg" placeholder="Name"/>
                </div>
                <div>
                    <input type="text" name="price" id="" className="border border-gray-400 text-lg py-2 px-2 mt-4 rounded-lg" placeholder="Price"/>
                </div>
                </div>
               <div className=" flex gap-6">
               <div>
                    <input type="text" name="test" id="" className="border border-gray-400 text-lg py-2 px-2 mt-4 rounded-lg" placeholder="Test"/>
                </div>
                <div>
                    <input type="text" name="photo" id="" className="border border-gray-400 text-lg py-2 px-2 mt-4 rounded-lg" placeholder="photo"/>
                </div>
               </div>
                <input type="submit" value="Add Coffee"  className="btn btn-primary my-3"/>
            </form>
        </div>
    );
};

export default AddCoffee;