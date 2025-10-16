import { navLinks } from "../constants";

const Navbar = () => {
    return (
        <header className="bg-black">
            <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4 ">
                <img className="cursor-pointer" src="/logo.svg" alt="Apple logo" />
                <ul className="hidden md:flex items-center justify-between text-white gap-8" >
                    {navLinks.map((link) => (
                        <li key={link.label} >
                            <a href={link.label} >{link.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="flex-center gap-3">
                    <button className="cursor-pointer mx-2" >
                        <img src="/search.svg" alt="Search" />
                    </button>
                    <button className="cursor-pointer mx-2" >
                        <img src="/cart.svg" alt="Cart" />
                    </button>
                </div>
            </nav>
        </header>
    )
}
export default Navbar;