const app = {
	data() {
		return {
			currentSlideIndex: 0,
			sliderInterval: null,
			slides: [
				{
					id: 0,
				},
				{
					id: 1,
				},
				{
					id: 2,
				},
				{
					id: 3,
				},
				{
					id: 4,
				},
				{
					id: 5,
				},
				{
					id: 6,
				},
				{
					id: 7,
				},
				{
					id: 8,
				},
			],
		};
	},

	methods: {
		chooseSlide(newIndex) {
			switch (true) {
				case newIndex < 0:
					this.currentSlideIndex = this.slides.length - 1;
					break;
				case newIndex > this.slides.length - 1:
					this.currentSlideIndex = 0;
					break;
				default:
					this.currentSlideIndex = newIndex;
					break;
			}
		},
		startTimer() {
			if (!this.sliderInterval) {
				this.sliderInterval = setInterval(() => {
					this.chooseSlide(this.currentSlideIndex + 1);
				}, 3000);
			}
		},

		stopTimer() {
			clearInterval(this.sliderInterval);
			this.sliderInterval = null;
		},

		updateTimer() {
			this.stopTimer();

			setTimeout(this.startTimer, 5000);
		},
	},

	mounted() {
		this.sliderInterval = setInterval(() => {
			this.chooseSlide(this.currentSlideIndex + 1);
		}, 3000);
	},
};

Vue.createApp(app).mount("#app");
