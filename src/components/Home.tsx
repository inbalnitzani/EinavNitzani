import React from 'react';

const Home: React.FC = () => (
    <div className="container d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '80vh' }}>

        <video src="/videos/as__stars_out_there_trailer.mp4" 
                loop autoPlay muted  style={{         position: 'absolute',
                    top: 0,
                    left: 0,
                    minWidth: '100%',
                    minHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    zIndex: -1,
                    objectFit: 'cover',
                }}>
        </video>
        <div style={{ position: 'relative', zIndex: 1 }}  className="container d-flex flex-column justify-content-center align-items-center">
        <h1 style={{ color: '#ffff', fontSize: '7rem' }}>Einav Nitzani</h1>
        <h2 style={{ color: '#ffff', fontSize: '3rem' }}> Writer | Director | Producer</h2>    </div>
    </div>
);

export default Home;
