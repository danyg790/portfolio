import React from 'react';

const Button = ({ text, onClick, variant = 'primary', size = 'md', type = 'button' }) => {
  return (
    <button 
      type={type}
      className={`btn btn-${variant} btn-${size} px-4 py-2 fw-semibold`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;