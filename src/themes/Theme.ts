const theme = {
  colors: {
    primary: "#8a8a8a",
    secondary: "#616161",
    accent: "#2196f3",
    error: "#ff5252",
    success: "#4caf50",
    warning: "#ff9800",
    info: "#2196f3",
    text: "#ffffff",
    background: "#212121",
    surface: "#303030",
    divider: "#424242",
    boxShadow: "rgba(0, 0, 0, 0.4)",
  },
  application: {
    backgroundColor: "#212121",
    color: "#ffffff",
  },
  spacings: {
    small: "10px",
    medium: "15px",
    large: "20px",
  },
};

export type Theme = typeof theme;

export const ThemeDefault: Theme = {
  ...theme,
};
