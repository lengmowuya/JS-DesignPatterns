// 不支持Object.create方法的兼容
Object.create = Object.create || function(obj){
    let F = function(){}
    F.prototype = obj;
    return new F();
}

var Plane = function(blood,attackLevel,defenseLevel){
    this.blood = blood;
    this.attackLevel = attackLevel;
    this.defenseLevel = defenseLevel;
}
let plane = new Plane(500,10,7);
let clonePlane = Object.create(plane);
console.log(clonePlane.blood,clonePlane.attackLevel,clonePlane.defenseLevel);

