import React, { useState, useEffect } from "react";
import "./admincompo_css/tablestyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint, faPen, faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from '../imgs/3MRlogovertical.png';

const Booking = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [filter, setFilter] = useState("All");
    const generateBookings = () => {
        const today = new Date();
        return [
            { id: "00001", email: "junathanmikmik@email.com", name: "Junathan Mikmik Rufo", contact: "0918242198", purpose: "Consult", time: "10:00 AM" },
            { id: "00002", email: "dubumarie@email.com", name: "Dubu Marie Rufo", contact: "0918242198", purpose: "Maintenance", time: "11:00 AM" },
            { id: "00003", email: "najaemin@email.com", name: "Na Jaemin", contact: "0918242198", purpose: "Engineering Services", time: "12:00 PM" },
            { id: "00004", email: "zhongchenle@email.com", name: "Zhong Chenle", contact: "0918242198", purpose: "On-Site Assessment", time: "01:00 PM" },
            { id: "00005", email: "jisungpark@email.com", name: "Jisung Park", contact: "0923456789", purpose: "Consult", time: "09:00 AM" },
            { id: "00006", email: "johnsmith@email.com", name: "John Smith", contact: "0934567890", purpose: "Installation", time: "10:30 AM" },
            { id: "00007", email: "janedoe@email.com", name: "Jane Doe", contact: "0945678901", purpose: "Site Inspection", time: "02:00 PM" },
        ].map((booking, index) => {
            const bookingDate = new Date();
            bookingDate.setDate(today.getDate() + index - 3); // Realistic past, present, future dates
    
            const timeDifference = (bookingDate - today) / (1000 * 60 * 60 * 24);
            let status = timeDifference < 0 ? "Done" : timeDifference <= 3 ? "Incoming" : "Scheduled";
    
            return {
                ...booking,
                datetime: `${bookingDate.toISOString().split("T")[0]} at ${booking.time}`,
                status,
            };
        });
    };

    const [bookings, setBookings] = useState(generateBookings);

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

    const [showEditBookingPopup, setShowEditBookingPopup] = useState(false);
    const [editBooking, setEditBooking] = useState({
        id: "",
        email: "",
        name: "",
        contact: "",
        purpose: "",
        datetime: "",
    });

    const handleEditBooking = (booking) => {
        const [datePart, timePart] = booking.datetime.split(" at ");

        setEditBooking({
            ...booking,
            datetime: datePart,
            time: timePart || "",
        });

        setShowEditBookingPopup(true);
    };


    const handleSaveEditBooking = () => {
        const today = new Date();
        const editedDate = new Date(editBooking.datetime);
    
        const timeDifference = (editedDate - today) / (1000 * 60 * 60 * 24);
    
        let newStatus = timeDifference < 0 ? "Done" : timeDifference <= 3 ? "Incoming" : "Scheduled";
    
        setBookings((prev) =>
            prev.map((b) =>
                b.id === editBooking.id
                    ? {
                        ...editBooking,
                        datetime: `${editBooking.datetime} at ${editBooking.time}`,
                        status: newStatus,
                    }
                    : b
            )
        );
    
        setShowEditBookingPopup(false);
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
                                    <td>
                                        <span className={`status status-${booking.status.toLowerCase()}`}>
                                            {booking.status}
                                        </span>
                                    </td>
                                    <td>
                                        <FontAwesomeIcon
                                            icon={faPen}
                                            className="edit-icon"
                                            onClick={() => handleEditBooking(booking)}
                                        />
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
                            <button className="modalyesbtn" onClick={handleCancelBooking}>Yes</button>
                            <button className="modalnobtn" onClick={() => setShowPopup(false)}>No</button>
                        </div>
                    </div>
                </div>
            )}

            {showEditBookingPopup && (
                <div className="popupaddoverlay">
                    <div className="popupaddbox">
                        <img src={logo} alt="Logo" className="logovertical" />

                        <h3>Edit Booking</h3>
                        <p>Modify the booking details as needed. Click 'Save' to apply changes.</p>

                        <div className="dropdownserviceswrapper">
                            <select
                                className="filterservicesdropdown"
                                value={editBooking.purpose}
                                onChange={(e) => setEditBooking({ ...editBooking, purpose: e.target.value })}
                            >
                                <option value="Consultation">Consultation</option>
                                <option value="Maintenance">Maintenance</option>
                                <option value="Engineering Services">Engineering Services</option>
                                <option value="On-Site Assessment">On-Site Assessment</option>
                            </select>
                            <FontAwesomeIcon icon={faChevronDown} className="dropdownservicesicon" />
                        </div>

                        <input
                            type="date"
                            value={editBooking.datetime}
                            onChange={(e) => setEditBooking({ ...editBooking, datetime: e.target.value })}
                        />


                        <div className="dropdownserviceswrapper">
                            <select
                                className="filterservicesdropdown"
                                value={editBooking.time}
                                onChange={(e) => setEditBooking({ ...editBooking, time: e.target.value })}>
                                <option value="08:00 AM">8:00 AM</option>
                                <option value="10:00 AM">10:00 AM</option>
                            </select>
                            <FontAwesomeIcon icon={faChevronDown} className="dropdownservicesicon" />
                        </div>

                        <div className="popup-buttons">
                            <button className="modalyesbtn" onClick={handleSaveEditBooking}>Save</button>
                            <button className="modalnobtn" onClick={() => setShowEditBookingPopup(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Booking;
