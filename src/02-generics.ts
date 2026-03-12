/**
 * Узагальнені типи (generics)
 */

/* ---------- 1. Базова generic-функція ---------- */
function identity(value) {
  console.log(value);
  return value;
}

const n = identity(42);
const s = identity("hello");
console.log(n, s);

/* ---------- 2. Generics з масивами ---------- */
function firstElement(arr) {
  return arr[0];
}

const firstNum = firstElement([10, 20, 30]);
const firstStr = firstElement(["Alice", "Bob"]);
console.log(firstNum, firstStr);

/* ---------- 3. Дженерик інтерфейс: узагальнений тип API відповіді ---------- */
interface ApiResponse {
  data: "???";
  status: number;
}

interface Todo {
  id: number;
  title: string;
}

const getTodosResponse = {
  data: [{ id: 1, title: "Learn generics" }],
  status: 200,
};
console.log(getTodosResponse.data[0].title);

interface User {
  id: string;
  username: string;
  score: number;
}

const createUserReponse = {
  data: { id: "some-id", username: "Jacob", score: 50 },
  status: 201,
};
console.log(createUserReponse.data.username);