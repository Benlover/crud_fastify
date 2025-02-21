import Fastify from "fastify";
import userRoutes from "./routes/user.js";

const fastify = Fastify({ logger: true});
fastify.register(userRoutes);


const start = async () => {
    try {
        await fastify.listen({ port : 3000});
        console.log("🚀 Server is running on http://localhost:3000")
    } catch (error) {
        fastify.log.error(error);
        process.exit()
    }
}
start();