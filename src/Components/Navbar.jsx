
const Navbar = () => {
  const navItem = "p-7 text-[#666] hover:text-[#387ed1] font-inter font-light cursor-pointer text-lg";

  return (
    <nav className="w-full shadow-[2px_1px_2px_#eee] box-border">
      <div className="mx-auto flex items-center justify-around px-6">

        <img
          src="https://zerodha.com/static/images/logo.svg"
          className="w-[200px] h-auto"
          alt="Zerodha"
        />
        <div>
        </div>
        <div className="flex items-center">
          <a href="/" className={navItem}>Signup</a>
          <a href="/" className={navItem}>About</a>
          <a href="/" className={navItem}>Products</a>
          <a href="/" className={navItem}>Pricing</a>
          <a href="/" className={navItem}>Support</a>
          <a href="/" className="mx-2 px-5 py-6 ">
            <span className="block  h-[3px] w-6 bg-[#424242] rounded-[12px] opacity-100 my-1 m-1"></span>
            <span className="block  h-[3px] w-6 bg-[#424242] rounded-[12px] opacity-100 my-1 m-1" ></span>
            <span></span>
            <span className="block  h-[3px] w-6 bg-[#424242] rounded-[12px] opacity-100 my-1 m-1"></span>
          </a>
        </div>


      </div>
    </nav>
  );
};

export default Navbar;
