import { Injectable } from '@nestjs/common';
import * as low from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';
import * as nanoid from 'nanoid';

export interface AdminUser {
  email: string;
  password: string;
}

export interface AdminUserDB extends AdminUser {
  id: string;
}

const adapter = new FileSync<AdminUserDB>('./db/admins.json')
const db = low(adapter)

db.defaults({ admins: [] }).write();

@Injectable()
export class AuthDao {

  private get collection(): any {
    return db.get('admins');
  }

  constructor() {
    //
  }

  async createNewAdminUser(user: AdminUser) {
    const id = { id: nanoid.nanoid(10) };
    await this.collection
      .push({
        ...id,
        ...user,
      })
      .write()
    return id.id;
  }

  async getAdminUserByEmail(email: string): Promise<AdminUserDB> {
    return await this.collection.find({ email }).value();
  }

  async getAdminUserById(id: string): Promise<AdminUserDB> {
    return await this.collection.find({ id }).value();
  }

  async deleteAdminUser(id: string): Promise<AdminUserDB> {
    return await this.collection
          .remove(({id}))
          .write();
  }


}
