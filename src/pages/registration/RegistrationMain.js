import React from 'react';
import ReactMarkdown from 'react-markdown';

import registrationMain from '../../content/registration/registration-main.js'

export function RegistrationMain() {
  return (
    <ReactMarkdown source={registrationMain} className="registration-container"/>
  );
}
