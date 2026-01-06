


import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className="bg-red-200 fixed w-[800px] h-[450px] z-10 right-70 top-20">
      <MenuItem
        img="https://zerodha.com/static/images/products/kite-logo.svg"
        heading="Kite"
        subheading="Advanced trading platform"
      />
    </div>
  );
};

export default Menu;
