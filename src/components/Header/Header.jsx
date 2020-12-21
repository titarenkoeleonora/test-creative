const Header = ({toggleMenu}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <button
            className="header__menu-toggle"
            type="button"
            aria-label="Показать/скрыть меню"
            onClick={toggleMenu}
          >
            Меню
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;