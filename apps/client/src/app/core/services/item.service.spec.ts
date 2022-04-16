import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ItemService } from './item.service';
import { environment } from '../../../environments/environment';
import { TransferHttpService } from './transfer-http.service';
import { TransferState } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';
// import { BehaviorSubject } from 'rxjs';
// import { convertToParamMap } from '@angular/router';

describe('ItemService', () => {
  let service: ItemService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TransferState]
    });
    service = TestBed.inject(ItemService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should item json when getItems method was called', () => {
    const mockHeroes = {
      author: {},
      items: [],
      message: 'hola',
    };
    service.getItems('hola').subscribe(() => {
      expect(false).toBeTruthy();
    });

    const req = httpTestingController.expectOne(
      `${environment.apiUrl}items?q=hola`
    );
    expect(req.request.method).toEqual('GET');
    req.flush(mockHeroes);
  });
});
