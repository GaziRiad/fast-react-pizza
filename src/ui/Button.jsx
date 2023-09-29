import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-all duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + " px-4 py-3 sm:px-6 ",
    small: base + " py-2 px-2 text-xs  md:px-5 md:py-2.5",
    secondary:
      "inline-block text-sm rounded-full font-semibold uppercase tracking-wide border-2 border-stone-300 text-stone-400 hover:bg-stone-300 transition-all duration-300 focus:outline-none focus:ring focus:ring-stone-200 focus:bg-stone-300 hover:text-stone-800 focus:text-stone-800 focus:ring-offset-2 disabled:cursor-not-allowed px-3 py-2.5 sm:px-6 ",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
