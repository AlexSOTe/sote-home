export const Windows: Array<IQuestion> = [
  {
    id: '0',
    title: '优化远程桌面的性能',
    desc: '让 mstsc 运行在 60hz',
    reason: 'mstsc 性能不够好',
    solution: `
1、开启mstsc的显卡加速
打开组策略定位到【计算机配置->管理模板->Windows组件->远程桌面服务->远程桌面会话主机->远程会话环境】，
启用【将硬件图形适配器应用于所有远程桌面服务会话】

2、开启60hz
打开注册表这个路径【HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Terminal Server\WinStations】，
右侧点右键新建【DWORD(32-bit)】命名为【DWMFRAMEINTERVAL】，
值设置为十进制15

3、重启电脑
保存、重启电脑`,
    isResolve: true,
  },{
    id: '0',
    title: '删除远程桌面客户端的历史记录',
    desc: '移除失效、无用的记录',
    reason: '碍眼',
    solution: `
1、win+r 打开运行输入regedit
2、定位到【HKEY_CURRENT_USER\Software\Microsoft\Terminal Server Client\Default】
3、右边除了【MRU0】之外，删除其他不想要的项就好`,
    isResolve: true,
  },
];
