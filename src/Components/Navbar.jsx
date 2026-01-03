
const Navbar = () => {
  const navItem = "px-5 py-6 text-[#666] hover:text-[#387ed1] font-inter text-lg";

  return (
    <nav className="w-full shadow-[2px_1px_2px_#eee] box-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

        <img
          src="https://zerodha.com/static/images/logo.svg"
          className="w-[200px] h-auto"
          alt="Zerodha"
        />

        <div className="flex items-center">
          <a href="/" className={navItem}>Signup</a>
          <a href="/" className={navItem}>About</a>
          <a href="/" className={navItem}>Products</a>
          <a href="/" className={navItem}>Pricing</a>
          <a href="/" className={navItem}>Support</a>

        </div>


      </div>
    </nav>
  );
};

export default Navbar;
