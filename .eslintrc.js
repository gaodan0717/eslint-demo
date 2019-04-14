module.exports = {
    // 使用共享配置文件
    "extends": "eslint:recommended",
    // 指定程序的目标程序 js可以运行再多种环境中(浏览器/Node)，但这些运行环境可能没有console这个对象；另外在浏览器环境下会有window对象
    "env": {
        "node": true
    },
    // "plugins": ["react"],
    "rules": {
        "no-console": 0
    }
};