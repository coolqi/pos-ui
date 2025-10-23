import React from 'react';
import styles from './index.module.scss';
import {SuccessIcon, ErrorIcon, WarningIcon, InfoIcon, DarkIcon, LightIcon, CloseIcon, AdminIcon, BatchIcon, DeliveryIcon, DineInIcon, DrawerIcon, PickupIcon, RecallIcon, ReportIcon, RoleIcon, TogoIcon, DefaultMenuIcon, BackspaceIcon, CapsLockIcon, EnterIcon, HideIcon, NextIcon, PrevIcon, TabIcon} from './icons';
export interface IconProps extends React.SVGAttributes<SVGElement> {
  /** 图标名称 */
  name?: string;
  /** 图标尺寸（像素） */
  size?: number | string;
  /** 图标颜色 */
  color?: string;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 是否旋转动画 */
  spin?: boolean;
}

// 内置图标 SVG 路径
const ICONS: Record<string, string> = {
  // 基础图标
  'loading': 'M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83',
  'search': 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.35-4.35',
  'plus': 'M12 5v14M5 12h14',
  'minus': 'M5 12h14',
  'close': 'M18 6L6 18M6 6l12 12',
  'check': 'M20 6L9 17l-5-5',
  'arrow-up': 'M12 19V5M5 12l7-7 7 7',
  'arrow-down': 'M12 5v14M19 12l-7 7-7-7',
  'arrow-left': 'M19 12H5M12 19l-7-7 7-7',
  'arrow-right': 'M5 12h14M12 5l7 7-7 7',
  'chevron-up': 'M18 15l-6-6-6 6',
  'chevron-down': 'M6 9l6 6 6-6',
  'chevron-left': 'M15 18l-6-6 6-6',
  'chevron-right': 'M9 18l6-6-6-6',
  'trash': 'M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6',
  'edit': 'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z',
  'settings': 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z',
  'user': 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  'users': 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  'home': 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
  'mail': 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6',
  'phone': 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',
};

const SYSTEM_ICONS = ['success', 'error', 'warning', 'info', 'dark', 'light', 'close', 'admin', 'batch', 'delivery', 'dineIn', 'drawer', 'pickup', 'recall', 'report', 'role'];

const MENU_ICONS = ['admin', 'batch', 'togo', 'delivery', 'dineIn', 'drawer', 'pickup', 'recall', 'report', 'defaultMenu'];

const KEYBOARD_ICONS = ['backspace', 'enter', 'capsLock', 'tab', 'hide', 'prev'];

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  (
    props,
    ref
  ) => {
    const {
      size,
      name = 'heart',
      spin = false,
      style,
      ...restProps
    } = props;
    const {
      color,
      className = '',
      ...rest
    } = restProps;

    const classNames = [
      styles.icon,
      spin && styles['icon--spin'],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const iconStyle: React.CSSProperties = {
      width: typeof size === 'number' ? `${size}px` : size,
      height: typeof size === 'number' ? `${size}px` : size,
      color,
      ...style,
    };

    switch (name) {
      case 'success':
        return <SuccessIcon className={classNames} style={iconStyle} {...restProps} />;
      case 'error':
        return <ErrorIcon className={classNames} style={iconStyle} {...rest} />;
      case 'warning':
        return <WarningIcon className={classNames} style={iconStyle} {...rest} />;
      case 'info':
        return <InfoIcon className={classNames} style={iconStyle} {...rest} />;
      case 'dark': 
        return <DarkIcon className={classNames} style={iconStyle} {...rest} />;
      case 'light':
        return <LightIcon className={classNames} style={iconStyle} {...rest} />;
      case 'close':
        return <CloseIcon className={classNames} style={iconStyle} {...rest} />;
      case 'admin':
        return <AdminIcon className={classNames} style={iconStyle} {...rest} />;
      case 'batch':
        return <BatchIcon className={classNames} style={iconStyle} {...rest} />;
      case 'delivery':
        return <DeliveryIcon className={classNames} style={iconStyle} {...rest} />;
      case 'dineIn':
        return <DineInIcon className={classNames} style={iconStyle} {...rest} />;
      case 'drawer':
        return <DrawerIcon className={classNames} style={iconStyle} {...rest} />;
      case 'pickup':
        return <PickupIcon className={classNames} style={iconStyle} {...rest} />;
      case 'recall':
        return <RecallIcon className={classNames} style={iconStyle} {...rest} />;
      case 'report':
        return <ReportIcon className={classNames} style={iconStyle} {...rest} />;
      case 'role':
        return <RoleIcon className={classNames} style={iconStyle} {...rest} />;
      case 'togo':
        return <TogoIcon className={classNames} style={iconStyle} {...rest} />;
      case 'defaultMenu':
        return <DefaultMenuIcon className={classNames} style={iconStyle} {...rest} />;
      case 'backspace':
        return <BackspaceIcon className={classNames} style={iconStyle} {...rest} />;
      case 'enter':
        return <EnterIcon className={classNames} style={iconStyle} {...rest} />;
      case 'capsLock':
        return <CapsLockIcon className={classNames} style={iconStyle} {...rest} />;
      case 'tab':
        return <TabIcon className={classNames} style={iconStyle} {...rest} />;
      case 'hide':
        return <HideIcon className={classNames} style={iconStyle} {...rest} />;
      case 'prev':
        return <PrevIcon className={classNames} style={iconStyle} {...rest} />;
      case 'next':
        return <NextIcon className={classNames} style={iconStyle} {...rest} />;
      default:
        break;
    }
    const path = ICONS[name] || ICONS['search'];

    return (
      <svg
        ref={ref}
        className={classNames}
        style={iconStyle}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...rest}
      >
        {path.includes('M') ? (
          <path d={path} />
        ) : (
          path.split('\n').map((d, i) => <path key={i} d={d.trim()} />)
        )}
      </svg>
    );
  }
);

Icon.displayName = 'Icon';

// 导出图标名称列表，方便 TypeScript 类型提示
export const ICON_NAMES = Object.keys(ICONS) as Array<keyof typeof ICONS>;
export const SYSTEM_ICON_NAMES = SYSTEM_ICONS as Array<string>;
export const MENU_ICON_NAMES = MENU_ICONS;
export const KEYBOARD_ICONS_NAMES = KEYBOARD_ICONS;
export const ALL_ICON_NAMES = [...SYSTEM_ICONS, ...ICON_NAMES, ...MENU_ICONS, ...KEYBOARD_ICONS];