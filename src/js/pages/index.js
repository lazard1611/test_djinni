import hiddenText from 'components/hidden-text';
import infiniteScroll from 'components/infinite-scroll';
import animation from 'components/animation';
import handleSideBtn from 'components/side-buttons';

const index = () => {
	animation();
	infiniteScroll();
	handleSideBtn();
	hiddenText();
};

export default index;
