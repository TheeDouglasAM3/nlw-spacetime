import fastify from 'fastify'

const app = fastify()

app.listen({
  port: 3333
}).then(() => {
	console.log('🤖 HTTP server running on http://localhost:3333')
})

//30:32 - video 1
//https://youtu.be/FNYRTmXBAVY