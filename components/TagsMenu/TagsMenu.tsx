import css from './TagsMenu.module.css';
import Link from 'next/link';

export default function TagsMenu() {
  return (
    <div className="css.menuContainer">
      {/* <Link href="/notes">Notes</Link> */}
      <button className={css.menuButton}>Notes ▾</button>
      <ul className={css.menuList}>
        <li className={css.menuItem}>
          <Link href={'/'} className={css.menuLink}>
            All notes
          </Link>
        </li>
        <li className={css.menuItem}>
          <Link href={'/'} className={css.menuLink}>
            Todo
          </Link>
        </li>
        <li className={css.menuItem}>
          <Link href={'/'} className={css.menuLink}>
            Work
          </Link>
        </li>
        <li className={css.menuItem}>
          <Link href={'/'} className={css.menuLink}>
            Personal
          </Link>
        </li>
        <li className={css.menuItem}>
          <Link href={'/'} className={css.menuLink}>
            Meeting
          </Link>
        </li>
        <li className={css.menuItem}>
          <Link href={'/'} className={css.menuLink}>
            Shopping
          </Link>
        </li>
      </ul>
    </div>
  );
}
