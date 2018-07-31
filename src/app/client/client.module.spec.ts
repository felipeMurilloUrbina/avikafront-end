import { ClientModule } from './client.module';

describe('ClienteModule', () => {
  let clienteModule: ClientModule;

  beforeEach(() => {
    clienteModule = new ClientModule();
  });

  it('should create an instance', () => {
    expect(clienteModule).toBeTruthy();
  });
});
