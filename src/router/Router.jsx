import AddCoffee from "../admin/Pages/AddCoffee";
import { createBrowserRouter } from "react-router-dom";
import Coffees from "../components/Coffees/Coffees";
import Root from "../Root"
import CoffeeEdit from "../admin/Pages/CoffeeEdit";


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
            }

        ]
    }
])

export default router;