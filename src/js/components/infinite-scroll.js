const infiniteScroll = () => {
	const activeClass = 'load_dots--load_state';
	const $dots = document.querySelector('.js-dots-load');
	if (!$dots) return;
	let isScrollBottom = true;

	window.addEventListener('scroll', () => {
		const { clientHeight, scrollHeight, scrollTop } = document.documentElement;
		if (scrollHeight <= scrollTop + clientHeight && isScrollBottom) {

			isScrollBottom = false;
			$dots.classList.add(activeClass);
		} else {
			isScrollBottom = true;
			$dots.classList.remove(activeClass);
		}
	});
};

export default infiniteScroll;
