import React, { useState } from 'react';
import Header from './Components/Header/Header'
import TotalMoney from './Components/TotalMoney/TotalMoney';
import Products from './Components/Products/Products';
import Receipt from './Components/Receipt/Receipt';
import './App.css';
import { productList as importedProductList } from './products'; // productList değişkenini importedProductList olarak import et

function App() {
  const [totalMoney, setTotalMoney] = useState(100000000000);
  const [productList, setProductList] = useState(importedProductList);
  const [receiptList, setReceiptList] = useState([]);

  const balance = (amount) => { // Toplam ücret alanı

    setTotalMoney((prevTotalMoney) => prevTotalMoney - amount);
  };

  return (
    <div className="container">
      <Header />
      <TotalMoney totalMoney={totalMoney} transactionResult={0} />
      <div className="products-container">
        {productList.map((product) => (
          <Products
            key={product.id}
            productImg={product.productImg}
            productName={product.productName}
            productPrice={product.productPrice}
            balance={balance}
            totalMoney={totalMoney}
            setProductList={setProductList}
            receiptList={receiptList}
            setReceiptList={setReceiptList}
          />
        ))}
      </div>
      <Receipt receiptList={receiptList} />
    </div>
  );
}

export default App;
