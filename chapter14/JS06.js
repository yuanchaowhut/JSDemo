console.log("----------------------内部函数为一般函数时，其this指向window或undefind-----------------");
var obj = {
	name:"tom",
	birth:1989,
	getAge: function(){
		var fn = function(){
			 console.log(this.birth);
			return new Date().getFullYear() - this.birth;
		}
		return fn();
	}
}

console.log(obj.getAge());


console.log("-----------------内部函数为箭头函数时，this按词法作用域绑定给obj--------------------");
var obj = {
	name:"tom",
	birth:1989,
	getAge: function(){
		var fn = ()=>{
			console.log(this.birth);
			return new Date().getFullYear() - this.birth;
		}
		return fn();

		//由于this在箭头函数中已经按照词法作用域绑定了，所以用call()或者apply()调用箭头函数时，无法对this进行绑定.
		// return fn.apply({birth:2000});
	}
}

console.log(obj.getAge());