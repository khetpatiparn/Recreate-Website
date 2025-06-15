import "./css/AppHeader.css"
import "./css/AppMain.css"
import "./css/AppFooter.css"
import "./css/helpConsole.css"

import { IoArrowForward } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";

function App() {
  const handleClick = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <header>
        <ul className="h-left">
          <div className="logo-and-text">
            <li class="h-item"><a href="#" onClick={handleClick}><img src="/react.svg" alt="React Logo" /></a></li>
            <li class="h-item"><a href="#" onClick={handleClick}>Abstract</a></li>
          </div>
          <li id="h-2"><a href="#" onClick={handleClick}>Help Center</a></li>
        </ul>
        <ul className="h-right">
          <li className="search-box"><input type="search" placeholder="Search"/></li>
          <li className="h-item request"><a href="#" onClick={handleClick}>Submit a request</a></li>
          <li className="h-item sign-in"><a href="#" onClick={handleClick}>Sign in</a></li>
        </ul>
      </header>
      <main>
        <div className="body-main">
          <div className="top-main">
            <div>
              <h1>How can we help?</h1>
              <div className="search-box">
                <input type="search" placeholder="Search"/>
                <IoArrowForward size={25}/>
              </div>
            </div>
          </div>
          <div className="content">
            <div id="b-1">
              <div>
                <img src="/icon-versions.png" alt="icon-versions"/>
              </div>
              <h2>Using Abstract</h2>
              <p>Abstract lets you manage, version, and document your designs in one place.</p>
              <a href="#" onClick={handleClick}>Learn More &#x2192;</a>
            </div>
            <div id="b-2">
              <div>
                <img src="/icon-account.png" alt="icon-account" />
              </div>
              <h2>Manage your account</h2>
              <p>Configure your account settings, such as your email, profile details, and password.</p>
              <a href="#" onClick={handleClick}>Learn More &#x2192;</a>
            </div>
            <div id="b-3">
              <div>
                <img src="/icon-organizations.png" alt="icon-organizations" />
              </div>
              <h2>Manage organizations, teams, and projects</h2>
              <p>Use Abstract organizations, teams, and projects to organize your people and your work.</p>
              <a href="#" onClick={handleClick}>Learn More &#x2192;</a>
            </div>
            <div id="b-4">
              <div>
                <img src="/icon-billing.png" alt="icon-billing" />
              </div>
              <h2>Manage billing</h2>
              <p>Change subscriptions and payment details.</p>
              <a href="#" onClick={handleClick}>Learn More &#x2192;</a>
            </div>
            <div id="b-5">
              <div>
                <img src="/icon-authenticate.png" alt="icon-authenticate" />
              </div>
              <h2>Authenticate to Abstract</h2>
              <p>Set up and configure SSO, SCIM, and Just-in-Time provisioning.</p>
              <a href="#" onClick={handleClick}>Learn More &#x2192;</a>
            </div>
            <div id="b-6">
              <div>
                <img src="/icon-comment.png" alt="icon-comment" />
              </div>
              <h2>Abstract support</h2>
              <p>Get in touch with a human.</p>
              <a href="#" onClick={handleClick}>Learn More &#x2192;</a>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="container-footer">
          <div className="abstract-footer" id="f1">
            <h2>Abstract</h2>
            <ul>
              <li><a href="#" onClick={handleClick}>Start Trial</a></li>
              <li><a href="#" onClick={handleClick}>Pricing</a></li>
              <li><a href="#" onClick={handleClick}>Download</a></li>
            </ul>
          </div>
          <div className="resources-footer" id="f2">
            <h2>Resources</h2>
            <ul>
              <li><a href="#" onClick={handleClick}>Blog</a></li>
              <li><a href="#" onClick={handleClick}>Help Center</a></li>
              <li><a href="#" onClick={handleClick}>Release Notes</a></li>
              <li><a href="#" onClick={handleClick}>Status</a></li>
            </ul>
          </div>
          <div className="commu-footer" id="f3">
            <h2>Community</h2>
            <ul>
              <li><a href="#" onClick={handleClick}>Twitter</a></li>
              <li><a href="#" onClick={handleClick}>LinkedIn</a></li>
              <li><a href="#" onClick={handleClick}>Facebook</a></li>
              <li><a href="#" onClick={handleClick}>Dribbble</a></li>
              <li><a href="#" onClick={handleClick}>Podcast</a></li>
            </ul>
          </div>
          <div className="com-footer" id="f4">
            <h2>Company</h2>
            <ul>
              <li><a href="#" onClick={handleClick}>About us</a></li>
              <li><a href="#" onClick={handleClick}>Careers</a></li>
              <li><a href="#" onClick={handleClick}>Legal</a></li>
            </ul>
            <h4>Contact us</h4>
            <a href="#" onClick={handleClick}>info@goabstract.com</a>
          </div>
          <div className="copyright" id="f5">
            <img src="/react.svg" alt="react-logo" />
            <p>&#169; Copyright 2025</p>
            <p>Abstract Studio Design, Inc.</p>
            <p>All rights reserved</p>
        </div>
        </div>
      </footer>
      <div className="help-console">
        <IoIosHelpCircleOutline size={25} />
        <p>Help</p>
      </div>
    </>
  )
}

export default App
