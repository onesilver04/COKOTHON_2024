const Header = ({ title }) => {
  return (
    <div>
      <div className="Header" style={{ display: "flex", justifyContent: "center" }}>
        <h2>{ title }</h2>
      </div>
    </div>
  );
};
export default Header;
