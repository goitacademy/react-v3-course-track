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

getData().then((result) => console.log(result)); // Hello, TypeScript!

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

getUser().then((user) => console.log(user.name)); // Alice

/* ---------- 3. Promise<T> з масивом об'єктів ---------- */
const getUsers = () => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          { id: 1, name: "Alice" },
          { id: 2, name: "Bob" },
        ]),
      300
    );
  });
};

getUsers().then((users) => console.log(users[0].name)); // Alice
