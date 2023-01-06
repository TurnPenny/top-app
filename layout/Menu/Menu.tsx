import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem } from '../../interfaces/menu.interface';
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
        {firstLevelMenu.map((menu) => (
          <div key={menu.route}>
            <a href={`/${menu.route}`}>
              <div
                className={cn(styles.firstLevel, {
                  [styles.firstLevel__active]: menu.id == firstCategory,
                })}
              >
                {menu.icon}
                <span>{menu.name}</span>
              </div>
            </a>
            {buildSecondLevel}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = () => {
    return <></>;
  };

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
