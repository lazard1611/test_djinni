const infiniteScroll = () => {
	window.addEventListener('scroll', () => {
		const { clientHeight, scrollHeight, scrollTop } = document.documentElement;
		if (scrollHeight < scrollTop + clientHeight + 11) {
			console.log('load');
		}
	});
};

export default infiniteScroll;
