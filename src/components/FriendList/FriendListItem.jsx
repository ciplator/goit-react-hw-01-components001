import css from './FriendList.module.css';

export const FriendListItem = ({ id, avatar, name, statusColor }) => {
  return (
    <li key={id} className={css.item}>
      <span style={statusColor} className={css.status}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
