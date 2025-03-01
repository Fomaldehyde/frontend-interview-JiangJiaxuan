
// 编写run函数，使该代码能正常运行，不报错

function run() {
    // 执行一段代码
    Object.prototype[Symbol.iterator] = function* () {
      for (let key in this) {
        yield  this[key];
      }
    };
  }
  run();
  const [a,b] = {a:1,b:2};
  console.log(a, b); // 输出 1 2