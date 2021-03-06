import {useState} from "react";


const Checkboxes = ({animals}) => {
  const [checkedInputs, setCheckedInputs] = useState([false, false, false]);
  const [checkboxAllChecked, setCheckboxAllChecked] = useState(false);
  console.log(animals)

  const getCheckedInputs = (evt, index) => {
    const value = evt.target.checked;

    setCheckedInputs([...checkedInputs.slice(0, index), value, ...checkedInputs.slice(index + 1)]);
    setCheckboxAllChecked(false);
  };

  const checkAllCheckbox = () => {
    setCheckboxAllChecked(!checkboxAllChecked);

    if (checkboxAllChecked === false) {
      setCheckedInputs([true, true, true]);
    } else {
      setCheckedInputs([false, false, false]);
    }
  };

  return (
    <section className="checkboxes">
      <div className="container">
        <div className="checkboxes__wrapper">
          <h2 className="checkboxes__title">Отображение/скрытие элементов при переключении чек-боксов</h2>
          <form className="checkboxes-form checkboxes__form" method="get" action="#">
            <p className="checkboxes-form__title">Ваше любимое животное:</p>
            <ul className="checkboxes-form__list">
              <li className="checkboxes-form__item">
                <input
                  className="checkbox checkboxes-form__checkbox visually-hidden"
                  type="checkbox"
                  id="all"
                  name="all"
                  onChange={checkAllCheckbox}
                  checked={checkboxAllChecked}
                />
                <label className="checkboxes-form__label" htmlFor="all" >Все</label>
              </li>

              {animals.map((animal, index) => (
                <li className="checkboxes-form__item" key={animal + index}>
                  <input
                    className="checkbox checkboxes-form__checkbox visually-hidden"
                    type="checkbox"
                    id={animal.id + index}
                    name={animal.id}
                    onChange={(evt) => getCheckedInputs(evt, index)}
                    checked={checkedInputs[index]}
                  />
                  <label className="checkboxes-form__label" htmlFor={animal.id + index} >{animal.title}</label>
                  {checkedInputs[index] === true ?
                    <img className="checkboxes-form__animal" src={`./images/${animal.id}.png`} width="50" height="50" alt={animal.title}/>
                    : ""
                  }
                </li>
              ))}
            </ul>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Checkboxes;