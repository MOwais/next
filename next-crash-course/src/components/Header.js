import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <>
      <h1 className={headerStyles.title}>
        <span>WebDev</span> News
        <p className={headerStyles.description}>
          Keep up to date with the latest web dev news
        </p>
      </h1>
    </>
  );
};

export default Header;
