import { useState } from 'react';
import '../styles/Education.css';

function Education() {
    const [isEditing, setIsEditing] = useState(true);
    const [education, setEducation] = useState({
        schoolName: '',
        titleStudy: '',
        dateStudy: ''
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
        <div className='education'>
            <div className="section-header">
                <h2>Education</h2>
                {isEditing ? (
                    <button className="submit-btn" onClick={handleSubmit}>Submit</button>
                ) : (
                    <button className="edit-btn" onClick={handleEdit}>Edit</button>
                )}
            </div>
            {isEditing ? ( // Editing Mode
                <>
                    <label>
                        School Name:{' '}
                        <input
                            value={education.schoolName}
                            onChange={(e) => setEducation({ ...education, schoolName: e.target.value })}
                        />
                    </label>
                    <label>
                        Title of Study:{' '}
                        <input
                            value={education.titleStudy} 
                            onChange={(e) => setEducation({ ...education, titleStudy: e.target.value })}   
                        />
                    </label>
                    <label>
                        Date of Study:{' '}
                        <input
                            type='date'
                            value={education.dateStudy}
                            onChange={(e) => setEducation({ ...education, dateStudy: e.target.value })}
                        />
                    </label>
                </>            
            ) : ( // Display Mode
                <div className="education-display">
                    <div className="education-top-row">
                        <h3>{education.schoolName}</h3>
                        <p className="display-date">{formatDate(education.dateStudy)}</p>
                    </div>
                    <p className="display-label">{education.titleStudy}</p>
                </div>
            )}
        </div>
    );
}

export default Education;