import { BsSun } from "react-icons/bs";
import { useTheme } from "../../hooks/useTheme";
import Link from "next/link";

export const Navbar = function () {
  const [theme, handleChange] = useTheme("dark");
  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top clean-navbar 
    ${theme === "dark" ? "bg-dark" : "bg-light"}`}
    >
      <div className="container-fluid">
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <BsSun
            style={{
              color: theme === "dark" ? "white" : "black",
              marginRight: "10px",
              zoom: "1.2",
              border: theme === "dark" ? "1px solid white" : "1px solid black",
            }}
            onClick={handleChange}
          />
        </div>
      </div>
    </nav>
  );
};
