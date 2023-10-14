import { Link, useNavigate } from "react-router-dom";

const CoffeeList = ({coffee, deleteCoffee}) => {
    const {_id, name, price, test, photo } = coffee || {};
    const navigate = useNavigate();

    const handleDelete = id =>{
        deleteCoffee(id);
    }

    return (
        <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={photo}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <div className=" flex justify-between w-full">
          <p>Test: {test}</p>
          <p>Price: ${price}</p>
          </div>
          <div className=" flex justify-between w-full px-28">
            <button onClick={() => handleDelete(_id)} className=" btn btn-primary">Delete</button>
            <Link to={`/admin/update/${_id}`} className=" btn btn-primary">Update</Link>
          </div>
        </div>
      </div>
    );
};

export default CoffeeList;