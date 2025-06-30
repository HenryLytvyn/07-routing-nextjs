'use client';

import css from './TagsMenu.module.css';
import { useState } from 'react';
import TagsItems from '../TagsItems/TagsItems';

export default function TagsMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  function CloseMenu() {
    setIsOpen(false);
  }

  return (
    <div className={css.menuContainer}>
      <button onClick={toggle} className={css.menuButton}>
        Notes ▾
      </button>
      {isOpen && (
        <ul className={css.menuList}>
          <TagsItems tagsMenuClose={CloseMenu} />
        </ul>
      )}
    </div>
  );
}
