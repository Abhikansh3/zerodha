const Navbar = () => {
  return (
    <div className="flex justify-around shadow-[2px_1px_2px_#eee] box ">
      <div>
        <img src="https://zerodha.com/static/images/logo.svg" className="w-32.25 h-4.25 mt-7.5 " alt="" />
      </div>

      <div className="flex justify-between">
        <a href="/" className="p-6.25 text-[#666] hover:text-[#387ed1]">Signup</a>
        <a href="/" className="p-6.25 text-[#666] hover:text-[#387ed1]">About</a>
        <a href="/" className="p-6.25 text-[#666] hover:text-[#387ed1]">Products</a>
        <a href="/" className="p-6.25 text-[#666] hover:text-[#387ed1]">Pricing</a>
        <a href="/" className="p-6.25 text-[#666] hover:text-[#387ed1]">Support</a>


      </div>
    </div>
  )
}
export default Navbar
