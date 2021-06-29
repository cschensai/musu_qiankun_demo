// fixed qiankun
// 微前端添加协议
export const qiankun = {
  // 应用加载之前
  async bootstrap(props) {
    console.log('wptAdmin-ads', props);
  },
  // 应用 render 之前触发
  async mount(props) {
    // props.onGlobalStateChange((curr, prev) => {
    //   // curr: 变更后的状态; prev 变更前的状态，和业务模块进行通信
    //   window.global_qiankun_props = curr;
    // });
    console.log('wptAdmin-ads', props);
  },
  // 应用卸载之后触发
  async unmount(props) {
    console.log('wptAdmin-ads', props);
  },
};
