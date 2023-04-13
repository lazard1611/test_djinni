import layout from 'layout/layout';
import bootstrap from 'vendors/bootstrap.bundle.min';
import { pageLoad } from './utils';

export default class App {
	constructor() {
		this.$htmlTag = document.querySelector('html');
		this.pageName =
			this.$htmlTag.dataset.templateName &&
			this.$htmlTag.dataset.templateName.length > 0
				? this.$htmlTag.dataset.templateName
				: null;

		this.init = this.init.bind(this);
		this.init();
	}

	importPage() {
		if (this.pageName && this.pageName !== null) {
			import(`./pages/${this.pageName}`)
				.then(({ default: pageFunc }) => {
					const newPage = pageFunc();
				})

				.catch((error) => {
					console.error(
						'Failed to load page, check data-template-name at root if correct',
					);

					console.dir(error, error.stack);
				});
		}
	}

	init() {
		const initLayout = layout();
		pageLoad(() => {
			document.body.classList.add('body--loaded');
		});

		const dropdownTrigger = $('[data-bs-toggle="dropdown"]');
		const dropdown = new bootstrap.Dropdown(dropdownTrigger);

		setTimeout(() => {
			this.importPage();
		}, 0);
	}
}
