import Flickity from 'flickity';
import 'flickity-fade';
import 'flickity/css/flickity.css';


export const Slideshow = () => {

    const carouselContainer = document.querySelector('.slideshow-container');
    const carousel = document.querySelector('.carousel');
    const SlideShowTriggers = document.querySelectorAll('.trigger-slideshow');
    const closeBtn = document.querySelector('.close-slideshow');


    function openCloseSlideShow(SlideShowTriggers) {
        SlideShowTriggers.forEach(trigger => {
            trigger.addEventListener('click', function (e) {
                carouselContainer.classList.add('show');
            });
        });

        closeBtn.addEventListener('click', function (e) {
            carouselContainer.classList.remove('show');
        });

        document.addEventListener('keyup', function (e) {
            if (e.key === 'Escape') {
                carouselContainer.classList.remove('show');
            }
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'ArrowLeft') {
                flkty.previous();
            } else if (event.key === 'ArrowRight') {
                flkty.next();
            }
        });
    }

    function slidetoSlide(SlideShowTriggers, flkty) {
        SlideShowTriggers.forEach(trigger => {
            trigger.addEventListener('click', function (e) {
                const index = trigger.dataset.index;
                flkty.select(index, false, true);
            });
        });
    }

    function setLegend (flkty) {
        const legend = document.querySelector('.slideshow-legend');
        const currentSlide = flkty.selectedElement;
        const slideLegend = currentSlide.dataset.legend || '';

        legend.innerHTML = `
            ${slideLegend}
        `;
    }


    const flickityOptions = {
        cellAlign: 'center',
        contain: true,
        lazyLoad: 4,
        fade: true,
        wrapAround: true,
        autoPlay: null,
        accessibility: true,
        pageDots: false,
        arrowShape: '',
        prevNextButtons: true,
        on: {
            ready: function () {
                openCloseSlideShow(SlideShowTriggers);
                slidetoSlide(SlideShowTriggers, this);
            },
            change: function (index) {
                setLegend(this);
            }
        }
    }


    var flkty = new Flickity(carousel, flickityOptions);

}