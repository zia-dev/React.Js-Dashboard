import Sidebar from "../../components/Sidebar/Sidebar.components"
import Navbar from "../../components/navbar/Navbar.components"
import Widget from "../../components/widget/Widget.component"
import Chart from "../../components/chart/Chart"
import Featured from "../../components/featured/Featured"
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className="homeContainer w-10/12">
      {/* <div className="homeContainer flex-8"> */}
      <Navbar/> 
      <div className="widgets flex p-5 gap-5 ">
      <Widget type="user"/>    
      <Widget type="order"/>    
      <Widget type="earning"/>    
      <Widget type="balance"/>    
        </div>  
        <div className="charts widgets flex px-5 py-1 gap-5 ">
          <Featured/>
          <Chart className ="flex-5" title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer drop-shadow-xl bg-white p-5 m-5">
          <div className="listTitle font-[500] text-gray-400 mb-4">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Home