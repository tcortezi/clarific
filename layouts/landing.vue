<template>
  <div>
  	<nuxt />
  </div>
</template>

<style lang="scss">
	h1.lp {
	  font-style: normal;
	  font-weight: 800;
	  font-size: 64px;
	  line-height: 68px;
	  letter-spacing: -1px;
	  color: #161719;
	  @media (max-width: 769px) {
	    font-size: 36px;
	    line-height: 40px;
	  }
	}

	p.subtitle.lp {
	  margin-top: 32px;
	  max-width: 530px;
	  font-family: Alkes;
	  font-style: normal;
	  font-weight: 600;
	  font-size: 23px;
	  line-height: 42px;
	  letter-spacing: 1px;
	  color: #4A4D52;
	  > strong {
	    font-weight: 600;
	    color: inherit;
	  }
	  @media (max-width: 769px) {
	    font-size: 20px;
	    line-height: 30px;
	  }
	}

	.btn-lp {
	  position: relative;
	  display: inline-block;
	  padding: 24px 32px;
	  border: 1px solid #252729;
	  font-weight: 500;
	  font-size: 23px;
	  line-height: 23px;
	  @media (max-width: 769px) {
	    font-size: 20px;
	    line-height: 20px;
	  }
	  color: #161719;
	  transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
	  > span {
	    position: relative;
	    z-index: 30;
	  }
	  &::before {
	    content: '';
	    width: 0%;
	    height: 100%;
	    background: #252729;
	    display: block;
	    position: absolute;
	    top: 0;
	    left: 0;
	    transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
	  }
	  @media (min-width: 769px) {
	    &.highlight {
	      &:hover {
	        color: #161719;
	      }
	      &::before {
	        background: #EA9A00;
	      }
	    }
	    &:hover {
	      color: #fafafa;
	      &::before {
	        width: 100%;
	      }
	    }
	  }
	  &.lp1 {
	  	padding: 20px 32px;
			font-weight: 500;
			font-size: 20px;
			line-height: 20px;
	  }
	}

	h5.lp {
	  font-weight: 600;
	  font-size: 18px;
	  line-height: 18px;
	  @media (max-width: 769px) {
	    font-size: 16px;
	    line-height: 16px;
	  }
	  color: #F23005;
	  &.lp1 {
	  	color: #AFAFAF;
	  }
	  text-transform: uppercase;
	}

	h2.lp {
	  font-style: normal;
	  font-weight: 800;
	  font-size: 32px;
	  line-height: 38px;
	  color: #161719;
	  margin-top: 32px;
	  margin-bottom: 24px;
	  max-width: 530px;
	  @media (max-width: 769px) {
	    font-size: 30px;
	    line-height: 36px;
	    margin-top: 20px;
	    margin-bottom: 20px;
	  }
	}

	p.lp {
	  font-family: Alkes;
	  font-style: normal;
	  font-weight: normal;
	  font-size: 20px;
	  line-height: 28px;
	  @media (max-width: 769px) {
	    font-size: 18px;
	    line-height: 26px;
	  }
	  letter-spacing: 1px;
	  color: #4A4D52;
	  max-width: 530px;
	  > strong { font-weight: 600; }
	}

	form.lp {
	  input, textarea, select {
	    border: 1px solid #2D2E30;
	    padding: 18px;
	    min-height: 52px;
	    &:focus, &:hover {
	      outline: none;
	      border-color: #2D2E30;
	    }
	    &:focus {
	      box-shadow: 0px 0.266004px 0.465507px rgba(0, 0, 0, 0.0484671), 0px 0.893452px 1.56354px rgba(0, 0, 0, 0.0715329), 0px 4px 7px rgba(0, 0, 0, 0.12);
	    }
	  }
	  .select {
	    min-height: 52px;
	    select {
	      padding: unset;
	      padding-left: 18px;
	    }
	  }
	  .select:not(.is-multiple):not(.is-loading) {
	    &::after {
	      border-color: #161719;
	    }
	  }
	  span + span {
	    display: block;
	    margin-top: 24px;
	  }
	  .group {
	    > span { width: 100%; }
	    @media (min-width: 769px) {
	      > span { margin-top: unset; width: 48%; }
	    }
	    margin-top: 24px;
	    margin-bottom: 24px;
	  }
	  .help {
	    position: absolute;
	    bottom: -18px;
	    left: 0;
	  }
	  .field { position: relative; }
	}

	.lp {
	  .section { padding: 6rem 1.5rem; }
	  .modal-background {
	    background-color: transparent;
	    backdrop-filter: blur(10px) saturate(0.5) brightness(1.2);
	  }
	  .modal.is-full-screen > .animation-content {
	    background: rgba(250, 250, 250, 0.95);
	  }
	}

	p.lp + .btn-lp {
		margin-top: 32px;
	}
</style>
