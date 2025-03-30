import React, { useState, useEffect } from "react";
import "./admincompo_css/tablestyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint, faChevronDown, faTimes, faPlus } from "@fortawesome/free-solid-svg-icons";
import logo from '../imgs/3MRlogovertical.png';

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
    ]);

    const [selectedMaterial, setSelectedMaterial] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [showAddPopup, setShowAddPopup] = useState(false);
    const [newMaterial, setNewMaterial] = useState({ id: "", location: "", name: "", price: "" });

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

    const handleAddMaterial = () => {
        if (newMaterial.id && newMaterial.location && newMaterial.name && newMaterial.price) {
            setMaterials([...materials, { ...newMaterial, price: Number(newMaterial.price) }]);
            setShowAddPopup(false);
            setNewMaterial({ id: "", location: "", name: "", price: "" });
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

                        <button className="add-material-btn" onClick={() => setShowAddPopup(true)}>
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
                            <button className="modalyesbtn" onClick={handleRemoveMaterial}>Yes</button>
                            <button className="modalnobtn" onClick={() => setShowPopup(false)}>No</button>
                        </div>
                    </div>
                </div>
            )}

            {showAddPopup && (
                <div className="popupaddoverlay">
                    <div className="popupaddbox">
                        <img src={logo} alt="Logo" className="logovertical" />

                        <h3>Add Material</h3>
                        <p>Enter the details of the new material and click 'Add' to save.</p>
                        <input
                            type="text"
                            placeholder="Material ID"
                            value={newMaterial.id}
                            onChange={(e) => setNewMaterial({ ...newMaterial, id: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Location"
                            value={newMaterial.location}
                            onChange={(e) => setNewMaterial({ ...newMaterial, location: e.target.value })}
                        />
                        <input
                            type="text" placeholder="Name"
                            value={newMaterial.name}
                            onChange={(e) => setNewMaterial({ ...newMaterial, name: e.target.value })}
                        />
                        <input
                            type="number"
                            placeholder="Price"
                            value={newMaterial.price}
                            onChange={(e) => setNewMaterial({ ...newMaterial, price: e.target.value })}
                        />
                        <div className="popup-buttons">
                            <button className="modalyesbtn" onClick={handleAddMaterial}>Add</button>
                            <button className="modalnobtn" onClick={() => setShowAddPopup(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Materials;
