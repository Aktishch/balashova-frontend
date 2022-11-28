const init = (): void => {

    const listings: NodeListOf<Element> = document.querySelectorAll('.-list-')

    listings.forEach((element: Element): void => {

        const listing: HTMLElement = element as HTMLElement
        const listingBtn: HTMLButtonElement = listing.querySelector('.-list-show-') as HTMLButtonElement
        const listingItems: NodeListOf<Element> = listing.querySelectorAll('.-list-el-hid-')

        listingBtn.addEventListener('click', ((): void => {

            for (let i: number = 0; i < listingItems.length; i++) {


                if (listingItems[i].classList.contains('display-tb-none')) listingItems[i].classList.remove('display-tb-none')
                if (listingItems[i].classList.contains('-elem-')) listingItems[i].classList.add('-show-')

                listingBtn.remove()

            }

        }) as EventListener)

    })

}

export default { init }