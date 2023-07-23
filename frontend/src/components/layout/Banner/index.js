import React,{useState} from "react";
// import { slidersImages } from "../Navbar/data";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import './style.css'
import Carousel from 'react-bootstrap/Carousel'
import First from '../../../assets/1.png'
import sec from '../../../assets/2.png'
import third from '../../../assets/3.jpg'
import four from '../../../assets/4.jpg'
import five from '../../../assets/5.jpg'
import six from '../../../assets/6.jpg'
import seven from '../../../assets/7.jpg'
import eigth from '../../../assets/8.jpg'

export const Banner = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
<Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={sec}
          alt="JANI MOTORS"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={First}
          alt="JANI MOTORS"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={third}
          alt="JANI MOTORS"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={four}
          alt="JANI MOTORS"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={eigth}
          alt="JANI MOTORS"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={five}
          alt="JANI MOTORS"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={six}
          alt="JANI MOTORS"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={seven}
          alt="JANI MOTORS"
        />
        
      </Carousel.Item>
    </Carousel>

    // <Carousel  infiniteLoop={true} autoFocus={true}>
    //   {slidersImages.map((item) => {
    //     return (
    //       <div key={item.id}>
    //         <img src={item.img} className="img-fluid" alt={item.cName} />
    //       </div>
    //     );
    //   })}
    // </Carousel>
  );
};
