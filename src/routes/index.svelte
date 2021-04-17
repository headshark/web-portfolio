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
	<div class="mt-24 mb-10 md:mt-10 md:ml-60">
		<div
			bind:this={wrapper}
			class="grid grid-flow-row grid-cols-3 gap-3 mx-4 md:grid-cols-4 md:gap-4 lg:grid-cols-5 lg:gap-5"
		>
			{#each { length: 4 } as _}
				{#each { length: 6 } as _, i}
					<div class="img-square">
						<img
							data-zoomable
							data-lazy="{import.meta.env.VITE_IMG_PATH}/project1-{i + 1}.webp"
							data-zoom-src="{import.meta.env.VITE_IMG_PATH}/project1-{i + 1}.webp"
							alt="Project {i + 1}"
						/>
					</div>
				{/each}
			{/each}
		</div>
	</div>
</main>
