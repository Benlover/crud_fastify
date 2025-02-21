import { connectDB } from "../bd/database.js";

async function userRoutes(fastify,options){

    fastify.get("/check",async(request,reply) =>{
        const db = await connectDB();
        const users = await db.all("select * from users");
        return users;
    })
    fastify.post("/create",async(request,reply) => {
        const { name } = request.body;
        if(!name){
            reply.status(400).send({ message : "Le name est requis"})
        }
        const db = await connectDB();
        const user = await db.run("INSERT INTO users (name) values(?)",[name]);
        return users;
    })
    fastify.get("/check/:id",async(request,reply) => {
         const { id } = request.params;
         const db =  await connectDB();
         const user = await db.get("SELECT * from users where id = ?",[id])
         
         if(!user){
            reply.status(400).send({ messsage: "Utilisateur non trouvé"})
         }
         return user;

    })
    fastify.put("/modify/:id",async(request,reply) => {
        const { id } = request.params;
        const { name } = request.body;
        if(!name){
            reply.status(400).send({ message : 'Le nom est requis'})
        }
        const db =  await connectDB();
        const result = await db.run("UPDATE users SET name= ? where id =? ",[name,id])
        if(result.changes === 0){
            reply.status(404).send({ message : "Utilisateur non trouvé"})
        }
       return {id,name};

    })
    fastify.delete("/del/:id",async(request,reply) => {
        const { id } = request.params;
        const db =  await connectDB();
        const result = await db.run("Delete from users  where id =? ",[id])
        if(result.changes === 0){
            reply.status(404).send({ message : "Utilisateur non trouvé"})
        }
       return {id};
    })
}
export default userRoutes;
    