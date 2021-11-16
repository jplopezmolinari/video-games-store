import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function PurchaseConfirm() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container mt-10 mb-10 ">
          <h1 className="display-4 mt-10">Order Confirmation</h1>
          <p className="lead mb-10">
            Thanks for your order. You'll receive and email witho all details.
            Please check you email for more information. If you have any
            questions, just reply here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PurchaseConfirm;
