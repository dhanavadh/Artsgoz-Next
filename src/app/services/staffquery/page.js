import React from 'react';
import Search from './Search';
import UserSSL from './UserSSL';

function AppQuery() {
  return (
    <div>      
      <Search details={UserSSL}/>
    </div>
  );
}

export default AppQuery;