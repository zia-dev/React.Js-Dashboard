import Sidebar from "../../components/Sidebar/Sidebar.components"

const Home = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className="homeContainer w-10/12">container</div>
    </div>
  )
}

export default Home