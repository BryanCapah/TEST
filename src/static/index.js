import welcome from '../assets/bg-welcome-seeds.png'
import welcome2 from '../assets/slide2.png'
import welcome3 from '../assets/slide3.png'
import welcome4 from '../assets/slide4.png'
import id from '../assets/id.png'
import en from '../assets/en.png'

const registerSlideAssets = [
    {
        image: welcome,
        title: 'Selamat Datang di Seeds',
        text: 'Mulai dan perluas perjalanan investasi kamu dan teman-temanmu!',
    },
    {
        image: welcome2,
        title: 'Buat Circle kamu sendiri',
        text: 'Buatlah circle dengan orang-orang yang memiliki minat dan passion yang sama',
    },
    {
        image: welcome3,
        title: 'Analisis Portfolio dengan mudah',
        text: 'Memudahkan kamu mendapatkan wawasan untuk meningkatkan investasimu',
    },
    {
        image: welcome4,
        title: 'Raih tujuan kamu!',
        text: 'Dapatkan lebih dekat dengan impianmu dengan mendapatkan lebih banyak hadiah',
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
    { value: "EN", label: "EN", icon: en },
    { value: "ID", label: "ID", icon: id }
];

const _static = {
    registerSlideAssets,
    slideSettings,
    langOptions
}

export default _static