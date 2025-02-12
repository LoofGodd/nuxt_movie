<script setup lang="ts">
import type { Media } from "~/types"

defineProps<{
	item: Media
}>()
// Reactive state variables
const { public: { fileMoon, vidPaly, myCould } } = useRuntimeConfig()
console.log({ fileMoon })
const servers = [
	{ name: "MyCloud", url: `${myCould}/movie/` },
	{ name: "VidPlay", url: `${vidPaly}/movie/` },
	{
		name: "Filemoon",
		url: fileMoon,
	},
]
const selectedServer = ref(servers[0])
const sidebarHeight = ref(0)
const videoRef = ref(null)
const route = useRoute()
const id = route.params.id
// Data arrays

// Update sidebar height based on the video container's height

// Lifecycle hooks to update height on mount and resize

</script>
<template>
	<div class="bg-black text-white py-4">
		<div class="container mx-auto grid grid-cols-1 lg:grid-cols-4">
			<!-- Main Content Area -->
			<div class="md:col-span-3  relative">
				<div ref="videoRef" class="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
					<iframe :src="selectedServer.url + id" class="absolute inset-0 w-full h-full" allowfullscreen></iframe>
				</div>
			</div>

			<!-- Right Sidebar -->
			<div class="bg-gray-900/50 rounded-lg p-4 flex flex-col">
				<!-- Server Selection -->
				<div class="flex flex-wrap gap-2 mb-4">
					<button v-for="server in servers" :key="server.name" @click="selectedServer = server"
						class="px-3 py-1 rounded text-sm" :class="selectedServer.name === server.name
							? 'bg-orange-500 hover:bg-orange-600'
							: 'bg-gray-700 hover:bg-gray-600'
							">
						<span class="text-xs mr-1 opacity-70">SERVER</span> {{ server.name }}
					</button>
				</div>

				<p class="text-sm text-gray-400 mb-4">
					If current server doesn't work please try other servers below.
				</p>

				<div class="relative mb-4 bg-gray-900 p-2 rounded-sm">
					<button class="w-full mb-3 px-4 py-2 bg-gray-800 rounded flex items-center justify-between">
						<span>Movie</span>
					</button>
					<div class="flex-grow overflow-y-auto">
						<div class="w-full px-4 py-2 text-left rounded bg-orange-500 ">
							<span>{{ item.original_title ?? item.title }} </span>
						</div>
					</div>
				</div>


			</div>
		</div>
	</div>
</template>
