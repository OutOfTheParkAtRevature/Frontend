import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DrawService } from './draw.service';

describe('DrawService', () => {
  let service: DrawService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DrawService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
