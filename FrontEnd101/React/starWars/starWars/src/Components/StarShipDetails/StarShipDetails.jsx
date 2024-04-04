import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getStarShipDetails, getAllStarShips } from '../../API';
import './StarShipDetails.css';
import Ship from '../../assets/ship.png';

function StarShipDetails() {
    const { id } = useParams();
    const [starShip, setStarShip] = useState(null);

    useEffect(() => {
        const getDetails = async () => {
            try {
                const ships = await getAllStarShips();
                const item = ships.results;
                const element = item[id - 1];
                const detailData = await getStarShipDetails(element.url);
                setStarShip(detailData);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        getDetails();
    }, [id]);

    return (
        <div>
            <div className="details-container">
                {starShip ? (
                    <div className='details-frame'>
                        <Link to="/">Geri Dön</Link>
                        <h2><u>{starShip.name}</u></h2>
                        <img src={Ship} alt="" />
                        <ul>
                            <li>Model: {starShip.model}</li>
                            <li>Passengers: {starShip.passengers}</li>
                            <li>Max Atmosphering Speed: {starShip.max_atmosphering_speed}</li>
                            <li>Manufacturer: {starShip.manufacturer}</li>
                            <li>Crew: {starShip.crew}</li>
                            <li>Cargo Capacity: {starShip.cargo_capacity}</li>
                        </ul>
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );


}

export default StarShipDetails;