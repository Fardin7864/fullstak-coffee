import { useLoaderData } from "react-router-dom";
import Coffee from "../Coffee/Coffee";

const Coffees = () => {
    const coffees = useLoaderData();
    return (
        <div>
            <h3 className=" text-5xl font-semibold text-center">This is coffees</h3>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    coffees.map(coffee => 
                        <Coffee
                        key={coffee._id}
                        coffee={coffee}
                        ></Coffee>)
                }

            </div>
        </div>
    );
};

export default Coffees;