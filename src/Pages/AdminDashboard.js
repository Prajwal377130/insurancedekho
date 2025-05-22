import React, { useState, useEffect, useContext, useCallback } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom'; 
import './AdminDashboard.css';

const AdminDashboard = () => {
  const { auth, logout } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('users');
  const [users, setUsers] = useState([]);
  const [payments, setPayments] = useState([]);
  const [policies, setPolicies] = useState([]);
   const navigate = useNavigate(); 


   const handleLogout = () => {
    logout();          
    navigate('/');     
  };

  const fetchUsers = useCallback(async () => {
    try {
      const res = await fetch('http://localhost:4000/api/auth/getall', {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  }, [auth.token]);

  const fetchPayments = useCallback(async () => {
    try {
      const res = await fetch('http://localhost:4000/api/payment/history', {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const data = await res.json();
      setPayments(data);
    } catch (error) {
      console.error('Failed to fetch payments:', error);
    }
  }, [auth.token]);

useEffect(() => {
  const fetchAllPolicies = async () => {
    try {
      const [carRes, bikeRes, termRes] = await Promise.all([
        fetch('http://localhost:4000/api/car-insurance/getall', {
          headers: { Authorization: `Bearer ${auth.token}` },
        }),
        fetch('http://localhost:4000/api/bike-insurance/getall', {
          headers: { Authorization: `Bearer ${auth.token}` },
        }),
        fetch('http://localhost:4000/api/term-insurance/getall', {
          headers: { Authorization: `Bearer ${auth.token}` },
        }),
      ]);

      const carPolicies = await carRes.json();
      const bikePolicies = await bikeRes.json();
      const termPolicies = await termRes.json();

      setPolicies([...carPolicies, ...bikePolicies, ...termPolicies]);
    } catch (error) {
      console.error('Failed to fetch policies:', error);
    }
  };

  if (activeTab === 'users') fetchUsers();
  else if (activeTab === 'payments') fetchPayments();
  else if (activeTab === 'policies') fetchAllPolicies();
}, [activeTab, fetchUsers, fetchPayments, auth.token]);




  return (
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
       <button onClick={handleLogout} className="logout-btn">
    Logout
  </button>
      </header>

      <nav className="tab-nav">
        {['users', 'payments', 'policies'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </nav>

      {activeTab === 'users' && (
        <section className="card-grid">
          {users.length === 0 ? (
            <p>No users found</p>
          ) : (
            users.map(({ _id, name, email, role }) => (
              <div key={_id} className="card">
                <h3>{name}</h3>
                <p><strong>Email:</strong> {email}</p>
              </div>
            ))
          )}
        </section>
      )}

      {activeTab === 'payments' && (
        <section className="card-grid">
          {payments.length === 0 ? (
            <p>No payments found</p>
          ) : (
            payments.map(({ _id, userId, policyName, coverageAmount, date }) => (
              <div key={_id} className="card">
                <p><strong>User ID:</strong> {userId}</p>
                <p><strong>Policy:</strong> {policyName}</p>
                <p><strong>CoverageAmount:</strong> ₹{coverageAmount}</p>
                <p><strong>Date:</strong> {new Date(date).toLocaleString()}</p>
              </div>
            ))
          )}
        </section>
      )}

      {activeTab === 'policies' && (
        <section className="card-grid">
          {policies.length === 0 ? (
            <p>No policies found</p>
          ) : (
            policies.map(({ _id, policyName, insurer, coverageAmount, premium }) => (
              <div key={_id} className="card">
                <h3>{policyName}</h3>
                <p><strong>Insurer:</strong> {insurer}</p>
                <p><strong>Coverage:</strong> ₹{coverageAmount}</p>
                <p><strong>Premium:</strong> ₹{premium}</p>
              </div>
            ))
          )}
        </section>
      )}
    </div>
  );
};

export default AdminDashboard;
