import { TestBed } from '@angular/core/testing';
import { NewsService } from './news.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Article, TeamArticle, LeagueArticle } from '../_models/Article';

describe('NewsService', () => {
  let service: NewsService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(NewsService);
    controller = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#article', () => {
    let dummyArticles: Article[];

    beforeEach(() => {
      dummyArticles = [
        {
          id: 1,
          title: '',
          date: new Date(),
          body: '',
          isPinned: false,
          visible: false
        },
        {
          id: 2,
          title: '',
          date: new Date(),
          body: '',
          isPinned: false,
          visible: false
        }
      ] as Article[];
    });

    it('should get getArticles()', () => {
      service.getArticles().subscribe(articles =>
        expect(articles.length).toBeGreaterThan(0),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'Articles');
      expect(req.request.method).toBe('GET');
      req.flush(dummyArticles);
    });

    it('should get getArticle()', () => {
      service.getArticle(dummyArticles[0].id).subscribe(article =>
        expect(article).toBeTruthy(),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'Articles/1');
      expect(req.request.method).toBe('GET');
      req.flush(dummyArticles[0]);
    });

    it('should get createArticle()', () => {
      service.createArticle(dummyArticles[0]).subscribe(article =>
        expect(article).toBeTruthy(),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'Articles');
      expect(req.request.method).toBe('POST');
      req.flush(dummyArticles[0]);
    });

    it('should get editArticle()', () => {
      service.editArticle(dummyArticles[1], dummyArticles[1].id).subscribe(article =>
        expect(article).toBeTruthy(),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'Articles/2');
      expect(req.request.method).toBe('PUT');
      req.flush(dummyArticles[0]);
    });
  });

  describe('#leaguearticle', () => {
    let dummyArticles: LeagueArticle[];

    beforeEach(() => {
      dummyArticles = [
        {
          id: 1,
          title: '',
          date: new Date(),
          body: '',
          isPinned: false,
          visible: false
        },
        {
          id: 2,
          title: '',
          date: new Date(),
          body: '',
          isPinned: false,
          visible: false
        }
      ] as LeagueArticle[];
    });

    it('should get getLeagueArticles()', () => {
      service.getLeagueArticles().subscribe(articles =>
        expect(articles.length).toBeGreaterThan(0),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'leagueArticles');
      expect(req.request.method).toBe('GET');
      req.flush(dummyArticles);
    });

    it('should get getLeagueArticle()', () => {
      service.getLeagueArticle(dummyArticles[0].id).subscribe(article =>
        expect(article).toBeTruthy(),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'leagueArticles/1');
      expect(req.request.method).toBe('GET');
      req.flush(dummyArticles[0]);
    });

    it('should get createLeagueArticle()', () => {
      service.createLeagueArticle(dummyArticles[0]).subscribe(article =>
        expect(article).toBeTruthy(),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'leagueArticles');
      expect(req.request.method).toBe('POST');
      req.flush(dummyArticles[0]);
    });

    it('should get editLeagueArticle()', () => {
      service.editLeagueArticle(dummyArticles[1], dummyArticles[1].id).subscribe(article =>
        expect(article).toBeTruthy(),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'leagueArticles/2');
      expect(req.request.method).toBe('PUT');
      req.flush(dummyArticles[0]);
    });
  });

  describe('#teamarticle', () => {
    let dummyArticles: TeamArticle[];

    beforeEach(() => {
      dummyArticles = [
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
        }
      ] as TeamArticle[];
    });

    it('should get getTeamArticles()', () => {
      service.getTeamArticles().subscribe(articles =>
        expect(articles.length).toBeGreaterThan(0),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'teamArticles');
      expect(req.request.method).toBe('GET');
      req.flush(dummyArticles);
    });

    it('should get getTeamArticle()', () => {
      service.getTeamArticle(dummyArticles[0].id).subscribe(article =>
        expect(article).toBeTruthy(),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'teamArticles/1');
      expect(req.request.method).toBe('GET');
      req.flush(dummyArticles[0]);
    });

    it('should get createTeamArticle()', () => {
      service.createTeamArticle(dummyArticles[0]).subscribe(article =>
        expect(article).toBeTruthy(),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'teamArticles');
      expect(req.request.method).toBe('POST');
      req.flush(dummyArticles[0]);
    });

    it('should get editTeamArticle()', () => {
      service.editTeamArticle(dummyArticles[1], dummyArticles[1].id).subscribe(article =>
        expect(article).toBeTruthy(),
        fail
      );
      const req = controller.expectOne(service.baseUrl + 'teamArticles/2');
      expect(req.request.method).toBe('PUT');
      req.flush(dummyArticles[0]);
    });
  });
});
