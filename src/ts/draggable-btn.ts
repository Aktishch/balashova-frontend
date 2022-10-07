interface coordinates {

	top: number,
	left: number

}

const touchBtn = (): void => {

	const html = document.querySelector('html') as HTMLElement

	document.addEventListener('touchmove', ((event: TouchEvent) => {

		if ((event.target as HTMLElement).classList.contains('-draggable-btn-')) {

			if (event.targetTouches.length == 1) {

				html.classList.add('overflow-hidden')
				const btn = event.target as HTMLElement
				const touch: Touch = event.targetTouches[0]

				const coordinat: coordinates = {

					top: touch.clientY,
					left: touch.clientX

				}

				btn.style.top = `${coordinat.top}px`
				btn.style.left = `${coordinat.left}px`

				sessionStorage.setItem('coordinates', JSON.stringify(coordinat))

			}

		}

	}) as EventListener)

	document.addEventListener('touchend', ((event: Event) => {

		if ((event.target as HTMLElement).classList.contains('-draggable-btn-')) html.classList.remove('overflow-hidden')

	}) as EventListener)

}

const init = (): void => {

	touchBtn()

}

export default { init }