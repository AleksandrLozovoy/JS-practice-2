/* ============== Выбор DOM элементов ==============*/

// // Поиск первого найденного элемента и его зменение
// document.querySelector(".heading-2").classList.add("red");

// // поиск всех найденных элементов и изменение их
// const headings = document.querySelectorAll("h2");

// for (let item of headings) {
//   item.classList.add("red-text");
// }

/* ============== РАБОТА с CSS КЛАССАМИ ==============*/

// const heading = document.querySelector("#heading-1");
// heading.classList.add("red-text"); /*добавил класс*/
// heading.classList.remove("red-text"); /*удалил класс*/
// heading.classList.toggle("red-text"); /*добавил класс,если его нет*/
// heading.classList.toggle("red-text"); /*удалил класс, если он есть*/

/* ============== РАБОТА С АТРИБУТАМИ ==============*/

// const img = document.querySelector("#logo");
// img.getAttribute("src"); /* возвращает значение указанного атрибута */
// img.setAttribute("src", "./img/php.png");
// img.setAttribute("width", "300");
// /* добавляет атрибут со значением или изменяет имеющийся
//  */

/* ================ПРОСЛУШКА СОБЫТИЙ=============== */
/* PART 1 */
// const button = document.querySelector("#button");
// const img = document.querySelector("#logo");
// button.value = "Удалить";

// button.addEventListener("click", function () {
//   console.log("click");
//   img.remove();
// });

// /* PART 2 */
// const inputText = document.querySelector("#input-text");
// const textBLock = document.querySelector("#text-block");
// inputText.addEventListener("input", function () {
//   textBLock.innerText = inputText.value;
// });

// /* PART 3 */

// const list = document.querySelector("#list");
// list.addEventListener("click", function (event) {
//   console.log(event.target);
// });

/* ================РАБОТА С ЭЛИМЕНТАМИ============== */
// // Выбор контейнера
// const container = document.querySelector("#elementsContainer");
// // Создание заголовка
// const newHeader = document.createElement("h1");
// newHeader.innerText = "Новый заголовок";
// container.append(newHeader);
// // Копирование шапки
// const mainHeader = document.querySelector("header");
// const headerCopy = mainHeader.cloneNode(true);
// container.append(headerCopy);
//Вставка разметки через строки
// const htmlExample = "<h2>Еще один заголовок</h2>";
// container.insertAdjacentHTML("beforeend", htmlExample);
// /* Вставка разметки через шаблонные строки */
// const title = "g заголовка";
// const htmlExample = `<h2>${title}</h2>`;
// container.insertAdjacentHTML("beforeend", htmlExample);

/* =============TODO список задач(практика)======== */
// const todoList = document.querySelector("#todo-list");
// const todoForm = document.querySelector("#todo-form");
// const todoInput = document.querySelector("#todo-input");

// todoForm.addEventListener("submit", formHandler);

// function formHandler(event) {
//   event.preventDefault();
//   const taskText = todoInput.value;
//   const newLi = document.createElement("li");
//   newLi.innerText = taskText;
//   todoList.append(newLi);

//   todoInput.value = "";
//   todoInput.focus();

//   const deleteBtn = document.createElement("button");
//   deleteBtn.setAttribute("role", "button");
//   deleteBtn.innerText = "Удалить";
//   deleteBtn.style["margin-left"] = "15px";
//   newLi.append(deleteBtn);
//   deleteBtn.addEventListener("click", function () {
//     this.closest("li").remove();
//   });
// }

// /* ==============setInterval и setTimeout============ */
// const timerID = setInterval(function () {
//   console.log("Fuck!");
// }, 2000);

// setTimeout(function () {
//   clearInterval(timerID);
// }, 10000);

/* =================ТАЙМЕР (практика)================== */
// const counterTimer = document.querySelector("#counter");
// const startTimer = document.querySelector("#start");
// const pauseTimer = document.querySelector("#pause");
// const resetTimer = document.querySelector("#reset");

// let counter = 0;
// let timerID;

// startTimer.addEventListener("click", function () {
//   timerID = setInterval(function () {
//     counter++;
//     counterTimer.innerText = counter;
//   }, 1000);
// });
// pauseTimer.addEventListener("click", function () {
//   clearInterval(timerID);
// });
// resetTimer.addEventListener("click", function () {
//   counter = 0;
//   counterTimer.innerText = 0;

//   clearInterval(timerID);
// });

/* ========================PROMISE==================== */
/* ======Пример с 1 промисом====== */

// const checkRooms = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Проверяем номера в отеле....");
//     const aviableRooms = true;

//     if (aviableRooms) {
//       resolve("Номера есть");
//     } else {
//       reject("Номеров нет.");
//     }
//   }, 1500);
// });

// checkRooms
//   .then(function (data) {
//     console.log("---then 1---");
//     console.log("Ответ на предыдущем шаге:", data);
//     console.log("Едем в отпуск");
//   })
//   .catch(function (data) {
//     console.log("---catch---");
//     console.log("Ответ на предыдущем шаге:", data);
//     console.log("Отпуск отменяется");
//   });

/* ======Пример с 2 промисами====== */
// const checkRooms = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Проверяем номера в отеле....");
//     const aviableRooms = true;

//     if (aviableRooms) {
//       resolve("Номера есть");
//     } else {
//       reject("Номеров нет.");
//     }
//   }, 1500);
// });

// checkRooms
//   .then(function (data) {
//     return new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         console.log("---then 1---");
//         console.log("Ответ на предыдущем шаге:", data);
//         console.log("Проверяем авиабилеты...");
//         const aviableTickets = true;
//         if (aviableTickets) {
//           resolve("Билеты есть");
//         } else {
//           reject("Билетов нет.");
//         }
//       }, 1000);
//     });
//   })
//   .then(function (data) {
//     console.log("---then 2---");
//     console.log("Ответ на предыдущем шаге:", data);
//     console.log("Едем в отпуск");
//   })
//   .catch(function (data) {
//     console.log("---catch---");
//     console.log("Ответ на предыдущем шаге:", data);
//     console.log("Отпуск отменяется");
//   });

/* ====Пример промисов через функции (для читабельности)=== */

// const checkRooms = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Проверяем номера в отеле....");
//     const aviableRooms = true;

//     if (aviableRooms) {
//       resolve("Номера есть");
//     } else {
//       reject("Номеров нет.");
//     }
//   }, 1500);
// });

// checkRooms.then(checkTickets).then(success).catch(failed);

// function checkTickets(data) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log("---then 1---");
//       console.log("Ответ на предыдущем шаге:", data);
//       console.log("Проверяем авиабилеты...");
//       const aviableTickets = true;
//       if (aviableTickets) {
//         resolve("Билеты есть");
//       } else {
//         reject("Билетов нет.");
//       }
//     }, 1000);
//   });
// }

// function success(data) {
//   console.log("---then 2---");
//   console.log("Ответ на предыдущем шаге:", data);
//   console.log("Едем в отпуск");
// }

// function failed(data) {
//   console.log("---catch---");
//   console.log("Ответ на предыдущем шаге:", data);
//   console.log("Отпуск отменяется");
// }

/* =================Асинхронные функции==================== */
// function promiseFunction() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       const result = true;
//       if (result) {
//         resolve("DONE!");
//       } else {
//         reject("FAILED.");
//       }
//     }, 500);
//   });
// }

// async function startPromise() {
//   try {
//     const result = await promiseFunction();
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// }

// startPromise();

/* ================Курсы валют (практика)============= */
// 1.Получить данные с сервера
// const usd = document.querySelector("#usd");
// const eur = document.querySelector("#eur");
// async function getCurrecies() {
//   response = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
//   const data = await response.json();
//   usdRate = data.Valute.USD.Value.toFixed(2);
//   eurRate = data.Valute.EUR.Value.toFixed(2);
//   usd.innerText = usdRate;
//   eur.innerText = eurRate;
// }

// getCurrecies();
