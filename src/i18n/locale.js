export {getLocale, setLocale};

function getLocale() {
    var locale = localStorage.getItem('locale');
    if (!locale) {
        locale = navigator.language.split('-')[0];
        setLocale(locale);
    }
    return locale;
}

function setLocale(locale) {
    localStorage.setItem('locale', locale);
}