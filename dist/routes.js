"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const CreateArtistController_1 = __importDefault(require("./controller/CreateArtistController"));
const ListArtController_1 = __importDefault(require("./controller/ListArtController"));
const CreateArtController_1 = __importDefault(require("./controller/CreateArtController"));
const ListArtController_2 = __importDefault(require("./controller/ListArtController"));
function routes(fastify, options) {
    return __awaiter(this, void 0, void 0, function* () {
        fastify.get("/", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return { message: "Welcome to the GoskiGallery API!" };
        }));
        fastify.post("/Artist", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new CreateArtistController_1.default().handle(request, reply);
        }));
        fastify.get("/Artists", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new ListArtController_1.default().handle(request, reply);
        }));
        fastify.post("/Art", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new CreateArtController_1.default().handle(request, reply);
        }));
        fastify.get("/Arts", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new ListArtController_2.default().handle(request, reply);
        }));
    });
}
exports.routes = routes;
;
