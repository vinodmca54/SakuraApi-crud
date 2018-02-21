"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("@sakuraapi/api");
exports.SakuraApi = api_1.SakuraApi;
const user_model_1 = require("../models/user-model");
let UserApi = class UserApi extends api_1.SapiRoutableMixin() {
    userRout(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let users = user_model_1.UserModel.fromJson(req.body);
            let reponceback;
            try {
                reponceback = yield users.create();
            }
            catch (err) {
                reponceback = { message: err.message };
            }
            res.send(reponceback).status(200);
            next();
        });
    }
    getuser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let alluser;
            try {
                alluser = yield user_model_1.UserModel.get({ filter: {} });
            }
            catch (err) {
                alluser = { message: err.message };
            }
            console.log(alluser);
            res.send(alluser).status(200);
        });
    }
    getoneuser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let user;
            let id = req.params.id;
            try {
                user = yield user_model_1.UserModel.getById(id);
            }
            catch (err) {
                user = { message: err.message };
            }
            res.send(user).status(200);
        });
    }
    deleteuser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let user;
            let id = req.params.id;
            try {
                user = yield user_model_1.UserModel.removeById(id);
            }
            catch (err) {
                user = { message: err.message };
            }
            res.send(user).status(200);
        });
    }
    updateUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.id = req.params.id;
            const user = user_model_1.UserModel.fromJson(req.body);
            let updateU;
            try {
                updateU = yield user.save();
            }
            catch (err) {
                updateU = { message: err.message };
            }
            res.send(updateU).status(200);
            next();
        });
    }
};
__decorate([
    api_1.Route({
        method: 'post',
        path: '/user',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], UserApi.prototype, "userRout", null);
__decorate([
    api_1.Route({
        method: 'get',
        path: '/getusers',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], UserApi.prototype, "getuser", null);
__decorate([
    api_1.Route({
        method: 'get',
        path: ':id'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], UserApi.prototype, "getoneuser", null);
__decorate([
    api_1.Route({
        method: 'delete',
        path: ':id'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], UserApi.prototype, "deleteuser", null);
__decorate([
    api_1.Route({
        method: 'put',
        path: ':id'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], UserApi.prototype, "updateUser", null);
UserApi = __decorate([
    api_1.Routable({
        baseUrl: 'user',
        model: user_model_1.UserModel,
        suppressApi: true
    })
], UserApi);
exports.UserApi = UserApi;
//# sourceMappingURL=user-api.js.map