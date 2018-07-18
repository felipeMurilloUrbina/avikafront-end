import { NominaModule } from './nomina.module';

describe('NominaModule', () => {
  let nominaModule: NominaModule;

  beforeEach(() => {
    nominaModule = new NominaModule();
  });

  it('should create an instance', () => {
    expect(nominaModule).toBeTruthy();
  });
});
