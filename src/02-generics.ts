/**
 * Узагальнені типи (generics)
 */

/* ---------- 1. Базова generic-функція ---------- */
function identity(value) {
  return value;
}

const n = identity(42); // T виводиться як number
const s = identity("hello"); // T виводиться як string
console.log(n, s);

/* ---------- 2. Generics з масивами ---------- */
function firstElement(arr) {
  return arr[0];
}

const firstNum = firstElement([10, 20, 30]);
const firstStr = firstElement(["Alice", "Bob"]);
console.log(firstNum, firstStr);

/* ---------- 3. Обмеження ---------- */
// Потрібно, щоб аргумент мав поле `length` — додаємо обмеження <T extends { length: number }>
function logLength(arg) {
  console.log("length:", arg.length);
  return arg;
}

logLength([1, 2, 3]);
logLength("hello world");
// logLength(42); // помилка: number не має length

/* ---------- 4. Дженерик інтерфейс: узагальнений тип API відповіді ---------- */
interface ApiResponse {
  data: "???";
  status: number;
};

interface Todo { 
  id: number; 
  title: string 
};

const todosResponse = {
  data: [{ id: 1, title: "Learn generics" }],
  status: 200,
};

console.log(todosResponse.data[0].title);
