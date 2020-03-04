<template>
	<div>
		<form action="/api/contact" method="POST">
			<input type="text" name="name" value="Rodrigo">	
			<input type="text" name="email" value="rodrigovcortezi@gmail.com">	
			<textarea name="msg">teste desenvolvimento [website form]</textarea>
			<button type="submit">Enviar</button>
		</form>
	</div>
</template>
