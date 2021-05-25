import React,{useState} from 'react';
import { getDate } from './date';

const GetDate = () => {

    const current_date = getDate.filter((date) => {
            return date.CustomerID === 1;
    });

 return (
        <div>
            {current_date.map((date) => (
                <li key={date.CustomerID}>{date.CustomerName}</li>
            ))}
        </div>
    );
}

export default GetDate;