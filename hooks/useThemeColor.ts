import { Colors } from '@/constants/Colors';

export function useThemeColor({ theme, colorName }: { theme: string; colorName: string; }) {
  return Colors[theme][colorName];
}
