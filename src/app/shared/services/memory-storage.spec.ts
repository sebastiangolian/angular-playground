import { TestBed } from '@angular/core/testing';
import { MemoryStorageService } from './memory-storage.service';

describe('MemoryStorageService', () => {
  let service: MemoryStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemoryStorageService);
  });

  it('should add and get', () => {
    service.add('testType', 'testKey', '123');
    expect(service.get('testType', 'testKey')).toEqual('123');
  });

  it('should update', () => {
    service.deleteAll();
    service.add('testType', 'testKey', '123');
    expect(service.get('testType', 'testKey')).toEqual('123');
    service.update('testType', 'testKey', '1234');
    expect(service.get('testType', 'testKey')).toEqual('1234');
  });

  it('should delete', () => {
    service.deleteAll();
    service.add('testType', 'testKey', '123');
    expect(service.get('testType', 'testKey')).toEqual('123');
    service.delete('testType', 'testKey');
    expect(service.get('testType', 'testKey')).toEqual('');
  });

  it('should getAll', () => {
    service.deleteAll();
    expect(service.getAll().length).toEqual(0);
    service.add('testType', 'testKey1', '123');
    service.add('testType', 'testKey2', '123');
    expect(service.getAll().length).toEqual(2);
  });

  it('should deleteAll', () => {
    service.add('testType', 'testKey', '123');
    expect(service.get('testType', 'testKey')).toEqual('123');
    service.deleteAll();
    expect(service.get('testType', 'testKey')).toEqual('');
  });
});
