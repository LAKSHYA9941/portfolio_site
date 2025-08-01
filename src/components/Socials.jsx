import React, { useState } from "react";
import styled from "styled-components";
import gmailicon from '../assets/gmailicon.svg'
const Button = () => {
  const [toast, setToast] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("lakshyasharma.9.0.1.2.3@gmail.com");
    setToast(true);
    setTimeout(() => setToast(false), 1500);
  };

  return (
    <StyledWrapper>
      {/* Toast */}
      {toast && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
          Copied!
        </div>
      )}

      <div className="social-links">
        {/* Gmail */}
        <div id="gmail" className="social-btn flex-center" onClick={copyEmail}>
          <img src={gmailicon} alt="Gmail" height={24} width={24} />
          <span>Gmail</span>
        </div>

        {/* LinkedIn */}
        <div
          id="linkedin"
          className="social-btn flex-center"
          onClick={() => window.open("https://linkedin.com/in/lakshya-sharma-35817926a", "_blank")}
        >
          <svg viewBox="0 0 24 24" height={24} width={24}>
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
          <span>LinkedIn</span>
        </div>

        {/* GitHub */}
        <div
          id="github"
          className="social-btn flex-center"
          onClick={() => window.open("https://github.com/LAKSHYA9941", "_blank")}
        >
          <svg viewBox="0 0 24 24" height={24} width={24}>
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <span>GitHub</span>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .social-links,
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .social-btn {
    cursor: pointer;
    height: 50px;
    width: 50px;
    font-family: 'Titillium Web', sans-serif;
    color: #333;
    border-radius: 10px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
    background: white;
    margin: 5px;
    transition: 0.3s;
    justify-content: center;
  }

  .social-btn svg {
    height: 24px;
    width: 24px;
  }

  .social-btn span {
    width: 0px;
    overflow: hidden;
    transition: 0.3s;
    text-align: center;
    margin-left: 5px;
  }

  .social-btn:hover {
    width: 150px;
    border-radius: 5px;
  }

  .social-btn:hover span {
    padding: 2px;
    width: 80px;
  }

  /* icon colors */
  #linkedin svg { fill: #0e76a8; }
  #github svg   { fill: #333; }

  /* toast */
  .fixed {
    position: fixed;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
  }
`;

export default Button;