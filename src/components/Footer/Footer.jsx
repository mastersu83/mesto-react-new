import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer className={classes.footer}>
      <div className="container">
        <div className={classes.footer__content}>
          <div className={classes.footer__copy}>© 2020 Mesto Russia</div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
