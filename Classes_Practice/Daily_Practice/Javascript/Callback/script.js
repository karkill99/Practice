// let store = {
//     fruits: [" strawberry", "mango", "cherry", "grapes"],
//     liquids: ["water", "ice"],
//     holdings: ["cone", "cup", "stick"],
//     toppings: ["choco chips", "dry fruits"],
//   };
//   // console.log(store.fruits[0]);
  
//   let order = (fruit_name, call_production) => {
//     setTimeout(() => {
//       console.log(`${store.fruits[fruit_name]} has been selected`);
//       call_production(0, 1);
//     }, 2000);
//   };
  
//   let production = (holdings, toppings) => {
//     setTimeout(() => {
//       console.log("production has started");
//       // cutting the fruits
//       setTimeout(() => {
//         console.log("The fruits have been chopped");
//         setTimeout(() => {
//           console.log(`${store.liquids[0]} and ${store.liquids[1]} are added`);
  
//           setTimeout(() => {
//             console.log("Machine has started");
//             setTimeout(() => {
//               console.log(`Ice cream is placed on ${store.holdings[holdings]} `);
//               setTimeout(() => {
//                 console.log(`${store.toppings[toppings]} have been selected`);
//                 setTimeout(() => {
//                   console.log("serve the icecream");
//                 }, 1000);
//               }, 3000);
//             }, 2000);
//           }, 1000);
//         }, 1000);
//       }, 2000);
//     }, 0);
//   };
  
//   order(1, production);

rfc
  
