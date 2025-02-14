<script setup>
import '@unocss/reset/tailwind.css'

useHead({
	htmlAttrs: {
		lang: 'en',
	},
	charset: 'utf-8',
	title: 'The Movies',
	titleTemplate: title => title !== 'The Movies' ? `${title} · The Movies` : title,
	meta: [
		{
			name: 'description', content: 'Discover the ultimate destination for movie lovers—featuring expert reviews, exclusive trailers, and the latest film news. Explore blockbuster hits, indie gems, and timeless classics, all in one place!" This description blends relevant keywords (movie reviews, film news, trailers, blockbuster, indie) with a clear value proposition that entices visitors and search engines alike. Adjust any details to match your site\'s unique focus or tone'
		},
		{ property: 'og:image', content: 'https://static.vecteezy.com/system/resources/thumbnails/005/502/524/small_2x/cinema-background-concept-movie-theater-object-on-red-curtain-background-and-movie-time-with-electric-bulbs-frame-illustration-free-vector.jpg' },
		{ name: 'twitter:card', content: 'summary_large_image' },
		{ name: 'twitter:site', content: '@Loof_Godd' },
		{ name: 'twitter:creator', content: '@Loof_Godd' },
	],
	script: [
		{
			async: "async",
			src: "//damagedbehaved.com/5ffd86ece8a81dfe2abd976a15399685/invoke.js",
			"data-cfasync": "false"
		},
		{ type: "text/javascript", src: "//damagedbehaved.com/698a0f736498013490576e244d18b278/invoke.js", body: true },
		{
			hid: 'custom-inline-script',
			innerHTML: `
          atOptions = {
            'key': '698a0f736498013490576e244d18b278',
            'format': 'iframe',
            'height': 90,
            'width': 728,
            'params': {}
          };
        `,
			type: 'text/javascript',
			charset: 'utf-8',
			body: true
		},
	],
	__dangerouslyDisableSanitizersByTagID: {
		'custom-inline-script': ['innerHTML']
	},
	link: [
		{
			rel: 'icon',
			type: 'image/webp',
			href: '/movies.webp',
		},
	],
})
</script>


<template>
	<NuxtLoadingIndicator />
	<div h-full w-full font-sans grid="~ lt-lg:rows-[1fr_max-content] lg:cols-[max-content_1fr]" of-hidden
		view-transition-app transition duration-0>
		<div id="app-scroller" of-x-hidden of-y-auto relative>
			<div id="container-5ffd86ece8a81dfe2abd976a15399685"></div>
			<NuxtPage />
		</div>

		<NavBar lg:order-first />
		<IframeModal />
		<PhotoModal />

	</div>
</template>

<style>
html,
body,
#__nuxt {
	height: 100vh;
	margin: 0;
	padding: 0;
	background: #111;
	color: white;
	color-scheme: dark;
}
</style>
