import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.interface';
import { map, switchMap } from 'rxjs/operators';
import { AbstractService } from 'src/app/shared/services/abstract.service';
import { FileSaverService } from 'ngx-filesaver';

@Injectable({ providedIn: 'root' })
export class UserService extends AbstractService<User> {
  constructor(protected http: HttpClient, private fileSaverService: FileSaverService) {
    super(http);
    this.url += '/user';
  }

  downloadFile(user: User): Observable<any> {
    return this.http.get(user.documentLink, { responseType: 'blob' }).pipe(
      map((res) => {
        const file = new Blob([res], { type: 'application/pdf' });
        this.fileSaverService.save(file, `${user.id}.pdf`);
      }),
    );
  }

  getFile(user: User): Observable<any> {
    return this.http.get(user.documentLink, { responseType: 'blob' });
  }

  getFileByUserId(id: string): Observable<any> {
    return this.getById(id).pipe(
      map((user) => user.item),
      switchMap((user) => this.getFile(user)),
    );
  }
}
