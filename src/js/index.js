import {onLoading} from "./_modules/website";
import {loadPage} from "./_modules/home";
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../scss/application.scss';

import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse';
import {gsap} from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import {Slideshow} from "./_modules/slideshow.js";
import {FilterSubMenu} from "./_modules/filterSubMenu.js";



document.addEventListener("DOMContentLoaded", () => {
    onLoading();
    loadPage();

    Alpine.plugin(collapse);
    window.Alpine = Alpine
    Alpine.start();


    gsap.registerPlugin(ScrollToPlugin,  ScrollTrigger);

    document.querySelectorAll('.page-submenu a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const container = document.querySelector('.main');
            gsap.to(container, {
                duration: 0.6,
                scrollTo: {
                    y: targetId
                },
                ease: "power2.out"
            });
        });
    });

    document.querySelectorAll('.section').forEach(section => {
        ScrollTrigger.create({
            trigger: section,
            start: "top center", // when section top hits center of container
            end: "bottom center",
            scroller: ".main", // important: match your scroll container
            onEnter: () => setActive(section),
            onEnterBack: () => setActive(section),
        });
    });

    function setActive(section) {
        const id = section.getAttribute('id');
        document.querySelectorAll('.page-submenu a').forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    Slideshow();
    FilterSubMenu();

});