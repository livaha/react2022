import type { DropDownProps } from 'antd/es/dropdown';
import { Dropdown } from 'antd';
import React from 'react';
import classNames from 'classnames';
import styles from './index.less';

/**学习笔记
 * Omit<K,T>类型让我们可以从另一个对象类型中剔除某些属性，并创建一个新的对象类型： K：是对象类型名称，T：是剔除K类型中的属性名称
 * 下面Omit<DropDownProps, 'overlay'>就是剔除DropDownProps中的overlay属性，用HeaderDropdownProps自定义中的overlay属性
 * */
export type HeaderDropdownProps = {
  overlayClassName?: string;
  overlay: React.ReactNode | (() => React.ReactNode) | any;
  placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight' | 'bottomCenter';
} & Omit<DropDownProps, 'overlay'>;

/**学习笔记
 * 1 React.FC<>的在typescript使用的一个泛型，FC就是FunctionComponent的缩写，是函数组件
 * 2 参数{overlayClassName: cls} : cls是overlayClassName的重命名
 * 3 下面函数意思是：HeaderDropdown返回一个函数组件Dropdown
 */
const HeaderDropdown: React.FC<HeaderDropdownProps> = ({ overlayClassName: cls, ...restProps }) => (
  /**哇，样式意思可以这样调用 ： styles.container*/
  <Dropdown overlayClassName={classNames(styles.container, cls)} {...restProps} />
);

export default HeaderDropdown;
