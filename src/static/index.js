import welcome from '../assets/bg-welcome-seeds.png'
import welcome2 from '../assets/slide2.png'
import welcome3 from '../assets/slide3.png'
import welcome4 from '../assets/slide4.png'
import id from '../assets/id.png'
import en from '../assets/en.png'
import common from '../common'
import dictionary from './dictionary'

const language = common.getLanguage()

const registerSlideAssets = [
    {
        image: welcome,
        title: dictionary.register.slide.title[1][language],
        text: dictionary.register.slide.text[1][language],
    },
    {
        image: welcome2,
        title: dictionary.register.slide.title[2][language],
        text: dictionary.register.slide.text[2][language],
    },
    {
        image: welcome3,
        title: dictionary.register.slide.title[3][language],
        text: dictionary.register.slide.text[3][language],
    },
    {
        image: welcome4,
        title: dictionary.register.slide.title[4][language],
        text: dictionary.register.slide.text[4][language],
    },
]

const slideSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    customPaging: i => <div className='dc mt-6'></div>
};

const langOptions = [
    { id: "en", label: "EN", icon: en },
    { id: "id", label: "ID", icon: id }
];

const _static = {
    registerSlideAssets,
    slideSettings,
    langOptions
}

export default _static