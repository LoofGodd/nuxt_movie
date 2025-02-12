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
		{ name: 'description', content: 'A TMDB client built with Nuxt Image to show the potential of it ✨' },
		{ property: 'og:image', content: 'https://movies.nuxt.space/social-card.png' },
		{ name: 'twitter:card', content: 'summary_large_image' },
		{ name: 'twitter:site', content: '@nuxt_js' },
		{ name: 'twitter:creator', content: '@nuxt_js' },
	],
	script: [{ src: '//pl25850081.effectiveratecpm.com/98/80/fe/9880fec66b9440fa2d20d123f6d835fd.js', type: 'text/javascript' }],
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
