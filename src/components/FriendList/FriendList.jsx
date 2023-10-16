import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        const statusStyles = {
          backgroundColor: isOnline ? '#97e605' : '#f9bf04',
        };
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            statusColor={statusStyles}
          />
        );
      })}
    </ul>
  );
};
