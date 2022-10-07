const init = (): void => {

	const header = document.querySelector('.-header-') as HTMLElement

	const scrollHeader = (): void => {

		let currentScrollPos: number = window.pageYOffset

		currentScrollPos > 0 ? header.classList.add('header--top') : header.classList.remove('header--top')

	}

	document.addEventListener('scroll', scrollHeader as EventListener)

}

export default { init }