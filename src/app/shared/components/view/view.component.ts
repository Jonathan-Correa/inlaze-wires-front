import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  public items: any;

  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit(): void {}

  public view(userId: string) {
    const params = new HttpParams()
      .set('field', '-password -salt -profileImg')
      .set('populate', JSON.stringify({ path: 'group_id', select: 'name' }));

    return this.sharedService
      .view(`/api/users/${userId}`, params)
      .subscribe((res) => {
        this.items = {};

        for (const i in res) {
          if (!res.hasOwnProperty(i)) {
            continue;
          }

          const index = 'VIEW.' + i.toUpperCase();
          this.items[index] = i === 'group_id' ? res[i].name : res[i];
        }
      });
  }
}
