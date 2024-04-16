import Marquee from "react-fast-marquee";
import one from '../../assets/images.png'
import two from '../../assets/2.png'
import three from '../../assets/3.png'
import four from '../../assets/4.png'
import five from '../../assets/5.jpg'
import six from '../../assets/6.png'
import seven from '../../assets/7.png'
const Partners = () => {
    return (
        <div>
            <Marquee >
                <img src={one}  className="h-56" alt="" />
                <img src={two} className="h-56" alt="" />
                <img src={three} className="h-56" alt="" />
                <img src={four} className="h-56" alt="" />
                <img src={five} className="h-56" alt="" />
                <img src={six} className="h-56" alt="" />
                <img src={seven} className="h-56" alt="" />
            </Marquee>
        </div>
    );
};

export default Partners;