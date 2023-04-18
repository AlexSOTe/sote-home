export const Ubuntu: IQuestion[] = [
  {
    id: '0',
    title: 'ubuntu用Git提交代码每次都需要输入账号密码',
    desc: 'ubuntu系统，Git提交代码每次都需要输入账号密码',
    reason: 'Git默认不保存用户名密码',
    solution: `执行 【git config --global credential.helper store】让Git存储密码`,
    isResolve: true,
  },
];
