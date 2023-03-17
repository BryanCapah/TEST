import Container from '../../components/Container'
import CSlider from '../../components/CSlider'
import _static from '../../static'

export default function Login(params) {
    return <Container>
        <div className=' lg:px-24'>
            <CSlider data={_static.registerSlideAssets} />
        </div>

        <div>
            <div className='w-full flex justify-center mt-16'>
                <div className='lg:w-1/2 w-3/4 text-center bg-seeds-purple cursor-pointer rounded-full text-white py-2 text-md font-medium tracking-wider'>Masuk Sebagai Tamu</div>
            </div>

            <div className='mt-8 text-xs text-center'>
                <span className='font-light'>Jika kamu mendaftar, kamu menyetujui</span>
                <div className='cursor-pointer'>

                    <div className='flex text-center items-center justify-center'>
                        <span className='text-seeds-button-green ml-1 font-medium'>
                            Syarat  &
                        </span>  <div className='text-seeds-button-green ml-1 mr-1'>
                            Ketentuan
                        </div>
                        <span className='font-sm'>Seeds</span>
                    </div>
                </div>
            </div>
        </div>

        <div className='w-full flex justify-center mt-8'>
            <div className='w-3/4 lg:w-1/3 cursor-pointer mr-3 bg-opacity-0 text-center bg-white rounded-full border-seeds-button-green border text-seeds-button-green py-2 text-md font-medium tracking-wider'>Masuk</div>
            <div className='w-3/4 lg:w-1/3 cursor-pointer text-center bg-seeds-button-green rounded-full text-white py-2 text-md font-medium tracking-wider'>Daftar</div>
        </div>
    </Container>
}