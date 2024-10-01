const Navbar = () => {
    return (
        <nav className="flex items-center justify-between w-full h-[10vh] px-[10vw] py-0 z-50 ">
            <a href="#" className="mr-[36.5%] text-[1.5vw] underline-none text-white">Logo</a>
            <div className="cntr-nav w-full flex items-center gap-10">
                <a href="#" className="text-[1.5vw] underline-none text-white">Home</a>
                <a href="#" className="text-[1.5vw] underline-none text-white">Products</a>
                <a href="#" className="text-[1.5vw] underline-none text-white">Shop</a>
                <a href="#" className="text-[1.5vw] underline-none text-white">Contact</a>
            </div>
            <i className="ri-menu-fill text-[1.5vw]"></i>
        </nav>
    )
}

export default Navbar