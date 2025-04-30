import React from 'react'	import React from 'react'


export default function Button({text, handleClick}) {	const Button = ({ text, handleClick, disabled }) => {
  return (	  return 
    <a href="#" className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4" onClick={handleClick}>	    <button 
      <span className="pl1">{text}</span>	    onClick={handleClick}
    </a>	    disabled={disabled}
  )	    className={`f6 link dim br3 ph3 pv2 mb2 dib white bg-black ma2 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
}	  >
    {text}
  </button>
);
};

export default Button;
