<template>
	<section class="section" id="form">
		<div class="container">
			<div class="center">
				<h2 class="lp2">Último e mais importante passo</h2>
				<p class="lp2">Acreditamos que, depois de toda esta jornada, você já esteja convencido que podemos ajudá-lo a desenvolver uma <em>landing page</em> que realmente criará um impacto nas suas vendas. <strong>Agora basta mandar um alô pra gente para começarmos seu projeto!</strong> 😎</p>
			</div>
			<div class="columns is-centered">
				<div class="column is-5">
					<contact-form
						:loading="loading"
						:disabled="success"
						@submit="onContactSubmit"
					/>
				</div>
			</div>
		</div>
		<b-modal :active.sync="isModalActive"
			full-screen :can-cancel="false" custom-class="lp2">
			<thanks :name="name" />
		</b-modal>
	</section>
</template>

<script>
	import ContactForm from '~/components/lp2/ContactForm.vue'
	import Thanks from '~/components/lp2/Thanks.vue'

	export default {
		components: {
			ContactForm, Thanks
		},
		data() {
			return {
				loading: false,
				success: false,
				isModalActive: false,
				name: null
			}
		},
		methods: {
			async onContactSubmit(formData) {
				try {
					this.loading = true
					await this.$axios.$post('/api/v2/contact', formData)
					this.success = true
					this.$gtm.push({ event: 'formSubmit', label: 'lp2-contact' })
					this.isModalActive = true
					this.name = formData.name
				} catch(err) {
					console.error(err.toString())
				} finally {
					this.loading = false
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.section {
		background-color: #fafafa;
		.center {
			display: grid;
			place-items: center;
		}
		.columns {
			margin-top: 42px;
		}
	}
</style>