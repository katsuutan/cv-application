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

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString + 'T00:00:00');
        return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    };

    // if isEditing, show input fields
    // if not isEditing, show text display
    return (
        <div className='experience'>
            <div className="section-header">
                <h2>Experience</h2>
                {isEditing ? (
                    <button className="submit-btn" onClick={handleSubmit}>Submit</button>
                ) : (
                    <button className="edit-btn" onClick={handleEdit}>Edit</button>
                )}
            </div>
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
                            type='date'
                            value={experience.dateFrom}
                            onChange={(e) => setExperience({ ...experience, dateFrom: e.target.value })}
                        />
                    </label>
                    <label>
                        Date Until:{' '}
                        <input
                            type='date'
                            value={experience.dateUntil}
                            onChange={(e) => setExperience({ ...experience, dateUntil: e.target.value })}
                        />
                    </label>
                </>
            ) : ( // Display Mode
                <div className='experience-display'>
                    <div className='experience-top-row'>
                        <h3>{experience.positionTitle} at {experience.companyName}</h3>
                        <p className='display-date'>{formatDate(experience.dateFrom)} - {formatDate(experience.dateUntil)}</p>
                    </div>
                    <p>{experience.duties}</p>
                </div>
            )}
        </div>
    );

}

export default Experience;