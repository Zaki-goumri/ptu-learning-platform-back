import { rgba } from 'polished';
import { useEffect, useState } from 'react';
import { useTheme } from "../../../build/utils/styled.js";
import * as defautTheme from "../../theme.js";
const useSelectTheme = () => {
  const theme = useTheme();
  const [currentTheme, setCurrentTheme] = useState(defautTheme);
  useEffect(() => {
    if (theme) {
      setCurrentTheme(theme);
    }
  }, [theme]);
  const selectTheme = config => ({
    ...config,
    borderRadius: 2,
    spacing: {
      ...config.spacing,
      controlHeight: 32,
      baseUnit: 3
    },
    colors: {
      ...config.colors,
      primary: currentTheme.colors.primary100,
      danger: currentTheme.colors.error,
      dangerLight: currentTheme.colors.errorLight,
      primary25: rgba(currentTheme.colors.black, 0.06),
      primary50: rgba(currentTheme.colors.black, 0.125),
      primary75: rgba(currentTheme.colors.black, 0.25)
    }
  });
  return {
    theme: currentTheme,
    selectTheme
  };
};
export default useSelectTheme;