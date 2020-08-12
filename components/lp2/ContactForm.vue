<template>
	<ValidationObserver v-slot="{ handleSubmit }">
		<form @submit.prevent="handleSubmit(onSubmit)" class="lp">
		  
		  <ValidationProvider name="name" rules="required" v-slot="{ errors, classes }">
			  <div class="control">
					<input
						v-model="form.name"
						type="text"
						:class="classes"
						class="input"
						placeholder="Seu nome"
					>	
			    <span class="help">{{ errors[0] }}</span>
				</div>
			</ValidationProvider>

		  <div class="group">
			  <ValidationProvider name="email" rules="required|email" v-slot="{ errors, classes }">
				  <div class="control">
						<input
							v-model="form.email"
							type="text"
							:class="classes"
							class="input"
							placeholder="E-mail"
						>	
				    <span class="help">{{ errors[0] }}</span>
					</div>
				</ValidationProvider>
		  <ValidationProvider name="phone" rules="phone" v-slot="{ errors, classes }">
			  <div class="control">
					<input
						v-model="form.phone"
						type="text"
						:class="classes"
						class="input"
						placeholder="Telefone"
						v-mask="'(##) # ####-####'"
					>	
			    <span class="help">{{ errors[0] }}</span>
				</div>
			</ValidationProvider>
		  </div>
		  
		  <ValidationProvider name="message" rules="required|max:3000" v-slot="{ errors, classes }">
			  <div class="control">
					<textarea
						v-model="form.message"
						:class="classes"
						class="textarea"
						placeholder="Conte um pouco sobre o seu serviço ou produto."
					/>	
			    <span class="help">{{ errors[0] }}</span>
				</div>
			</ValidationProvider>
		  <ValidationProvider name="contact" rules="required" v-slot="{ errors, classes }">
        <b-field :message="errors[0]" :type="errors[0] ? 'is-danger' : ''">
          <b-select
          	v-model="form.contact"
          	placeholder="Preferência de contato"
          	expanded
          >
						<option>Celular</option>
						<option>Whatsapp</option>
						<option>Email</option>
          </b-select>
        </b-field>
      </ValidationProvider>
      <div class="center">
				<button
					type="submit"
					class="btn-lp highlight"
					:class="{'button is-loading': loading}"
				>
					<span>
						Vamos começar ->
					</span>
				</button>
			</div>
		</form>
	</ValidationObserver>
</template>

<script>
export default {
	props: {
		loading: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			form: {
				name: '',
				email: '',
				phone: '',
				message: '',
				contact: null
			}
		}
	},
	methods: {
		onSubmit() {
			if(!this.disabled) {
				this.$emit('submit', this.form)
			}
		}
	}
}
</script>


<style lang="scss" scoped>
.center {
	display: grid;
	place-items: center;
}
.btn-lp {
	min-height: 73px;
	@media (max-width: 769px) {
		min-height: 70px;
	}
	margin-top: 42px;
	cursor: pointer;
	background-color: #ffffff;
}

.group {
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media (max-width: 769px) {
		flex-direction: column;
	}
}
</style>
