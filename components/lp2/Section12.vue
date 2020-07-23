<template>
	<section class="section">
		<div class="container">
			<div class="left">
				<a href="https://clarific.com.br/" target="_blank" class="logo"><img src="~/assets/img/lp2/logo.svg"></a>
			</div>
			<div class="right">
				<img src="~/assets/img/lp2/plant.svg">
			</div>
			<div class="bird">
				<img src="~/assets/img/lp2/bird.svg">
			</div>
			<div class="center">
				<h2 class="lp2">Perguntas frequentes</h2>
			</div>
			<div class="columns is-centered">
				<div class="column is-narrow">
					<div class="faq">
						<div>
				      <div class="item" @click="select(1)" :class="{active:selected === 1}">
				        <div class="itemTitle">
									Em quanto tempo a landing fica pronta?
				        </div>
				        <div class="itemDesc">
									Na grande maioria das vezes conseguimos entregar a página em 5 dias úteis, mas pode variar de acordo com as necessidades de cada projeto.
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
	height: 720px;
	@media (max-width: 769px) {
		height: 820px;
	}
	padding-bottom: unset;
	padding-top: 12rem;
	.container {
		min-height: 100%;
		position: relative;
		.right {
			img { width: 152px; }
			@media (max-width: 769px) {
				img { width: 90px; }
			}
			position: absolute;
			bottom: -6px;
			right: 0;
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