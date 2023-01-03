import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Walter White',
      image:'https://mixdeseries.com.br/wp-content/uploads/2022/04/Cena-Breaking-Bad-Walter-White.jpg',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
