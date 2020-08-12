<template>
	<section class="section">
		<div class="container">
			<div class="left">
				<a href="https://clarific.com.br/" target="_blank" class="logo"><img src="~/assets/img/lp2/logo.svg"></a>
			</div>
			<div class="left2">
				<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clip-path="url(#clip0)">
					<path d="M3.37223 0.0020074L0.270233 3.104L17.1699 20.0037L20.2719 16.9017L3.37223 0.0020074Z" fill="#EA9A00"/>
					<path d="M16.9023 -0.00118442L0.00265503 16.9009L3.10509 20.0029L20.0048 3.10081L16.9023 -0.00118442Z" fill="#EA9A00"/>
					</g>
					<defs>
					<clipPath id="clip0">
					<rect width="20.272" height="20" fill="white"/>
					</clipPath>
					</defs>
				</svg>
			</div>
			<div class="right">
				<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M31.9972 5.80762H5.80798V31.9968H31.9972V5.80762Z" fill="#EA9A00"/>
					<path d="M23.378 2.81121V23.378H2.81121V2.81121H23.378ZM26.1892 0H0V26.1892H26.1892V0Z" fill="#121212"/>
				</svg>
			</div>
			<div class="right2">
				<svg width="20" height="228" viewBox="0 0 20 228" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M5.74548 227.44H0C0 223.936 1.36742 220.638 3.84372 218.161L12.0942 209.911C14.9727 207.032 14.9727 202.356 12.0942 199.477L3.84372 191.232C-1.2755 186.113 -1.2755 177.788 3.84372 172.675L12.0942 164.424C13.4846 163.028 14.2545 161.178 14.2545 159.207C14.2545 157.236 13.4846 155.386 12.0942 153.99L3.84372 145.745C-1.2755 140.626 -1.2755 132.301 3.84372 127.188L12.0942 118.937C13.4846 117.541 14.2545 115.691 14.2545 113.72C14.2545 111.749 13.4846 109.899 12.0942 108.503L3.84372 100.259C-1.2755 95.1393 -1.2755 86.8141 3.84372 81.7007L12.0942 73.4502C13.4846 72.054 14.2545 70.204 14.2545 68.2333C14.2545 66.2626 13.4846 64.4125 12.0942 63.0164L3.84372 54.7659C-1.2755 49.6467 -1.2755 41.3215 3.84372 36.208L12.0942 27.9575C14.9727 25.079 14.9727 20.4022 12.0942 17.5237L3.84372 9.27894C1.36742 6.80264 0 3.50474 0 0H5.74548C5.74548 1.9707 6.51537 3.82074 7.90577 5.21689L16.1505 13.4616C21.2698 18.5809 21.2698 26.9061 16.1505 32.0195L7.90577 40.27C5.02729 43.1485 5.02729 47.8253 7.90577 50.7038L16.1505 58.9486C18.6268 61.4249 19.9943 64.7228 19.9943 68.2275C19.9943 71.7323 18.6268 75.0302 16.1505 77.5065L7.90003 85.757C5.02155 88.6354 5.02155 93.3123 7.90003 96.1907L16.1448 104.441C18.6211 106.918 19.9885 110.215 19.9885 113.72C19.9885 117.225 18.6211 120.523 16.1448 122.999L7.89428 131.25C5.0158 134.128 5.0158 138.805 7.89428 141.683L16.139 149.928C18.6153 152.404 19.9828 155.702 19.9828 159.207C19.9828 162.712 18.6153 166.01 16.139 168.486L7.88854 176.737C5.01005 179.615 5.01005 184.292 7.88854 187.17L16.1333 195.421C21.2525 200.54 21.2525 208.865 16.1333 213.979L7.88279 222.223C6.51537 223.62 5.74548 225.47 5.74548 227.44Z" fill="black"/>
				</svg>
			</div>
			<div class="bird">
				<svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M15.1215 0L30.243 26.1892H0L15.1215 0Z" fill="#EA9A00"/>
					<path d="M15.1215 11.43L25.374 29.1856H4.86901L15.1215 11.43ZM15.1215 5.80762L0 31.9997H30.243L15.1215 5.80762Z" fill="black"/>
				</svg>
			</div>
			<div class="center">
				<h2 class="lp">Perguntas frequentes</h2>
			</div>
			<div class="columns is-centered">
				<div class="column is-narrow">
					<div class="faq">
						<div>
				      <div class="item" @click="select(1)" :class="{active:selected === 1}">
				        <div class="itemTitle">
									Quanto tempo dura o desenvolvimento?
				        </div>
				        <div class="itemDesc">
									Depende da complexidade de cada projeto, vamos conversar sobre seu negócio e assim poderemos dimensionar tanto o custo quanto o tempo que deverá ser investido.
				        </div>
				      </div>
				      <div class="item" @click="select(2)" :class="{active:selected === 2}">
				        <div class="itemTitle">
				          Como funciona o workflow?
				        </div>
				        <div class="itemDesc">
				          Trabalhamos de uma forma bem objetiva: <br />
				          <div class="columns is-centered">
				          	<div class="column is-7 has-text-left content">
						          <ol>
						          	<li>Pesquisa</li>
						          	<li>Design UI/UX</li>
						          	<li>Aprovação do protótipo</li>
						          	<li>Desenvolvimento</li>
						          	<li>Lançamento</li>
						          </ol>
				          	</div>
				          </div>
				        </div>
				      </div>
				      <div class="item" @click="select(3)" :class="{active:selected === 3}">
				        <div class="itemTitle">
				          Quais são as formas de pagamento?
				        </div>
				        <div class="itemDesc">
				          Transferência bancária ou boleto. Trabalhamos com um sinal de 20% do valor, 40% após a aprovação do protótipo e os últimos 40% ao final do projeto, quando seu site é lançado.
				        </div>
				      </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				selected: null
			}
		},
		methods: {
			select(event) {
				if(this.selected === event) {
					this.selected = null
				} else {
					this.selected = event
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.section {
	height: 760px;
	@media (max-width: 769px) {
		height: 820px;
	}
	padding-bottom: unset;
	padding-top: 12rem;
	position: relative;
	.container {
		min-height: 100%;
		position: relative;
		.right {
			img { width: 152px; }
			@media (max-width: 769px) {
				img { width: 90px; }
			}
			position: absolute;
			bottom: 42px;
			right: 0;
		}
		.right2 {
			position: absolute;
			right: 42px;
			top: 10%;
		}
		.left {
			position: absolute;
			bottom: 42px;
			left: 0;
			opacity: 0.4;
			transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
			@media (min-width: 769px) {
				&:hover {
					opacity: 1;
				}
			}
		}
		.left2 {
			position: absolute;
			top: 200px;
			left: 200px;
		}
		.bird {
			position: absolute;
			left: 100px;
			top: 0;
			@media (max-width: 769px) {
				width: 40px;
				left: unset;
				right: 0;
				top: -40px;
			}
		}
	}
}
.center {
	display: grid;
	place-items: center;
	h2 { margin-bottom: unset; }
}
.faq {
	display: flex;
	justify-content: center;
	margin-top: 42px;
}
.item {
	@media (max-width: 769px) {
		width: 100%;
	}
  width: 420px;
  min-height: 46px;
  border: 2px solid #161719;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 24px;
  .itemTitle {
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
		font-family: Alkes;
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 16px;
		color: rgba(74, 77, 82, 0.8);
    opacity: .75;
    cursor: pointer;
    margin-bottom: -1px;
    min-height: 50px;
    &::after {
      content: '';
      display: inline-block;
      position: relative;
      min-width: 14px;
      height: 14px;
      margin-right: 4px;
      background: url(~assets/img/lp2/down-icon.svg);
      background-size: 14px 14px;
      background-repeat: no-repeat;
      vertical-align: middle;
    }
    &:hover { opacity: 1; }
  }
  .itemDesc {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: -32px;
    padding: 16px;
    border-top: 1px solid rgba(74, 77, 82, 0.8);
    color: rgba(74, 77, 82, 0.8);
    visibility: hidden;
    opacity: 0;
    max-height: 0px;
    transition: max-height 400ms ease, opacity 600ms linear 0.2s, margin-bottom 300ms ease, visibility 500ms ease;
    a { color: #FAFAFA; opacity: 0.75; font-weight: 600; &:hover { opacity: 1; } }
  }
  &.active {
    .itemDesc { opacity: 1; max-height: 600px; margin-bottom: unset; visibility: visible; }
    .itemTitle { opacity: 1; margin-bottom: unset; }
    .itemTitle:after { transform: rotate(180deg); }
  }
}
</style>