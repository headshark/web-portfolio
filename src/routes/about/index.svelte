<script>
	import { page } from '../../stores';
	page.set('about');
</script>

<svelte:head>
	<title>About - Christian Dela Cruz</title>
</svelte:head>

<main>
	<div class="mt-24 mb-10 md:mt-32 md:ml-60">
		<div
			class="grid grid-flow-row grid-cols-1 mx-4 mb-24 gap-y-10 xl:mx-32 xl:grid-cols-3 xl:gap-x-10 lg:mx-16 md:mx-8"
		>
			<div class="flex items-center justify-center xl:justify-start">
				<img
					class="h-auto w-96"
					src="{import.meta.env.VITE_IMG_PATH}/steph-curry.png"
					alt="Christian Dela Cruz"
					width="453"
					height="551"
				/>
			</div>
			<div class="flex flex-col items-start justify-center col-span-2">
				<h1 class="mb-4 font-medium text-7xl">Hi there!</h1>
				<p class="text-xl">
					Fuelled by a passion for designing modern homes, I have a deep desire to excel and
					continuously improve in my work. Learn more about my journey below.
				</p>
			</div>
		</div>
		<div
			class="grid grid-flow-row grid-cols-1 mx-4 mb-24 gap-y-10 xl:mx-32 xl:grid-cols-3 xl:gap-x-10 lg:mx-16 md:mx-8"
		>
			<div class="flex flex-col items-start justify-start col-span-2">
				<h2 class="mb-4 text-4xl font-medium">My Career So Far</h2>
				<p class="text-lg">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
					sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.
				</p>
			</div>
			<div class="flex items-center">
				<div class="flex flex-wrap content-start justify-start">
					<div class="p-2 mb-2 mr-2 font-semibold uppercase border border-gray-300 rounded-lg">
						SketchUp
					</div>
					<div class="p-2 mb-2 mr-2 font-semibold uppercase border border-gray-300 rounded-lg">
						AutoCAD
					</div>
					<div class="p-2 mb-2 mr-2 font-semibold uppercase border border-gray-300 rounded-lg">
						Lorem
					</div>
					<div class="p-2 mb-2 mr-2 font-semibold uppercase border border-gray-300 rounded-lg">
						Ipsum
					</div>
					<div class="p-2 mb-2 mr-2 font-semibold uppercase border border-gray-300 rounded-lg">
						Dolor
					</div>
					<div class="p-2 mb-2 mr-2 font-semibold uppercase border border-gray-300 rounded-lg">
						Sit
					</div>
					<div class="p-2 mb-2 mr-2 font-semibold uppercase border border-gray-300 rounded-lg">
						Consectetur
					</div>
					<div class="p-2 mb-2 mr-2 font-semibold uppercase border border-gray-300 rounded-lg">
						Adipiscing
					</div>
					<div class="p-2 mb-2 mr-2 font-semibold uppercase border border-gray-300 rounded-lg">
						Elit
					</div>
					<div class="p-2 mb-2 mr-2 font-semibold uppercase border border-gray-300 rounded-lg">
						Sed
					</div>
					<div class="p-2 mb-2 mr-2 font-semibold uppercase border border-gray-300 rounded-lg">
						Do
					</div>
					<div class="p-2 mb-2 mr-2 font-semibold uppercase border border-gray-300 rounded-lg">
						Eiusmod
					</div>
					<div class="p-2 mb-2 mr-2 font-semibold uppercase border border-gray-300 rounded-lg">
						Tempor
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
