import React, { FC } from "react";
import "./LandingPage.scss";
import { Link } from "react-router-dom";
import { Icon, Image } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";

export const LandingPage: FC = () => {
  return (
    <div className="App">
      <section className="hero has-background-white-ter is-fullheight">
        <div className="hero-body">
          <div className="tile is-ancestor is-vertical">
            <div className="tile is-parent">
              <div className="tile is-4 is-danger is-child front-page-tile"></div>
              <div className="tile is-4 is-danger is-child">
                <h1 className="title has-text-primary">samir joshi</h1>
              </div>
              <div className="tile is-4 is-danger is-child front-page-tile"></div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-4 is-danger is-child front-page-tile">
                <div className="box tile-card">
                  <div className="tile-card-default">Projects</div>
                  <div className="tile-card-hover">
                    <div className="tile-card-hover-title">Projects</div>
                    <div className="tile-card-hover-content">
                      <div className='image-link-icon'>
                        <Image
                          src='hockey_emoji.png'
                          as='a'
                          href='https://samirjoshi.dev'
                          target='_blank'
                          fluid
                        />
                        <div className='image-link-icon-text'>
                          Hockey Dashboard
                        </div>
                      </div>
                      <div className='image-link-icon'>
                        <Image
                          src='/GitHub-Mark-64px.png'
                          as='a'
                          href='https://github.com/SamirJoshi'
                          target='_blank'
                          fluid
                        />
                        <div className='image-link-icon-text'>
                          All projects
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tile is-4 is-danger is-child front-page-tile">
                <div className="box tile-card">
                  <div className="tile-card-default">Resume</div>
                  <div className="tile-card-hover">
                    <div className="tile-card-hover-title">Resume</div>
                    <div className="tile-card-hover-content">
                      <Link
                        to="/Twitter_Logo_Blue.png"
                        target="_blank"
                        download
                        className="download-link"
                      >
                        <div>
                          <Icon name="download" size="huge" />
                        </div>
                        <div className='download-link-text'>
                          Download resume
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tile is-4 is-danger is-child front-page-tile">
                <div className="box tile-card">
                  <div className="tile-card-default">About</div>
                  <div className="tile-card-hover">
                    <div className="tile-card-hover-title">About Me</div>
                    <div className="tile-card-hover-content">
                      <div className='image-link-icon'>
                        <Image
                          src='/In-Black-66px-R.png'
                          as='a'
                          href='https://www.linkedin.com/in/samirjoshi1/'
                          target='_blank'
                          fluid
                        />
                        <div className='image-link-icon-text'>
                          LinkedIn
                        </div>
                      </div>
                      <div className='image-link-icon'>
                        <Image
                          src='/Twitter_Logo_Blue.png'
                          as='a'
                          href='https://twitter.com/itmesj'
                          target='_blank'
                          fluid
                        />
                        <div className='image-link-icon-text'>
                          Twitter
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
