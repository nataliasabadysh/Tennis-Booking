// Core
import React from 'react';

// Instuments

const header = ['Name', 'Time'];
const BookingView = () => {
    return (
        <table>  
            <tr>
                <th>
                    {header.map((item) => (
                        <th key={item}>{item}</th>
                    ))}
                </th>
            </tr>
            <tr>
                <td>Bob</td>
                <td>10:10</td>
                <td>
                    <button type='button'> Add New Game </button>
                </td>
            </tr> 
     </table>
    );
};

export default BookingView;