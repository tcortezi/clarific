import Vue from 'vue'
import {
	ValidationProvider,
	ValidationObserver,
	setInteractionMode,
	extend,
	configure,
	localize
} from 'vee-validate'
import { required, email, max } from 'vee-validate/dist/rules'
import pt_BR from 'vee-validate/dist/locale/pt_BR.json'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

setInteractionMode('custom', ({ errors }) => {
	if(errors.length) {
		return {
			on: ['input', 'change']
		}
	}

	return {
		on: ['change']
	}
})

extend('required', required)
extend('email', email)
extend('max', max)
extend('phone', value => {
	const raw = value.replace(/[^\d]/g, '')
	return raw.length === 11
})

localize('pt_BR', pt_BR)
localize({
	pt_BR: {
		messages: {
			email: 'Preencha um {_field_} válido',
			required: 'Este campo é obrigatório',
			max: 'Máximo de 3000 caracteres',
			phone: 'Preencha um telefone válido'
		}
	}
})

configure({
  classes: {
    invalid: 'is-danger'
  }
})
