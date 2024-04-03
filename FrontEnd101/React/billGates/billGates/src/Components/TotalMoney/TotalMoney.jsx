import React from 'react';
import { formatMoney } from '../../helpers/moneyUtils';
import "./TotalMoney.css";

const TotalMoney = ({ totalMoney, transactionResult }) => {
    let updatedTotalMoney = totalMoney - transactionResult;
    updatedTotalMoney = Math.max(updatedTotalMoney, 0); // En az 0 olacak şekilde ayarla

    const formattedMoney = formatMoney(updatedTotalMoney);

    return (
        <div className='total-money-container'>
            ${formattedMoney}
        </div>
    );
}

export default TotalMoney;
