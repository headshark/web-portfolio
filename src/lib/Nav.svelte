<script>
	import { page } from '../stores';
	let hidden = true;
</script>

<nav class="fixed top-0 z-10 flex flex-col flex-shrink-0 w-full bg-white md:z-0 md:w-60">
	<div class="flex flex-row items-center justify-between md:flex-col md:mt-4">
		<a class="p-4" href="/">
			<img
				class="w-12 h-12 md:w-24 md:h-24"
				src="/cdc.svg"
				alt="CDC Logo"
				width="24px"
				height="24px"
			/>
		</a>
		<a class="p-4" href="/">
			<h1 class="font-medium text-center md:text-lg">Christian Dela Cruz</h1>
		</a>
		<button
			class="p-4 md:hidden focus:outline-none focus:shadow-outline"
			on:click={() => (hidden = !hidden)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="w-6 h-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					class:hidden={!hidden}
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/>
				<path
					class:hidden
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>
	</div>
	<div class="flex-grow px-4 pb-4 text-sm md:overflow-y-auto md:h-screen md:block" class:hidden>
		<a class="flex items-center py-2 md:px-2" href="/" on:click={() => (hidden = true)}>
			<p class="relative w-max link">
				<span>Projects</span>
				<span
					class="absolute left-0 h-1 transition-all bg-yellow-400 -bottom-1 {$page === 'projects'
						? 'w-full'
						: 'w-0'}"
				/>
			</p>
		</a>
		<a class="flex items-center py-2 md:px-2" href="/about" on:click={() => (hidden = true)}>
			<p class="relative w-max link">
				<span>About</span>
				<span
					class="absolute left-0 h-1 transition-all bg-yellow-400 -bottom-1 {$page === 'about'
						? 'w-full'
						: 'w-0'}"
				/>
			</p>
		</a>
		<a class="flex items-center py-2 md:px-2" href="/contact" on:click={() => (hidden = true)}>
			<p class="relative w-max link">
				<span>Contact</span>
				<span
					class="absolute left-0 h-1 transition-all bg-yellow-400 -bottom-1 {$page === 'contact'
						? 'w-full'
						: 'w-0'}"
				/>
			</p>
		</a>
	</div>
</nav>
