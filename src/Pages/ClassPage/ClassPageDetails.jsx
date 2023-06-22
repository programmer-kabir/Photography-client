import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ClassPageDetails = () => {
    const classesDetails = useLoaderData()
    console.log(classesDetails);
    return (
        <div>
            <p>Details</p>
        </div>
    );
};

export default ClassPageDetails;