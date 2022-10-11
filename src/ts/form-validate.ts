declare global {

    interface Window {

        Fancybox: any

    }

}

const validateForm = (form: Element) => {

    const labels: NodeListOf<Element> = form.querySelectorAll('.-validate-label-')
    let validate: boolean = true

    labels.forEach((label: Element) => {

        const input = (label as HTMLElement).querySelector('.-validate-input-') as HTMLInputElement
        const error = (label as HTMLElement).querySelector('.-validate-error-') as HTMLElement

        const inputFocus = (): void => {

            input.focus()
            input.classList.add('input--error')
            error.classList.remove('anim--fade')
            validate = false

        }

        const maxLengthInputTel = (numb: number): void => {

            if (input.value.length > 0 && input.value.length < numb) {

                error.innerText = 'Введите корректный номер!'
                inputFocus()

            }

        }

        if (input.value == null || input.value == '' || input.value.length == 0) {

            inputFocus()

        } else {

            input.classList.remove('input--error')
            error.classList.add('anim--fade')

        }

        if (input.classList.contains('-input-name-')) {

            if (input.value.length == 1) inputFocus()

        }

        if (input.classList.contains('-input-tel-')) {

            if (input.value[1] == '7') {

                maxLengthInputTel(18)

            } else if (input.value[0] == '8') {

                maxLengthInputTel(17)

            } else if (input.value[1] !== '7') {

                maxLengthInputTel(11)

            } else {

                error.innerText = 'Пожалуйста, введите ваш номер!'

            }

        }

        input.addEventListener('input', (() => {

            if (input.value.length > 0) {

                input.classList.remove('input--error')
                error.classList.add('anim--fade')

            }

        }) as EventListener, { once: true })

    })

    return validate

}

const formSubmit = (event: Event): void => {

    event.preventDefault()

    const form = event.target as HTMLFormElement
    
    if (validateForm(form)) {
        
        const formData: FormData = new FormData(form)
        const requestUrl: string = '/submitHandler.php'
        const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement

        submitBtn.setAttribute('disabled', 'disabled')

        fetch(requestUrl, {

            method: 'POST',
            body: formData

        }).then((result: Response) => {

            result.text()

        }).then(() => {

            window.Fancybox.close()

            window.Fancybox.show([{

                src: '/dialogs/dialog-submit.php',
                type: 'ajax',
                dragToClose: false,
                mainClass: 'fancybox-modal'

            }])

            form.reset()
            submitBtn.removeAttribute('disabled')

        }).catch((error: string) =>

            console.log('The form has not been sent', error)

        )

    }

}

const init = (): void => {

    document.addEventListener('submit', ((event: Event) => {

        if ((event.target as HTMLElement).classList.contains('-validate-form-')) formSubmit(event)

    }) as EventListener)

}

export default { init }