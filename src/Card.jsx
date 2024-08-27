import Cards from './assets/imgcard.jpeg'
import image1 from './assets/imgcard1.jpeg'
import imagecard1 from './assets/imgcard2.jpg'
import imagecard2 from './assets/imgcard3.jpeg'
import image3 from './assets/img^1.jpeg'
import image4 from './assets/img^2.jpeg'
import image5 from './assets/img^3.jpeg'


function Card() {
   return (
      <div>

         <div className='card'>

            <img className='card-image' src={Cards} alt="" />
            <h4>Premium Suites</h4>
            <p className='card-title'>Lorem ipsum, dolor sit amet <br /> Lorem ipsum, dolor sit amet </p>
            <p>$400.00</p>

            <div className=""></div>

         </div>
         <div className='card'>
            <img className='card-image' src={image1} alt="" />
            <h4>Guest Room</h4>
            <p className='card-title'>Lorem ipsum, dolor sit amet <br /> Lorem ipsum, dolor sit amet </p>
            <p>$400.00</p>


         </div>
         <div className="card">
            < img className='card-image' src={imagecard1} alt="" />
            <h4>Guest Room</h4>
            <p className='card-title'>Lorem ipsum, dolor sit amet <br /> Lorem ipsum, dolor sit amet </p>
            <p>$400.00</p>
         </div>
         <div className="card">
            < img className='card-image' src={imagecard2} alt="" />
            <h4>Guest Room</h4>
            <p className='card-title'>Lorem ipsum, dolor sit amet <br /> Lorem ipsum, dolor sit amet </p>
            <p>$400.00</p>
         </div>
        <div className="photo">
         <img className='photo1' src={image3} alt="" />
         <img  className='photo1' src={image4} alt="" />
         <img  className='photo1'src={image5} alt="" />
        </div>
        <div className="background">
        <h1 className='background-text'>With our Experience      <span className='back8'>800+ </span>   <span className='back8'>  2M</span> <br /> We will serve</h1>
        </div>

      </div>



   );
}
export default Card