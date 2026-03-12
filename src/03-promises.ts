/**
 * Типізація промісів
 *
 * Явна типізація `Promise<T>` і використання `.then` з типізованими результатами
 */

/* ---------- 1. Promise<> ---------- */
const getData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hello, TypeScript!"), 300);
  });
};

/* ---------- 2. Promise<T> з об'єктом ---------- */
interface User {
  id: number;
  name: string;
}

const getUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 1, name: "Alice" }), 300);
  });
};

/* ---------- 3. Promise<T> з масивом об'єктів ---------- */

const getUsers = () => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          { id: 1, name: "Alice" },
          { id: 2, name: "Bob" },
        ]),
      300,
    );
  });
};
