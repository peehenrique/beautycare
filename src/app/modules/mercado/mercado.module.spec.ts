import { MercadoModule } from './mercado.module';

describe('MercadoModule', () => {
  let mercadoModule: MercadoModule;

  beforeEach(() => {
    mercadoModule = new MercadoModule();
  });

  it('should create an instance', () => {
    expect(mercadoModule).toBeTruthy();
  });
});
