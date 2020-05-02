import React from "react";

const Header = () => {
  return (
    <>
      <nav>
        <div class="nav-wrapper indigo">
          <a href="/" class="brand-logo center">
            Inebriate Unveiling
          </a>
          <ul id="nav-mobile" class="right ">
            <li>
              <a
                href="https://github.com/rishabhkanojiya?tab=repositories"
                target="_blank"
              >
                <i class="material-icons left">code</i>Github Code
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
