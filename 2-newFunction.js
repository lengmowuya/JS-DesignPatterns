function Person(name){
    this.name = name;
}
Person.prototype.getName = function(){
    return this.name;
}
let objectFactory = function(){
    let obj = new Object(),
    // 从Object.prototype上克隆一个空的对象
        Constructor = [].shift.call(arguments);
        // 取得外部传入的构造器，此例是Person
    obj.__proto__ = Constructor.prototype;
    // 指向正确的原型
    let ret = Constructor.apply(obj,arguments);
    // 借用外部传入的构造器给obj设置属性
    return typeof ret === 'object'?ret:obj;
    // 确保构造器总是会返回一个对象
};
let a = objectFactory(Person,'sven');
console.log(a.name);
console.log(a.getName());
console.log(Object.getPrototypeOf(a)===Person.prototype);

// 以下产生了一样的结果
let b = objectFactory(Person,'seven');
let c = new a('sven');