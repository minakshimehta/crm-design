import React from 'react';

const styles = {
    navbar: {
        backgroundColor: '#fff',
        padding: '10px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    },
    menuBar: {
        fontSize: '1.2rem',
        fontWeight: '500',
        padding: '15px',
        color: '#000',
        textDecoration: 'none', // Removes underline from links
    },
    profile: {
        fontSize: '1.5rem',
        fontWeight: '600',
        color: '#000',
        textDecoration: 'none', // Removes underline from links
    },
    navCollapse: {
        display: 'flex',
        justifyContent: 'flex-end', // Align items to the right
        width: '100%', // Full width
    }
};

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={styles.navbar}>
            <a className="navbar-brand" href="#" style={styles.profile}>Minakshi</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav" style={styles.navCollapse}>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#home" style={styles.menuBar}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Minakshi.pdf" target="_blank" rel="noopener noreferrer" style={styles.menuBar}>Resume</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#services" style={styles.menuBar}>Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact" style={styles.menuBar}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
