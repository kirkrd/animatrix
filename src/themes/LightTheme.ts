import { Theme } from "./Theme";

const theme: Theme = {
  colors: {
    primary: "#FF9800",
    secondary: "#FFFFFF",
    accent: "#2196F3",
    error: "#FF5252",
    success: "#4CAF50",
    warning: "#FF9800",
    info: "#2196F3",
    text: "#212121",
    background: "#FFFFFF",
    surface: "#F5F5F5",
    divider: "#E0E0E0",
    boxShadow: "rgba(0, 0, 0, 0.4)",
  },
  application: {
    backgroundColor: "#FFFFFF",
    color: "#212121",
  },
  spacings: {
    small: 10,
    medium: 15,
    large: 20,
  },
};

export const ThemeLight: Theme = theme;
