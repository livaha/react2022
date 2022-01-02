import { useIntl } from 'umi';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

const Footer: React.FC = () => {
  /**国际化
   * 1 在函数组件中使用国际化-useIntl
   * 2 在类组件中使用国际化-injectIntl
   * 3 在ts文件中使用国际化-getIntl
   * 4 动态设置国际化getLocale、setLocale
   * import { setLocale } from 'umi';
      // 刷新页面
      setLocale('zh-TW', true);
      // 不刷新页面
      setLocale('zh-TW', false);
   */
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: '蚂蚁集团体验技术部出品',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Ant Design Pro',
          title: 'Ant Design Pro',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/ant-design/ant-design-pro',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: 'Ant Design',
          href: 'https://ant.design',
          blankTarget: true,
        },
        {
          key: 'github-project',
          title: intl.formatMessage(
            {
              id: 'project',
              defaultMessage: '项目github地址',
            },
            {
              name: 'livaha',
            },
          ),
          href: 'https://github.com/livaha',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
