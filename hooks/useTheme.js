import { useEffect, useState } from "react";

export const useTheme = (initialTheme) => {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.body.getAttribute("data-theme") !== theme &&
      document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const handleChange = () =>
    setTheme(
      document.body.getAttribute("data-theme") === "dark" ? "light" : "dark"
    );

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return [theme, handleChange];
};
