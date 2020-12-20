import {Link} from "react-router-dom";

const Menu = ({myref}) => {
  return (
    <section className="menu" ref={myref}>
      <div className="menu__wrapper">
        <nav className="menu__navigation">
          <ul className="sidebar menu__sidebar">
            <li className="sidebar__item">
              <Link to="/" className="sidebar__link">
                Главная страница
              </Link>
            </li>
            <li className="sidebar__item">
              <Link to="/movement" className="sidebar__link">
                Функция сдвига элементов вправо на N шагов
              </Link>
            </li>
            <li className="sidebar__item">
              <Link to="/substring" className="sidebar__link">
                Функция нахождения самой длинной последовательности 2х строк
              </Link>
            </li>
            <li className="sidebar__item">
              <Link to="/checkboxes" className="sidebar__link">
                Отображение/скрытие элементов при переключении чек-боксов
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Menu;