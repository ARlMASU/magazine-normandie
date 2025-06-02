import styles from "./FiltersMenu.module.scss";

import data from "@/data.json";

import Button from "@/src/components/Button/Button";
import FilterSelectionButton from "./FilterSelectionButton/FilterSelectionButton";

import closeIcon from "@/src/assets/images/icons/close.svg";
import filtersIcon from "@/src/assets/images/icons/filters.svg";

export default function FiltersMenu({
  onClick,
  handleFilterSelectionButtonClick,
  selectedFilters,
  handleReset,
  noFiltersSelected,
}) {
  return (
    <div className={styles.filtersMenu}>
      <div className={styles.filtersMenu__header}>
        <div className={styles.filtersMenu__header__titleWrap}>
          <img
            src={filtersIcon}
            alt="Filtres"
            className={styles.filtersMenu__header__titleWrap__icon}
          />
          <h1 className={styles.filtersMenu__header__titleWrap__title}>
            Filtres
          </h1>
        </div>
        <div className={styles.filtersMenu__header__buttonWrap}>
          <Button
            src={closeIcon}
            alt="Close"
            bora={1}
            color="on-surface-1"
            bg="surface-2"
            bgHover="primary-variant-hover"
            bgActive="primary-variant-active"
            onClick={onClick}
          ></Button>
        </div>
      </div>
      <hr className={styles.filtersMenu__hr} />
      <main className={styles.filtersMenu__main}>
        <section className={styles.filtersMenu__main__section}>
          <span className={styles.filtersMenu__main__section__titleWrap}>
            <h2 className={styles.filtersMenu__main__section__titleWrap__title}>
              Classes
            </h2>
            {noFiltersSelected == false && (
              <button
                className={styles.filtersMenu__main__section__titleWrap__button}
                onClick={handleReset}
              >
                <img src={closeIcon} alt="Tout effacer" />
                <p>Tout effacer</p>
              </button>
            )}
          </span>
          <span className={styles.filtersMenu__main__section__filtersSelection}>
            {data.filters.classes.map((classItem, key) => (
              <FilterSelectionButton
                key={key}
                onClick={() =>
                  handleFilterSelectionButtonClick("classes", classItem)
                }
                isSelected={selectedFilters.classes.has(classItem)}
              >
                {classItem}
              </FilterSelectionButton>
            ))}
          </span>
        </section>
        <section className={styles.filtersMenu__main__section}>
          <span className={styles.filtersMenu__main__section__titleWrap}>
            <h2 className={styles.filtersMenu__main__section__titleWrap__title}>
              Options
            </h2>
          </span>
          <span className={styles.filtersMenu__main__section__filtersSelection}>
            {data.filters.options.map((option, key) => (
              <FilterSelectionButton
                key={key}
                onClick={() => handleClick("options", option)}
                isSelected={selectedFilters.options.has(option)}
              >
                {option}
              </FilterSelectionButton>
            ))}
          </span>
        </section>
      </main>
    </div>
  );
}
