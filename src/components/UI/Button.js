import React from "react";
import PropTypes  from "prop-types";
import './Button.scss'

export default function Button({ iconName, color, text,  onClick, hidden}) {

    return (
      <button  style={{backgroundColor:color}} className="btn" onClick={onClick} hidden={hidden}>
        {iconName} {text} {hidden}
      </button>
    );
  };

  Button.defaultProps = {
    color:'red',

}

Button.prototype = {
    text:PropTypes.string,
    color:PropTypes.string,
    onclick:PropTypes.func,
}