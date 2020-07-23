import nodemailer from 'nodemailer'

const {
	GMAIL_CLIENT_ID,
	GMAIL_CLIENT_SECRET,
	GMAIL_REFRESH_TOKEN
} = process.env

export default async (req, res) => {
	const { body } = req
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			type: 'OAuth2',
			user: 'contactform@royalefilmes.com.br',
			clientId: GMAIL_CLIENT_ID,
			clientSecret: GMAIL_CLIENT_SECRET,
			refreshToken: GMAIL_REFRESH_TOKEN
		}
	})
	try {
		await transporter.sendMail({
			replyTo: body.email,
			to: 'oi@clarific.com.br',
			subject: `Contato Landing Page | ${body.name}`,
			text: JSON.stringify(body)
		})
		res.status(200).end()
	} catch(err) {
		console.error(err.toString())
		res.status(500).end()
	}
}
