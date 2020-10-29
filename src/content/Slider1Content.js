import React from 'react'

export default [
  <div style={{ textAlign: 'center', width: '100%', height: '100%', background: '#F3F3F3', color: '#2F3134', fontSize: '3rem' }}>
    <h1 style={{ margin: 0 }}>Hello world!!!</h1>
    <p>My first slide</p>
  </div>,
  <div style={{ textAlign: 'center', background: '#2F3134', color: 'white' }}>
    <h2>Slide-2</h2>
    <img alt="Nature" src="https://i.artfile.ru/3003x2000_894702_%5Bwww.ArtFile.ru%5D.jpg" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
  </div>,
  <div style={{ width: '100%', height: '100%' }}>
    <h1 style={{ margin: 0, textAlign: 'center' }}>My form</h1>
    <form action="#" style={{ background: '#2F3134', display: 'flex', width: '100%', height: '100px', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
      <input type="email" placeholder="Email" style={{ background: '#F3F3F3', outline: 'none', border: 'none', borderRight: '1px solid rgba(0,0,0,0.2)', padding: '4px 12px' }} />
      <button style={{ display: 'block', outline: 'none', border: 'none', padding: '4px 3px' }}>Next</button>
    </form>
  </div>,
  <div style={{ textAlign: 'center', width: '100%', height: '100%', background: '#F3F3F3', color: '#2F3134', fontSize: '3rem' }}>
    <h1 style={{ margin: 0 }}>Slide-4</h1>
    <ul style={{ width: '20%', margin: '0 auto', textAlign: 'left' }}>
      <li>First li</li>
      <li>Second li</li>
    </ul>
  </div>,
  <div style={{ textAlign: 'center', width: '100%', height: '100%', background: '#F3F3F3', color: '#2F3134', fontSize: '3rem' }}>
    <h1 style={{ margin: 0 }}>Slide-5</h1>
    <p>The End...</p>
  </div>,
]