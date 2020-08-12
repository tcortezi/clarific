<template>
	<div>
		<a
			@click="$emit('action-click')"
			href="https://wa.me/5521984441514"
			target="_blank"
		>
			<p>
				Fale com a gente <br />
				pelo whatsapp
			</p>
			<img src="~/assets/img/lp2/whatsapp.svg">
		</a>
		<span>
			<svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M26.1855 17.5C25 15 21 6 21 0C13.6667 6.66667 -0.814392 19 1.18554 19C2.9744 19 17.8522 20 25.1855 21C26.1856 21.1364 27.1856 20 26.1855 17.5Z" fill="#161719"/>
			</svg>
		</span>
	</div>
</template>

<style lang="scss" scoped>
	div {
		position: relative;
		> a {
			padding: 12px 22px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			min-width: 197px;
			background: #161719;
			box-shadow: 0px 0.96177px 1.71745px rgba(0, 0, 0, 0.0682041), 0px 2.43239px 4.34355px rgba(0, 0, 0, 0.097616), 0px 4.96184px 8.86044px rgba(0, 0, 0, 0.122384), 0px 10.2205px 18.2508px rgba(0, 0, 0, 0.151796), 0px 28px 50px rgba(0, 0, 0, 0.22);
			border-radius: 20px;
			p {
				font-size: 14px;
				line-height: 16px;
				color: #FFFFFF;
				margin-right: 12px;
			}
			img { max-width: 40px; }
		}
		> span {
			position: absolute;
			bottom: -9px;
			right: -6px;
		}
	}
</style>