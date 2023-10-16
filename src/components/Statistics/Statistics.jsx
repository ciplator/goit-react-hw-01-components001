import css from './Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.list}>
        {stats.map(({ id, label, percentage }) => {
          const statisticStyle = {
            backgroundColor: getRandomHexColor(),
          };

          return (
            <li style={statisticStyle} key={id} className={css.item}>
              <span className={css.label}>{label}</span>
              <span className={css.quantity}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
