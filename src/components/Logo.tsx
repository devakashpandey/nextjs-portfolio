import React from "react";

function Logo() {
  return (
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <title>Logo</title>
      <g>
        <g id="A" transform="translate(34.000000, 32.000000) scale(1.3)">
          <svg width="800px" height="800px">
            {" "}
            <path
              fill="#32e6bc"
              d="M12 2L3 22h6l1-4h4l1 4h6L12 2zM10.25 16l1.75-7l1.75 7h-3.5z"
              width="800px"
              height="800px"
            />
          </svg>
        </g>
        <path
          stroke="#32e6bc"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
        />
      </g>
    </svg>
  );
}

export default Logo;
