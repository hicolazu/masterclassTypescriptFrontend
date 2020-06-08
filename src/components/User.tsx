import React from 'react';

interface IUSer {
    name: string,
    email: string
}

interface Props {
    user: IUSer
}


const User: React.FC<Props> = ({ user }) => {
    return (
        <div> 
            <strong> Nome: </strong> {user.name} <br />
            <strong> Email: </strong> {user.email} <br /> <br /> 
        </div>
    );
};

export default User;