const infiniteScroll = () => {
	const selectors = {
		cardsList: '.js-cards-list',
		dots: '.js-dots-load',
	};

	const activeClass = 'load_dots--load_state';

	const $cardsList = document.querySelector(selectors.cardsList);
	const $dots = document.querySelector(selectors.dots);
	if (!$dots || !$cardsList) return;
	let isScrollBottom = true;

	const addDataToDOM = (data) => {
		const cardItem = document.createElement('li');
		cardItem.className = 'cards__item pe-lg-6 pb-lg-6 mb-8 mb-lg-0 js-fade';

		cardItem.innerHTML = `
			<div class="card overflow-hidden">
				<picture class="position-relative">
					<img class="cover_img position-absolute top-0 left-0" src= ${data} alt="img card">
				</picture>
				<div class="px-6 pt-6 pb-10 position-relative js-card-content">
					<h3 class="card-title">Heading</h3>
					<p class="overflow-hidden m-0 card-text fs-6">
						And here full text doesn’t fit, and at the very end of it we should show a truncatio. Here goes some sample, example text that is relatively short.
					</p>
					<button class="btn-link position-absolute fs-6 bottom-4 start-6" type="button" aria-label="show more">
						Show more...
					</button>
				</div>
				<div class="px-4 py-4 border-top">
					<ul class="d-flex me-n4 mb-n4">
						<li class="pe-4 pb-4">
							<a class="btn btn-primary" href="#">Save to collection</a>
						</li>
						<li class="pe-4 pb-4">
							<a class="btn btn-outline-secondary" href="#">Share</a>
						</li>
					</ul>
				</div>
			</div>
`;

		$cardsList.appendChild(cardItem);
	};

	const getCards = () => {
		fetch('https://picsum.photos/v2/list?page=1&limit=9')
			.then((response) => response.json())
			.then((data) => {
				data.slice(0, 4).map((item, index) => {
					return setTimeout(() => {
						addDataToDOM(item.download_url);
					}, 500);
				});
			})
			.catch((error) => console.error(error));
	};

	window.addEventListener('scroll', () => {
		const { clientHeight, scrollHeight, scrollTop } = document.documentElement;
		if (scrollHeight <= scrollTop + clientHeight && isScrollBottom) {
			isScrollBottom = false;
			getCards();
			$dots.classList.add(activeClass);
		} else {
			isScrollBottom = true;
			$dots.classList.remove(activeClass);
		}
	});
};

export default infiniteScroll;
