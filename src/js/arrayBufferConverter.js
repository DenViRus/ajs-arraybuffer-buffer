export class ArrayBufferConverter {
  constructor(buffer) {
    this.buffer = buffer;
  }

  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const bufferView = new Uint16Array(this.buffer);
    return String.fromCharCode(...bufferView);
  }
}
