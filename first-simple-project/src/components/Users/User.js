import React from 'react';

import './User.module.css';

const User = props => {
  // const [deleteText, setDeleteText] = useState('');



  return (
    <li>
      {props.children}
    </li>
  );
};

export default User;
