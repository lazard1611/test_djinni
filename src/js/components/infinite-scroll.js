/* eslint-disable */
const infiniteScroll = () => {
	let page = 1;
	$(window).scroll(function () {
		if ($(window).scrollTop() + $(window).height() === $(document).height()) {
			$.ajax({
				url: 'https://picsum.photos/v2/list?page=1&limit=9',
				data: { page: page },
				success: function (response) {
					if (response !== '') {
						$('#card-container').append(response);
						page += 1;
					}
				},
			});
		}
	});
};

export default infiniteScroll;
