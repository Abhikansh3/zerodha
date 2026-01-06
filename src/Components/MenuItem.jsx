const MenuItem = ({ img, heading, subheading }) => {
  return (
    <div>
      <img src={img} alt="" />
      <div>{heading}</div>
      <div>
        {subheading}
      </div>
    </div>
  )
}
export default MenuItem
