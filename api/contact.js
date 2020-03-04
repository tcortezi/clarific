import express from 'express'
import SendGridMail from '@sendgrid/mail'
import validator from 'validator'
import xssFilters from 'xss-filters'

SendGridMail.setApiKey(process.env.SENDGRID_API_KEY)

const app = express()

app.use(express.json())
app.use(express.urlencoded())

app.post('/', (req, res) => {
	// Validate, sanitize and send
	const attributes = ['name', 'email', 'msg']
	const sanitizedAttributes = attributes.map(n => validateAndSanitize(n, req.body[n]))

	const someInvalid = sanitizedAttributes.some(r => !r)
	if(someInvalid) {
		return res.status(422).json({ 'error': 'Hmm... parece que algum campo está inválido.' })
	}

	sendMail(...sanitizedAttributes)
	res.status(200).json({ 'message': 'E-mail enviado com sucesso.' })
})

const rejectFunctions = new Map([
	['name', v => v.length < 4],
	['email', v => !validator.isEmail(v)],
	['msg', v => v.length < 15]
])

const validateAndSanitize = (key, value) => {
	return rejectFunctions.has(key) && !rejectFunctions.get(key)(value) && xssFilters.inHTMLData(value)
}

const sendMail = (name, email, msg) => {
	SendGridMail.send({
		to: 'oi@clarific.com.br',
		from: email,
		subject: `Website: Formulário de contato [${name}]`,
		text: msg
	})
}

export default {
	path: '/api/contact',
	handler: app
}
