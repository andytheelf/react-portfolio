import React from 'react';

function Footer() {   
    return (
    <div className="footer justify-content-between" id="footer" style={{ bottom: '0', width: '100%', padding: '2px', marginTop: '50px' }}>
        <div style={{ float:'center'}}>
            <a href="https://github.com/andytheelf" target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/dusk/64/000000/github.png" alt="Github" className="icon"/></a>
            <a href="https://www.linkedin.com/in/andreaballewprofile/" target='_blank' rel="noopener noreferrer"><img src="https://img.icons8.com/dusk/64/000000/linkedin.png" alt="LinkedIn" className="icon"/></a>
        </div>
         </div>
    )
}

export default Footer;