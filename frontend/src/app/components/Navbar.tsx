import Image from "next/image";
import Logo from "../../../public/sub-sight.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="row no-gutter">
      <div className="col-3">
        <Link href="/">
          <Image src={Logo} alt="company-logo" className="company-logo" />
        </Link>
      </div>
      <div className="col-9 navbar-links">
        <Link href="/dashboard">
          <p className="white-text">Dashboard</p>
        </Link>
        <Link href="/login">
          <p className="white-text">Login</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
