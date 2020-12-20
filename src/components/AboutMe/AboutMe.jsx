import { Link } from "react-router-dom";

const Tasks = () => {
  return (
    <section className="tasks">
      <div className="container">
        <div className="tasks__wrapper">
          <h2 className="tasks__title">Выполненные задания</h2>
          <ul className="tasks__list">
            <li className="tasks__item">
              <Link className="tasks__link" to="/movement">
                Функция сдвига элементов массива вправо на N шагов.
              </Link>
            </li>
            <li className="tasks__item">
              <Link className="tasks__link" to="/substring">
                Функция нахождения самой длинной общей последовательности 2х
                строк.
              </Link>
            </li>
            <li className="tasks__item">
              <Link className="tasks__link" to="/checkboxes">
                Отображение/скрытие элементов при переключении чекбоксов.
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Tasks;
