import React from "react";

function Aboutus({className}:{className?:string}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      
      viewBox="0 0 512 512"
      className={className}
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g fill="#ffffff" transform="translate(42.667 42.667)">
          <path d="M213.333 0C95.513 0 0 95.512 0 213.333c0 117.82 95.513 213.334 213.333 213.334 117.822 0 213.334-95.513 213.334-213.334S331.155 0 213.333 0zm0 384c-94.105 0-170.666-76.561-170.666-170.667 0-94.105 76.56-170.666 170.666-170.666C307.44 42.667 384 119.227 384 213.333S307.44 384 213.333 384zm26.714-256c0 15.468-11.262 26.667-26.497 26.667-15.851 0-26.837-11.2-26.837-26.963 0-15.15 11.283-26.37 26.837-26.37 15.235 0 26.497 11.22 26.497 26.666zm-48 64h42.666v128h-42.666V192z"></path>
        </g>
      </g>
    </svg>
  );
}

export default Aboutus;
