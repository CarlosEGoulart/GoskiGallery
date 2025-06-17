import { FastifyRequest, FastifyReply } from "fastify";
import ListArtService from "../services/ListArtService";

export default class ListArtController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listArtService = new ListArtService();

        const art = await listArtService.execute();

        return reply.send(art);
    }
}