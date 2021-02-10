import { CONTEXT_NAME } from '@angular/compiler/src/render3/view/util';
import {
  Component, Input, ElementRef, AfterViewInit,OnInit, ViewChild
} from '@angular/core';
import { NgModel } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { switchMap, takeUntil, pairwise } from 'rxjs/operators'
//import { PlayerdetailsComponent } from '../../players/playerdetails/playerdetails.component';
import { AccountService } from '../../_services/account.service';
import { DrawService } from '../../_services/draw.service';
import { UserService } from '../../_services/user.service';
//import { play } from './play';
import { Play } from '../../_models/Play';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styles: ['canvas { margin-right: auto; margin-left: auto;  border: 1px solid; }']
})
export class DrawComponent implements AfterViewInit {
  // a reference to the canvas element from our template
  @ViewChild('canvas') canvas: any;
  
  // setting a width and height for the canvas
  @Input() public width = 600;
  @Input() public height = 600;
  constructor(private drawService: DrawService, private userService: UserService, public accountService: AccountService){}
  model = new Play;
  playbooks: any = {};
  playBookList: any = [];
  test:number;
  Eraser: string = 'white';
  ImageString;
  canvasEl: HTMLCanvasElement;
  cx: CanvasRenderingContext2D;

  

  public ngAfterViewInit() {
    // get the context
    this.canvasEl  = this.canvas.nativeElement;
    this.cx = this.canvasEl.getContext('2d');
    // set the width and height
    this.canvasEl.width = this.width;
    this.canvasEl.height = this.height;
    this.cx.lineCap = 'round';
  }

  public ngOnInit() {
    this.getTeamPlayBook();
    this.getPlaybooks();
  }

  
public captureEvents() {
  // this will capture all mousedown events from the canvas element
  fromEvent(this.canvasEl, 'mousedown')
    .pipe(
       switchMap((e) =>  {
        // after a mouse down, we'll record all mouse moves
        return fromEvent(this.canvasEl, 'mousemove')
          .pipe(
            // we'll stop once the user releases the mouse
            // triggers a mouseup event    
            takeUntil(fromEvent(this.canvasEl, 'mouseup')),
            //stop and unsubscribe once the (mouseleave event)
            takeUntil(fromEvent(this.canvasEl, 'mouseleave')),
            // pairwise lets us get the previous value to draw a line from the previous point to the current point    
            pairwise()
          )
      })
    )
    .subscribe((res: [MouseEvent, MouseEvent])  => {
      const rect = this.canvasEl.getBoundingClientRect();

      // previous and current position with the offset
      const prevPos = {
        x: res[0].clientX - rect.left,
        y: res[0].clientY - rect.top
      };

      const currentPos = {
        x: res[1].clientX - rect.left,
        y: res[1].clientY - rect.top
      };

      // this method we'll implement soon to do the actual drawing
      this.drawOnCanvas(prevPos, currentPos);
    });
}

private drawOnCanvas( lastPosition:{ x: number, y: number }, positionNow: { x: number, y: number }) {
  // incase the context is not set
  if (!this.cx) { return; }

  // start our drawing path
  this.cx.beginPath();

  // we're drawing lines so we need a previous position
  if (lastPosition) { // sets the start point
    this.cx.moveTo(lastPosition.x, lastPosition.y); // from
    this.cx.lineTo(positionNow.x, positionNow.y);// draws a line from the start pos until the current position
    this.cx.stroke(); // strokes the current path with the styles we set earlier
  }
}

public getRed(){
  this.cx.strokeStyle = 'Red';
}

public getBlack(){
  this.cx.strokeStyle = 'Black';
}

public getWhite(){
  this.cx.strokeStyle = 'White';
}

public getBlue(){
  this.cx.strokeStyle = 'turquoise';
}

public getEraser(){
  this.cx.strokeStyle = this.Eraser;
}

public lineIncrease(){
  if(this.cx.lineWidth < 40){
  this.cx.lineWidth = this.cx.lineWidth + 2;
  }
  else{
    alert('Max limit reached');
  }
}

public lineDecrease(){
  if(this.cx.lineWidth > 2){
  this.cx.lineWidth = this.cx.lineWidth - 2;
  }
  else{
    alert('Min limit reached');
  }
}

public restetTemplate(){
  this.cx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
}

SetBackGroundBlack(){
  this.Eraser = 'Black';
  this.cx.fillStyle = "Black";
  this.cx.fillRect(0,0,600,600);
  //this.canvasEl.style.backgroundColor = "Bisque";
}

SetBackGroundGreen(){
  this.Eraser = 'Green';
  this.cx.fillStyle = "Green";
  this.cx.fillRect(0,0,600,600);
  //this.canvasEl.style.backgroundColor = "Green";
}

SetBackGroundWhite(){
  this.Eraser = 'White';
  this.cx.fillStyle = "White";
  this.cx.fillRect(0,0,600,600);
  //sthis.canvasEl.style.backgroundColor = "White";

}

// backend logic here

saveCanvas() {

  this.ImageString = this.canvasEl.toDataURL(); //1 indicates full quality
  this.model.ImageString  = this.ImageString;
  console.log(this.model.ImageString);
  this.getPlayBook();

  console.log(this.model.PlaybookId);
  this.drawService.createDrawing(this.model).subscribe(response => {
    console.log(response);
  }, err => {
    console.log(err)
  })

  this.restetTemplate();
}


// re think playbooks later
// might need to get a list of playbooks by team ID from backend
getPlaybooks() {
  this.drawService.getPlaybooks().subscribe( playBooks => {
    this.playBookList = playBooks;
  }, err => {
    console.log(err);
  })
}

// gets the team id of the user
getTeamPlayBook() {
  this.accountService.currentUser$.subscribe( user => {
    this.playbooks.teamid = user.teamID;
  })
}

// looks through playbooks and grabs the first one with matching ID
getPlayBook() {
  this.playBookList.forEach(playbook => {
    if (playbook.teamID == this.playbooks.teamid) {
      this.model.PlaybookId = playbook.playbookID;
    }
  });
}  

}
