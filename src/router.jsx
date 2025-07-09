import { createBrowserRouter } from "react-router-dom";

import Error from "./pages/Error";
import Template from "./layouts/Template";

import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';


const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <Error />,
        element: <Template />,
        children: [
            { index: true, element: <Home /> },
            { path: 'projects', element: <Projects /> },
            { path: 'resume', element: <Resume /> },
        ]
    }
])

export default router;