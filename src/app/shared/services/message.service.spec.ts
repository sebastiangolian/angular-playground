import { MessageModel } from './../models/message.model';
import { TestBed } from '@angular/core/testing';
import { MessageService } from './message.service';
import { MessageType } from '../enums/message-type.enum';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
  });

  it('should send', (done) => {
    service.getMessage().subscribe((message) => {
      expect(message.text).toBe('test');
      done();
    });
    service.sendMessage('test');
  });

  it('should send by object', (done) => {
    service.getMessage().subscribe((message) => {
      expect(message.text).toBe('testByObject');
      done();
    });

    const messageModel = new MessageModel();
    messageModel.type = MessageType.info;
    messageModel.timeout = 1000;
    messageModel.text = 'testByObject';
    messageModel.dismissible = false;
    service.sendMessageByObject(messageModel);
  });
});
