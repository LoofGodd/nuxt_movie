<script setup lang="ts">
import type { Media, MediaType, Season, TVMedia } from "~/types"

const props = defineProps<{
	item: TVMedia
}>()
// Reactive state variables

const { public: { vidSrc, vidPaly, myCould } } = useRuntimeConfig()

const servers = [
	{ name: "MyCloud", url: `${myCould}/tv/` },
	{ name: "VidPlay", url: `${vidPaly}/tv/` },
	{
		name: "Filemoon",
		url: vidSrc,
	},
]
const selectedServer = ref(servers[0])
const selectedEpisode = ref(1)
const selectedSeason = ref(1)
const seasons = props.item.seasons.filter(s => s.name.includes('Season'))
const season = computed(() => seasons[selectedSeason.value - 1])
const sidebarHeight = ref(0)
const isSeasonDropdownOpen = ref(false)
const videoRef = ref(null)
const route = useRoute()
const id = route.params.id

const getUrl = computed(() => {
	const url = selectedServer.value.url

	return url + id + '/' + selectedSeason.value + '/' + selectedEpisode.value
	// if (selectedServer.value.name === 'VidPlay') {
	// 	return url + id + '/' + selectedSeason.value + '-' + selectedEpisode.value
	// }
	// else {
	// 	return url + id + '/' + selectedSeason.value + '/' + selectedEpisode.value
	// }
})

const episodes = computed(() => Array.from({ length: season.value.episode_count }, (_, i) => ({
	number: i + 1,
	title: `Episode ${i + 1}`,
}))
)
watch(selectedSeason, () => {
	selectedEpisode.value = 1
})
// Update sidebar height based on the video container's height
const updateSidebarHeight = () => {
	if (videoRef.value) {
		sidebarHeight.value = videoRef.value.offsetHeight
	}
}

// Lifecycle hooks to update height on mount and resize
onMounted(() => {
	updateSidebarHeight()
	window.addEventListener("resize", updateSidebarHeight)
})

onUnmounted(() => {
	window.removeEventListener("resize", updateSidebarHeight)
})

// Helper function for season selection
function selectSeason(season: number) {
	selectedSeason.value = season
	isSeasonDropdownOpen.value = false
}
</script>
<template>
	<div class="bg-black text-white">
		<div class="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
			<!-- Main Content Area -->
			<div class="lg:col-span-3 relative">
				<div ref="videoRef" class="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
					<iframe :src="getUrl" class="absolute inset-0 w-full h-full" allowfullscreen></iframe>
				</div>
			</div>

			<!-- Right Sidebar -->
			<div class="bg-gray-900/50 rounded-lg p-4 flex flex-col" :style="{ height: sidebarHeight + 'px' }">
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

				<!-- Season Selector -->
				<div class="relative mb-4">
					<button @click="isSeasonDropdownOpen = !isSeasonDropdownOpen"
						class="w-full px-4 py-2 bg-gray-800 rounded flex items-center justify-between">
						<span>{{ season.name }}</span>

						<!-- <ChevronDownIcon class="h-4 w-4" /> -->
					</button>
					<div v-if="isSeasonDropdownOpen"
						class="absolute top-full left-0 w-full mt-1 bg-gray-800 rounded shadow-lg z-10">
						<button v-for="season, index in seasons" :key="season.id" @click="selectSeason(index + 1)"
							class="w-full px-4 py-2 text-left hover:bg-gray-700">
							{{ season.name }}
						</button>
					</div>
				</div>

				<!-- Episode List -->
				<div class="flex-grow overflow-y-auto">
					<div class="space-y-2">
						<button v-for="episode in episodes" :key="episode.number" @click="selectedEpisode = episode.number"
							class="w-full px-4 py-2 text-left rounded" :class="selectedEpisode === episode.number
								? 'bg-red-500/10 text-red-500'
								: 'hover:bg-gray-800'
								">
							<div class="flex items-center gap-2">
								<span>Episode: {{ episode.number }}</span>
								<span class="text-gray-400">{{ episode.title }}</span>
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
