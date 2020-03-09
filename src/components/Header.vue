<template>
	<v-app-bar color="#29526E" absolute app class="header" dark>
		<v-container class="d-flex align-center">
			<v-app-bar-nav-icon class="d-none" />
			<v-img
				:aspect-ratio="1 / 1"
				src="@/assets/yp2logo.png"
				max-height="50"
				max-width="50"
			>
			</v-img>
			<router-link to="/">
				<v-toolbar-title>Yp.</v-toolbar-title>
			</router-link>
			<v-spacer></v-spacer>
			<router-link
				v-for="link in links"
				:key="link.url"
				:to="link.to"
				:exact="link.exact"
				class="header-link"
			>
				<v-btn text>{{ link.title }}</v-btn>
			</router-link>
		</v-container>
	</v-app-bar>
</template>

<script>
export default {
	name: 'Header',
	data: () => ({
		links: [
			{
				title: 'Home',
				to: '/',
				exact: true
			},
			{
				title: 'Topics',
				to: '/topics'
			},
			{
				title: 'Contact',
				to: '/contacts'
			},
			{
				title: 'About',
				to: '/about'
			}
		]
	})
};
</script>

<style lang="scss" scoped>
.header-link {
	text-decoration: none;
}
.header-container {
	display: flex;
	align-items: center;
}
</style>
