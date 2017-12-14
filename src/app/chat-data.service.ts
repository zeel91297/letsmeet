import { Injectable } from '@angular/core';
import { ApiAiClient } from 'api-ai-javascript';

@Injectable()
export class ChatDataService {

  readonly client = new ApiAiClient({ accessToken: '02445f0d04704d10b980633018e830b6' });

  constructor() { }

}
