import React from "react";
import "./cards.css";
import { Link } from "react-router-dom";



function Cards2() {
    const useViewport = () => {
        const [width, setWidth] = React.useState(window.innerWidth);
      
        React.useEffect(() => {
          const handleWindowResize = () => setWidth(window.innerWidth);
          window.addEventListener("resize", handleWindowResize);
          return () => window.removeEventListener("resize", handleWindowResize);
        }, []);
      
        // Return the width so we can use it in our components
        return { width };
      }
    //   {console.log(useViewport().width)}
    return (
        <>

            <div className={`container ${!(useViewport().width>800)?"d-flex flex-column":`d-flex flex-row`}`} style={{ marginLeft: "-9px", width: "100%" }}>
                <div className="sellCar col-md-4 text-center container_foto part1" >
<Link to='/tradeincar'>
                    <article className="text-left">
                        <h2>Sell Your Car</h2>
                        <h4>WE'LL BUY YOUR CAR TODAY <br /> START HERE</h4>
                        <button className="btn-go">Click Here</button>
                    </article>
                    <img src="https://images.unsplash.com/photo-1581281664340-26542baf9c16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGNhcnxlbnwwfHwwfGJsYWNrfA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="JANI MOTORS CARS" />
                </Link>
                </div>

                <div className="creditApp col-md-4 text-center container_foto part1-2" >
                    <Link to='/creditapproval'>
                    <article className="text-left" >
                        <h2>CREDIT APPLICATION</h2>
                        <h4>GET APPROVED TODAY <br /> START HERE</h4>
                        <button className="btn-go">Click Here</button>
                    </article>
                    <img src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="JANI MOTORS CARS" />
                    </Link>
                </div>
                <div className="wrapper2 col-md-6 text-center " >
                    <Link to='/tradeincar'>
                    <div className="value container_foto1 part2" >
                    <article className="text-left">
                        <h2>VALUE TRADE IN</h2>
                        <h4>TRADE IN YOUR CAR TODAY <br /> START HERE</h4>
                        <button className="btn-go">Click Here</button>
                    </article>
                    <img src="https://images.unsplash.com/photo-1608564697071-ddf911d81370?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="JANI MOTORS CARS" />
                    </div>
                    </Link>
                    <div className="payCal container_foto1 part2" >
                        <Link to='/calculator'>
                    <article className="text-left resPayCal">
                        <h2>PAYMENT CALCULATOR</h2>
                        <h4>CALCULATE YOUR PAYMENT<br /> START HERE</h4>
                        <button className="btn-go">Click Here</button>
                    </article>
                    <img src="https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="JANI MOTORS CARS" />
                    </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards2;















