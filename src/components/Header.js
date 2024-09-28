const Header = ({ title }) => {
  const HeaderStyle = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    position: "sticky",
    top: "0",
    width: "100%",
    height: "40px",
    paddingBottom: "20px",
    backgroundColor: "white",
    textAlign: "center",
  };
  return (
    <div>
      <div
        className="Header"
        style={{ ...HeaderStyle, boxShadow: "0 2px 3px rgba(0,0,0,0.02), 0 1px 2px rgba(0,0,0,0.005)" }}
      >
        <h2>{title}</h2>
      </div>
    </div>
  );
};
export default Header;
