import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
      {
        id: "u1",
        name: "Paulin",
        image: "https://styles.redditmedia.com/t5_2uxuw/styles/communityIcon_65gv0klkzql51.png",
        places: 3,
      },
    ];

    return <UsersList items={USERS} />;
};

export default Users;
