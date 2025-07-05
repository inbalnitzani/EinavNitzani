import React from 'react';

const inputStyle = {
  width: '90%',
  border: 'none',
  marginBottom: 0,
  padding: '8px 0',
  background: 'transparent',
  fontSize: 18,
  color: '#7a6a3a',
  outline: 'none',
  position: 'relative' as const,
  zIndex: 2,
};

const textareaStyle = {
  width: '90%',
  border: 'none',
  marginBottom: 0,
  padding: '8px 0',
  background: 'transparent',
  fontSize: 18,
  color: '#7a6a3a',
  outline: 'none',
  resize: 'none' as const,
  position: 'relative' as const,
  zIndex: 2,
};

const Contact: React.FC = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
    <div
      className="card shadow-lg p-5"
      style={{
        width: '60vw',
        maxWidth: 1200,
        background: '#fdf8f3',
        border: '2.5px solid #b3a13a',
        borderRadius: 18,
        fontFamily: 'Georgia, serif',
        position: 'relative',
      }}
    >
      <div className="d-flex justify-content-between align-items-start mb-4">
        {/* HELLO */}
        <div style={{ color: '#d9a6b3', fontSize: 56, fontWeight: 700, letterSpacing: 2 }}>
          HELLO
        </div>
        {/* Faux Stamp */}
        <div style={{ width: 64, height: 64, background: '#b3a13a', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 30, fontFamily: 'serif', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
          EN
        </div>
      </div>
      <div className="d-flex flex-wrap w-100">
        {/* Left Side: 80% */}
        <form style={{ flex: '0 0 80%', maxWidth: '80%' }} className="pe-4 mb-4 mb-md-0 d-flex flex-column justify-content-between">
          <div>
            {/* Name Field with line */}
            <div style={{ color: '#b3a13a', fontSize: 18, letterSpacing: 1, marginBottom: 14, fontWeight: 600 }}>
              Name:
            </div>
            <div style={{ position: 'relative', marginBottom: 24 }}>
              <input type="text" style={inputStyle} />
              <div style={{ position: 'absolute' as const, left: 0, right: 0, bottom: 6, borderBottom: '2px solid #e2d7c3', zIndex: 1 }} />
            </div>
            {/* Email Field with line */}
            <div style={{ color: '#b3a13a', fontSize: 18, letterSpacing: 1, marginBottom: 14, fontWeight: 600 }}>
              Email:
            </div>
            <div style={{ position: 'relative', marginBottom: 24 }}>
              <input type="email" style={inputStyle} />
              <div style={{ position: 'absolute' as const, left: 0, right: 0, bottom: 6, borderBottom: '2px solid #e2d7c3', zIndex: 1 }} />
            </div>
            {/* Content Field with multiple lines */}
            <div style={{ color: '#b3a13a', fontSize: 18, letterSpacing: 1, marginBottom: 14, fontWeight: 600 }}>
              Content:
            </div>
            <div style={{ position: 'relative', marginBottom: 24, height: 110 }}>
              <textarea rows={3} style={textareaStyle} />
              {[0, 1, 2].map(i => (
                <div key={i} style={{
                  position: 'absolute' as const,
                  left: 0,
                  right: 0,
                  top: `${(i + 1) * 32}px`,
                  borderBottom: '2px solid #e2d7c3',
                  zIndex: 1
                }} />
              ))}
            </div>
          </div>
        </form>
        {/* Divider */}
        <div className="d-none d-md-block col-md-1 d-flex justify-content-center">
          <div style={{ borderLeft: '2px solid #e2d7c3', height: '100%' }} />
        </div>
        {/* Right Side: 20% (empty for now) */}
        <div style={{ flex: '0 0 20%', maxWidth: '20%' }}></div>
      </div>
    </div>
  </div>
);

export default Contact;
