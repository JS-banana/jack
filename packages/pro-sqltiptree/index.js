import ProSqlTipTree from './src/index.vue';

/* istanbul ignore next */
ProSqlTipTree.install = function(Vue) {
  Vue.component(ProSqlTipTree.name, ProSqlTipTree);
};

export default ProSqlTipTree;
