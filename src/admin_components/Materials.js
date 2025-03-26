import React, { useState, useEffect } from "react";
import "./admincompo_css/tablestyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint, faChevronDown, faQuestionCircle, faTimes } from "@fortawesome/free-solid-svg-icons";

const Materials = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formattedTime = currentTime.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    });

    const formattedDate = currentTime.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
    });

    const materials = [
        { id: "00001", location: "Quezon City, NCR", name: "Solar Panel", price: "PHP 20,000" },
        { id: "00002", location: "Makati, NCR", name: "Mounting System (Racking and Brackets)", price: "PHP 8,000" },
        { id: "00003", location: "Bacoor, Cavite", name: "Wiring and Electrical Components", price: "PHP 15,000" },
        { id: "00004", location: "Dasmariñas, Cavite", name: "Inverter", price: "PHP 20,000" },
        { id: "00005", location: "San Fernando, Pampanga", name: "Battery Storage", price: "PHP 25,000" },
        { id: "00006", location: "Antipolo, Rizal", name: "Charge Controller", price: "PHP 7,500" },
        { id: "00007", location: "Imus, Cavite", name: "MC4 Connectors", price: "PHP 3,000" },
        { id: "00008", location: "Taguig, NCR", name: "Solar Cables", price: "PHP 4,500" },
        { id: "00009", location: "Angeles, Pampanga", name: "Surge Protectors", price: "PHP 6,000" },
        { id: "00010", location: "Calamba, Laguna", name: "PV Combiner Box", price: "PHP 10,000" },
    ];

    // Filter materials based on selected region
    const filteredMaterials = materials.filter(mat =>
        filter === "All" || mat.location.includes(filter)
    );

    return (
        <div className="container">
            <section className="sidesection">
                <div className="pagename">
                    <h2>Resource Materials</h2>
                    <p>Monitor inventory, allocate materials.</p>
                </div>

                <div className="sidebottomsection">
                    <div className="tableclock">
                        <p className="tabletime">{formattedTime}</p>
                        <p className="tablerealdate">{formattedDate}</p>
                    </div>
                </div>
            </section>

            <section className="tablesection">
                <div className="topsection-table">
                    <div className="total-bookings">
                        <strong>Total Materials: </strong> <span>{filteredMaterials.length}</span>
                    </div>

                    <div className="dropdown-wrapper">
                        <select className="filter-dropdown" onChange={(e) => setFilter(e.target.value)} value={filter}>
                            <option value="All">All Regions</option>
                            <option value="NCR">NCR</option>
                            <option value="Cavite">Cavite</option>
                            <option value="Pampanga">Pampanga</option>
                            <option value="Laguna">Laguna</option>
                            <option value="Rizal">Rizal</option>
                        </select>
                        <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
                    </div>
                </div>

                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>Mat No</th>
                                <th>Location</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredMaterials.map((mat) => (
                                <tr key={mat.id}>
                                    <td>{mat.id}</td>
                                    <td>{mat.location}</td>
                                    <td>{mat.name}</td>
                                    <td>{mat.price}</td>
                                    <td>
                                        <FontAwesomeIcon icon={faQuestionCircle} className="info-icon" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="bottom-actions">
                    <button className="save-pdf-btn">
                        <FontAwesomeIcon icon={faPrint} style={{ marginRight: "8px" }} /> Save PDF
                    </button>
                    <button className="remove-btn">
                        <FontAwesomeIcon icon={faTimes} style={{ marginRight: "8px" }} /> Remove
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Materials;
