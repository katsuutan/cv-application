import { useState } from 'react';
import '../styles/Experience.css';

function Experience() {
    const [isEditing, setIsEditing] = useState(true);
    const [experience, setExperience] = useState({
        companyName: '',
        positionTitle: '',
        duties: '',
        dateFrom: '',
        dateUntil: ''
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
        <div className='experience'>
            <h2>Experience</h2>
            {isEditing ? ( // Editing Mode
                <>
                    <label>
                        Company Name:{' '}
                        <input
                            value={experience.companyName}
                            onChange={(e) => setExperience({ ...experience, companyName: e.target.value })}
                        />
                    </label>
                    <label>
                        Position Title:{' '}
                        <input
                            value={experience.positionTitle}
                            onChange={(e) => setExperience({ ...experience, positionTitle: e.target.value })}
                        />
                    </label>
                    <label>
                        Duties Performed:{' '}
                        <textarea
                            value={experience.duties}
                            onChange={(e) => setExperience({ ...experience, duties: e.target.value })}
                        />
                    </label>
                    <label>
                        Date From:{' '}
                        <input
                            value={experience.dateFrom}
                            onChange={(e) => setExperience({ ...experience, dateFrom: e.target.value })}
                        />
                    </label>
                    <label>
                        Date Until:{' '}
                        <input
                            value={experience.dateUntil}
                            onChange={(e) => setExperience({ ...experience, dateUntil: e.target.value })}
                        />
                    </label>

                    <button className="submit-btn" onClick={handleSubmit}>Submit</button>
                </>
            ) : ( // Display Mode
                <>
                    <p>{experience.companyName}</p>
                    <p>{experience.positionTitle}</p>
                    <p>{experience.duties}</p>
                    <p>{experience.dateFrom}</p>
                    <p>{experience.dateUntil}</p>
                    <button className="edit-btn" onClick={handleEdit}>Edit</button>
                </>
            )}
        </div>
    );

}

export default Experience;