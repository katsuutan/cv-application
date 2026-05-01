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

    // if isEditing, show input fields
    // if not isEditing, show text display

    return (
        <div className='education'>
            <h2>Education</h2>
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
                            value={education.dateStudy}
                            onChange={(e) => setEducation({ ...education, dateStudy: e.target.value })}
                        />
                    </label>
                    
                    <button onClick={handleSubmit}>Submit</button>
                </>            
            ) : ( // Display Mode
                <>
                    <p>{education.schoolName}</p>
                    <p>{education.titleStudy}</p>
                    <p>{education.dateStudy}</p>
                    <button onClick={handleEdit}>Edit</button>
                </>
            )}
        </div>
    );
}

export default Education;