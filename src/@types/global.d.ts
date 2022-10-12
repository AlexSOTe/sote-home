import 'pinia';
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
