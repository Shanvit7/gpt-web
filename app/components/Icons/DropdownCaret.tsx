import React, { FC } from 'react';
/******** INTERFACES **********/
import { DropdownCaretProps } from '../../utils/interfaces';


const DropdownCaret: FC<DropdownCaretProps> = ({ isUp }) => {
  return (
    <svg
      className="w-4 h-4 fill-current text-gray-400"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      style={{ transform: `${isUp ? 'rotate(180deg)' : 'rotate(0deg)'}` }}
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
      />
    </svg>
  );
};

export default DropdownCaret;
