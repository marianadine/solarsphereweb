import React, { useState, useEffect } from "react";
import "./admincompo_css/tablestyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint, faPen, faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";

const Booking = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [filter, setFilter] = useState("All");
    const [bookings, setBookings] = useState([
        { id: "00001", email: "junathanmikmik@email.com", name: "Junathan Mikmik Rufo", contact: "0918242198", purpose: "Consult", datetime: "12 September 10:00 AM", status: "Incoming" },
        { id: "00002", email: "dubumarie@email.com", name: "Dubu Marie Rufo", contact: "0918242198", purpose: "Maintenance", datetime: "12 September 11:00 AM", status: "Done" },
        { id: "00003", email: "najaemin@email.com", name: "Na Jaemin", contact: "0918242198", purpose: "Engineering", datetime: "12 September 12:00 PM", status: "Canceled" },
        { id: "00004", email: "zhongchenle@email.com", name: "Zhong Chenle", contact: "0918242198", purpose: "Engineering", datetime: "12 September 01:00 PM", status: "Incoming" },
    ]);

    const [selectedBooking, setSelectedBooking] = useState(null);
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

    // Filter bookings based on the selected status
    const filteredBookings = bookings.filter(booking => 
        filter === "All" || booking.status === filter
    );

    const handleCancelBooking = () => {
        if (selectedBooking) {
            setBookings(prevBookings =>
                prevBookings.map(booking =>
                    booking.id === selectedBooking.id ? { ...booking, status: "Canceled" } : booking
                )
            );
            setShowPopup(false);
        }
    };

    return (
        <div className="container">
            <section className="sidesection">
                <div className="pagename">
                    <h2>Manage Schedules</h2>
                    <p>Efficiently schedule, track, and manage appointments.</p>
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
                        <strong>Total Scheduled Bookings: </strong> <span>{filteredBookings.length}</span>
                    </div>

                    <div className="dropdown-wrapper">
                        <select className="filter-dropdown" onChange={(e) => setFilter(e.target.value)} value={filter}>
                            <option value="All">All Schedules</option>
                            <option value="Incoming">Incoming</option>
                            <option value="Done">Done</option>
                            <option value="Canceled">Canceled</option>
                        </select>
                        <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
                    </div>
                </div>

                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>Booking No</th>
                                <th>Email Address</th>
                                <th>Full Name</th>
                                <th>Contact</th>
                                <th>Purpose</th>
                                <th>Date & Time</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredBookings.map((booking) => (
                                <tr
                                    key={booking.id}
                                    className={selectedBooking?.id === booking.id ? "selected-row" : ""}
                                    onClick={() => setSelectedBooking(booking)}
                                >
                                    <td>{booking.id}</td>
                                    <td>{booking.email}</td>
                                    <td>{booking.name}</td>
                                    <td>{booking.contact}</td>
                                    <td>{booking.purpose}</td>
                                    <td>{booking.datetime}</td>
                                    <td>{booking.status}</td>
                                    <td>
                                        <FontAwesomeIcon icon={faPen} className="edit-icon" />
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
                        className="cancel-btn"
                        disabled={!selectedBooking || selectedBooking.status === "Canceled"}
                        onClick={() => setShowPopup(true)}
                    >
                        <FontAwesomeIcon icon={faTimes} style={{ marginRight: "8px" }} /> Cancel
                    </button>
                </div>
            </section>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-box">
                        <h3>Cancel Booking</h3>
                        <p>Are you sure you want to cancel this booking?</p>
                        <div className="popup-buttons">
                            <button className="yes-btn" onClick={handleCancelBooking}>Yes</button>
                            <button className="no-btn" onClick={() => setShowPopup(false)}>No</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Booking;
