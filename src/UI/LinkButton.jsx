import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LinkButton(props) {
  const navigate = useNavigate();

  if (props.to === '-1')
    return (
      <button
        className=" text-sm text-blue-500 hover:text-blue-900 hover:underline"
        onClick={() => navigate(-1)}
      >
        {props.children}
      </button>
    );
  return (
    <Link
      className=" text-sm text-blue-500 hover:text-blue-900 hover:underline"
      {...props}
    >
      {props.children}
    </Link>
  );
}
