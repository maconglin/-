// 需求
// input 
// const obj = {
//   selector: { to: {val: 'val to select'}},
//   target: [1,2, {a: 'test'}],
// };
// get (obj, 'selector.to.val', 'target[0]',target[2].a)

// optout 
// ['val to select', 1, 'test']


const obj = {
  selector: { to: {val: 'val to select'}},
  user: { name: 'xiaoming'},
  target: [1,2, {a: 'test'}],
};

function get (obj, ...selectors) {
 // select -> to -> val 先拿到每一项的key 然后通过key去取值
 const r = selectors.map((s) => {
  return s
    .replace(/\[(\w+)\]/g, '.$1')
    .split('.')
    .reduce((prev, cur) => {
      return prev && prev[cur];
    },obj)
 })
 console.log(r)
}
get (obj, 'selector.to.val', 'user.name', 'target[0]') 