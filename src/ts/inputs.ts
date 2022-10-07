const inputName = (event: Event): void => {

    const input = event.target as HTMLInputElement
    const alphaExp: RegExp = /[0-9.,!@#$%^&*()-=_+`~{}/?<>|'"]/

    if (input.value.match(alphaExp)) input.value = input.value.replace(alphaExp, '')

}

const init = (): void => {

    document.addEventListener('input', ((event: Event) => {

        if ((event.target as HTMLElement).classList.contains('-input-name-')) inputName(event)

    }) as EventListener)

}

export default { init }