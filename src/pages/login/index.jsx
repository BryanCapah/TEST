import welcome from '../../assets/bg-welcome-seeds.png'
import welcome2 from '../../assets/slide2.png'
import welcome3 from '../../assets/slide3.png'
import welcome4 from '../../assets/slide4.png'
import Container from '../../components/Container'
import Slider from 'react-slick'

export default function Login(params) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return <Container>
        <Slider {...settings}>
            <div className='w-full text-center'>
                <div className='w-full flex flex-col items-center mt-3'>
                    <img src={welcome} alt="" />
                </div>
                <div className='text-lg tracking-wide font-semibold mt-3'>Selamat Datang di Seeds</div>
                <div className='text-md tracking-tight font-medium mt-2'>Mulai dan perluas perjalanan investasi kamu</div>
                <div className='text-md tracking-tight font-medium '>dan teman-temanmu!</div>
            </div>
            <div className='w-full text-center'>
                <div className='w-full flex flex-col items-center mt-3'>
                    <img src={welcome} alt="" />
                </div>
                <div className='text-lg tracking-wide font-semibold mt-3'>Selamat Datang di Seeds</div>
                <div className='text-md tracking-tight font-medium mt-2'>Mulai dan perluas perjalanan investasi kamu</div>
                <div className='text-md tracking-tight font-medium '>dan teman-temanmu!</div>
            </div>
        </Slider>

        <div>
            <div className='w-full flex justify-center mt-16'>
                <div className='w-1/2 text-center bg-seeds-purple cursor-pointer rounded-full text-white py-2 text-md font-medium tracking-wider'>Enter as a guest</div>
            </div>

            <div className='mt-8 text-xs text-center'>
                <span className='font-light'>By clicking Register, you agree with Seeds</span>
                <a href="" className='cursor-pointer'>
                    <span className='text-seeds-button-green ml-1 font-medium'>
                        Terms  &
                    </span>
                    <div className='text-seeds-button-green ml-1 font-medium'>
                        Conditions
                    </div>
                </a>
            </div>
        </div>

        <div className='w-full flex justify-center mt-8'>
            <div className='w-1/3 cursor-pointer mr-3 bg-opacity-0 text-center bg-white rounded-full border-seeds-button-green border text-seeds-button-green py-2 text-md font-medium tracking-wider'>Container</div>
            <div className='w-1/3 cursor-pointer text-center bg-seeds-button-green rounded-full text-white py-2 text-md font-medium tracking-wider'>Register</div>
        </div>
    </Container>
}