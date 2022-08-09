import Button from '../packages/components/button/index';
import ComSqlTipTree from '../packages/components/ComSqlTipTree/index';

const components = {
  Button,
  ComSqlTipTree,
};

const install = function (Vue) {
  if (install.installed) return;

  Object.keys(components).forEach((name) => {
    Vue.component(name, components[name]);
  });

  // Vue.prototype.$Message = Message;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  //   version: process.env.VERSION, // eslint-disable-line no-undef
  install,
  ...components,
};
