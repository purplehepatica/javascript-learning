import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Card from "./part-1/task-1/Card.jsx";
import Cards from "./part-1/task-2/Cards.jsx";

import Grid from "./part-1/task-3/Grid.jsx";

import Nav from "./part-1/task-4/Nav.jsx";

const data2 = [
    {
        name: "Alfred",
        surname: "Bogucki",
        avatar:
            "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        background:
            "https://images.unsplash.com/photo-1544200175-ca6e80a7b323?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1281&q=80",
        bronze: 1,
        silver: 3,
        gold: 1,
    },
    {
        name: "Andrzej",
        surname: "Mikucki",
        avatar:
            "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        background:
            "https://images.unsplash.com/photo-1544200175-ca6e80a7b323?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1281&q=80",
        bronze: 1,
        silver: 8,
        gold: 0,
    },
];

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/part-1/task-1/">Zadanie 1-1</Link>
                        </li>
                        <li>
                            <Link to="/part-1/task-2/">Zadanie 1-2</Link>
                        </li>
                        <li>
                            <Link to="/part-1/task-3/">Zadanie 1-3</Link>
                        </li>
                        <li>
                            <Link to="/part-1/task-4/">Zadanie 1-4</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/part-1/task-1" element={
                        <Card
                            name={"Janusz"}
                            surname={"Pieprz"}
                            medals={["1", "3", "9"]}
                        />
                    }/>

                    <Route path="/part-1/task-2" element={
                        data2.map(item => {
                            const { name, surname, avatar, background, bronze, silver, gold } = item;

                            return (
                                <Cards
                                    name={name}
                                    surname={surname}
                                    avatar={avatar}
                                    background={background}
                                    bronze={bronze}
                                    silver={silver}
                                    gold={gold}
                                />
                            )
                        })
                    }/>

                    <Route path="/part-1/task-3" element={
                        <Grid />
                    }/>

                    <Route path="/part-1/task-4" element={
                        <Nav />
                    }/>
                </Routes>
            </div>
        </Router>
    );
}

Cards.defaultProps = {
    name: "Name",
    surname: "Surname",
    avatar: "https://www.theventuretours.com/wp-content/uploads/2020/03/avatar-icon-png-1.png",
    background: "",
    bronze: 0,
    silver: 0,
    gold: 0

}
export default App
