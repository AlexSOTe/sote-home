declare module "*.vue" {
  import Vue from "@/vue";
  export default Vue;
}


declare interface IQuestion {
  id: string;
  title: string;
  desc: string;
  reason: string;
  solution: string;
  isResolve: boolean;
}
declare interface IVantTabItemProps {
  disabled: boolean;
  event: PointerEvent;
  name: number;
  title: string;
}
declare interface WebGLRenderingContext {
  [key: string]: any;
}
declare interface IAnyObject {
  [key: string]: any;
}

/**
 * 关键帧
 */
declare interface IFm {
  /**
   * 关键帧所在时间点
   */
  time: number;
  /**
   * 动画属性对应的值
   */
  value: number;
}

declare interface IStar {
  x: number;
  y: number;
  size: number;
  colorR: number;
  colorG: number;
  colorB: number;
  colorA: number;
  fms: Map<string, IFm[]>;
}
