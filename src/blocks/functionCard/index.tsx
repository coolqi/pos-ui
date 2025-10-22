import React, { memo } from 'react';
import { Icon } from '@/components/icon';
import styles from './index.module.scss';
import { FUNCTION_CARD_NAME } from '@/types';

export interface FunctionCardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: FUNCTION_CARD_NAME;
  title?: string;
  onClick?: (name: FUNCTION_CARD_NAME) => void;
  disabled?: boolean;
  size?: 'sm' | 'lg';
  className?: string;
}

const iconMap: Record<FUNCTION_CARD_NAME, string> = {
  [FUNCTION_CARD_NAME.DINE_IN]: 'dineIn',
  [FUNCTION_CARD_NAME.TOGO]: 'togo',
  [FUNCTION_CARD_NAME.PICKUP]: 'pickup',
  [FUNCTION_CARD_NAME.DELIVERY]: 'delivery',
  [FUNCTION_CARD_NAME.RECALL]: 'recall',
  [FUNCTION_CARD_NAME.OPEN_DRAW]: 'drawer',
  [FUNCTION_CARD_NAME.REPORT]: 'report',
  [FUNCTION_CARD_NAME.ADMIN]: 'admin',
  [FUNCTION_CARD_NAME.BATCH]: 'batch',
};

const FunctionCardComponent: React.FC<FunctionCardProps> = ({
  name,
  title,
  onClick,
  disabled,
  size = 'sm',
  className = '',
  ...rest
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick(name);
    }
  };

  const iconName = iconMap[name] || 'defaultMenu';

  const cardClassNames = [
    styles.functionCard,
    disabled && styles['functionCard--disabled'],
    size === 'sm' && styles.sm,
    size === 'lg' && styles.lg,
    className,
  ].filter(Boolean).join(' ');

  const iconClassNames = [
    styles.cardIcon,
    size === 'lg' && styles.lg,
    size === 'sm' && styles.sm,
  ].filter(Boolean).join(' ');

  const titleClassNames = [
    styles.cardTitle,
    size === 'lg' && styles.lg,
    size === 'sm' && styles.sm,
  ].filter(Boolean).join(' ');

  return (
    <button
      type="button"
      className={cardClassNames}
      data-card-id={name?.toLowerCase()}
      data-card-size={size}
      onClick={handleClick}
      disabled={disabled}
      aria-label={title}
      {...rest}
    >
      <div className={iconClassNames}>
        {name && !name.startsWith('empty-') ? (
          <Icon name={iconName} size={size === 'lg' ? 64 : 36} />
        ) : null}
      </div>
      <h3 className={titleClassNames}>
        {title}
      </h3>
    </button>
  );
};

export const FunctionCard = memo(FunctionCardComponent);
