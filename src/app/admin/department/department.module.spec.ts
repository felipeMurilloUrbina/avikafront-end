import { DepartmentModule } from "./department.module";

describe('DepartmentModule', () => {
  let departamentoModule: DepartmentModule;

  beforeEach(() => {
    departamentoModule = new DepartmentModule();
  });

  it('should create an instance', () => {
    expect(departamentoModule).toBeTruthy();
  });
});
