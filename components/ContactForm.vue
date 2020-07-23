<template>
	<div>
		<form @submit.prevent="submitForm">
			<b-field
				label="Nome"
				:type="{'is-danger': $v.name.$error}"
				:message="{'Campo obrigatório.': $v.name.$error && !$v.name.required}"
			>
				<b-input
					:value="$v.name.$model"
					@change.native="$v.name.$model = $event.target.value.trim()"
				>
				</b-input>
			</b-field>
			<b-field
				label="E-mail"
				:type="{'is-danger': $v.email.$error}"
				:message="{
					'Campo obrigatório.': $v.email.$error && !$v.email.required,
					'Campo inválido.': $v.email.$error && !$v.email.isEmail
				}"
			>
				<b-input
					:value="$v.email.$model"
					@change.native="$v.email.$model = $event.target.value.trim()"
				>
				</b-input>
			</b-field>
			<b-field label="Celular">
				<b-input v-model="phone" v-mask="'(99) 9 9999-9999'"></b-input>
			</b-field>
			<b-field
				:type="{'is-danger': $v.contactPreference.$error}"
				:message="{'Campo obrigatório.': $v.contactPreference.$error && !$v.contactPreference.required}"
			>
	            <b-select placeholder="Preferência de contato" v-model="$v.contactPreference.$model">
	                <option value="email">
						E-mail
	                </option>
	                <option value="phone">
						Celular
	                </option>
	                <option value="whatsapp">
						WhatsApp
	                </option>
	            </b-select>
	        </b-field>
			<b-field
				:type="{'is-danger': $v.msg.$error}"
				:message="{'Campo obrigatório.': $v.msg.$error && !$v.msg.required}"
			>
				<b-input
					type="textarea"
					placeholder="Comentários"
					:value="$v.msg.$model"
					@change.native="$v.msg.$model = $event.target.value.trim()"
				>
				</b-input>
			</b-field>
			<b-field>
				<p class="control">
					<button
						type="submit"
						class="button"
						:class="{
							'is-loading': loading,
							'is-success': submitted
						}"
						:disabled="submitted"
					>
						<span v-show="submitted">Enviado</span>
						<span v-show="!submitted">Enviar</span>
					</button>
				</p>
			</b-field>
		</form>
	</div>
</template>

<script>
import { required, email as isEmail } from 'vuelidate/lib/validators'

const url = '/api/v1/contact'

const parsePhone = (phone) => {
	const raw = phone.replace(/[^\d]/g, '')
	const areaCode = raw.slice(0, 2)
	const phoneNumber = raw.slice(2)

	return { areaCode, phoneNumber }
}

export default {
	data() {
		return {
			loading: false,
			submitted: false,
			name: null,
			email: null,
			contactPreference: null,
			phone: null,
			msg: null
		}
	},
	validations: {
		name: {
			required
		},
		email: {
			required,
			isEmail
		},
		contactPreference: {
			required
		},
		msg: {
			required
		}
	},
	methods: {
		submitForm() {
			this.$v.$touch()
			if(this.$v.$invalid) return

			this.loading = true
			this.$axios.$post(url, {
				name: this.name,
				email: this.email,
				areaCode: parsePhone(this.phone).areaCode,
				phoneNumber: parsePhone(this.phone).phoneNumber,
				contactPreference: this.contactPreference,
				msg: this.msg
			}).then((response) => {
				this.loading = false
				this.submitted = true
				this.$gtm.push({ event: 'formSubmit', label: 'home-contact' })
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

<style>
	button[type=submit]:disabled {
		cursor: default;
	}
</style>
