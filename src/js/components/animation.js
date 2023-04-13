import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const animation = () => {
	const selectors = {
		section: '.js-animation',
		item: '.js-fade',
	};

	const $section = document.querySelector(selectors.section);
	if (!$section) return;
	const $items = $section.querySelectorAll(selectors.item);

	gsap.registerPlugin(ScrollTrigger);
	const tl = gsap.timeline({
		paused: true,
	});

	ScrollTrigger.create({
		trigger: $section,
		start: 'top-=100 top',
		end: 'bottom bottom',
		markers: true,
		animation: tl,
	});

	tl.fromTo(
		$items,
		{
			opacity: 0,
		},
		{
			opacity: 1,
			delay: 0.2,
			stagger: 0.4,
			duration: 0.4,
		},
	);
};

export default animation;
