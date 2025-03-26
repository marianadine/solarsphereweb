import React, { useState, useEffect } from "react";
import "./admincompo_css/tablestyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint, faChevronDown, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

const SolarPlans = () => {
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

    const solarPlans = [
        { id: "00001", location: "Quezon City, NCR", roofType: "Metal", bill: "PHP 5,000", netMetering: "Yes" },
        { id: "00002", location: "Makati, NCR", roofType: "Flat Roof", bill: "PHP 8,000", netMetering: "Yes" },
        { id: "00003", location: "Bacoor, Cavite", roofType: "Flat Roof", bill: "PHP 15,000", netMetering: "No" },
        { id: "00004", location: "Dasmariñas, Cavite", roofType: "Metal", bill: "PHP 20,000", netMetering: "Yes" },
        { id: "00005", location: "San Fernando, Pampanga", roofType: "Concrete", bill: "PHP 12,000", netMetering: "No" },
        { id: "00006", location: "Antipolo, Rizal", roofType: "Flat Roof", bill: "PHP 10,000", netMetering: "Yes" },
        { id: "00007", location: "Imus, Cavite", roofType: "Metal", bill: "PHP 7,500", netMetering: "Yes" },
        { id: "00008", location: "Taguig, NCR", roofType: "Tile", bill: "PHP 9,000", netMetering: "Yes" },
        { id: "00009", location: "Angeles, Pampanga", roofType: "Concrete", bill: "PHP 11,000", netMetering: "No" },
        { id: "00010", location: "Calamba, Laguna", roofType: "Metal", bill: "PHP 6,500", netMetering: "Yes" },
    ];

    // Filter solar plans based on selected region
    const filteredPlans = solarPlans.filter(plan =>
        filter === "All" || plan.location.includes(filter)
    );

    return (
        <div className="container">
            <section className="sidesection">
                <div className="pagename">
                    <h2>Generated Solar Plans</h2>
                    <p>Manage customized solar energy solutions with cost analysis.</p>
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
                        <strong>Total Generated Plans: </strong> <span>{filteredPlans.length}</span>
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
                                <th>Plan No</th>
                                <th>Location</th>
                                <th>Roof Type</th>
                                <th>Electricity Bill</th>
                                <th>Net Metering</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPlans.map((plan) => (
                                <tr key={plan.id}>
                                    <td>{plan.id}</td>
                                    <td>{plan.location}</td>
                                    <td>{plan.roofType}</td>
                                    <td>{plan.bill}</td>
                                    <td>{plan.netMetering}</td>
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
                </div>
            </section>
        </div>
    );
};

export default SolarPlans;
