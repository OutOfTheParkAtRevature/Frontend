import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeagueNewsComponent } from './league-news.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NewsService } from 'src/app/_services/news.service';
import { AccountService } from 'src/app/_services/account.service';
import { UserService } from 'src/app/_services/user.service';
import { LeagueArticle } from '../../../_models/Article';
import { of } from 'rxjs';

describe('LeagueNewsComponent', () => {
  let component: LeagueNewsComponent;
  let fixture: ComponentFixture<LeagueNewsComponent>;
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
    },
    {
      id: 2,
      title: '',
      date: new Date(),
      body: '',
      isPinned: false,
      visible: false,
    },
    {
      id: 3,
      title: '',
      date: new Date(),
      body: '',
      isPinned: true,
      visible: false,
    }
  ] as LeagueArticle[];

  beforeEach(async () => {
    mockNewsService = jasmine.createSpyObj('NewsService', ['getLeagueArticles']);
    mockArticles = mockNewsService.getLeagueArticles.and.returnValue(of(articles));
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: NewsService, useValue: mockNewsService },
        AccountService,
        UserService
      ],
      declarations: [LeagueNewsComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and call everything', () => {
    expect(component).toBeTruthy();
    expect(mockArticles.calls.any()).toBeTrue();
    expect(component.articles[2].id).toBe(articles[2].id);
  });
});
