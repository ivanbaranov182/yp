<template>
	<v-form
		@submit.prevent="submitHandler"
		ref="form"
		v-model="valid"
		lazy-validation
	>
		<v-container>
			<v-row>
				<v-col cols="7" class="form-content">
					<v-text-field
						v-model.trim="name"
						:rules="nameRules"
						label="Your name:"
						required
					/>
					<v-text-field
						v-model.trim="email"
						:rules="emailRules"
						label="Your email:"
					/>
					<v-textarea
						v-model.trim="text"
						:rules="textRules"
						label="Your text"
						name="text"
						:auto-grow="true"
						:clearable="true"
						rows="3"
					/>
					<v-btn
						type="submit"
						class="float-right"
						depressed
						color="accent"
						:loading="loading"
						>Send</v-btn
					>
				</v-col>
			</v-row>
		</v-container>
	</v-form>
</template>

<script>
export default {
	name: 'Contacts',
	methods: {
		submitHandler() {
			if (this.$refs.form.validate()) {
				this.loading = true;
			}
		}
	},
	data: () => ({
		valid: true,
		loading: false,
		name: '',
		nameRules: [
			v => !!v || 'Name is required',
			v =>
				(v && v.length >= 3) ||
				'Name must be not less than 3 characters'
		],
		email: '',
		emailRules: [
			v => !!v || 'E-mail is required',
			v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
		],
		text: '',
		textRules: [
			v => !!v || 'Text is required',
			v =>
				(v && v.length >= 3) ||
				'Text must be not less than 10 characters'
		]
	})
};
</script>

<style lang="scss" scoped>
.form-content {
	padding: 0;
}
</style>
