import { Vibrate } from "../constants/tools";


export function RouterChangeVibrate() {
  const vibrateArr: number[] = [50, 50, 50, 50];
  Vibrate(vibrateArr);
}
