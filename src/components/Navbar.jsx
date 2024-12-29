const Navbar = () => {
  return (
    <>
     <nav className=" bg-white hidden md:flex h-2/3 flex-col rounded-full items-center justify-around p-3 gap-2  w-full" id="deskNav">
      <img src="./src/assets/Group.svg" alt="chart" />
      <img src="./src/assets/wallet.svg" alt="wallet" />
      <img src="./src/assets/chart.svg" alt="chart" />
      <img src="./src/assets/gear.svg" alt="chart" />
      <img src="./src/assets/Vector.svg" alt="chart" />
    </nav>
    <nav className=" bg-white flex  items-center justify-evenly p-3 gap-2 fixed bottom-0 left-0 w-full md:hidden" id="mobileNav">
      <img src="./src/assets/Group.svg" alt="chart" />
      <img src="./src/assets/wallet.svg" alt="wallet" />
      <img src="./src/assets/chart.svg" alt="chart" />
      <img src="./src/assets/gear.svg" alt="chart" />
      <img src="./src/assets/Vector.svg" alt="chart" />
    </nav>
    </>
   
  );
};

export default Navbar;
