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
            <h2>General Information</h2>
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
                            value={generalInfo.email} 
                            onChange={(e) => setGeneralInfo({ ...generalInfo, email: e.target.value })}   
                        />
                    </label>
                    <label>
                        Phone:{' '}
                        <input
                            value={generalInfo.phone}
                            onChange={(e) => setGeneralInfo({ ...generalInfo, phone: e.target.value })}
                        />
                    </label>
                    
                    <button className="submit-btn" onClick={handleSubmit}>Submit</button>
                </>            
            ) : ( // Display Mode
                <>
                    <p>{generalInfo.name}</p>
                    <p>{generalInfo.email}</p>
                    <p>{generalInfo.phone}</p>
                    <button className="edit-btn" onClick={handleEdit}>Edit</button>
                </>
            )}
        </div>
    );
}

export default GeneralInfo;