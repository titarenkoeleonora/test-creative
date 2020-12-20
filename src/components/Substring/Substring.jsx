import {useState} from "react";

const Substring = () => {
  const [firstString, setFirstString] = useState("");
  const [secondString, setSecondString] = useState("");

  const getResult = (evt, string1, string2) => {
    evt.preventDefault();

    let array = [];
    string1.split('').reduce((last, item)=>{
      if (string2.indexOf(`${last}${item}`) !== -1) {
        array.push(`${last}${item}`);
        return `${last}${item}`;
      }
      else return item;
    }, '');

    const result = array.sort((a, b) => b.length - a.length)[0];

    console.log("Первая строка", firstString);
    console.log("Вторая строка", secondString);
    console.log("Общая последовательность 2х строк:", result === undefined ? "Не найдена" : result);
  };

  const resetForm = () => {
    setFirstString("");
    setSecondString("");
  };

  return (
    <section className="substring">
      <div className="container">
        <form className="substring__form" method="post">
          <label className="substring_label" htmlFor="first-string">Введите первую строку:</label>
          <input
            className="substring__input"
            type="text"
            id="first-string"
            required
            onInput={(evt) => setFirstString(evt.target.value)}
          />
          <label className="substring_label" htmlFor="second-string">Введите вторую строку:</label>
          <input
            className="substring__input"
            type="text"
            id="second-string"
            required
            onInput={(evt) => setSecondString(evt.target.value)}
          />

          <div className="substring__buttons-wrapper">
            <button
              className="substring__button-submit button"
              type="submit"
              onClick={(evt) => getResult(evt, firstString, secondString)}
            >
              Показать результат
            </button>
            <button
              className="substring__button-reset button"
              type="reset"
              onClick={resetForm}
            >
              Очистить
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Substring;