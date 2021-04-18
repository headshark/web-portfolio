<script>
	import { page } from '../../stores';
	page.set('contact');
</script>

<svelte:head>
	<title>Contact - Christian Dela Cruz</title>
</svelte:head>

<main class="flex-1">
	<div class="mt-24 mb-10 md:mt-32 md:ml-60">
		<div
			class="grid grid-flow-row grid-cols-1 px-8 py-16 mx-4 mb-24 border border-gray-700 rounded-lg sm:mx-8 xl:px-12 gap-y-10 xl:mx-32 xl:grid-cols-2 xl:gap-x-10 lg:mx-16"
		>
			<div class="flex items-start justify-start">
				<h1 class="text-4xl font-medium lg:text-6xl">Want to get in touch?</h1>
			</div>
			<form
				name="contact"
				method="POST"
				data-netlify-recaptcha="true"
				data-netlify="true"
				class="flex flex-col"
			>
				<div class="flex flex-col md:flex-row">
					<div class="flex-1 mb-6 md:mr-3">
						<label class="block mb-2 text-sm font-medium text-gray-500" for="name">Name</label>
						<input
							type="text"
							name="name"
							placeholder="Enter your name"
							maxlength="256"
							class="w-full p-4 text-sm text-gray-900 bg-white rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-transparent"
						/>
					</div>
					<div class="flex-1 mb-6 md:ml-3">
						<label class="block mb-2 text-sm font-medium text-gray-500" for="email">Email</label>
						<input
							type="email"
							name="email"
							placeholder="Enter your email"
							maxlength="256"
							class="w-full p-4 text-sm text-gray-900 bg-white rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-transparent"
							required
						/>
					</div>
				</div>
				<div class="flex-1 mb-6">
					<label class="block mb-2 text-sm font-medium text-gray-500" for="message">Message</label>
					<textarea
						type="text"
						name="message"
						placeholder="Enter your message"
						maxlength="5000"
						class="w-full p-4 text-sm text-gray-900 bg-white rounded-lg h-36 focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-transparent"
					/>
				</div>
				<div class="flex-1">
					<div data-netlify-recaptcha="true" />
				</div>
				<div class="flex-1">
					<button
						type="submit"
						class="p-4 font-medium text-white bg-black rounded-lg cursor-pointer hover:opacity-80 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-transparent focus:ring-opacity-50"
					>
						Send Message
					</button>
				</div>
			</form>
		</div>
	</div>
</main>
