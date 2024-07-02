import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center flex justify-center items-center'>
            <h1>Error</h1>
            <Link to="/">Go back to Home</Link>
        </div>
    );
};

export default ErrorPage;