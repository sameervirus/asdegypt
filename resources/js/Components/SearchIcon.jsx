import React from "react";

export default function SearchIcon({ setOpenPanel, props, stroke }) {
  return (
    <div className={props}>
      <a href="#open-search" onClick={() => setOpenPanel(true)}>
        <span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            data-svg="search"
          >
            <circle
              fill="none"
              stroke={stroke}
              strokeWidth="1.1"
              cx="9"
              cy="9"
              r="7"
            ></circle>
            <path
              fill="none"
              stroke={stroke}
              strokeWidth="1.1"
              d="M14,14 L18,18 L14,14 Z"
            ></path>
          </svg>
        </span>
      </a>
    </div>
  );
}
