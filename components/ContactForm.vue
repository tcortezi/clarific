<template>
	<div>
		<form @submit.prevent="submitForm">
			<b-field label="Nome">
				<b-input v-model="name"></b-input>
			</b-field>
			<b-field label="Email">
				<b-input v-model="email"></b-input>
			</b-field>
			<b-field label="Celular">
				<b-input v-model="phone.areaCode"></b-input>
				<b-input v-model="phone.number"></b-input>
			</b-field>
			<b-field>
	            <b-select v-model="contactPreference" placeholder="Preferência de contato">
	                <option value="email">
						E-mail
	                </option>
	                <option value="phone">
						Celular
	                </option>
	            </b-select>
	        </b-field>
			<b-input v-model="msg" type="textarea" placeholder="Comentários"></b-input>
			<b-field>
				<p class="control">
					<button type="submit" class="button" :class="{ 'is-loading': loading }">
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
			loading: false,
			name: null,
			email: null,
			contactPreference: null,
			phone: {
				areaCode: null,
				number: null
			},
			msg: null
		}
	},
	methods: {
		submitForm() {
			this.loading = true
			this.$axios.$post(url, {
				name: this.name,
				email: this.email,
				areaCode: this.phone.areaCode,
				phoneNumber: this.phone.number,
				contactPreference: this.contactPreference,
				msg: this.msg
			}).then((response) => {
				this.loading = false
				this.$buefy.toast.open({
					message: 'Recebemos sua mensagem! 😍',
					type: 'is-success',
					duration: 4000
				})
			}).catch((error) => {
				this.loading = false
				this.$buefy.toast.open({
					message: 'Algo deu errado! 😔',
					type: 'is-danger',
					duration: 4000
				})
			})
		}
	}
}
</script>
