import React, { useState, useEffect } from "react";
import "./admincompo_css/tablestyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint, faChevronDown, faQuestionCircle, faTimes, faPlus } from "@fortawesome/free-solid-svg-icons";

const Materials = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [filter, setFilter] = useState("All");
    const [materials, setMaterials] = useState([
        { id: "00001", location: "Quezon City, NCR", name: "Solar Panel", price: 20000 },
        { id: "00002", location: "Makati, NCR", name: "Mounting System (Racking and Brackets)", price: 8000 },
        { id: "00003", location: "Bacoor, Cavite", name: "Wiring and Electrical Components", price: 15000 },
        { id: "00004", location: "Dasmariñas, Cavite", name: "Inverter", price: 20000 },
        { id: "00005", location: "San Fernando, Pampanga", name: "Battery Storage", price: 25000 },
        { id: "00006", location: "Antipolo, Rizal", name: "Charge Controller", price: 7500 },
        { id: "00007", location: "Imus, Cavite", name: "MC4 Connectors", price: 3000 },
        { id: "00008", location: "Taguig, NCR", name: "Solar Cables", price: 4500 },
        { id: "00009", location: "Angeles, Pampanga", name: "Surge Protectors", price: 6000 },
        { id: "00010", location: "Calamba, Laguna", name: "PV Combiner Box", price: 10000 },
        { id: "00011", location: "Marikina, NCR", name: "Smart Energy Meter", price: 12000 },
        { id: "00012", location: "Pasig, NCR", name: "Micro Inverter", price: 18000 },
        { id: "00013", location: "Baguio, Benguet", name: "Grounding Kit", price: 5000 },
        { id: "00014", location: "Cebu City, Cebu", name: "Flexible Conduits", price: 3500 },
        { id: "00015", location: "Davao City, Davao", name: "Cable Management Clips", price: 2000 },
        { id: "00016", location: "Santa Rosa, Laguna", name: "Weatherproof Junction Box", price: 5500 },
        { id: "00017", location: "Cainta, Rizal", name: "High-Efficiency Solar Panel", price: 27000 },
        { id: "00018", location: "Las Piñas, NCR", name: "Hybrid Solar Inverter", price: 30000 },
        { id: "00019", location: "Mandaluyong, NCR", name: "Heavy Duty Solar Mounts", price: 9000 },
        { id: "00020", location: "Parañaque, NCR", name: "Lithium-Ion Battery Pack", price: 40000 },
    ]);
    
    const [selectedMaterial, setSelectedMaterial] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

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

    const sortedMaterials = [...materials].sort((a, b) => {
        if (filter === "Low Price") return a.price - b.price;
        if (filter === "High Price") return b.price - a.price;
        return 0;
    });

    const handleRemoveMaterial = () => {
        if (selectedMaterial) {
            setMaterials(materials.filter((mat) => mat.id !== selectedMaterial.id));
            setShowPopup(false);
            setSelectedMaterial(null);
        }
    };

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
                        <strong>Total Materials: </strong> <span>{sortedMaterials.length}</span>
                    </div>

                    <div className="topsection-actions">
                    <div className="dropdown-wrapper">
                            <select className="filter-dropdown" onChange={(e) => setFilter(e.target.value)} value={filter}>
                                <option value="All">All Materials</option>
                                <option value="Low Price">Low Price</option>
                                <option value="High Price">High Price</option>
                            </select>
                            <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
                        </div>

                        <button className="add-material-btn">
                            <FontAwesomeIcon icon={faPlus} style={{ marginRight: "8px" }} /> Add Material
                        </button>
                    </div>
                </div>

                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>Mat No</th>
                                <th>Location</th>
                                <th>Name</th>
                                <th>Price (PHP)</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedMaterials.map((mat) => (
                                <tr
                                    key={mat.id}
                                    className={selectedMaterial?.id === mat.id ? "selected-row" : ""}
                                    onClick={() => setSelectedMaterial(mat)}
                                >
                                    <td>{mat.id}</td>
                                    <td>{mat.location}</td>
                                    <td>{mat.name}</td>
                                    <td>{mat.price.toLocaleString()}</td>
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

                    <button
                        className="remove-btn"
                        disabled={!selectedMaterial}
                        onClick={() => setShowPopup(true)}
                    >
                        <FontAwesomeIcon icon={faTimes} style={{ marginRight: "8px" }} /> Remove
                    </button>
                </div>
            </section>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-box">
                        <h3>Remove Material</h3>
                        <p>Are you sure you want to remove this material?</p>
                        <div className="popup-buttons">
                            <button className="yes-btn" onClick={handleRemoveMaterial}>Yes</button>
                            <button className="no-btn" onClick={() => setShowPopup(false)}>No</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Materials;
