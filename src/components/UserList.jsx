import React from 'react';
import UserItem from './UserItem';

function UserList(props) {
    const { users } = props;

    return (
        <div>
            <h2 className="mt-5">Lista utilizatorilor:</h2>
            <div className="info d-flex flex-row flex-wrap">
            { users.map((user, index) => {
                return <UserItem
                    id={ user.id }
                    name={ user.name }
                    email={ user.email }
                    isGoldClient={ user.isGoldClient }
                    key={ index }
                    salary={user.salary}
                    image={user.image}
                />
            })}
            </div>
        </div>
    );
}

export default UserList;