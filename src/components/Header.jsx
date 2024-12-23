const Header = () => {
  return (
    <header className=" flex items-center gap-3 border-b mb-3">
      <img src="./src/assets/Logo.svg" className="w-8 md:hidden" alt="logo" />
      <h1 className=" text-xl font-medium">Hello, Damilola!</h1>
    </header>
  );
};

export default Header;
