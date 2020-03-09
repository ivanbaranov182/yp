<template>
	<div class="topic">
		<div class="topic-list">
			<TopicItem
				v-for="topic in topics"
				:key="topic.id"
				v-bind:topic="topic"
			/>
		</div>
		<v-btn type="btn" class="float-right more-btn" depressed color="accent"
			>More</v-btn
		>
	</div>
</template>

<script>
import TopicItem from '@/components/TopicItem.vue';

export default {
	name: 'Topics',
	components: {
		TopicItem
	},
	data() {
		return {
			topics: [
				{
					id: 0,
					title: 'EastNews',
					subTitle: 'Estojia, Baltic states'
				},
				{
					id: 1,
					title: 'RusNews',
					subTitle: 'Russia, ex. USSSR'
				},
				{
					id: 2,
					title: 'RusNews',
					subTitle: 'Russia, ex. USSSR'
				},
				{
					id: 3,
					title: 'Sport',
					subTitle: 'Mostly russian sports and other staff'
				},
				{
					id: 4,
					title: 'Gadget',
					subTitle: 'about something'
				},
				{
					id: 5,
					title: 'Gadget',
					subTitle: 'about something'
				},
				{
					id: 6,
					title: 'Soccer',
					subTitle: 'about soccer at all'
				},
				{
					id: 7,
					title: 'RusNews',
					subTitle: 'Russia, ex. USSSR'
				},
				{
					id: 8,
					title: 'RusNews',
					subTitle: 'Russia, ex. USSSR'
				}
			]
		};
	}
};
</script>
<style lang="sass" scoped>
.topic-list
	display: grid
	grid-template-columns: 1fr 1fr 1fr
	grid-column-gap: 2em
	// grid-row-gap: 1em
.more-btn
	margin-top: 20px
</style>
