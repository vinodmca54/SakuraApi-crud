import {
  Routable,
  Route,
  SakuraApi,
  SapiRoutableMixin
} from '@sakuraapi/api';
import {
  NextFunction,
  Request,
  Response
} from 'express';
import{UserModel} from '../models/user-model';
export { SakuraApi };
import {error} from "util";

@Routable({
  baseUrl:'user',
  model:UserModel,
  suppressApi: true
})
export class UserApi extends SapiRoutableMixin() {

  @Route({
    method:'post',
    path:'/user',
   })
 async userRout(req: Request, res: Response, next: NextFunction) {
    let users = UserModel.fromJson(req.body);
    let reponceback;
    try{
      reponceback = await users.create();
    } catch(err){
      reponceback = {message: err.message};
    }
    res.send(reponceback).status(200);
    next();
  }

  @Route({
    method:'get',
    path:'/getusers',
   })
 async getuser(req: Request, res: Response, next: NextFunction) {
    //let users = UserModel.fromJson(req.body);
    let alluser;
    try{
      alluser = await  UserModel.get({filter: {}});
    } catch(err){
      alluser = {message: err.message};
    }
    console.log(alluser);
    res.send(alluser).status(200);
  }

  @Route({
    method:'get',
    path: ':id'
   })
 async getoneuser(req: Request, res: Response, next: NextFunction) {
    //let users = UserModel.fromJson(req.body);
    let user;
    let id = req.params.id;
    try{
     user = await  UserModel.getById(id);
    } catch(err){
       user = {message: err.message};
    }
    //console.log(alluser);
    res.send(user).status(200);
  }

  @Route({
    method:'delete',
    path: ':id'
   })
 async deleteuser(req: Request, res: Response, next: NextFunction) {
    //let users = UserModel.fromJson(req.body);
    let user;
    let id = req.params.id;
    try{
     user = await  UserModel.removeById(id);
    } catch(err){
       user = {message: err.message};
    }
    //console.log(alluser);
    res.send(user).status(200);
  }
  
  @Route({
    method: 'put',
    path: ':id'
  })
  async updateUser(req: Request, res: Response, next: NextFunction) {
    req.body.id = req.params.id;
    const user = UserModel.fromJson(req.body);
    let updateU;
    try {
      updateU = await user.save();
    } catch (err) {
      updateU = { message: err.message };
    }
    res.send(updateU).status(200);
    next();
  }

}
