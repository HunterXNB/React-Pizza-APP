import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const username = useSelector((state) => state.user.userName);
  const navigate = useNavigate();
  useEffect(() => {
    if (!username.trim()) navigate('/');
  }, [username, navigate]);
  return username.trim() !== '' ? children : null;
}
