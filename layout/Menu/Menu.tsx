import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import styles from './Menu.module.css';
import cn from 'classnames';
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import { TopLevelCategory } from '../../interfaces/page.interface';

const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: 'courses',
    name: 'Courses',
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: 'books',
    name: 'Books',
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: 'products',
    name: 'Products',
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
  },
  {
    route: 'services',
    name: 'Services',
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
];

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((menuItem) => (
          <div key={menuItem.route}>
            <a href={`/${menuItem.route}`}>
              <div
                className={cn(styles.firstLevel, {
                  [styles.firstLevel__active]: menuItem.id == firstCategory,
                })}
              >
                {menuItem.icon}
                <span>{menuItem.name}</span>
              </div>
            </a>
            {menuItem.id == firstCategory && buildSecondLevel(menuItem)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (firstLevelMenu: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((item) => (
          <div key={item._id.secondCategory}>
            <div className={styles.secondLevel}>{item._id.secondCategory}</div>
            <div
              className={cn(styles.secondLevel__block, {
                [styles.secondLevel__blockOpen]: item.isOpened,
              })}
            >
              {buildThirdLevel(item.pages, firstLevelMenu.route)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((page) => (
      <a
        href={`/${route}/${page.alias}`}
        className={cn(styles.thirdLevel, {
          [styles.thirdLevel__active]: true, //fix it later
        })}
      >
        {page.category}
      </a>
    ));
  };

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
