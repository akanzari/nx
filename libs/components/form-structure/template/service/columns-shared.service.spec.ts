import { TestBed, inject } from '@angular/core/testing';

import { ColumnsSharedService } from './columns-shared.service';

describe('ColumnsSharedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColumnsSharedService]
    });
  });

  it('should be created', inject([ColumnsSharedService], (service: ColumnsSharedService) => {
    expect(service).toBeTruthy();
  }));
});
