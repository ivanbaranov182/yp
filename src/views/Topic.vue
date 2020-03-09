<template>
	<div>
		<v-progress-linear
			:active="loading"
			height="4"
			:indeterminate="true"
			:striped="false"
			:top="true"
			:fixed="true"
			color="light-blue"
			v-if="loading"
		/>
		<div v-else style="position: relative">
			<router-link to="/topic/0/join">
				<v-btn color="light-blue" dark absolute top right fab>
					<v-icon>mdi-plus</v-icon>
				</v-btn>
			</router-link>
			<v-list>
				<v-list-item v-for="(event, i) in events" :key="i">
					<v-list-item-icon>
						<v-icon>mdi-dots-vertical</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title
							v-text="event.title"
						></v-list-item-title>
					</v-list-item-content>
					<v-list-item-icon>
						<v-icon>mdi-message-text</v-icon>
					</v-list-item-icon>
				</v-list-item>
			</v-list>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Topic',
	data: () => {
		return {
			loading: true,
			events: []
		};
	},
	mounted() {
		fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
			.then(response => response.json())
			.then(json => {
				setTimeout(() => {
					this.events = json;
					this.loading = false;
				}, 2000);
			});
	}
};
</script>
