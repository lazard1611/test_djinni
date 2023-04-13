const hiddenText = () => {
	const $cards = document.querySelectorAll('.js-card-content');
	if (!$cards.length) return;

	$cards.forEach(($card) => {
		const $text = $card.querySelector('p');
		const $btn = $card.querySelector('button');
		if (!$text || !$btn) return;

		const containerHeight = $text.clientHeight;
		const tempElement = document.createElement('div');
		tempElement.style.whiteSpace = 'pre';
		tempElement.innerHTML = 'A';
		$text.appendChild(tempElement);
		const lineHeight = tempElement.clientHeight;
		$text.removeChild(tempElement);
		const numberOfRows = Math.floor(containerHeight / lineHeight);

		let isClick = true;

		if (numberOfRows > 2) {
			$btn.style.display = 'block';
			$text.style.maxHeight = `${lineHeight * 2}px`;

			$btn.addEventListener('click', () => {
				if (isClick) {
					$btn.innerText = 'Less more...';
					$text.style.transition = 'max-height .3s ease-in-out';
					$text.style.maxHeight = `${containerHeight}px`;
					isClick = false;
				} else {
					$btn.innerText = 'Show more...';
					$text.style.transition = 'max-height .3s ease-in-out';
					$text.style.maxHeight = `${lineHeight * 2}px`;
					isClick = true;
				}
			});
		}
	});
};

export default hiddenText;
