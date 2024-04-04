import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllStarShips, filterStarShips } from '../../API';
import './StarShips.css';
import Ship from '../../assets/ship.png';
import PageTitle from '../../assets/starwars-title.png';



function Starships() {
    const [starShips, setStarShips] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const getStarShipList = async () => {
            try {
                const data = await getAllStarShips();
                setStarShips(data.results);
            } catch (error) {
                console.error('Error', error);
            }
        };

        getStarShipList();
    }, []);

    const handleFilterChange = (e) => {
        e.preventDefault();
        const getFilterShips = async () => {
            try {
                const data = await filterStarShips(filter);
                setStarShips(data.results);
            } catch (error) {
                console.error('Error', error);
            }
        };

        getFilterShips();
    };

    const handleChange = (e) => {
        setFilter(e.target.value);
    };

    return (
        <div className='ship-container'>

            <div className="page-title"><img src={PageTitle} alt="" width="40%" /></div>

            <div className="filter-ship">
                <h3>İsim / Model: </h3>
                <input
                    type="text"
                    placeholder="Name/Model"
                    value={filter}
                    onChange={handleChange}
                />
                <button onClick={handleFilterChange}> Filtrele</button>
            </div>
            <div className='star-cards'>
                {starShips.map((starShip, index) => (
                    <div key={index} className="card">

                        <Link to={`/starships/${index + 1}`} >
                            <img src={Ship} alt="" />
                            <p>{starShip.name}</p>
                            <p>Model: <span>{starShip.model}</span></p>
                            <p> Crew: <span>{starShip.crew}</span></p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Starships;