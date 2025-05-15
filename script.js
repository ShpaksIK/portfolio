const themeElement = document.getElementById('theme')
const themeSwitcherElement = document.getElementById('theme__switcher')

const headerBurgerElement = document.getElementById('header__burger')
const navElement = document.getElementById('nav')

const skillElement = document.getElementById('skill')
const skillCloseButtonElement = document.getElementById('skill-close-btn')
const skillImageElement = document.getElementById('skill-image')
const skillTitleElement = document.getElementById('skill-title')
const skillTitleParentElement = document.getElementById('skill-title-parent')
const skillListElement = document.getElementById('skill-list')

const rootElement = document.body

let currentTheme = 'light'
let isOpenBurger = false

const setTheme = () => {
    if (currentTheme === 'light') {
        themeSwitcherElement.style.left = 'calc(100% - 50px)'
        themeSwitcherElement.style.right = '0'
        themeSwitcherElement.style.backgroundColor = 'var(--color-red)'
        themeElement.style.border = '1px solid var(--color-red)'
        themeElement.style.backgroundColor = 'var(--color-dark-theme-light-blue)'
        
        rootElement.setAttribute('class', 'theme-dark')
 
        currentTheme = 'dark'
        localStorage.setItem('theme', 'dark')
    } else {
        themeSwitcherElement.style.left = '0'
        themeSwitcherElement.style.backgroundColor = 'var(--color-dark-yellow)'
        themeElement.style.border = '1px solid var(--color-dark-yellow)'
        themeElement.style.backgroundColor = 'var(--color-light-theme-light-yellow)'
        
        rootElement.setAttribute('class', 'theme-light')

        currentTheme = 'light'
        localStorage.setItem('theme', 'light')
    }
}

themeElement.addEventListener('click', setTheme)

const savedTheme = localStorage.getItem('theme')
if (savedTheme === 'dark') {
    currentTheme = 'light'
} else {
    currentTheme = 'dark'
}
setTheme()

headerBurgerElement.addEventListener('click', () => {
    if (isOpenBurger) {
        navElement.style.display = 'none'
        headerBurgerElement.style.gap = '10px'
        const headerBurgerSpans = headerBurgerElement.querySelectorAll('.header__burger-line')
        headerBurgerSpans[1].style.display = 'block'
        headerBurgerSpans[0].style.transform = 'rotate(0)'
        headerBurgerSpans[2].style.transform = 'rotate(0)'
    } else {
        navElement.style.display = 'block'
        headerBurgerElement.style.gap = '0px'
        const headerBurgerSpans = headerBurgerElement.querySelectorAll('.header__burger-line')
        headerBurgerSpans[1].style.display = 'none'
        headerBurgerSpans[0].style.transform = 'rotate(45deg)'
        headerBurgerSpans[2].style.transform = 'rotate(-45deg)'
    }
    isOpenBurger = !isOpenBurger
})

const hideSkill = () => {
    skillElement.style.display = 'none'
    themeAtribute = rootElement.getAttribute('class').split(' ')[0]
    rootElement.setAttribute('class', `${themeAtribute}`)
}

const showSkill = (skill) => {
    skillElement.style.display = 'flex'
    themeAtribute = rootElement.getAttribute('class')
    rootElement.setAttribute('class', `${themeAtribute} modal-show`)
    switch (skill) {
        case 'html':
            skillImageElement.src = './assets/svg/html.svg'
            skillTitleElement.innerText = 'HTML'
            skillListElement.innerHTML = `
                <li>Вёрстка на HTML</li>
                <li>Методология BEM</li>
                <li>Семантическая разметка</li>
            `
            break
        case 'css':
            skillImageElement.src = './assets/svg/css.svg'
            skillTitleElement.innerText = 'CSS'
            skillListElement.innerHTML = `
                <li>Flex, Grid</li>
                <li>Анимации</li>
                <li>Адаптивная вёрстка</li>
            `
            break
        case 'js':
            skillImageElement.src = './assets/svg/js.svg'
            skillTitleElement.innerText = 'JavaScript'
            skillListElement.innerHTML = `
                <li>Основы языка</li>
                <li>Асинхронность (Promise, async/await)</li>
                <li>Манипуляция документом с использованием DOM API</li>
            `
            break
        case 'ts':
            skillImageElement.src = './assets/svg/ts.svg'
            skillTitleElement.innerText = 'TypeScript'
            skillListElement.innerHTML = `
                <li>Понимание типов и интерфейсов для создания типизированных объектов</li>
                <li>Параметризованные типы и generics</li>
                <li>Применение TypeScript в рамках React</li>
            `
            break
        case 'react':
            skillImageElement.src = './assets/svg/react.svg'
            skillTitleElement.innerText = 'React'
            skillListElement.innerHTML = `
                <li>Функциональные и классовые компоненты</li>
                <li>Реализация маршрутизации с помощью React Router</li>
                <li>Hooks</li>
                <li>Управление состоянием (Context API)</li>
                <li>Оптимизация производительности с использованием React.memo</li>
            `
            break
        case 'redux':
            skillImageElement.src = './assets/svg/redux.svg'
            skillTitleElement.innerText = 'Redux'
            skillListElement.innerHTML = `
                <li>Создание и настройка Redux-хранилища</li>
                <li>Reducers, actions</li>
                <li>Использование middleware (Redux Thunk)</li>
                <li>Интеграция Redux с React через React-Redux</li>
            `
            break
        case 'more':
            skillImageElement.src = './assets/images/more.png'
            skillTitleParentElement.innerText = 'Прочие технологии'
            skillListElement.innerHTML = `
                <li>Git</li>
                <li>Vite</li>
                <li>Bootstrap 5</li>
                <li>Tailwind CSS</li>
                <li>Figma</li>
                <li>Python 3</li>
            `
            break
        default:
            hideSkill()
            break
    }
}

skillElement.addEventListener('click', (e) => {
    if (e.target === skillElement) {
        hideSkill()
    }
})

skillCloseButtonElement.addEventListener('click', hideSkill)