import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="header px-[48px]">
                <div className="flex items-center">
                    <Link href="/">
                        <a className="logo py-[24px]">
                            <Image src="/images/logo.png"
                                height={112}
                                width={120}
                                alt="Ui Cafe"
                                priority={true}
                            />
                        </a>
                    </Link>
                    <nav className="navigaton">
                        <ul className="flex items-center gap-x-[48px] pl-[88px] list-none mb-0">
                            <li>
                                <Link href="/">
                                    <a className="text-[22px] font-semibold hover:text-primary">Shop</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className="text-[22px] font-semibold hover:text-primary">Espresso bars</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className="text-[22px] font-semibold hover:text-primary">For the office</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className="text-[22px] font-semibold hover:text-primary">Learn</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className="text-[22px] font-semibold hover:text-primary">FAQ</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className="text-[22px] font-semibold hover:text-primary">ViAcademy</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className="text-[22px] font-semibold hover:text-primary">About us</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
        </header>
    );
}

export default Header;