import Image from "./Image";
import UserForm from "./UserForm";
import styles from "./WorkArea.module.css";

const WorkArea = (props) => {
  return (
    <div className={styles.workAreaInner}>
      {/* Premium section */}
      <div className={styles.premiumAccount}>
        <span className={styles.logoArea}>
          <Image
            imgUrl={"/imgs/career.png"}
            text={"Career"}
            className={styles.career}
          />
        </span>
        <div className={styles.contentArea}>
          <h2>Premium Account</h2>
          <p>
            You have a premium account, granting you access to all the
            remarkable features offered by ResumeDone. With this privilege, you
            can indulge in the freedom of downloading an unlimited number of
            resumes and cover letters in both PDF and Word formats.
          </p>
        </div>
      </div>

      {/* Information Section */}
      <div className={styles.informationSection}>
        <h2>Premium Account</h2>
        <div className={styles.informationForm}>
          <div className={styles.formFields}>
            <UserForm />
          </div>
          <div className={styles.userPic}>
            <Image imgUrl={"/imgs/personal-image.png"} text={"Person Image"} />
          </div>
        </div>
        <div className={styles.deleteAccount}>
          <h2>Delete Account</h2>
          <p>
            If you delete your account you’ll be permanently removing it from
            our systems - you can’t undo it.
          </p>
          <p>
            <a href="!#" className={styles.deleteLink}>
              Yes, Delete my account
            </a>
          </p>
        </div>
        <p>
          <a href="!#" className={styles.getInTouch}>
            Get in touch with our support team
          </a>{" "}
          if you have any question or want to leave some feedback. We'll be
          happy to hear from you.
        </p>
        <hr className={styles.hr} />
        <ul className={styles.footerLink}>
          <li className={styles.linkItem}>
            <a href="!#">Terms & Conditions</a>
          </li>
          <li className={styles.linkItem}>
            <a href="!#">Privacy Policy</a>
          </li>
          <li className={styles.linkItem}>
            <a href="!#">FAQ</a>
          </li>
          <li className={styles.linkItem}>
            <a href="!#">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WorkArea;
