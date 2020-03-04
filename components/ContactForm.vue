<template>
	<div>
		<form @submit.prevent="submitForm">
			<b-field label="Nome">
				<b-input v-model="name"></b-input>
			</b-field>
			<b-field label="Email">
				<b-input v-model="email"></b-input>
			</b-field>
			<b-input v-model="msg" type="textarea">teste desenvolvimento [website form]</b-input>
			<b-field>
				<p class="control">
					<button type="submit" class="button">
						Enviar
					</button>
				</p>
			</b-field>
		</form>
	</div>
</template>

<script>
const url = '/api/contact'
export default {
	data() {
		return {
			name: '',
			email: '',
			msg: ''
		}
	},
	methods: {
		submitForm() {
			console.log('submitForm')
			this.$axios.$post(url, {
				name: this.name,
				email: this.email,
				msg: this.msg
			}).then((response) => {
				console.log('success')
			}).catch((error) => {
				console.log('error')
			})
		}
	}
}
</script>
