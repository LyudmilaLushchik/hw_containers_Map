export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
  }

  addError(code, message) {
    if (this.errors.has(code)) {
      throw new Error('Error with this code already exists');
    }
    this.errors.set(code, message);
  }

  getSize() {
    return this.errors.size;
  }

  translate(code) {
    return this.errors.get(code) || 'Unknown error';
  }
}
