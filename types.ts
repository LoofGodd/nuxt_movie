export type MediaType = 'movie' | 'tv'

export interface Media {
	adult: boolean
	backdrop_path: string
	genre_ids: number[]
	id: string
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string
	release_date?: string
	first_air_date?: string
	title: string
	name?: string
	video: boolean
	vote_average: number
	vote_count: number
	media_type?: MediaType
	// details
	homepage?: string
	runtime?: number
	budget?: number
	revenue?: number
	status?: string
	genres?: Genre[]
	production_companies?: any[]
	videos?: {
		results: Video[]
	}
	credits?: {
		cast: Person[]
		crew: Person[]
	}
	images?: {
		backdrops: Image[]
		posters: Image[]
	}
	external_ids?: ExternalIds
	// cast
	character?: string
}
export interface TVMedia {
	adult: boolean
	backdrop_path: string
	created_by: any[]
	episode_run_time: any[]
	first_air_date: Date
	genres: Genre[]
	homepage: string
	id: number
	in_production: boolean
	languages: string[]
	last_air_date: Date
	last_episode_to_air: TEpisodeToAir
	name: string
	next_episode_to_air: TEpisodeToAir
	networks: Network[]
	number_of_episodes: number
	number_of_seasons: number
	origin_country: string[]
	original_language: string
	original_name: string
	overview: string
	popularity: number
	poster_path: string
	production_companies: Network[]
	production_countries: ProductionCountry[]
	seasons: Season[]
	spoken_languages: SpokenLanguage[]
	status: string
	tagline: string
	type: string
	vote_average: number
	vote_count: number
	videos: Videos
	credits: Credits
	images: Images
	external_ids: ExternalIDS
}

export interface Credits {
	cast: Cast[]
	crew: any[]
}

export interface Cast {
	adult: boolean
	gender: number
	id: number
	known_for_department: KnownForDepartment
	name: string
	original_name: string
	popularity: number
	profile_path: null | string
	character: string
	credit_id: string
	order: number
}

export enum KnownForDepartment {
	Acting = "Acting",
}

export interface ExternalIDS {
	imdb_id: string
	freebase_mid: null
	freebase_id: null
	tvdb_id: number
	tvrage_id: null
	wikidata_id: null
	facebook_id: null
	instagram_id: null
	twitter_id: null
}

export interface Genre {
	id: number
	name: string
}

export interface Images {
	backdrops: any[]
	logos: any[]
	posters: any[]
}

export interface TEpisodeToAir {
	id: number
	name: string
	overview: string
	vote_average: number
	vote_count: number
	air_date: Date
	episode_number: number
	episode_type: string
	production_code: string
	runtime: null
	season_number: number
	show_id: number
	still_path: null
}

export interface Network {
	id: number
	logo_path: null | string
	name: string
	origin_country: string
}

export interface ProductionCountry {
	iso_3166_1: string
	name: string
}

export interface Season {
	air_date: Date
	episode_count: number
	id: number
	name: string
	overview: string
	poster_path: null | string
	season_number: number
	vote_average: number
}

export interface SpokenLanguage {
	english_name: string
	iso_639_1: string
	name: string
}

export interface Videos {
	results: any[]
}

export interface Person {
	adult: boolean
	gender: number
	id: number
	known_for_department: string
	name: string
	original_name: string
	profile_path: string
	popularity: number
	cast_id?: number
	job?: string
	character?: string
	credit_id: string
	order: number
	// details
	also_known_as?: string[]
	birthday?: string
	place_of_birth?: string
	homepage?: string
	biography?: string
	external_ids?: ExternalIds
	combined_credits?: {
		cast?: Media[]
		crew?: Media[]
	}
	images?: {
		profiles: Image[]
	}
}

export interface Video {
	iso_639_1: string
	iso_3166_1: string
	name: string
	key: string
	site: string
	size: number
	type: string
	official: boolean
	published_at: string
	id: string
}

export interface Image {
	aspect_ratio: number
	height: number
	iso_639_1: string
	file_path: string
	vote_average: number
	vote_count: number
	width: number
}

export interface ExternalIds {
	imdb_id?: string
	facebook_id?: string
	instagram_id?: string
	twitter_id?: string
	linkedin_id?: string
	github_id?: string
	email?: string
	homepage?: string
}

export interface PageResult<T> {
	page: number
	results: T[]
	total_pages: number
	total_results: number
}

export interface Genre {
	id: number
	name: string
}

export interface QueryItem {
	type: MediaType
	title: string
	query: string
}

export interface Credits {
	cast: Media[]
}
