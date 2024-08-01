import React, {FC, memo} from 'react';
import {IUser} from "../types/types";

interface UsersProps {
  user: IUser
}

const UsersItem: FC<UsersProps> = memo(({user}) => {
  return (
    <div>
      {user.id} {user.name}
    </div>
  );
})

export default UsersItem;