import navimg from './assets/navinmg2.jpg'
import fimg from './assets/eaterydes.jpeg'

function Header(){
    return(
        <>
         <div className="nav-bar"> 
            <img className='navimmg' src={navimg} alt="" />
                   <h1 className='amen'>Amenities</h1>
                    <li className="home-bar">Home</li>
                    <li className="home-bar">Company</li>
                    <li className="home-bar">Offers</li>
                    <li className="home-bar">Blogs</li>
                    <li className="home-bar">Contacts</li>
                     </div>
                     <div><h1 className='heading1'>Giving The Best <br /> Just For You</h1></div>
                     <div className='eat'>
                        <img className='eaters' src={fimg} alt="" />
                       <h1 className='head1'>Interior Designers</h1> 
                     <p className='para1'> Home interiors showroom in the ‘City of Murals’ started its operations in the year 2012. Since then,<br /> AMENITIES   has been accepted as the best interior designers in Kottayam. The company achieved this stature by  ensuring  customer  satisfaction in each project. 
                     <br />
                     <br />
                     <hr />
                       </p> 
                       <h1 className='head2'>Outdoor Seating And Live Entertainment </h1> <br />
                     <p className='para2'>Enjoy the best of both worlds with our inviting outdoor seating and vibrant live entertainment options. <br /> Relax in our comfortable outdoor area, perfect for a leisurely meal or a casual catch-up with friends <br />customer  satisfaction in each project. </p>
                       <div className="body-Your">
            <h1 className='heading1'>Your Dream <br />Luxurious Interior Room </h1>
           </div>
              </div>
         
        </>
    )
}

export default Header