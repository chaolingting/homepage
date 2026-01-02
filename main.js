// const myname = document.querySelector('.name');
// rainbowText(myname);

// // const footer = document.querySelector('.footer');
// // rainbowText(footer);

// function rainbowText(element){
//     const text = element.textContent;
//     element.textContent = "";

//     text.split('').forEach(char => {
//         const span = document.createElement('span');
//         span.textContent = char;

//         const r = Math.floor(Math.random() * 256);
//         const g = Math.floor(Math.random() * 256);
//         const b = Math.floor(Math.random() * 256);
//         span.style.color = `rgb(${r}, ${g}, ${b})`;

//         element.appendChild(span)

//     })
// }


// let lastScrollY = window.scrollY;
// const navList = document.querySelector('nav ul');

// window.addEventListener('scroll', () => {
//   if (window.innerWidth > 768) return;

//   const currentScrollY = window.scrollY;

//   if (currentScrollY > lastScrollY && currentScrollY > 40) {
//     // 往下滑 → hide 選單
//     navList.classList.add('hide');
//   } else {
//     // 往上滑 → 顯示
//     navList.classList.remove('hide');
//   }

//   lastScrollY = currentScrollY;
// });