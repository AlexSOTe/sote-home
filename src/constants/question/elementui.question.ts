export const ElementUI: Array<IQuestion> = [
  {
    id: '0',
    title: 'el-form的校验无法触发',
    desc: 'el-form的校验无法触发',
    reason: 'el-form标签上加了v-if，表单校验无法触发',
    solution: '改为v-show',
    isResolve: true,
  },
  {
    id: '1',
    title: `elementui报错：Cannot read property '$options' of undefined`,
    desc: `elementui报错：Cannot read property '$options' of undefined`,
    reason: `el-form-item不能单独使用，必须嵌套在el-form元素内部使用`,
    solution: `把el-form-item写在el-form标签内部`,
    isResolve: true,
  },
  {
    id: '2',
    title: `el-select，填充的value不展示对应的label`,
    desc: `el-select，填充的value不展示对应的label`,
    reason: `绑定的值和el-option的value数据类型不一致，比如绑定的值是数字0，而value是字符串0`,
    solution: `绑定的值和value的值数据类型保持一致，绑定的值是数字0时el-option的value要写成【:value="0"】`,
    isResolve: true,
  },
  {
    id: '3',
    title: `El-upload，上传文件失败的时候提示删除文件失败`,
    desc: `El-upload，上传文件失败的时候提示删除文件失败`,
    reason: `上传文件失败的时候，elementui会调用before-remove和on-remove事件，这个事件绑定的方法里面写了，调用删除文件的接口`,
    solution: `在remove事件里面添加file.status是否为success的判断，如果是success才调用删除接口`,
    isResolve: true,
  },
];
