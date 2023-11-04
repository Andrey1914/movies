import React, { useEffect, useState } from "react";

import { SwitchThemeBox, SwitchThemeIcon } from "./SwitchThemeStyled";

const SwitchTheme = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme"));
  const themetoggle = () => {
    settheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <SwitchThemeBox onClick={themetoggle}>
      <SwitchThemeIcon color="var(--toggle)" />
    </SwitchThemeBox>
  );
};

export default SwitchTheme;
