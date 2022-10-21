const anchorTransition = (event: Event): void => {

    event.preventDefault()

    const id: string = String((event.target as HTMLAnchorElement).getAttribute('href'))
    const headerHeight: number = (document.querySelector('.-header-') as HTMLElement).clientHeight / 2
    const scrollToBlock = document.querySelector(id) as HTMLElement

    let elementPosition = scrollToBlock.getBoundingClientRect().top
    let offsetPosition = elementPosition + window.pageYOffset - headerHeight

    window.scrollTo({

        top: offsetPosition,
        behavior: 'smooth'

    })

}

const init = (): void => {

    document.addEventListener('click', ((event: Event) => {

        if ((event.target as HTMLElement).hasAttribute('data-href')) anchorTransition(event)

    }) as EventListener)

}

export default { init }