import { EmpleadoModule } from './employee.module';

describe('EmpleadoModule', () => {
  let empleadoModule: EmpleadoModule;

  beforeEach(() => {
    empleadoModule = new EmpleadoModule();
  });

  it('should create an instance', () => {
    expect(empleadoModule).toBeTruthy();
  });
});
