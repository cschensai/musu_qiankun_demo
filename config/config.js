import slash from 'slash2';
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings'; // https://umijs.org/config/
import proxy from './proxy';
import webpackPlugin from './plugin.config';

// preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。

const { ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION, REACT_APP_ENV } = process.env;

export default defineConfig({
  //fixed qiankun
  base: '/',
  // publicPath: '/ads/',
  // qiankun plugin配置项
  qiankun: {
    slave: {},
  },
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  hash: true,
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/zh/guide/router.html
  
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  define: {
    REACT_APP_ENV: REACT_APP_ENV || false,
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION:
      ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION || '', // preview.pro.ant.design only do not use in your production ; preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
  },
  ignoreMomentLocale: true,
  lessLoader: {
    javascriptEnabled: true,
  },
  cssLoader: {
    modules: {
      getLocalIdent: (context, _, localName) => {
        if (
          context.resourcePath.includes('node_modules') ||
          context.resourcePath.includes('ant.design.pro.less') ||
          context.resourcePath.includes('global.less')
        ) {
          return localName;
        }
  
        const match = context.resourcePath.match(/src(.*)/);
  
        if (match && match[1]) {
          const antdProPath = match[1].replace('.less', '');
          const arr = slash(antdProPath)
            .split('/')
            .map((a) => a.replace(/([A-Z])/g, '-$1'))
            .map((a) => a.toLowerCase());
          return `antd-pro${arr.join('-')}-${localName}`.replace(/--/g, '-');
        }
  
        return localName;
      },
    },
  },
  manifest: {
    basePath: '/',
  },
  proxy: proxy[REACT_APP_ENV || 'dev'],
  chunks: ['react', 'utils', 'bizcharts', 'antv', 'vendors', 'umi'],
  chainWebpack: webpackPlugin,
  webpack5:{},
  mfsu:{},
});
