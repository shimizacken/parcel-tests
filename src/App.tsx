import React from 'react';
import DefaultAvatar from './images/avatar.svg';
console.log('🚀 ~ DefaultAvatar:', DefaultAvatar);

export const App = () => {
  return (
    <div>
      <DefaultAvatar style={{ width: 50 }} />
      <h1>Hello parcel!</h1>
    </div>
  );
};
