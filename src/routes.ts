import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController"
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController"
import { CreateComplementController } from "./controllers/CreateComplementController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUsersendComplimentController } from "./controllers/ListUsersendComplimentController";
import { ListUserReceiverComplimentController } from "./controllers/ListUserReceiverComplimentController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserController } from "./controllers/ListUserController";

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplementController = new CreateComplementController()
const listUserSendComplimentsContoller = new ListUsersendComplimentController()
const listUserReceiverComplimentsContoller = new ListUserReceiverComplimentController()
const listTagsController = new ListTagsController
const listUsersController = new ListUserController()

router.post("/users", createUserController.handle);
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle)
router.post("/login", authenticateUserController.handle)
router.post("/compliments", ensureAuthenticated, createComplementController.handle)

router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentsContoller
.handle)
router.get("/users/compliments/receive", ensureAuthenticated , listUserReceiverComplimentsContoller
.handle)
router.get("/tags", ensureAuthenticated, listTagsController.handle)
router.get("/users",ensureAuthenticated, listTagsController.handle)
export {router}

