import { Link } from "react-router-dom";
import PreviousIcon from "../assets/previousIcon.svg";
import "./Header.css";

const Header = ({ title, url }) => {
  const HeaderStyle = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    position: "sticky",
    top: "0",
    width: "100%",
    height: "40px",
    padding: "10px",
    backgroundColor: "white",
    textAlign: "center",
    alignItems: "center",
  };
  return (
    <div>
      <div
        className="Header"
        style={{
          ...HeaderStyle,
          boxShadow: "0 2px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.005)",
        }}
      >
        <Link to={url}>
          <img
            src={PreviousIcon}
            alt="Default"
            style={{ position: "absolute", left: "10px" }}
            className={url === "null" ? "Test" : ""}
          />
        </Link>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

Header.defaultProps = {
  title: "title",
  url: "null",
};
export default Header;
