import SearchParams from './SearchParams.jsx';
import Details from './Details.jsx';
import {Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM  from 'react-dom/client';
import Pet from './Pet.jsx';

const App = () => {
    return(
        <BrowserRouter>
            <header>
                <Link to="/"> Adopt Me!</Link>
            </header>
           
            <Routes>
                <Route path='/details/:id' element={<Details />}></Route>
                <Route path="/" element={<SearchParams/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App/>);


// const App = () => {
//     return React.createElement(
//         "div",
//         { },
//         React.createElement("h1", {}, "Adopt Me!"),
//         React.createElement(Pet, {
//             animal: "Dog",
//             name: "Luna",
//             breed: "Havanese"
//         }),
//         React.createElement(Pet, {
//             animal: "Bird",
//             name: "Boncuk",
//             breed: "Cockatiel"
//         }),
//         React.createElement(Pet, {
//             animal: "Cat",
//             name: "Kurye",
//             breed: "Mixed"
//         })
//     )
// };
