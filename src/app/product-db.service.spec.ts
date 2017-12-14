import { TestBed, inject } from '@angular/core/testing';

import { ProductDbService } from './product-db.service';

describe('ProductDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductDbService]
    });
  });

  it('should be created', inject([ProductDbService], (service: ProductDbService) => {
    expect(service).toBeTruthy();
  }));
});
