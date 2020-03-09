<template>
	<div>
		<v-app id="app">
			<Header />
			<v-content class="content pb-10">
				<v-container>
					<h1 v-if="title" class="display-1">
						{{ title }}
					</h1>
					<div v-if="subTitle" class="subtitle-2 subtitle">
						{{ subTitle }}
					</div>
					<router-view />
				</v-container>
			</v-content>
			<Footer />
		</v-app>
	</div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
	name: 'App',
	computed: {
		title() {
			return this.$route.meta.title || false;
		},
		subTitle() {
			return this.$route.meta.subTitle || false;
		}
	},
	components: {
		Header,
		Footer
	}
};
</script>

<style lang="scss" scoped>
.content {
	background-image: linear-gradient(
		to top,
		#ececec,
		#f1f1f1,
		#f5f5f5,
		#fafafa,
		#ffffff
	);
	h1 {
		color: var(--v-accent-base);
	}
	.subtitle {
		margin-bottom: 20px;
		color: var(--v-secondary-lighten4);
	}
}
</style>

// TODO JSONplaceholder // TODO Material+Icons
