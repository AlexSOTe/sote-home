export function Vibrate(arr: Array<number>) {
  if (navigator.vibrate) {
    navigator.vibrate(arr);
  }
}
