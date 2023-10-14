import AddCoffee from "../admin/Pages/AddCoffee";
import { createBrowserRouter } from "react-router-dom";
import Coffees from "../components/Coffees/Coffees";
import Root from "../Root"
import CoffeeEdit from "../admin/Pages/CoffeeEdit";
import UpdateCoffee from "../admin/components/UpdateCoffee";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/coffees',
                element: <Coffees></Coffees>,
                loader: () => fetch('http://localhost:5000/coffees')
            },
            {
                path: '/admin/add/coffee',
                element: <AddCoffee></AddCoffee>,
                
            },
            {
                path: '/admin/coffees',
                element:<CoffeeEdit></CoffeeEdit>,
                loader: () => fetch('http://localhost:5000/coffees')
            },
            {
                path: '/admin/update/:id',
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)
            }

        ]
    }
])

export default router;