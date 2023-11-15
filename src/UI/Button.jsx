import React from 'react';
import { Link } from 'react-router-dom';

export default function Button(props) {
  const base = ` inline-block text-sm rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-600 `;
  const styles = {
    round: base + 'py-1 px-2.5 text-s md:px-3.5 md:py-2',
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + 'py-2 px-4 text-xs md:px-5 md:py-2.5',
    secondary:
      'inline-block text-sm rounded-full px-4 py-2.5 md:px-6 md:py-3.5 border-2 border-stone-300  font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-600 ',
  };
  if (props.to)
    return (
      <Link
        className=" inline-block rounded-full  bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-600 sm:px-6 sm:py-4"
        to={props.to}
      >
        {props.children}
      </Link>
    );
  return (
    <button className={styles[props.type]} {...props}>
      {props.children}
    </button>
  );
}
