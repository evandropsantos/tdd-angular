import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service = null;

  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUiniqueIdWithPrefix.name}
  should generate id when called with prefix`, () => {
    const id = service.generateUiniqueIdWithPrefix('app');

    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUiniqueIdWithPrefix.name}
  should not generate duplicate IDs when called multiple times`, () => {
    const ids = new Set();

    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUiniqueIdWithPrefix('app'));
    }

    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGenerateUniqueIds.name}
  should return the number`, () => {
    service.generateUiniqueIdWithPrefix('app');
    service.generateUiniqueIdWithPrefix('app');

    expect(service.getNumberOfGenerateUniqueIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.generateUiniqueIdWithPrefix.name}
  should throw when called with empty`, () => {
    const emptyValues = [undefined, null, '', '0', '1'];

    emptyValues.forEach(emptyValue => {
      expect(() => service.generateUiniqueIdWithPrefix(emptyValue))
        .withContext(`Empty value: ${emptyValue}`)
        .toThrow()
    });
  });
});
