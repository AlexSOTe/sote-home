export const JavaScript: Array<IQuestion> = [
  {
    id: '0',
    title: 'document.execCommand()复制页面东西失败',
    desc: '',
    reason: '',
    solution: '使用navigator.clipboard API',
    isResolve: false,
  },
  {
    id: '1',
    title: 'post方式下载excel文件乱码',
    desc: 'js下载文件POST方法，后台返回一个流，下载下来文件内容乱码',
    reason: '未设置responseType',
    solution: `axios设置第三个参数为 { responseType: 'blob' }`,
    isResolve: true,
  },
  {
    id: '2',
    title: `navigator.clipboard.writeText调用失败`,
    desc: `navigator.clipboard.writeText调用时报writeText of undefined`,
    reason: `浏览器不支持或者PromissionsAPI只能在https的时候调用`,
    solution: `改用
const input = document.getElementById('shareInput');
document.body.appendChild(input);
input.value = url;
input.select();
document.execCommand('Copy');
老API`,
    isResolve: true,
  },
  {
    id: '3',
    title: `列表分页数据前端使用localStorage暂存然后同意提交的时候，会有很多麻烦问题`,
    desc: `每次修改都需要做取出来、修改、存入操作，要考虑到每个数据的各种状态的读取修改还原，涉及到分页的时候也时很难处理`,
    reason: `前端多了很多不必要的工作量，尤其是存取的数据是多维数组的时候，简直让人发疯 TvT`,
    solution: `列表数据修改的前端暂存方式不合理，不应该使用`,
    isResolve: true,
  },
];
