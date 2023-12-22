import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "./../../app/hooks"


import { fetchUsers } from "./userSlice";

const UserView = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  console.log(users);

  return (
    <div>
      <h2>List of Users</h2>
      {users.loading ? (
        <div>loading...</div>
      ) : users.error !== "" ? (
        <div>{users.error}</div>
      ) : users.users.length > 0 ? (
        <div>
          {users.users.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </div>
      ) : (
        <div>null</div>
      )}
    </div>
  );
};

export default UserView;
