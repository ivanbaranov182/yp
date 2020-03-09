<template>
	<v-card outlined class="card">
		<v-card-title>
			<router-link :to="'/topic/' + topic.id">{{
				topic.title
			}}</router-link>
		</v-card-title>
		<v-card-subtitle>{{ topic.subTitle }}</v-card-subtitle>
	</v-card>
</template>

<script>
export default {
	name: 'TopicItem',
	props: ['topic'],
	data: () => ({})
};
</script>

<style lang="scss" scoped>
.card.v-card.v-card--outlined {
	background: none;
	border: none;
	border-radius: 0;
	&:nth-child(3n + 2) {
		border-right: 1px solid var(--v-secondary-lighten4);
		border-left: 1px solid var(--v-secondary-lighten4);
	}
}
</style>
