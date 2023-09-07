import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Card from "./part-1/task-1/Card.jsx";

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="./part-1/task-1/">Zadanie 1-1</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="./part-1/task-1" element={
                        <Card
                            name={"Janusz"}
                            surname={"Pieprz"}
                            medals={["1", "3", "9"]}
                        />
                    }/>
                </Routes>
            </div>
        </Router>
    );
}

export default App
