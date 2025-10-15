import React from 'react';
import { Button } from '../../components/button';
import styles from './index.module.scss';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role?: string;
  joinDate?: string;
  isOnline?: boolean;
}

export interface UserProfileProps {
  user: User;
  showActions?: boolean;
  onEdit?: (user: User) => void;
  onMessage?: (user: User) => void;
  onFollow?: (user: User) => void;
  className?: string;
}

const UserProfile: React.FC<UserProfileProps> = ({
  user,
  showActions = true,
  onEdit,
  onMessage,
  onFollow,
  className = '',
}) => {
  const handleEdit = () => {
    onEdit?.(user);
  };

  const handleMessage = () => {
    onMessage?.(user);
  };

  const handleFollow = () => {
    onFollow?.(user);
  };

  return (
    <div
      className={`${styles.userProfile} ${className}`}
      
    >
      <div className={styles.userProfile__header}>
        <div className={styles.userProfile__avatarContainer}>
          {user.avatar ? (
            <img
              src={user.avatar}
              alt={user.name}
              className={styles.userProfile__avatar}
            />
          ) : (
            <div className={styles.userProfile__avatarPlaceholder}>
              {user.name.charAt(0).toUpperCase()}
            </div>
          )}
          {user.isOnline && (
            <div className={styles.userProfile__onlineIndicator} />
          )}
        </div>

        <div className={styles.userProfile__info}>
          <h3 className={styles.userProfile__name}>{user.name}</h3>
          <p className={styles.userProfile__email}>{user.email}</p>
          {user.role && (
            <span className={styles.userProfile__role}>{user.role}</span>
          )}
        </div>
      </div>

      {user.joinDate && (
        <div className={styles.userProfile__details}>
          <p className={styles.userProfile__joinDate}>
            加入时间: {new Date(user.joinDate).toLocaleDateString()}
          </p>
        </div>
      )}

      {showActions && (
        <div className={styles.userProfile__actions}>
          {onEdit && (
            <Button
              variant="default"
              outline
              size="small"
              onClick={handleEdit}
            >
              编辑资料
            </Button>
          )}
          {onMessage && (
            <Button
              variant="primary"
              outline
              size="small"
              onClick={handleMessage}
            >
              发送消息
            </Button>
          )}
          {onFollow && (
            <Button
              variant="default"
              outline
              size="small"
              onClick={handleFollow}
            >
              关注
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
