import React from 'react';
import AddPayments from '../../components/AddPayments/AddPayments';

const PaymentsPage = () => {
  return (
    <div className="payment-page mx-auto max-w-screen-xl px-16 page__container">
      <h1 data-testid='paymentsHeading'>Add Payments</h1>
      <div className="page-details__container">
        <AddPayments/>
      </div>
    </div>
  );
}

export default PaymentsPage;
