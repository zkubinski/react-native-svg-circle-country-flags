import * as React from 'react';
import * as Flags from './flags';
import type { SvgProps } from 'react-native-svg';

interface FlagProps extends SvgProps {
  code: string;
  size?: number;
}

const SPECIAL_CODE_MAP: Record<string, keyof typeof Flags> = {
  EU: 'Eu',
  GLOBAL: 'Earth',
  GLOBAL_LITE: 'Earth',
};

const REGION_CODES = new Set(['AS', 'NA', 'SA', 'AF', 'ME', 'OC', 'SEA', 'CAR', 'SCAN']);

const toPascalCase = (code: string): string =>
  code.charAt(0).toUpperCase() + code.slice(1).toLowerCase();

export const Flag = ({ code, size = 24, ...props }: FlagProps) => {
  const upperCode = code.toUpperCase();

  // Check special mappings first
  if (SPECIAL_CODE_MAP[upperCode]) {
    const FlagComponent = Flags[SPECIAL_CODE_MAP[upperCode]] as React.FC<SvgProps>;
    return <FlagComponent width={size} height={size} {...props} />;
  }

  // Region codes use Earth
  if (REGION_CODES.has(upperCode)) {
    return <Flags.Earth width={size} height={size} {...props} />;
  }

  // Try country flag
  const flagKey = toPascalCase(code) as keyof typeof Flags;
  const FlagComponent = Flags[flagKey] as React.FC<SvgProps> | undefined;

  if (FlagComponent) {
    return <FlagComponent width={size} height={size} {...props} />;
  }

  // Fallback to Earth
  return <Flags.Earth width={size} height={size} {...props} />;
};

export default Flag;
