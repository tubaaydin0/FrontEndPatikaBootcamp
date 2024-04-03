import React from 'react';
import { formatMoney } from '../../helpers/moneyUtils';
import "./Receipt.css";

const Receipt = ({ receiptList }) => {
    const calculateTotalPrice = () => {
        let totalPrice = 0;
        receiptList.forEach(product => {
            totalPrice += product.productPrice * product.quantity;
        });
        return Math.max(totalPrice, 0); // Eğer hesaplanan toplam fiyat negatifse 0 olarak ayarla
    };

    return (
        <div className={'receipt-container'}>
            <span className={'title'}>Your Receipt</span>
            <div>
                {receiptList.map(product => (
                    <div className={"receipt-product"} key={product.id}>
                        <div className={"receipt-product-name"}>{product.productName}</div>
                        <div className={"receipt-product-piece"}>x{product.quantity}</div>
                        <div className={"receipt-product-price"}>
                            ${formatMoney(product.productPrice * product.quantity)}
                        </div>
                    </div>
                ))}
                <hr />
            </div>
            <hr />
            <div className={"receipt-product receipt-total"}>
                <span className={"total-text"}>TOTAL</span>
                <div className={"total-price"}>${formatMoney(calculateTotalPrice())}</div>
            </div>
        </div>
    );
}

export default Receipt;
