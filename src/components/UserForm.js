import styles from "./UserForm.module.css";

const UserForm = (props) => {
  return (
    <>
      <form
        className={styles.informationForm}
        onSubmit={(e) => e.preventDefault()}
      >
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.controlWrapper}>
              <label htmlFor="" className={styles.formLabel}>
                First Name
              </label>
              <input
                type="text"
                name="fName"
                id="fName"
                className={styles.formControl}
              />
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.controlWrapper}>
              <label htmlFor="lName" className={styles.formLabel}>
                Last Name
              </label>
              <input
                type="text"
                name="lName"
                id="lName"
                className={styles.formControl}
              />
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.controlWrapper}>
              <label htmlFor="city" className={styles.formLabel}>
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                className={styles.formControl}
              />
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.controlWrapper}>
              <label htmlFor="zipCode" className={styles.formLabel}>
                Postal Code
              </label>
              <input
                type="text"
                name="zipCode"
                id="zipCode"
                className={styles.formControl}
              />
            </div>
          </div>
          <div className={`${styles.col} ${styles.full}`}>
            <div className={styles.controlWrapper}>
              <label htmlFor="address" className={styles.formLabel}>
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className={styles.formControl}
              />
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.controlWrapper}>
              <label htmlFor="email" className={styles.formLabel}>
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className={styles.formControl}
              />
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.controlWrapper}>
              <label htmlFor="phone" className={styles.formLabel}>
                Phone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className={styles.formControl}
              />
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.controlWrapper}>
              <label htmlFor="password" className={styles.formLabel}>
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className={styles.formControl}
              />
            </div>
          </div>
          <div className={`${styles.col} ${styles.full}`}>
            <p>
              Use this email to log in to your{" "}
              <a
                href="//resumedone.io"
                className={styles.hrefLink}
                target="_blank"
                rel="noreferrer"
              >
                resumedone.io
              </a>{" "}
              account and receive notifications.
            </p>
          </div>
          <div className={styles.col}>
            <button className={styles.submitButton}>Save</button>
          </div>
          <div className={`${styles.col} ${styles.full}`}>
            <input type="checkbox" name="share" id="share" />
            <label htmlFor="share" className={styles.chkboxFor}>
              Show my profile to serious employers on{" "}
              <a
                href="//hirethesbest.io"
                className={styles.hrefLink}
                target="_blank"
                rel="noreferrer"
              >
                hirethesbest.io
              </a>{" "}
              for free
            </label>
          </div>
        </div>
      </form>
    </>
  );
};

export default UserForm;
