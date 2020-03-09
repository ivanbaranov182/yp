<template>
	<v-footer color="#6C8DA5" padless>
		<v-container class="d-flex">
			<div>
				<div class="font-weight-black">Yourpoint.io</div>
				<div>All right reserved. {{ new Date().getFullYear() }}</div>
			</div>
			<v-spacer></v-spacer>
			<div class="text-right">
				Use our contact page<br />for any feedback
			</div>
		</v-container>
	</v-footer>
</template>

<script>
export default {
	name: 'Footer',

	data: () => ({})
};
</script>
