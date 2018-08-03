#浅拷贝 两种写法
## Object.assign && 展开运算符
```
 let xx={id:1,name:'fanxinqi'}
 Object.assign(xx)
 {...xxx}
```

## 深拷贝 写法
```
    function deepClone1(obj) {
                let keys = Object.keys(obj),
                    target = {};
                for (let key in keys) {
                    let value = obj[keys[key]];
                    if (typeof value === 'object') {
                        target[keys[key]] = deepClone1(value);
                    } else {
                        target[keys[key]] = value;
                    }
                }
                return target;
    }
```
## 深拷贝，
* 循环引用问题，是因为引用之间互相指向，形成环状。如果传统方法遍历，会无限递归下去，引起函数调栈最大限制的益出 
```

function deepClone2(o) {
            let wm = new WeakMap();

            function clone(obj) {
                let keys = Object.keys(obj),
                    target = {};
                wm.set(obj, obj)
                for (let key in keys) {
                    let value = obj[keys[key]];
                    if (typeof value === 'object') {
                        let cash = wm.get(value);
                        if (!cash) {
                            let cloneValue = clone(value);
                            wm.set(value, cloneValue)
                            target[keys[key]] = cloneValue;
                        } else {
                            target[keys[key]] = cash;
                        }

                    } else {
                        target[keys[key]] = value;
                    }
                }
                return target;
            }
            return clone(o);

        }
```

[代码地址](https://github.com/fanxinqi/Interview-summary/blob/master/深clone循环引用15.html)