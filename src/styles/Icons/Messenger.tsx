import React from 'react';

export const Messenger: React.FC = (props) => {
  return (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
        <path 
            d="M12,2C6.486,2,2,6.262,2,11.5c0,2.545,1.088,4.988,3,6.772v4.346l4.08-2.039C10.039,20.858,11.02,21,12,21 c5.514,0,10-4.262,10-9.5S17.514,2,12,2z M13.167,14.417l-2.917-2.333L5,14.417l5.833-5.833l2.917,2.333L19,8.583L13.167,14.417z"
        />
    </svg>
  );
};