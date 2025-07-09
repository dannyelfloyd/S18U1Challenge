/*import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
            </Router>
        </>
    )
}
export default App;*/

import { RouterProvider } from 'react-router-dom'
import router from './router'

function App(){
    return <RouterProvider router={router} />
};

export default App;