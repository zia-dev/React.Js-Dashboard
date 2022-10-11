import Sidebar from "../../components/Sidebar/Sidebar.components"
import Navbar from "../../components/navbar/Navbar.components"

const Home = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className="homeContainer w-10/12">
      <Navbar/>    
      home container    
      </div>
    </div>
  )
}

export default Home