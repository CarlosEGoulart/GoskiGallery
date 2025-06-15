import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify"
import CreateArtistController from "./controller/CreateArtistController";


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions ){
    fastify.get("/teste", async(request: FastifyRequest, reply: FastifyReply)=> {
        return { ok: true }
    });

    
    fastify.post("/Artist", async(request: FastifyRequest, reply: FastifyReply)=> {
        return new CreateArtistController().handle(request, reply);
    });


};