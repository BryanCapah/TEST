const setLanguage = (value) => {
    localStorage.setItem('language', value.id)
    window.location.reload()
}

const getLanguage = () => localStorage.getItem('language')

const common = {
    setLanguage,
    getLanguage
}

export default common