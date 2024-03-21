import config from "../config";
import Image from "./Image";
import styles from "./Sidebar.module.css";

const MenuItem = (props) => {
  const data = props.menuData;
  const bold = data.bold ? styles.bold : "";
  return (
    <div className={styles.listItem}>
      <span className={styles.leftIcon}>
        <Image
          imgUrl={data.leftIcon}
          text={data.text}
          className={styles.imgIcon}
        />
      </span>
      <span className={`${styles.text} ${bold}`}>{data.text}</span>
      {data.rightIcon && (
        <span className={styles.rightIcon}>
          {<Image imgUrl={data.rightIcon} text={data.text} />}
        </span>
      )}
    </div>
  );
};

const Sidebar = () => {
  console.log(config);
  return (
    <div className={styles.sidebarInner}>
      <div className={styles.logo}>
        <Image imgUrl={"/imgs/logo.png"} text={"Logo"} />
      </div>
      <div className={styles.myTemplate}>
        <MenuItem menuData={config.myTemplate} />
      </div>
      <div className={styles.searchSection}>
        <MenuItem menuData={config.search} />
      </div>
      <div className={styles.points}>
        {config.points.starIconList.length > 0 &&
          config.points.starIconList.map((text, i) => {
            const data = { leftIcon: "/imgs/star.png", text: text };
            return <MenuItem menuData={data} key={i} />;
          })}
        {config.points.clockIconList.length > 0 &&
          config.points.clockIconList.map((text, i) => {
            const data = { leftIcon: "/imgs/clock.png", text: text };
            return <MenuItem menuData={data} key={i} />;
          })}
      </div>
      <div className={styles.myBoards}>
        <MenuItem menuData={config.myBoards} />
      </div>
      <div className={styles.points}>
        {config.points.boardIconList.length > 0 &&
          config.points.boardIconList.map((text, i) => {
            const data = { leftIcon: "/imgs/star.png", text: text };
            return <MenuItem menuData={data} key={i} />;
          })}
        {config.points.lockIconList.length > 0 &&
          config.points.lockIconList.map((text, i) => {
            const data = { leftIcon: "/imgs/clock.png", text: text };
            return <MenuItem menuData={data} key={i} />;
          })}
      </div>
      <div className={styles.userSection}>
        <MenuItem menuData={config.userSection} />
      </div>
    </div>
  );
};

export default Sidebar;
