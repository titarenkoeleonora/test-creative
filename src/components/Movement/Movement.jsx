import { useState, useRef } from "react";

const Movement = () => {
  const arrayInputElement = useRef(null);
  const countInputElement = useRef(null);
  const [array, setArray] = useState([]);
  const [movementCount, setMovementCount] = useState(0);

  const getArrayInputValues = () => {
    setArray(arrayInputElement.current.value.split(""));
  };

  const getCountInputValue = () => {
    setMovementCount(countInputElement.current.value);
  };

  const moveArray = (evt) => {
    evt.preventDefault();

    console.log("Входной массив", arrayInputElement.current.value.split(""));
    console.log("Кол-во шагов", countInputElement.current.value);
    console.log(
      "Выходной массив",
      array.concat(array.splice(0, array.length - movementCount))
    );
  };

  const resetForm = () => {
    setArray([]);
    setMovementCount(0);
  };

  return (
    <section className="movement">
      <div className="container">
        <div className="movement__wrapper">
          <h2 className="movement__title">
            Функция сдвига элементов массива вправо на N шагов
          </h2>
          <form className="movement__form" method="post">
            <label className="movement__label" id="movement-array">
              Введите числа или буквы
            </label>
            <input
              className="movement__input input-text"
              type="text"
              htmlFor="movement-array"
              ref={arrayInputElement}
              onInput={getArrayInputValues}
              pattern="/\d+/g"
              required
            />
            <label className="movement__label" id="movement-count">
              Введите кол-во шагов для передвижения массива
            </label>
            <input
              className="movement__input  input-text"
              type="number"
              htmlFor="movement-count"
              ref={countInputElement}
              onInput={getCountInputValue}
              required
            />
            <div className="movement__buttons-wrapper">
              <button
                className="movement__submit-button button"
                type="submit"
                aria-label="Показать результат"
                onClick={moveArray}
              >
                Показать результат
              </button>
              <button
                className="movement__reset-button button"
                type="reset"
                aria-label="Очистить форму"
                onClick={resetForm}
              >
                Очистить
              </button>
            </div>
          </form>

          <p className="movement__result-text">
            Для просмотра результата откройте консоль (F12)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Movement;
