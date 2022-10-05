import { Home } from "./pages/Home"


export const routes = [
    {
        path:'/home',
        element:<Home/>
    },
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'*',
        element:<Home/>
    }
]