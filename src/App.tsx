import React from 'react';
import DefaultAvatar from './images/avatar.svg';
import { JsonPanel } from './JsonPanel.view';
import { PasswordMeterTextFieldContainer } from './PasswordMeterTextField.container';

export const App = () => {
  return (
    <div>
      <DefaultAvatar style={{ width: 50 }} />
      <h1>Hello parcel!</h1>
      <section>
        <JsonPanel />
      </section>
      <section>
        Password
        <br />
        <PasswordMeterTextFieldContainer />
      </section>
    </div>
  );
};
