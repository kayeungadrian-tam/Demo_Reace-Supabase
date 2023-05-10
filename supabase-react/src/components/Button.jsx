import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'primereact/button';

import '../assets/css/button.css';
/**
 * Primary UI component for user interaction
 */
export const MyButton = ({ primary, backgroundColor, size, label, icon, severity, ...props }) => {
  const mode = primary ? 'rounded' : 'outlined';
  if(primary){
    return (
      <Button
      rounded
      icon={icon}
      label={label}
      severity={severity}
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    />

   );
  } else {
    return (
      <Button
      rounded
      outlined
      icon={icon}
      label={label}
      severity={severity}
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    />

   );
  }
};

MyButton.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What icon to use
   */
  icon: PropTypes.string,
  /**
   * What type of button to use [secondary | success | info | warning | help | danger]
   */
  severity: PropTypes.string,

  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

MyButton.defaultProps = {
  backgroundColor: null,
  primary: false,
  severity: "Primary",
  icon: "pi pi-check",
  size: 'medium',
  onClick: undefined,
};
