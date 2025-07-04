import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify"
import CreateArtistController from "./controller/CreateArtistController";
import ListArtistController from "./controller/ListArtController";  
import CreateArtController from "./controller/CreateArtController";
import ListArtController from "./controller/ListArtController";
import DeleteArtController from "./controller/DeleteArtController";
import DeleteArtistController from "./controller/DeleteArtistController";


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions ){
 
    fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
        return { message: "Welcome to the GoskiGallery API!" };
    });

    fastify.post("/Artist", async(request: FastifyRequest, reply: FastifyReply)=> {  
        return new CreateArtistController().handle(request, reply);
    });

    fastify.get("/Artist", async(request: FastifyRequest, reply: FastifyReply)=> { 
        return new ListArtistController().handle(request, reply);
    });   

    fastify.delete("/Artist", async(request: FastifyRequest, reply: FastifyReply)=> {
        return new DeleteArtistController().handle(request, reply);
    });

    fastify.post("/Art", async(request: FastifyRequest, reply: FastifyReply)=> {
        return new CreateArtController().handle(request, reply);
    });

    fastify.get("/Arts", async(request: FastifyRequest, reply: FastifyReply)=> {
        return new ListArtController().handle(request, reply);
    });

    fastify.delete("/Art", async(request: FastifyRequest, reply: FastifyReply)=> {
        return new DeleteArtController().handle(request, reply);
    });
};


