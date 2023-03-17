import { useRef } from "react";
import _static from "../static";
import Slider from "react-slick";

export default function CSlider({ data }) {
    const sliderRef = useRef(null)

    setTimeout(() => {
        sliderRef.current?.slickPlay()
    }, 5000);
    return <Slider {..._static.slideSettings} ref={sliderRef}>
        {
            data?.map((slide, i) => <div key={i} className='text-center'>
                <div className='w-full flex flex-col items-center mt-3'>
                    <img src={slide.image} alt="" />
                </div>
                <div className='text-lg tracking-wide font-semibold mt-3'>{slide.title}</div>
                <div className='text-md tracking-tight font-medium mt-2'>{slide.text}</div>
            </div>)
        }
    </Slider>
}