const init = (): void => {

    const player = document.querySelector('#player') as HTMLElement
    const audio = player.querySelector('.-player-audio-') as HTMLAudioElement
    const status = player.querySelector('.-player-status-') as HTMLButtonElement
    const statusIcon = status.querySelector('use') as SVGUseElement
    const progress = player.querySelector('.-player-progress-') as HTMLElement
    const range = player.querySelector('.-player-range-') as HTMLElement
    const start = player.querySelector('.-player-start-') as HTMLElement
    const end = player.querySelector('.-player-end-') as HTMLElement
    const volume = player.querySelector('.-player-volume-') as HTMLButtonElement

    const statusAudio = (): void => {

        if (audio.paused) {

            audio.play()
            statusIcon.setAttribute('xlink:href', 'img/icons.svg#pause')

        } else {

            audio.pause()
            statusIcon.setAttribute('xlink:href', 'img/icons.svg#play')

        }

    }

    const audioTiming = (time: Element, status: string): void => {

        let min: number = 0
        let sec: number = 0

        if (status == 'start') {

            min = Math.floor(audio.currentTime / 60)
            sec = Math.floor(audio.currentTime % 60)

        } else {

            min = Math.floor(audio.duration / 60)
            sec = Math.floor(audio.duration % 60)

        }

        let formatMin: string = ''
        let formatSec: string = ''

        min < 10 ? formatMin = `0${min}` : formatMin = String(min)
        sec < 10 ? formatSec = `0${sec}` : formatSec = String(sec)

        time.innerHTML = `${formatMin}:${formatSec}`

    }

    const audioStart = (): void => {

        let percent: number = (audio.currentTime / audio.duration) * 100
        range.style.width = `${percent}%`

        audioTiming(start, 'start')

    }

    const audioEnd = (): void => {

        audio.addEventListener('loadedmetadata', (() => {

            audioTiming(end, 'end')

        }) as EventListener)

    }

    const setProgress = (event: MouseEvent): void => {

        let width: number = progress.clientWidth
        let clickX: number = event.offsetX
        let duration: number = audio.duration

        audio.currentTime = (clickX / width) * duration

    }

    volume.addEventListener('click', (() => {

        volume.classList.toggle('-player-mute-')

        const volumeIcon = volume.querySelector('svg') as SVGSVGElement
        const volumeIconSrc = volumeIcon.querySelector('use') as SVGUseElement

        if (volume.classList.contains('-player-mute-')) {

            volumeIcon.classList.add('fade-50')
            volumeIconSrc.setAttribute('xlink:href', 'img/icons.svg#volume-off')
            audio.volume = 0

        } else {

            volumeIcon.classList.remove('fade-50')
            volumeIconSrc.setAttribute('xlink:href', 'img/icons.svg#volume-up')
            audio.volume = 1

        }

    }) as EventListener)

    status.addEventListener('click', statusAudio as EventListener)
    audio.addEventListener('timeupdate', audioStart as EventListener)
    audio.addEventListener('timeupdate', audioEnd as EventListener)
    progress.addEventListener('click', setProgress as EventListener)

    audioEnd()

}

export default { init }