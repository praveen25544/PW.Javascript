//         resolve  →  then()
// Promise
//         reject   →  catch()

// then() ya catch() ke baad → finally()

new Promise((resolve, reject) => {
    reject("not OK"); //reject leads to catch & reslve leads then..
})
.then(res => console.log("THEN:", res))
.catch(err => console.log("CATCH:", err))
.finally(() => console.log("FINALLY: Always runs"));