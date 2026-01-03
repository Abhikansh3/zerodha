const Landing = () => {
  return (
    <div className="justify-items-center">
      <img src="https://zerodha.com/static/images/landing.svg" alt="" className='mt-16 scale-90' />

      <div className="text-[#424242] text-4xl font-inter mt-16 font-[420] tracking-wide">
        Invest in everthing
      </div>
      <div className="text-[#424242] mt-8 text-3xl font-light">
        Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
      </div>

      <div className="mt-16 bg-[#387ED1] text-white text-2xl flex  font-inter rounded-md  w-60 p-4 justify-center hover:bg-black cursor-pointer">
        Sign up for free
      </div>
    </div>
  )
}

export default Landing
