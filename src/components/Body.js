import React from 'react';

const css = {
    profileClr: {
        height: '300px',
        backgroundColor: '#D3D3D3',
        width: '100%',
        position: 'relative', // Ensure this is positioned relative to the image container
        top: '50px' // Adjust position if needed
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '200px',
        height: '200px'
    },
    imageStyle: {
        maxWidth: '100%', // Ensures the image scales down within its container
        height: 'auto', // Maintain aspect ratio
        borderRadius: '50%', // Make the image rounded
        filter: 'grayscale(50%)', // Optional: grayscale filter
    },
    textDetails: {
        paddingTop: '30px',
        fontSize: '1.2rem',
        fontWeight: '500',

    },
 
};



const Body = () => {
    return (
        <div>
            <div style={css.textDetails} className='container'>

                Experienced Frontend Developer with 4 years of expertise in delivering dynamic and engaging web applications. Proficient in HTML, CSS, Bootstrap, and JavaScript, with a strong command of jQuery, Vue.js, and React. Demonstrated ability to collaborate with cross-functional teams to build responsive, user-friendly interfaces and optimize performance. Adept at translating client requirements into technical solutions, and committed to continuous learning and innovation in frontend technologies. Seeking to leverage my skills to contribute to a forward-thinking organization and drive exceptional digital experiences.</div>
            <div style={css.profileClr}></div>
            <div style={css.imageContainer}>
                <img
                    src={`${process.env.PUBLIC_URL}/minakshiImage.jpeg`}
                    alt="Profile"
                    style={css.imageStyle}
                />

            </div>
        </div>
    );
}

export default Body;
