import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './components_css/profilestyles.css';

const ProfilePage = ({ userName, profilePic, setProfilePic }) => {
  const [firstName, setFirstName] = useState('Nadine');
  const [lastName, setLastName] = useState('Rufo');
  const [email, setEmail] = useState('nadinerufo7@gmail.com');
  const [phone, setPhone] = useState('09192732116');
  const [password, setPassword] = useState('************');
  const [isEditing, setIsEditing] = useState(false);
  const [profilePicState, setProfilePicState] = useState(profilePic);

  const handleEditClick = () => {
    if (isEditing) {
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const handleProfilePicUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePicState(reader.result);
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile">
      <section className="profilesidesection">
        <div>
          <h2>Profile</h2>
          <p>User Information</p>
        </div>
        <button className="logoutbtn">
          <FontAwesomeIcon icon={faSignOutAlt} className="logouticon" /> Logout
        </button>
      </section>

      <section className="profilemainsection">
        <div className="profile-header">
          <div className="profile-image-container">
            {profilePicState ? (
              <div
                className="profile-image"
                style={{
                  backgroundImage: `url(${profilePicState})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
            ) : (
              <div className="profile-initials">
                {firstName.charAt(0).toUpperCase()}
                {lastName.charAt(0).toUpperCase()}
              </div>
            )}

            <input type="file" accept="image/*" id="upload" style={{ display: 'none' }} onChange={handleProfilePicUpload} />
            <button className="edit-profile-pic" onClick={() => document.getElementById('upload').click()}>
              <FontAwesomeIcon icon={faCamera} />
            </button>
          </div>

          <div className="profileinfo">
            <p className="companyname">3MR Construction & Engineering Services</p>
            <h2 className="profilename">{userName || `${firstName} ${lastName}`}</h2>
            <p className="profileemail">{email}</p>
          </div>
        </div>

        <div className="profileform">
          <div className="input-group">
            <label>First Name</label>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} disabled={!isEditing} />
          </div>
          <div className="input-group">
            <label>Last Name</label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} disabled={!isEditing} />
          </div>
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={!isEditing} />
          </div>
          <div className="input-group">
            <label>Phone Number</label>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} disabled={!isEditing} />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} disabled={!isEditing} />
          </div>
        </div>

        <button className="save-button" onClick={handleEditClick}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </section>
    </div>
  );
};


export default ProfilePage;
