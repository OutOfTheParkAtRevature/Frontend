import {
  Component, Input, ElementRef, AfterViewInit,OnInit, ViewChild
} from '@angular/core';
import { NgModel } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { switchMap, takeUntil, pairwise, take } from 'rxjs/operators'
import { AccountService } from '../../_services/account.service';
import { DrawService } from '../../_services/draw.service';
import { UserService } from '../../_services/user.service';
import { Play } from '../../_models/Play';
import { Playbook } from 'src/app/_models/Playbook';
import { ActivatedRoute } from '@angular/router';


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


  constructor(private drawService: DrawService, private activeParms: ActivatedRoute, public accountService: AccountService){}
  model = new Play;
  chosenPlaybook: any; //will be a string for guids
  playbooks: any = {};
  playBookList: Playbook[] = [];
  Eraser: string = 'white';
  isMakingCircle: boolean;
  isMakingLines: boolean;
  isMakingXs: boolean;
  ImageString: string;
  canvasEl: HTMLCanvasElement;
  cx: CanvasRenderingContext2D;

  

  public ngAfterViewInit() {
    this.isMakingLines = true;
    this.isMakingCircle = false;
    this.isMakingXs = false;
    this.canvasEl  = this.canvas.nativeElement;
    this.cx = this.canvasEl.getContext('2d');
    this.canvasEl.width = this.width;
    this.canvasEl.height = this.height;
    this.cx.lineCap = 'round';
     this.SetBackGroundWhite();
  }

  public ngOnInit() {
    this.chosenPlaybook =+ this.activeParms.snapshot.paramMap.get("id"); //This should only except strings once we switch to guids
    console.log(this.chosenPlaybook);
    this.getTeamPlayBook();
    this.getPlaybooks();
  }

  
public captureEvents() {
  if(this.isMakingLines == true){
  // this will capture all mousedown events from the canvas element
  fromEvent(this.canvasEl, 'mousedown')
    .pipe(
       switchMap((c) =>  {
        // after a mouse down, we'll record all mouse moves
        return fromEvent(this.canvasEl, 'mousemove')
          .pipe(
            // we'll stop once the user releases the mouse
            // triggers a mouseup event    
            takeUntil(fromEvent(this.canvasEl, 'mouseup')),
            //stop and unsubscribe once the (mouseleave event)
            //takeUntil(fromEvent(this.canvasEl, 'mouseleave')),
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
  if(!this.isMakingLines){ 
       fromEvent(this.canvasEl, 'mousedown').pipe(
         take(1)
        ).subscribe((res: MouseEvent)  => {
        const rect = this.canvasEl.getBoundingClientRect();
        const currentPos = {
          x: res.clientX - rect.left,
          y: res.clientY - rect.top
        };
        if(this.isMakingCircle){
          this.drawAO(currentPos)
        }
        if(this.isMakingXs){
          this.drawAX(currentPos);
        }
      });
  }
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

//Draws a circle on the canvas wherever the user clicks
public drawAO(currentPos: {x: number, y:number}){
  this.cx.beginPath();
  this.cx.arc(currentPos.x, currentPos.y, 20, 0, 2 * Math.PI);
  this.cx.stroke();
  this.isMakingXs = false;
  this.isMakingCircle = false;
  this.isMakingLines = true;
  this.canvasEl.style.border='1px solid';
}

//Draws an X on the canvas wherever the user clicks
public drawAX(currentPos: {x: number, y:number}){
  this.cx.beginPath();
  this.cx.lineTo(currentPos.x, currentPos.y);
  this.cx.lineTo(currentPos.x + 10, currentPos.y +10);
  this.cx.stroke();
  this.cx.lineTo(currentPos.x, currentPos.y);
  this.cx.lineTo(currentPos.x + 10, currentPos.y -10);
  this.cx.stroke();
  this.cx.lineTo(currentPos.x, currentPos.y);
  this.cx.lineTo(currentPos.x - 10, currentPos.y +10);
  this.cx.stroke();
  this.cx.lineTo(currentPos.x, currentPos.y);
  this.cx.lineTo(currentPos.x - 10, currentPos.y -10);
  this.cx.stroke();
  this.isMakingXs = false;
  this.isMakingCircle = false;
  this.isMakingLines = true;
  this.canvasEl.style.border='1px solid black';

}

//User draws a line when clicked
public drawALine(){
  this.isMakingLines = true;
  this.isMakingCircle = false;
  this.isMakingXs = false;
}

//Allows the user to draw Circles
public drawAOTrue(){
  this.isMakingXs = false;
  this.isMakingLines = false;
  this.isMakingCircle = true;
  this.canvasEl.style.border='4px solid red'
}

//Allows the user to draw Xs
public drawAXTrue(){
  this.isMakingXs = true;
  this.isMakingLines = false;
  this.isMakingCircle = false;
  this.canvasEl.style.border='4px solid red'
}

//changes brush stroke to red
public getRed(){
  this.cx.strokeStyle = 'Red';
}

//changes brush stroke to black
public getBlack(){
  this.cx.strokeStyle = 'Black';
}

//changes brush stroke to white
public getWhite(){
  this.cx.strokeStyle = 'White';
}

public getBlue(){
  this.cx.strokeStyle = 'turquoise';
}

//changes brush stroke to whatever background color is
public getEraser(){
  this.cx.strokeStyle = this.Eraser;
}

//Increases the size of the brush stroke
public lineIncrease(){
  if(this.cx.lineWidth < 40){
  this.cx.lineWidth = this.cx.lineWidth + 2;
  }
  else{
    alert('Max limit reached');
  }
}


//Decreases the size of the brush stroke
public lineDecrease(){
  if(this.cx.lineWidth > 2){
  this.cx.lineWidth = this.cx.lineWidth - 2;
  }
  else{
    alert('Min limit reached');
  }
}

//Clears the cx object in a rectangle the size of the canvas
public restetTemplate(){
  this.cx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
}

SetBackGroundBlack(){
  this.Eraser = 'Black';
  this.cx.fillStyle = "Black";
  this.cx.fillRect(0,0,600,600);
}

SetBackGroundGreen(){
  this.Eraser = 'Green';
  this.cx.fillStyle = "Green";
  this.cx.fillRect(0,0,600,600);
}

SetBackGroundWhite(){
  this.Eraser = 'White';
  this.cx.fillStyle = "White";
  this.cx.fillRect(0,0,600,600);
}

// backend logic here

saveCanvas() {

  this.ImageString = this.canvasEl.toDataURL(); //1 indicates full quality
  this.model.ImageString  = this.ImageString;
  this.accountService.currentUser$.subscribe(user => {
    this.model.DrawnBy = user.fullName;
  })
  this.model.visible = false; //Awaits approval 
  console.log(this.model.Name);
  console.log(this.model.DrawnBy);

  this.model.PlaybookId = this.chosenPlaybook
  //this.getPlayBook();
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
    this.playbooks.teamId = user.teamID;
  })
}

// looks through playbooks and grabs the first one with matching ID
getPlayBook() {
  this.playBookList.forEach(playbook => {
    if (playbook.teamId == this.playbooks.teamId) {
      this.model.PlaybookId = playbook.id;
    }
  });
} 

}
//Have Name of selected playbook appear/ In plays Give option to select new playbook