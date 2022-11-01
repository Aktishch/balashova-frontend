const init = (): void => {

    const player = document.querySelector('#player') as HTMLElement
    const audio = player.querySelector('.-player-audio-') as HTMLAudioElement

    const statusAudio = (): void => {

        if (audio.paused) {

            audio.play()

        } else {

            audio.pause()

        }

    }

    player.addEventListener('click', statusAudio as EventListener)

}

export default { init }