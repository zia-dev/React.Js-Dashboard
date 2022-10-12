import Sidebar from "../../components/Sidebar/Sidebar.components"
import Navbar from "../../components/navbar/Navbar.components"
import Widget from "../../components/widget/Widget.component"
const Home = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className="homeContainer w-10/12">
      <Navbar/> 
      <div className="widgets flex p-5">
      <Widget type="user"/>    
      <Widget type="order"/>    
      <Widget type="earning"/>    
      <Widget type="balance"/>    
        </div>   
      </div>
    </div>
  )
}

export default Home