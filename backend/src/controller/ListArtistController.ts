import { FastifyRequest, FastifyReply } from "fastify";
import ListArtistService from "../services/ListArtistService";

export default class ListArtistController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listArtistService = new ListArtistService();

        const artist = await listArtistService.execute();

        return reply.send(artist);
    }
}