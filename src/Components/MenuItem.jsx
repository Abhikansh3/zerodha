const MenuItem = ({ img, heading, subheading }) => {
  return (
    <div className="flex-col">

      <div className=" p-6 justify-items-center">
        <img className='w-[60px]' src={img} alt="" />
        <div className="py-3">{heading}</div>
        <div>
          {subheading}
        </div>
      </div>



    </div>
  )
}
export default MenuItem
