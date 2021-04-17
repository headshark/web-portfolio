<script>
	import { page } from '../stores';
	import { onMount } from 'svelte';
	import mediumZoom from 'medium-zoom';
	let wrapper;

	page.set('projects');
	onMount(() => {
		const images = wrapper.querySelectorAll('img');
		const lazyLoad = (target) => {
			const io = new IntersectionObserver((entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const img = entry.target;
						const src = img.getAttribute('data-lazy');

						img.setAttribute('src', src);
						img.classList.add('fade');

						observer.disconnect();
					}
				});
			});

			io.observe(target);
		};

		images.forEach(lazyLoad);
		mediumZoom('[data-zoomable]', {
			scrollOffset: 0,
			margin: 16,
			background: '#000'
		});
	});
</script>

<svelte:head>
	<title>Projects - Christian Dela Cruz</title>
</svelte:head>

<main>
	<div class="mt-24 md:mt-10 md:ml-60">
		<div
			bind:this={wrapper}
			class="grid grid-flow-row grid-cols-3 gap-3 mx-4 md:grid-cols-4 md:gap-4 lg:grid-cols-5 lg:gap-5"
		>
			<div class="img-square">
				<img
					data-zoomable
					data-lazy="{import.meta.env.VITE_IMG_PATH}/project1-1.webp"
					alt="Project 1"
				/>
			</div>
			<div class="img-square">
				<img
					data-zoomable
					data-lazy="{import.meta.env.VITE_IMG_PATH}/project1-2.webp"
					alt="Project 2"
				/>
			</div>
			<div class="img-square">
				<img
					data-zoomable
					data-lazy="{import.meta.env.VITE_IMG_PATH}/project1-3.webp"
					alt="Project 3"
				/>
			</div>
			<div class="img-square">
				<img
					data-zoomable
					data-lazy="{import.meta.env.VITE_IMG_PATH}/project1-4.webp"
					alt="Project 4"
				/>
			</div>
			<div class="img-square">
				<img
					data-zoomable
					data-lazy="{import.meta.env.VITE_IMG_PATH}/project1-5.webp"
					alt="Project 5"
				/>
			</div>
			<div class="img-square">
				<img
					data-zoomable
					data-lazy="{import.meta.env.VITE_IMG_PATH}/project1-6.webp"
					alt="Project 6"
				/>
			</div>
		</div>
	</div>
</main>
