const Responsibilities = () => {
  return (
    <section className="mt-30px pr-20px pl-20px pb-120px">

      <div className="container relative w-full max-w-[1100px] mx-auto box-border">
        <div className=" flex flex-row items-center justify-between">

          <div className="basis-39.9 ml-0">
            <h2 className="mb-[40px] text-[24px] font-(family-name:--font-inter) font-[500] text-[#424242]">Trust with confidence</h2>

            <div className="display: block">
              <h3 className="text-[18.72px] font-(family-name:--font-inter) font-[500] text-[#424242]">Customer-first always</h3>
              <p className="text-[16px] font-(family-name:--font-inter) font-[400] text-[#424242]">That's why <span className="client-count">1.6+ crore</span> customers trust Zerodha with <span className="aum-value">~ ₹6 lakh crores</span>
                of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.
              </p>
            </div>
            <div className="display: block">
              <h3 className="text-[18.72px] font-(family-name:--font-inter) font-[500] text-[#424242]">No spam or gimmicks</h3>
              <p className="text-[16px] font-(family-name:--font-inter) font-[400] text-[#424242]">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
                {/* <a href="/about/philosophy">Our philosophies.</a> */}
              </p>
            </div>
            <div className="display: block">
              <h3 className="text-[18.72px] font-(family-name:--font-inter) font-[500] text-[#424242]">The Zerodha Universe</h3>
              <p className="text-[16px] font-(family-name:--font-inter) font-[400] text-[#424242]">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
            </div>
            <div className="display: block">
              <h3 className="text-[18.72px] font-(family-name:--font-inter) font-[500] text-[#424242]">Do better with money</h3>
              <p className="text-[16px] font-(family-name:--font-inter) font-[400] text-[#424242]">With initiatives like <a href="https://support.zerodha.com/category/trading-and-markets/kite-features/nudges/articles/what-is-nudge" target="_blank">Nudge</a> and <a href="https://support.zerodha.com/category/console/profile/killswitch/articles/what-is-the-kill-switch" target="_blank">Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
          </div>

          <div className="basis-56.6 box-border flex-initial">


            <div className="text-center ">
              <img src="https://zerodha.com/static/images/ecosystem.png" alt="The Zerodha Universe" className="max-w-full w-auto overflow-clip">
              </img>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
export default Responsibilities
