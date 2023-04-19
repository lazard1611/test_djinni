const handleSideBtn = () => {
	const activeClass = 'active';
	const $sidebar = document.querySelector('aside');
	if (!$sidebar) return;

	$sidebar.addEventListener('click', (e) => {
		e.preventDefault();
		const $btns = $sidebar.querySelectorAll('.btn');

		if ($btns.length > 0) {
			$btns.forEach(($btn) => {
				$btn.classList.remove(activeClass);
			});
		}

		const btnTarget = e.target;
		if (btnTarget.closest('.btn')) {
			btnTarget.closest('.btn').classList.add(activeClass);
		}
	});
};

export default handleSideBtn;
