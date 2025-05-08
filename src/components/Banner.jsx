import { Carousel } from "antd";

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export const Banner = () => {
    return (
        <Carousel autoplay autoplaySpeed={5000} className="w-full">
            <div className="w-full">
                <img src={'banner1.png'} alt="" className="w-full h-auto" />
            </div>
            <div className="w-full">
                <img src={'banner2.jpg'} alt="" className="w-full h-auto" />
            </div>
            <div className="w-full">
                <img src={'banner3.jpg'} alt="" className="w-full h-auto" />
            </div>
            <div className="w-full">
                <img src={'banner4.jpg'} alt="" className="w-full h-auto" />
            </div>
        </Carousel>
    );
};
