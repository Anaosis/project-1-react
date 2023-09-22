import React from 'react';

function UserItem(props) {
    const { name, email, isGoldClient, salary, image } = props;

    return (
        <div className="card m-3"  style={{  width: '13.5rem' }}>
            <img className="card-img-top" src={image} alt="just in case"/>
            <div className="card-body">
                <p className="card-text">
                    <h3>{name}</h3>
                    <p>{email}</p>
                    {isGoldClient ? <h3>Client GOLD</h3> : null}
                    <p>Salariu: {salary}</p>
                </p>
            </div>
            </div>
    );
}

export default UserItem;
