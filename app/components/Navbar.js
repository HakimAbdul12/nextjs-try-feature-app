
import "bootstrap/dist/css/bootstrap.css"
import Link from 'next/link';
import Logo from "../components/logo.svg"
import Image from 'next/image';
import "../globals.css"


function BasicExample() {
  return (
    <nav>
          <Image alt="Logo" width={90} height={60} src={Logo} quality={100} />
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">me and you</Link>
            </li>
            <li>
              <Link href="/participants">Dummy</Link>
            </li>
            <li>
              <Link href="/members">Members</Link>
            </li>
            <li>
              <Link href="/contact">contact and me</Link>
            </li>
            <li>
              <Link href="/participants">participants</Link>
            </li>
          </ul>
        </nav>
  );
}

export default BasicExample;