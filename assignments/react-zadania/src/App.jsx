import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

/** PART 1 **/
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


/** PART 2 **/
import ShowDataElement from './part-2/task-1/ShowDataElement.jsx';

import FetchData from "./part-2/task-2/FetchData.jsx";
const postsURL = 'https://jsonplaceholder.typicode.com/posts';


const initialData = {
    human: {
        sex: "man",
        surname: "Detic",
    },
    accountBalance: 1000,
};

import Table from './part-2/task-3/Table.jsx';

const data = [
    {
        "id": 2,
        "name": "Nowa Osoba 2",
        "username": "Nowy Użytkownik 2",
        "email": "nowy@osoba2.com",
        "address": {
            "street": "Nowa Ulica 2",
            "suite": "Apt. 200",
            "city": "Nowe Miasto 2",
            "zipcode": "12345",
            "geo": {
                "lat": "12.3456",
                "lng": "98.7654"
            }
        },
        "phone": "2-222-222-222",
        "website": "nowy2.com",
        "company": {
            "name": "Nowa Firma 2",
            "catchPhrase": "Nowy Przykład 2",
            "bs": "Nowa Branża 2"
        }
    },
    {
        "id": 3,
        "name": "Nowa Osoba 3",
        "username": "Nowy Użytkownik 3",
        "email": "nowy@osoba3.com",
        "address": {
            "street": "Nowa Ulica 3",
            "suite": "Apt. 300",
            "city": "Nowe Miasto 3",
            "zipcode": "54321",
            "geo": {
                "lat": "98.7654",
                "lng": "12.3456"
            }
        },
        "phone": "3-333-333-333",
        "website": "nowy3.com",
        "company": {
            "name": "Nowa Firma 3",
            "catchPhrase": "Nowy Przykład 3",
            "bs": "Nowa Branża 3"
        }
    }
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
                        <li>
                            <Link to="/part-1/task-5/">Zadanie 1-5</Link>
                        </li>
                        <hr/>
                        <li>
                            <Link to="/part-2/task-1/">Zadanie 2-1</Link>
                        </li>
                        <li>
                            <Link to="/part-2/task-2/">Zadanie 2-2</Link>
                        </li>
                        <li>
                            <Link to="/part-2/task-3/">Zadanie 2-3</Link>
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
                    <Route path="/part-2/task-1" element={
                        <ShowDataElement initialData={initialData} />
                    }/>
                    <Route path="/part-2/task-2" element={
                        <FetchData postsURL={postsURL} />
                    }/>
                    <Route path="/part-2/task-3" element={
                        <Table data={data} />
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

export default App;
