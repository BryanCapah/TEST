import { useNavigate } from 'react-router';
import common from '../../common';
import Container from '../../components/Container'
import CSlider from '../../components/CSlider'
import _static from '../../static'
import dictionary from '../../static/dictionary';

export default function Onboarding(params) {
    const language = common.getLanguage()
    const nav = useNavigate()
    return <Container>
        <div className=' lg:px-24'>
            <CSlider data={_static.registerSlideAssets} />
        </div>
        <div>
            <div className='w-full flex justify-center mt-16'>
                <div
                    onClick={() => nav('/home')}
                    className='lg:w-1/2 w-3/4 text-center bg-seeds-purple cursor-pointer rounded-full text-white py-2 text-md font-medium tracking-wider'>
                    {dictionary.button.BTN_GUEST[language]}
                </div>
            </div>
            <div className='mt-8 text-xs text-center'>
                <span className='font-light'> {dictionary.termAndCondition.text1[language]}</span>
                <div className='cursor-pointer'>
                    <div className='flex text-center items-center justify-center'>
                        <span className='text-seeds-button-green ml-1 font-medium'>
                            {dictionary.termAndCondition.text2[language]}
                        </span>
                        <span className='font-sm ml-1'>Seeds</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full flex justify-center mt-8'>
            <div
                onClick={() => nav('/login')}
                className='w-3/4 lg:w-1/3 cursor-pointer mr-3 bg-opacity-0 text-center bg-white rounded-full border-seeds-button-green border text-seeds-button-green py-2 text-md font-medium tracking-wider'>
                {dictionary.button.BTN_LOGIN[language]}
            </div>
            <div
                onClick={() => nav('/register')}
                className='w-3/4 lg:w-1/3 cursor-pointer text-center bg-seeds-button-green rounded-full text-white py-2 text-md font-medium tracking-wider'>
                {dictionary.button.BTN_REGISTER[language]}
            </div>
        </div>
    </Container>
}