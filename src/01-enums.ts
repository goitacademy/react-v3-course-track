/**
 * Перелічення (enum) - це список іменованих констант, які можна використовувати як змінні.
 *
 * - Union type (наприклад: "pending" | "fulfilled") - легший і часто кращий вибір,
 *   якщо вам потрібен тільки набір допустимих значень на рівні типів.
 * - Enum створює реальний об'єкт в рантаймі (корисно для значень, які
 *   потрібно перевіряти або передавати як значення під час виконання).
 *
 * Правило: якщо не потрібен runtime-об'єкт - візьміть union type.
 */

/* ---------- 1. Union type vs Enum (строкові значення) ---------- */
// Рекомендується починати з union type:
type StatusUnion = "pending" | "fulfilled" | "rejected";

// Якщо потрібен runtime-об'єкт (наприклад для перебору або передачі в коді):
enum StatusEnum {
  Pending = "pending",
  Fulfilled = "fulfilled",
  Rejected = "rejected",
}

// Використання union type (тип лише для перевірки компілятором):
let s1: StatusUnion = "pending";
// s1 = "unknown"; // помилка: невалідне значення

// Використання enum (є значення в runtime):
let s2: StatusEnum = StatusEnum.Pending;
// console.log(StatusEnum.Pending) // => "pending"

/* ---------- 2. Numeric enums і зворотне відображення ---------- */
enum HTTPCode {
  Success = 200,
  Created = 201,
  BadRequest = 400,
  ServerError = 500,
}

const code: HTTPCode = HTTPCode.Success;
// Numeric enums мають двостороннє відображення: HTTPCode[200] === "Success"

/* ---------- 3. String enums (стабільні і зрозумілі) ---------- */
enum Role {
  Admin = "admin",
  User = "user",
  Guest = "guest",
}

interface User {
  username: string;
  role: Role; // використовуємо enum як тип і як значення
}

const user: User = {
  username: "jacob",
  role: Role.Guest,
};

/* ---------- 4. Enum у switch/case ---------- */
function handleStatus(s: StatusEnum) {
  switch (s) {
    case StatusEnum.Pending:
      return "Waiting";
    case StatusEnum.Fulfilled:
      return "Done";
    case StatusEnum.Rejected:
      return "Failed";
  }
}

const statusText = handleStatus(StatusEnum.Pending);
console.log(statusText);

/* ---------- 5. Поради / best practices ---------- */
// - Використовуйте union types, коли вам потрібен лише набір допустимих значень.
// - Використовуйте string enums, коли потрібен runtime-об'єкт (наприклад, для
//   передачі, перебору або коли значення повинні бути стабільними і читабельними).
// - Уникайте змішаних (гетерогенних) enum без явної причини.

/* ---------- 6. Короткі приклади використання ---------- */
// Union usage
function updateStatus(u: StatusUnion) {
  // union гарантує тільки перелік значень на етапі компіляції
  // runtime-значення - звичайний рядок
  return `status: ${u}`;
}

// Використання Enum для перевірок значень, а не просто типів
function getHttpMessage(code: HTTPCode) {
  if (code === HTTPCode.Success) return "OK";
  if (code === HTTPCode.ServerError) return "Server error";
  return "Other";
}

// Використовуємо приклади щоб уникнути "unused" помилок
console.log(updateStatus("fulfilled"));

const httpMessage = getHttpMessage(HTTPCode.Created);
console.log(httpMessage);
