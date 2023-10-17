import ErrorRepository from '../app';

test('should create an empty repository', () => {
  const repository = new ErrorRepository();
  expect(repository.getSize()).toBe(0);
});

test('should add an error to the repository', () => {
  const repository = new ErrorRepository();
  repository.addError(404, 'Not found');
  expect(repository.getSize()).toBe(1);
});

test('should not add a duplicate error to the repository', () => {
  const repo = new ErrorRepository();
  repo.addError(404, 'Not found');
  expect(() => repo.addError(404, 'Description')).toThrow();
});

test('should translate an error code to a message', () => {
  const repository = new ErrorRepository();
  repository.addError(404, 'Not found');
  expect(repository.translate(404)).toBe('Not found');
});

test('should return "Unknown error" for an unknown error code', () => {
  const repository = new ErrorRepository();
  expect(repository.translate(800)).toBe('Unknown error');
});
