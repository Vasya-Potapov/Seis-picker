import { ReactComponent as ChartSvg } from "../../icons/chart.svg";

export function ChartIcon({ color, size }) {
  return <ChartSvg height={size} width={size} stroke={color} strokeWidth={2} />;
}
