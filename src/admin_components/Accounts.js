import React, { useState, useEffect } from "react";
import "./admincompo_css/tablestyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPrint, faPen, faChevronDown, faPowerOff, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from '../imgs/3MRlogovertical.png';

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

  const [adminAccounts, setAdminAccounts] = useState([
    { id: "00001", email: "junathanmikmik@email.com", password: "ilovedubu", position: "Admin" },
    { id: "00002", email: "dubumarie@email.com", password: "ihatemikmik4ever", position: "Owner" },
  ]);

  const [selectedAccount, setSelectedAccount] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [editAccount, setEditAccount] = useState({ id: "", email: "", password: "" });
  const [newAccount, setNewAccount] = useState({ id: "", email: "", password: "", status: "Active" });

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

  const handleAddAccount = () => {
    if (!newAccount.email || !newAccount.password) return;

    const newId = selected === "Admin"
      ? (adminAccounts.length + 1).toString().padStart(5, "0")
      : (userAccounts.length + 3).toString().padStart(5, "0");

    const accountToAdd = { ...newAccount, id: newId };

    if (selected === "Admin") {
      setAdminAccounts([...adminAccounts, accountToAdd]);
    } else {
      setUserAccounts([...userAccounts, accountToAdd]);
    }

    setNewAccount({ id: "", email: "", password: "", status: "Active" });
    setShowAddPopup(false);
  };

  const handleEdit = (account) => {
    setEditAccount(account);
    setShowEditPopup(true);
  };

  const handleSaveEdit = () => {
    if (selected === "Admin") {
      setAdminAccounts((prev) => prev.map((acc) => (acc.id === editAccount.id ? editAccount : acc)));
    } else {
      setUserAccounts((prev) => prev.map((acc) => (acc.id === editAccount.id ? editAccount : acc)));
    }
    setShowEditPopup(false);
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

            <button className="add-account-btn" onClick={() => setShowAddPopup(true)}>
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
                    <FontAwesomeIcon icon={faPen} className="edit-icon" onClick={() => handleEdit(account)} />
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
              <button className="modalyesbtn" onClick={handleDeactivate}>Yes</button>
              <button className="modalnobtn" onClick={() => setShowPopup(false)}>No</button>
            </div>
          </div>
        </div>
      )}

      {showAddPopup && (
        <div className="popupaddoverlay">
          <div className="popupaddbox">
            <img src={logo} alt="Logo" className="logovertical" />

            <h3>Add Account</h3>
            <p>Please enter the account details to add a new user. Fill in the required fields and click 'Add' to save the account.</p>
            <input
              type="email"
              placeholder="Email Address"
              value={newAccount.email}
              onChange={(e) => setNewAccount({ ...newAccount, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              value={newAccount.password}
              onChange={(e) => setNewAccount({ ...newAccount, password: e.target.value })}
            />
            <div className="popup-buttons">
              <button className="modalyesbtn" onClick={handleAddAccount}>Add</button>
              <button className="modalnobtn" onClick={() => setShowAddPopup(false)}>Close</button>
            </div>

          </div>
        </div>
      )}

      {showEditPopup && (
        <div className="popupaddoverlay">
          <div className="popupaddbox">
          <img src={logo} alt="Logo" className="logovertical" />

            <h3>Edit Account</h3>
            <p>Update the account details as needed. Modify the fields and click 'Save' to apply the changes.</p>
            <input placeholder="Email" type="email" value={editAccount.email} onChange={(e) => setEditAccount({ ...editAccount, email: e.target.value })} />
            <input placeholder="Password" value={editAccount.password} onChange={(e) => setEditAccount({ ...editAccount, password: e.target.value })} />
            <div className="popup-buttons">
              <button className="modalyesbtn" onClick={handleSaveEdit}>Save</button>
              <button className="modalnobtn" onClick={() => setShowEditPopup(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accounts;
