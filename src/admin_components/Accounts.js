import React, { useState, useEffect } from "react";
import "./admincompo_css/tablestyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPrint, faPen, faChevronDown, faPowerOff } from "@fortawesome/free-solid-svg-icons";

const Accounts = () => {
  const [selected, setSelected] = useState("Admin");
  const [filter, setFilter] = useState("All");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [userAccounts, setUserAccounts] = useState([
    { id: "00003", email: "user1@email.com", password: "password1", status: "Active" },
    { id: "00004", email: "user2@email.com", password: "password2", status: "Inactive" },
    { id: "00005", email: "user3@email.com", password: "password3", status: "Active" },
    { id: "00006", email: "user4@email.com", password: "password4", status: "Inactive" },
    { id: "00007", email: "user5@email.com", password: "password5", status: "Active" },
    { id: "00008", email: "user6@email.com", password: "password6", status: "Inactive" },
    { id: "00009", email: "user7@email.com", password: "password7", status: "Active" },
    { id: "00010", email: "user8@email.com", password: "password8", status: "Inactive" },
    { id: "00011", email: "user9@email.com", password: "password9", status: "Active" },
    { id: "00012", email: "user10@email.com", password: "password10", status: "Inactive" },
  ]);

  const [selectedAccount, setSelectedAccount] = useState(null);
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

  const adminAccounts = [
    { id: "00001", email: "junathanmikmik@email.com", password: "ilovedubu", position: "Admin" },
    { id: "00002", email: "dubumarie@email.com", password: "ihatemikmik4ever", position: "Owner" },
  ];

  const filteredUserAccounts = userAccounts.filter(
    (account) => filter === "All" || account.status === filter
  );

  const accounts = selected === "Admin" ? adminAccounts : filteredUserAccounts;

  const handleDeactivate = () => {
    if (selectedAccount) {
      setUserAccounts((prevAccounts) =>
        prevAccounts.map((account) =>
          account.id === selectedAccount.id ? { ...account, status: "Inactive" } : account
        )
      );
      setShowPopup(false);
    }
  };

  return (
    <div className="container">
      <section className="sidesection">
        <div className="pagename">
          <h2>Manage Accounts</h2>
          <p>Handle user account creation, updates, permissions.</p>
        </div>

        <div className="sidebottomsection">
          <div className="adminusertoggle">
            <button className={selected === "Admin" ? "active" : ""} onClick={() => setSelected("Admin")}>
              Admin
            </button>
            <button className={selected === "User" ? "active" : ""} onClick={() => setSelected("User")}>
              User
            </button>
          </div>

          <div className="tableclock">
            <p className="tabletime">{formattedTime}</p>
            <p className="tablerealdate">{formattedDate}</p>
          </div>
        </div>
      </section>

      <section className="tablesection">
        <div className="topsection-table">
          <div className="last-updated-container">
            <strong>Last Updated:</strong>
            <p>September 13, 2025</p>
          </div>

          <div className="topsection-actions">
            {selected === "User" && (
              <div className="dropdown-wrapper">
                <select className="filter-dropdown" onChange={(e) => setFilter(e.target.value)}>
                  <option value="All">All Accounts</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
                <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
              </div>
            )}

            <button className="add-account-btn">
              <FontAwesomeIcon icon={faPlus} style={{ marginRight: "8px" }} /> Add Account
            </button>
          </div>
        </div>

        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Account No</th>
                <th>Email Address</th>
                <th>Password</th>
                <th>{selected === "Admin" ? "Position" : "Status"}</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((account) => (
                <tr
                  key={account.id}
                  className={selectedAccount?.id === account.id ? "selected-row" : ""}
                  onClick={() => setSelectedAccount(account)}
                >
                  <td>{account.id}</td>
                  <td>{account.email}</td>
                  <td>{account.password}</td>
                  <td>{selected === "Admin" ? account.position : account.status}</td>
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

          {selected === "User" && (
            <button
              className="deactivate-btn"
              disabled={!selectedAccount || selectedAccount.status === "Inactive"}
              onClick={() => setShowPopup(true)}
            >
              <FontAwesomeIcon icon={faPowerOff} style={{ marginRight: "8px" }} />
              Deactivate
            </button>
          )}
        </div>
      </section>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>Deactivate Account</h3>
            <p>Are you sure you want to deactivate this account?</p>
            <div className="popup-buttons">
              <button className="yes-btn" onClick={handleDeactivate}>Yes</button>
              <button className="no-btn" onClick={() => setShowPopup(false)}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accounts;
