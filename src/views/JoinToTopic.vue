<template>
	<div>
		<v-card class="mx-auto" max-width="400" tile>
			<v-subheader>REPORTS</v-subheader>
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title>Single-line item</v-list-item-title>
				</v-list-item-content>
			</v-list-item>

			<v-list-item two-line>
				<v-list-item-content>
					<v-list-item-title>Two-line item</v-list-item-title>
					<v-list-item-subtitle>Secondary text</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>

			<v-list-item three-line>
				<v-list-item-content>
					<v-list-item-title>Three-line item</v-list-item-title>
					<v-list-item-subtitle>
						Secondary line text Lorem ipsum dolor sit amet,
					</v-list-item-subtitle>
					<v-list-item-subtitle>
						consectetur adipiscing elit.
					</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
		</v-card>
	</div>
</template>

<script>
export default {
	name: 'JoinToTopic',
	components: {}
};
</script>
