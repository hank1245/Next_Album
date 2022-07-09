import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Link href="/"> Home</Link>
        <Link href="/albums/upload"> Upload</Link>
        <Link href="/albums"> See Albums</Link>
      </div>
    </div>
  );
};

export default Navbar;
