import "./css/AppHeader.css"
import "./css/AppMain.css"
import "./css/AppFooter.css"
import "./css/helpConsole.css"

import { IoArrowForward } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";

function App() {

  return (
    <>
      <header>
        <ul className="h-left">
          <div className="logo-and-text">
            <li id="h-0"><a href=""><img src="./src/assets/react.svg" alt="" /></a></li>
            <li id="h-1"><a href="#">Abstract</a></li>
          </div>
          <li id="h-2"><a href="#">Help Center</a></li>
        </ul>
        <ul className="h-right">
          <li id="h-3"><input type="search" placeholder="Search"/></li>
          <li id="h-4"><a href="#">Submit a request</a></li>
          <li id="h-5"><a href="#">Sign in</a></li>
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
              <figure>
                <img src="./src/assets/icon-versions.png" alt="pic"/>
              </figure>
              <h2>Using Abstract</h2>
              <p>Abstract lets you manage, version, and document your designs in one place.</p>
              <a href="#">Learn More &#x2192;</a>
            </div>
            <div id="b-2">
              <figure>
                <img src="./src/assets/icon-account.png" alt="pic" />
              </figure>
              <h2>Manage your account</h2>
              <p>Configure your account settings, such as your email, profile details, and password.</p>
              <a href="#">Learn More &#x2192;</a>
            </div>
            <div id="b-3">
              <figure>
                <img src="./src/assets/icon-organizations.png" alt="pic" />
              </figure>
              <h2>Manage organizations, teams, and projects</h2>
              <p>Use Abstract organizations, teams, and projects to organize your people and your work.</p>
              <a href="#">Learn More &#x2192;</a>
            </div>
            <div id="b-4">
              <figure>
                <img src="./src/assets/icon-billing.png" alt="pic" />
              </figure>
              <h2>Manage billing</h2>
              <p>Change subscriptions and payment details.</p>
              <a href="#">Learn More &#x2192;</a>
            </div>
            <div id="b-5">
              <figure>
                <img src="./src/assets/icon-authenticate.png" alt="pic" />
              </figure>
              <h2>Authenticate to Abstract</h2>
              <p>Set up and configure SSO, SCIM, and Just-in-Time provisioning.</p>
              <a href="#">Learn More &#x2192;</a>
            </div>
            <div id="b-6">
              <figure>
                <img src="./src/assets/icon-comment.png" alt="pic" />
              </figure>
              <h2>Abstract support</h2>
              <p>Get in touch with a human.</p>
              <a href="#">Learn More &#x2192;</a>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="container-footer">
          <div className="abstract-footer" id="f1">
            <h2>Abstract</h2>
            <ul>
              <li><a href="#">Start Trial</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Download</a></li>
            </ul>
          </div>
          <div className="resources-footer" id="f2">
            <h2>Resources</h2>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Release Notes</a></li>
              <li><a href="#">Status</a></li>
            </ul>
          </div>
          <div className="commu-footer" id="f3">
            <h2>Community</h2>
            <ul>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Dribbble</a></li>
              <li><a href="#">Podcast</a></li>
            </ul>
          </div>
          <div className="com-footer" id="f4">
            <h2>Company</h2>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Legal</a></li>
            </ul>
            <h4>Contact us</h4>
            <a href="#">info@goabstract.com</a>
          </div>
          <div className="copyright" id="f5">
            <img src="./src/assets/react.svg" alt="logo" />
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
