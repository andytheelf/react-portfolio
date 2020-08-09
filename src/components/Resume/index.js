import React from 'react'; 

function Resume() {

    return (
        <div>
            <img style={{ marginTop: '3vh'}} src="https://img.icons8.com/dusk/64/000000/resume.png" alt="resume"/>
            <h1>Resume</h1>
            <div className='justify-content-center'>
                <div style={{ marginTop: '20px' }}>
                    <h3 className='portfolio'>Front End</h3>
                    <p>
                        HTML, CSS, Bootstrap, JavaScript, jQuery, React.js, IndexedDB
                    </p>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <h3 className='portfolio'>Back End</h3>
                    <p>
                        Node.js, Express.js, SQL, Sequelize, NoSQL, API's,
                    </p>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <h3 className='portfolio'>Resume</h3>
                    <a href=''className='link'>
                        <img src="https://img.icons8.com/dusk/64/000000/linkedin.png" alt='linkedin'/>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Resume