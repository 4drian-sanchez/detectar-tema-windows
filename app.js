document.addEventListener('DOMContentLoaded', e => {

    function detectSystemTheme() {
        const systemPreference = window.matchMedia('(prefers-color-scheme: dark)');    

        if(systemPreference.matches) {
            const bodyElement = document.querySelector('body')
                .classList.add('bg-slate-900')
            const h1Element = document.querySelector('h1')
                .classList.add('text-gray-100')
        } else {
            const bodyElement = document.querySelector('body')
                .classList.add('bg-gray-100')
            const h1Element = document.querySelector('h1')
                .classList.add('text-slate-900')
        }

    }

    detectSystemTheme()

});






