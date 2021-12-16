import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 
  lists:any;
  constructor(private data:ServiceService) { }

  ngOnInit(): void {
    this.lists=this.data.getData()
  }

}
