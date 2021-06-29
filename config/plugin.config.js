// chainWebpack 配置文件
export default (config) => {
  config.optimization
  .splitChunks({
    cacheGroups: {
      // 组件库相关
      react: {
        name: 'react',
        chunks: 'all',
        test: /[\\/]node_modules[\\/](react-router|react-router-dom|antd|@ant-design)[\\/]/,
        priority: 12,
      },
      // 工具库相关
      utils: {
        name: 'utils',
        chunks: 'all',
        test: /[\\/]node_modules[\\/](moment)[\\/]/,
        priority: 11,
      },
      // 图表库相关
      charts: {
        name: 'bizcharts',
        chunks: 'all',
        test: /[\\/]node_modules[\\/](bizcharts)[\\/]/,
        priority: 10,
      },
      antv: {
        name: 'antv',
        chunks: 'all',
        test: /[\\/]node_modules[\\/](@antv)[\\/]/,
        priority: 9,
      },
      // vendors: {
      //   name: 'vendors',
      //   chunks: 'all',
      //   test: /[\\/]node_modules[\\/]/,
      //   priority: 8,
      // },
    },
  });
};
