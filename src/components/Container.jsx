import logo from '../assets/logo-seeds.png'
import id from '../assets/id.png'
import hello from '../assets/hello.png'
import en from '../assets/en.png'
import bgLine from '../assets/bg-line.png'
import { Dropdown } from '../components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Container({ children }) {

    const options = [
        { value: "EN", label: "EN", icon: en },
        { value: "ID", label: "ID", icon: id }
    ];

    return <div className='flex min-w-full min-h-screen'>
        <div className='min-w-[50vw] h-screen hidden lg:block'>
            <div className='min-h-screen flex items-center justify-center min-w-full transition-all duration-300  bg-gradient-to-tr from-seeds-green  to-seeds-purple px-[8%] py-[3%]'>
                <img className='fixed bottom-0 w-1/2 left-0 z-0' src={bgLine} alt="" />
                <img className='left-0 w-[30vw]' src={hello} alt="" />
            </div>
        </div>
        <div className='min-w-[50vw] h-screen relative'>
            <div className='absolute h-full w-full z-20'>
                <div className='w-full flex items-center justify-center lg:px-20 lg:py-14 h-full p-8 '>
                    <div className='bg-white min-w-full min-h-full py-12 px-16 relative rounded-2xl shadow-center text-sm lg:text-base flex flex-col justify-between'>
                        <div className='w-full flex justify-between items-center pr-5 lg:pr-0'>
                            <img src={logo} alt="" />
                            <Dropdown options={options} />
                        </div>
                        <br />
                        {children}
                    </div>
                </div>
            </div>
            <div className='w-full h-1/2 flex justify-center'>
                <div className='rounded-full bg-seeds-green blur-[100px]' style={{ height: '700px', width: '700px' }} />
            </div>
            <div className='w-full h-1/2 justify-between flex'>
                <div className='rounded-full bg-seeds-green blur-[100px] ' style={{ height: '350px', width: '350px' }} />
                <div className='rounded-full bg-seeds-purple blur-[100px]  right-0' style={{ height: '350px', width: '350px' }} />
            </div>
        </div>
    </div>
}