//1、正则的创建
var reg1 = /\d+/;
var reg2 = /^\d+$/;  
var reg3 = /\d+/g;   //全局匹配(不可使用^,$)：/\d+/g  忽略大小写：/\d+/i  可执行多行匹配： /\d+/m   

var reg4 = new RegExp("\\d+");
var reg4 = new RegExp("\^\\d+\$");
var reg4 = new RegExp("\\d+",'g');   


//2、模糊匹配的正则
// \w   \w  \d  \D   \s   \S  \b   \B
// * + ?


//3、精确匹配的正则
// [ab]    (tom|jerry)    {m}   {m,}   {m,n}


//4、正则的使用
//4.1、字符串（split、replace、match、search）
console.log("--------------------split---------------------");
var reg = /[\s\,]+/;
var str = "1,2   3     4";
var result1 = str.split(reg);
console.log("result1: " + result1);

console.log("\n\n--------------------replace---------------------");
var reg = /[\s\,]+/g;
var str = "1,2   3     4";
var result2 = str.replace(reg,"-");   //注意JS字符串没有replaceAll()，所以上面reg要使用 g 全局匹配。
console.log("result2: " + result2);


console.log("\n\n--------------------match---------------------");
var str = 'JavaScript, VBScript, JScript and ECMAScript';
var reg = /\w+Script/g;              //注意：正则里使用^,$,g,i,m等会对结果产生影响
var result3 = str.match(reg);
console.log("result3: " + result3);  //结果：result3: JavaScript,VBScript,JScript,ECMAScript

console.log("\n\n--------------------search---------------------");
var str = 'aaa,bbb,ccc and ddd';
var reg = /[b]+/;             
var result4 = str.search(reg);       //search返回的是匹配到的第一个结果的索引
console.log("result4: " + result4);  


//4.1、RegExp对象的api（test,exec）
console.log("\n\n--------------------reg test---------------------");
var cellPhone = "18802337836";
var reg = /^1[34578][0-9]{9}$/;
var result5 = reg.test(cellPhone);
console.log("result5: " + result5); 

console.log("\n\n--------------------reg exec---------------------");
var str = 'JavaScript, VBScript, JScript and ECMAScript';
var reg = /\w+Script/g; 
while(true){
	var t = reg.exec(str);
	if(t){
		console.log(t);
	}else{
       break;
	}
}


console.log("\n\n--------------------reg exec 分组---------------------");
var str = 'JavaScript, VBScript, JScript and ECMAScript';
var reg = /(\w+)(Script)/g;    //分组后可以匹配出子串,将输出结果对比上例即可。
while(true){
	var t = reg.exec(str);
	if(t){
		console.log(t);
	}else{
       break;
	}
}


console.log("\n\n--------------------贪婪匹配(默认)与非贪婪匹配---------------------");
//正则匹配默认是贪婪匹配，也就是匹配尽可能多的字符.可以通过加个？使其变得不贪婪.
var re1 = /^(\d+)(0*)$/;
var re2 = /^(\d+?)(0*)$/;
var result1 = re1.exec('102300'); // ['102300', '102300', '']
var result2 = re2.exec('102300'); // ['102300', '1023', '00']
console.log("贪婪匹配(默认)：" + result1);
console.log("非贪婪匹配(默认)：" + result2);