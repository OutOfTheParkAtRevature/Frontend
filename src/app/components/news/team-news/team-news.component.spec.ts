import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamNewsComponent } from './team-news.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NewsService } from 'src/app/_services/news.service';
import { AccountService } from 'src/app/_services/account.service';
import { UserService } from 'src/app/_services/user.service';
import { TeamArticle } from '../../../_models/Article';
import { of } from 'rxjs';

describe('TeamNewsComponent', () => {
  let component: TeamNewsComponent;
  let fixture: ComponentFixture<TeamNewsComponent>;
  let mockNewsService;
  let mockArticles;

  let articles = [
    {
      id: 1,
      title: '',
      date: new Date(),
      body: '',
      isPinned: false,
      visible: false,
      teamId: 1
    },
    {
      id: 2,
      title: '',
      date: new Date(),
      body: '',
      isPinned: false,
      visible: false,
      teamId: 2
    },
    {
      id: 3,
      title: '',
      date: new Date(),
      body: '',
      isPinned: true,
      visible: false,
      teamId: 3
    }
  ] as TeamArticle[];

  beforeEach(async () => {
    mockNewsService = jasmine.createSpyObj('NewsService', ['getTeamArticles']);
    mockArticles = mockNewsService.getTeamArticles.and.returnValue(of(articles));
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: NewsService, useValue: mockNewsService },
        AccountService,
        UserService
      ],
      declarations: [TeamNewsComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and call everything', () => {
    expect(component).toBeTruthy();
    expect(mockArticles.calls.any()).toBeTrue();
    expect(component.articles[2].id).toBe(articles[2].id);
  });
});
