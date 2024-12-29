import Navbar from "../components/Navbar"

const MainLayouts = () => {
  return (
    <main>

        
         <div className="w-fit flex flex-col gap-12 order-1">
        <img src="./src/assets/Logo.svg" className="w-11 max-767:hidden" />
        <Navbar />
      </div>
      
    </main>
  )
}

export default MainLayouts
