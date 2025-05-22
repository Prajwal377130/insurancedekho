import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const PaymentHistory = () => {
  const { auth } = useContext(AuthContext);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await fetch(`http://localhost:4000/api/payment/history`);
        if (!res.ok) throw new Error('Failed to fetch payment history');
        const data = await res.json();
        setHistory(data);
      } catch (error) {
        console.error(error);
        setHistory([]);
      }
    };

    if (auth && auth._id) {
      fetchHistory();
    }
  }, [auth]);

  return (
    <div>
      <h2>Payment History</h2>
      {history.length === 0 ? (
        <p>No payments found.</p>
      ) : (
        <ul>
          {history.map((item, idx) => (
            <li key={idx}>
              <strong>{item.policyName}</strong> — ₹{item.amount} on{' '}
              {new Date(item.date).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PaymentHistory;
