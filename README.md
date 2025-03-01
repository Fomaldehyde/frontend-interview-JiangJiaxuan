前端的练习题

### TASK2
这个问题中 报错的语句const [a,b] = {a:1,b:2}; 
不可迭代对象不能解构为数组。
JS默认对象{}不可迭代，应该是：
```
const {a,b} = {a:1,b:2};
```
不能修改的话，就需要让object变成可迭代的。

尝试给Object原型添加迭代器

[解构赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%E7%A4%BA%E4%BE%8B)
[迭代器](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_generators)