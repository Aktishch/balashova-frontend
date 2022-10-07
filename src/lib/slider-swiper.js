import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

const init = () => {

    const sliderEducation = new Swiper('.education-slider .swiper', {

        pagination: {

            el: '.education-slider .swiper-pagination',
            clickable: true

        },

        navigation: {

            prevEl: '.education-slider .swiper-button-prev',
            nextEl: '.education-slider .swiper-button-next'

        },

        grabCursor: true,
        spaceBetween: 20,

        breakpoints: {

            0: {

                slidesPerView: 1.1,
                slidesPerGroup: 1

            },

            576: {

                slidesPerView: 1.3,
                slidesPerGroup: 1

            },

            768: {

                slidesPerView: 2,
                slidesPerGroup: 2

            },

            1200: {

                slidesPerView: 3,
                slidesPerGroup: 3

            }

        }

    })

    const sliderArticles = new Swiper('.articles-slider .swiper', {

        pagination: {

            el: '.articles-slider .swiper-pagination',
            clickable: true

        },

        navigation: {

            prevEl: '.articles-slider .swiper-button-prev',
            nextEl: '.articles-slider .swiper-button-next'

        },

        grabCursor: true,
        spaceBetween: 20,

        breakpoints: {

            0: {

                slidesPerView: 1.1,
                slidesPerGroup: 1

            },

            576: {

                slidesPerView: 1.3,
                slidesPerGroup: 1

            },

            768: {

                slidesPerView: 2,
                slidesPerGroup: 2

            },

            1200: {

                slidesPerView: 3,
                slidesPerGroup: 3

            }

        }

    })

    const sliderReviews = new Swiper('.reviews-slider .swiper', {

        pagination: {

            el: '.reviews-slider .swiper-pagination',
            clickable: true

        },

        navigation: {

            prevEl: '.reviews-slider .swiper-button-prev',
            nextEl: '.reviews-slider .swiper-button-next'

        },

        grabCursor: true,
        spaceBetween: 20,

        breakpoints: {

            0: {

                slidesPerView: 1.1,
                slidesPerGroup: 1

            },

            576: {

                slidesPerView: 1.3,
                slidesPerGroup: 1

            },

            768: {

                slidesPerView: 2,
                slidesPerGroup: 2

            },

            1200: {

                slidesPerView: 3,
                slidesPerGroup: 3

            }

        }

    })

    window.Swiper = Swiper

}

export default { init }