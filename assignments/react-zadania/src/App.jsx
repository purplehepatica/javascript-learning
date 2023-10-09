import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Card from "./part-1/task-1/Card.jsx";
import Cards from "./part-1/task-2/Cards.jsx";

import Grid from "./part-1/task-3/Grid.jsx";

import Nav from "./part-1/task-4/Nav.jsx";

import Footer from "./part-1/task-5/Footer.jsx";

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

const footer = {
    company: {
        addressLine1: "Brzozowa 23",
        addressLine2: "Katowice 40-000",
        phone: "+48123456977",
        mail: "mail@example.com",
        name: "ABGF Sp. z o. o.",
        logo: "link-to-image"
    },
    socials: {
        fb: "facebook.com",
        instagram: "instagram.com",
        twitter: "twitter.com"
    },
    links: {
        help: "/help",
        pay: "/pay",
        agreement: '/agreement',
        dashboard: '/dashboard',
        reading: '/reading',
        reports: '/reports',
    }
};

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
                        <li>
                            <Link to="/part-1/task-5/">Zadanie 1-5</Link>
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

                    <Route path="/part-1/task-5" element={
                        <Footer
                            footer={footer}
                        />
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
