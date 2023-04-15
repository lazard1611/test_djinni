const darkThem = () => {
	const activeClass = 'dark';
	const $btn = document.querySelector('.js-theme-btn');
	if (!$btn) return;
	const $body = document.body;

	const darkMode = () => {
		const wasDarkMode = window.localStorage.getItem('darkmode') === 'true';

		window.localStorage.setItem('darkmode', !wasDarkMode);
		$body.classList.toggle(activeClass, !wasDarkMode);
	};

	$btn.addEventListener('click', darkMode);
};

export default darkThem;
