import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../shared/interfaces/user';
import { Group } from './interfaces/group';
import { Lang } from './interfaces/lang';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  public findAllUsers(params?: HttpParams) {
    return this.http.get<User[]>('/api/users', {
      params,
    });
  }

  public findUserById(userId: any, params?: HttpParams) {
    return this.http.get<User>('/api/users/' + userId, {
      params,
    });
  }

  public createUser(user: any) {
    return this.http.post('/api/users', user, {
      withCredentials: true,
    });
  }

  public updateUser(user: User) {
    return this.http.put(`/api/users/${user._id}`, user);
  }

  public deleteUser(userId: string) {
    return this.http.delete(`/api/users/${userId}`);
  }

  public getGroupsRoutes() {
    return this.http.get('/api/groups/getRoutes');
  }

  public createGroup(group: Group) {
    return this.http.post('/api/groups', group);
  }

  public getGroupById(groupId: string) {
    return this.http.get<Group>(`/api/groups/${groupId}`);
  }

  public updateGroup(groupId: string, group: Group) {
    return this.http.put(`/api/groups/${groupId}`, group);
  }

  public deleteGroup(groupId: string) {
    return this.http.delete(`/api/groups/${groupId}`);
  }

  public getGroups(params?: HttpParams) {
    return this.http.get<Group[]>('/api/groups', {
      params,
    });
  }

  public getLang(id: string, params?: HttpParams) {
    return this.http.get<Lang>(`/api/langs/${id}`, {
      params,
    });
  }

  public updateLang(id: string, lang: Lang) {
    return this.http.put(`/api/langs/${id}`, lang);
  }

  public createLang(lang: Lang) {
    return this.http.post('/api/langs', lang);
  }
}
