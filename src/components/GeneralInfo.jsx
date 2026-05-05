import { useState } from 'react';
import '../styles/GeneralInfo.css';

function GeneralInfo() {
    const [isEditing, setIsEditing] = useState(true);
    const [generalInfo, setGeneralInfo] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleSubmit = () => {
        setIsEditing(false);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    // if isEditing, show input fields
    // if not isEditing, show text display

    return (
        <div className='general-info'>
            <div className="section-header">
                <h2>General Information</h2>
                {isEditing ? (
                    <button className="submit-btn" onClick={handleSubmit}>Submit</button>
                ) : (
                    <button className="edit-btn" onClick={handleEdit}>Edit</button>
                )}
            </div>
            
            {isEditing ? ( // Editing Mode
                <>
                    <label>
                        Name:{' '}
                        <input
                            value={generalInfo.name}
                            onChange={(e) => setGeneralInfo({ ...generalInfo, name: e.target.value })}
                        />
                    </label>
                    <label>
                        Email:{' '}
                        <input
                            type='email'
                            value={generalInfo.email} 
                            onChange={(e) => setGeneralInfo({ ...generalInfo, email: e.target.value })}   
                        />
                    </label>
                    <label>
                        Phone:{' '}
                        <input
                            type='tel'
                            value={generalInfo.phone}
                            onChange={(e) => setGeneralInfo({ ...generalInfo, phone: e.target.value })}
                        />
                    </label>
                    
                </>            
            ) : ( // Display Mode
                <div className="general-info-display">
                    <h1>{generalInfo.name}</h1>
                    <div className="contact-details">
                        <p>📧 {generalInfo.email}</p>
                        <p>📞 {generalInfo.phone}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default GeneralInfo;