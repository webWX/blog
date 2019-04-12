/*
 * let声明的变量只在它所在的代码块有效。
 */
{
    var a = 10;
    let b = 10;
}

console.log(a); // 10
// console.log(b); // b is not defined

/*
 * 不存在变量提升
 */
console.log(c); // undefined
var c = 200;

// console.log(d); // d is not defined
// let d = 300;

// 立即执行函数
(function () {
    // code
}());

function show({ show: showName }) {
    console.log(showName);
}

show({
    show: 'name'
});

function re() {
    return new Promise((resolve, reject) => {
        if (Math.random() * 100 < 20) {
            resolve();
        } else {
            reject(Math.random() * 100);
        }
    });
}

re().then(() => {
    console.log('promise');
}, (val) => {
    console.log(val)
});
