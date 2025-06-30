import Link from 'next/link';
import css from './SidebarNotes.module.css';
import { tagsList } from '@/constants/constants';

export default function SidebarNotes() {
  return (
    <ul className={css.menuList}>
      <li className={css.menuItem}>
        <Link
          href={`/notes/filter/All`}
          className={css.menuLink}
          // onClick={toggle}
        >
          All notes
        </Link>
      </li>
      {tagsList.map(tag => (
        <li key={tag} className={css.menuItem}>
          <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
}
