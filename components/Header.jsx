import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <Link href="/">
            <Image src="vercel.svg" width={100} height={40} alt="logo"/>
          </Link>
        </div>

        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href=""></Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
