import React from 'react';
import ReactMarkdown from 'react-markdown';

import paymentInformation from '../../content/registration/payment-information.js'

export default function PaymentInformation() {
  return (
    <ReactMarkdown source={paymentInformation} className="registration-container"/>
  );
}
