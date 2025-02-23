import "./Dashboard.css"

export default function Dashboard() {
   return (
      <>
      <div className="main">
         <div className="navbar">
         <div className="home-icon">
            <i class="fa-solid fa-swatchbook"></i> 
         </div>
         <div className="icons">
            <i class="fa-solid fa-square-pen"></i>
            <i class="fa-solid fa-wallet"></i>
            <i class="fa-solid fa-chart-simple"></i>
            <i class="fa-sharp fa-solid fa-cube"></i>
            <i class="fa-regular fa-circle-user"></i>
         </div>
         <div className="icons1">
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
         </div>
         </div>
         <div className="main-content">

            <div className="box">
               <div className="box-info">Overview</div>
               <div className="box-icons">
               <i class="fa-solid fa-magnifying-glass"></i>
               <i class="fa-regular fa-bell"></i>
               <i class="fa-solid fa-user">User</i>
               </div>
            </div>
            <div className="box-1">
               <div className="box12">
                  Portfolio
                  <div className="innerbox">
                     Balance
                     $1,23,000
                  </div>
               </div>
               <div className="box1">
                  <div style={{paddingLeft:"20px"}}>
                  Category
                  </div>
                  <div className="box13">
                  <div className="box11">
                     1
                  </div>
                  <div className="box11">
                     2
                  </div>
                  <div className="box11">
                     3
                  </div>
                  </div>
               </div>
            </div>
            <div className="box-2">
               <div className="box2">
                  <div className="box21">

                  </div>
               </div>
               <div className="box2">
                  <div className="box21">

                  </div>
               </div>
            </div>
         </div>
      </div>
      
      </>
   )
}