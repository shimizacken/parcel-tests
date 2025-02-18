import React from 'react';

let passwordValidator;

import('zxcvbn').then((zxcvbn) => {
  passwordValidator = zxcvbn;
  console.log('🚀 ~ passwordValidator:', passwordValidator('Tr0ub4dour&3'));
});

export const PasswordMeterTextFieldContainer: React.FC = () => {
  return <input />;
};
