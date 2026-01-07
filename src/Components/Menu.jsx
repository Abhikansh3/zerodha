


import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div>

      <div className="bg-white shadow-[0px_1px_10px_0px_rgba(0,0,0,0.1)] transition-all duration-150 ease-in-out fixed w-[874px] h-[450px] z-10 right-60 top-20 flex flex-col">

        <div className="flex justify-around basis-2/5">
          <MenuItem
            img="https://zerodha.com/static/images/products/kite-logo.svg"
            heading="Kite"
            subheading="trading platform"
          />
          <MenuItem
            img="https://zerodha.com/static/images/products/kite-logo.svg"
            heading="Kite"
            subheading="trading platform"
          />
          <MenuItem
            img="https://zerodha.com/static/images/products/kite-logo.svg"
            heading="Kite"
            subheading="trading platform"
          />
          <MenuItem
            img="https://zerodha.com/static/images/products/kite-logo.svg"
            heading="Kite"
            subheading="trading platform"
          />

        </div>


        <div className="bg-[#fafafb] basis-3/5">
          hi
        </div>
      </div>



    </div>
  );
};

export default Menu;
