class Queue {
  constructor() {
    this.locked = false;
    this.tasks = [];
  }

  add(task) {
    return new Promise((resolve, reject) => {
      this.tasks.push({ task, resolve, reject });
      this.run();
    });
  }

  async run() {
    if (this.locked || !this.tasks.length) return;

    this.locked = true;
    const { task, resolve, reject } = this.tasks.shift();

    try {
      resolve(await task());
    } catch (e) {
      reject(e);
    } finally {
      this.locked = false;
      this.run();
    }
  }
}

module.exports = new Queue();
