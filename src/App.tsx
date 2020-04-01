import React from 'react'
import './App.scss'

function App() {
  return (
    <div className="App">
      <section className="hero has-background-white-ter is-fullheight">
        <div className="hero-body">
          <div className="tile is-ancestor is-vertical">
            <div className="tile is-parent">
              <div className="tile is-4 is-danger is-child front-page-tile">
              </div>
              <div className="tile is-4 is-danger is-child">
                <h1 className="title has-text-primary">
                  samir joshi 
                </h1>
              </div>
              <div className="tile is-4 is-danger is-child front-page-tile">
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-4 is-danger is-child front-page-tile">
                <div className='box tile-card'>
                  Personal Projects
                </div>
              </div>
              <div className="tile is-4 is-danger is-child front-page-tile">
                <div className='box tile-card'>
                  Resume
                </div>
              </div>
              <div className="tile is-4 is-danger is-child front-page-tile">
                <div className='box tile-card'>
                  About Me
                  Interests - Research papers/podcasts/ etc
                  Social Media
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
