import express from 'express'
import SendGridMail from '@sendgrid/mail'
import validator from 'validator'
import xssFilters from 'xss-filters'

SendGridMail.setApiKey(process.env.SENDGRID_API_KEY)

const app = express()

app.use(express.json())

app.post('/api/contact', async (req, res) => {
	const attributes = [
		'name',
		'email',
		'areaCode',
		'phoneNumber',
		'contactPreference',
		'msg'
	]
	const sanitizedAttributes = attributes.map(n => validateAndSanitize(n, req.body[n]))

	const someInvalid = sanitizedAttributes.some(r => !r)
	if(someInvalid) {
		return res.status(422).json({ 'error': 'Hmm... parece que algum campo está inválido.' })
	}

	try {
		await sendMail(...sanitizedAttributes)
		res.status(200).json({ message: 'E-mail enviado com sucesso.' })
	} catch(err) {
		console.error(err.toString())
		res.status(502).json({ error: err.toString() })
	}
})

const rejectFunctions = new Map([
	['name', v => v.length < 4],
	['email', v => !validator.isEmail(v)],
	['areaCode', v => v.length != 2],
	['phoneNumber', v => v.length > 9],
	['contactPreference', v => !['email', 'phone', 'whatsapp'].includes(v)],
	['msg', v => v.length < 15]
])

const validateAndSanitize = (key, value) => {
	return rejectFunctions.has(key) && !rejectFunctions.get(key)(value) && xssFilters.inHTMLData(value)
}

const sendMail = (name, email, areaCode, phoneNumber, contactPreference, msg) => {
	const contactInfo = `${name} | +55 ${areaCode} ${phoneNumber} | Preferência de contato: ${contactPreference}`
	return SendGridMail.send({
		to: 'oi@clarific.com.br',
		from: 'contactform@clarific.com.br',
		reply_to: email,
		subject: `Website: Formulário de contato [${name}]`,
		text: contactInfo + '\n\n' + msg
	})
}

export default app
