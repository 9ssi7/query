import { Query } from "../lib";

test("Query: table function testing", () => {
  const query = Query.table("users").get();
  expect(query).toEqual("SELECT * FROM users LIMIT 1");
});

test("Query: select function testing", () => {
  const query = Query.table("users").select("id, firstName").get();
  expect(query).toEqual("SELECT id, firstName FROM users LIMIT 1");
});

test("Query: max function testing", () => {
  const query = Query.table("users").max("id", "count").get();
  expect(query).toEqual("SELECT MAX(id) AS count FROM users LIMIT 1");
});

test("Query: min function testing", () => {
  const query = Query.table("users").min("id", "count").get();
  expect(query).toEqual("SELECT MIN(id) AS count FROM users LIMIT 1");
});

test("Query: sum function testing", () => {
  const query = Query.table("users").sum("balance", "totalBalance").get();
  expect(query).toEqual(
    "SELECT SUM(balance) AS totalBalance FROM users LIMIT 1"
  );
});

test("Query: count function testing", () => {
  const query = Query.table("users").count("id", "totalUsers").get();
  expect(query).toEqual("SELECT COUNT(id) AS totalUsers FROM users LIMIT 1");
});

test("Query: avg function testing", () => {
  const query = Query.table("users").avg("price", "averagePrice").get();
  expect(query).toEqual("SELECT AVG(price) AS averagePrice FROM users LIMIT 1");
});

test("Query: innerJoin function testing", () => {
  const query = Query.table("user_posts")
    .select([
      "user_posts.id as postId",
      "user_posts.title as postTitle",
      "users_username as username",
    ])
    .innerJoin("users", "user_posts.userId", "users.id")
    .get();
  expect(query).toEqual(
    "SELECT user_posts.id as postId, user_posts.title as postTitle, users_username as username FROM user_posts INNER JOIN users ON user_posts.userId = users.id LIMIT 1"
  );
});

test("Query: leftJoin function testing", () => {
  const query = Query.table("users")
    .select(["users.id As userId", "user_posts.title As postTitle"])
    .leftJoin("user_posts", "users.id", "user_posts.userId")
    .get();
  expect(query).toEqual(
    "SELECT users.id As userId, user_posts.title As postTitle FROM users LEFT JOIN user_posts ON users.id = user_posts.userId LIMIT 1"
  );
});

test("Query: rightJoin function testing", () => {
  const query = Query.table("user_posts")
    .select(["users.id As userId", "user_posts.title As postTitle"])
    .rightJoin("users", "user_posts.userId", "users.id")
    .get();
  expect(query).toEqual(
    "SELECT users.id As userId, user_posts.title As postTitle FROM user_posts RIGHT JOIN users ON user_posts.userId = users.id LIMIT 1"
  );
});

test("Query: fullOuterJoin function testing", () => {
  const query = Query.table("users")
    .select(["users.id As userId", "user_posts.title As postTitle"])
    .fullOuterJoin("user_posts", "users.id", "user_posts.userId")
    .get();
  expect(query).toEqual(
    "SELECT users.id As userId, user_posts.title As postTitle FROM users FULL OUTER JOIN user_posts ON users.id = user_posts.userId LIMIT 1"
  );
});

test("Query: leftOuterJoin function testing", () => {
  const query = Query.table("users")
    .select(["users.id As userId", "user_posts.title As postTitle"])
    .leftOuterJoin("user_posts", "users.id", "user_posts.userId")
    .get();
  expect(query).toEqual(
    "SELECT users.id As userId, user_posts.title As postTitle FROM users LEFT OUTER JOIN user_posts ON users.id = user_posts.userId LIMIT 1"
  );
});

test("Query: rightOuterJoin function testing", () => {
  const query = Query.table("user_posts")
    .select(["users.id As userId", "user_posts.title As postTitle"])
    .rightOuterJoin("users", "user_posts.userId", "users.id")
    .get();
  expect(query).toEqual(
    "SELECT users.id As userId, user_posts.title As postTitle FROM user_posts RIGHT OUTER JOIN users ON user_posts.userId = users.id LIMIT 1"
  );
});

test("Query: where function testing", () => {
  const query = Query.table("users").where("id", "=", "1").get();
  expect(query).toEqual("SELECT * FROM users WHERE id = '1' LIMIT 1");
});

test("Query: orWhere function testing", () => {
  const query = Query.table("users")
    .where("age", "20")
    .orWhere("age", ">", "25")
    .get();
  expect(query).toEqual(
    "SELECT * FROM users WHERE age = '20' OR age > '25' LIMIT 1"
  );
});

test("Query: notWhere function testing", () => {
  const query = Query.table("users")
    .where("age", "20")
    .notWhere("age", ">", "25")
    .get();
  expect(query).toEqual(
    "SELECT * FROM users WHERE age = '20' AND NOT age > '25' LIMIT 1"
  );
});

test("Query: orNotWhere function testing", () => {
  const query = Query.table("users")
    .where("age", "20")
    .orNotWhere("age", ">", "25")
    .get();
  expect(query).toEqual(
    "SELECT * FROM users WHERE age = '20' OR NOT age > '25' LIMIT 1"
  );
});

test("Query: whereNull function testing", () => {
  const query = Query.table("users").whereNull("email").get();
  expect(query).toEqual("SELECT * FROM users WHERE email IS NULL LIMIT 1");
});

test("Query: whereNotNull function testing", () => {
  const query = Query.table("users").whereNotNull("email").get();
  expect(query).toEqual("SELECT * FROM users WHERE email IS NOT NULL LIMIT 1");
});

test("Query: grouped function testing", () => {
  const query = Query.table("users")
    .grouped((q) => {
      q.where("country", "TURKEY").orWhere("country", "ENGLAND");
    })
    .get();
  expect(query).toEqual(
    "SELECT * FROM users WHERE (country = 'TURKEY' OR country = 'ENGLAND') LIMIT 1"
  );
});

test("Query: in function testing", () => {
  const query = Query.table("users").in("state", [1, 2, 3, 4]).get();
  expect(query).toEqual(
    "SELECT * FROM users WHERE state IN ('1', '2', '3', '4') LIMIT 1"
  );
});

test("Query: notIn function testing", () => {
  const query = Query.table("test")
    .where("active", "1")
    .notIn("id", [1, 2, 3])
    .getAll();
  expect(query).toBe(
    "SELECT * FROM test WHERE active = '1' AND id NOT IN ('1', '2', '3')"
  );
});

test("Query: orIn function testing", () => {
  const query = Query.table("test")
    .where("active", "1")
    .orIn("id", [1, 2, 3])
    .getAll();
  expect(query).toBe(
    "SELECT * FROM test WHERE active = '1' OR id IN ('1', '2', '3')"
  );
});

test("Query: orNotIn function testing", () => {
  const query = Query.table("test")
    .where("active", "1")
    .orNotIn("id", [1, 2, 3])
    .getAll();
  expect(query).toBe(
    "SELECT * FROM test WHERE active = '1' OR id NOT IN ('1', '2', '3')"
  );
});

test("Query: findInSet function testing", () => {
  const query = Query.table("test")
    .where("active", "1")
    .findInSet("selected_tests", 1)
    .getAll();
  expect(query).toEqual(
    "SELECT * FROM test WHERE active = '1' AND FIND_IN_SET (1, selected_tests)"
  );
});

test("Query: notFindInSet function testing", () => {
  const query = Query.table("test")
    .where("active", "1")
    .notFindInSet("selected_tests", 1)
    .getAll();
  expect(query).toEqual(
    "SELECT * FROM test WHERE active = '1' AND NOT FIND_IN_SET (1, selected_tests)"
  );
});

test("Query: orFindInSet function testing", () => {
  const query = Query.table("test")
    .where("active", "1")
    .orFindInSet("selected_tests", 1)
    .getAll();
  expect(query).toEqual(
    "SELECT * FROM test WHERE active = '1' OR FIND_IN_SET (1, selected_tests)"
  );
});

test("Query: orNotFindInSet function testing", () => {
  const query = Query.table("test")
    .where("active", "1")
    .orNotFindInSet("selected_tests", 1)
    .getAll();
  expect(query).toEqual(
    "SELECT * FROM test WHERE active = '1' OR NOT FIND_IN_SET (1, selected_tests)"
  );
});

test("Query: between function testing", () => {
  const query = Query.table("test")
    .where("active", "1")
    .between("age", 12, 35)
    .getAll();
  expect(query).toEqual(
    "SELECT * FROM test WHERE active = '1' AND (age BETWEEN '12' AND '35')"
  );
});

test("Query: notBetween function testing", () => {
  const query = Query.table("test")
    .where("active", "1")
    .notBetween("age", 12, 35)
    .getAll();
  expect(query).toEqual(
    "SELECT * FROM test WHERE active = '1' AND (age NOT BETWEEN '12' AND '35')"
  );
});

test("Query: orBetween function testing", () => {
  const query = Query.table("test")
    .where("active", "1")
    .orBetween("age", 12, 35)
    .getAll();
  expect(query).toEqual(
    "SELECT * FROM test WHERE active = '1' OR (age BETWEEN '12' AND '35')"
  );
});

test("Query: orNotBetween function testing", () => {
  const query = Query.table("test")
    .where("active", "1")
    .orNotBetween("age", 12, 35)
    .getAll();
  expect(query).toEqual(
    "SELECT * FROM test WHERE active = '1' OR (age NOT BETWEEN '12' AND '35')"
  );
});

test("Query: like function testing", () => {
  const query = Query.table("test")
    .where("active", "1")
    .like("title", "%nodeJS%")
    .getAll();
  expect(query).toEqual(
    "SELECT * FROM test WHERE active = '1' AND title LIKE '%nodeJS%'"
  );
});

test("Query: orLike function testing", () => {
  const query = Query.table("test")
    .where("active", "1")
    .orLike("title", "%nodeJS%")
    .getAll();
  expect(query).toEqual(
    "SELECT * FROM test WHERE active = '1' OR title LIKE '%nodeJS%'"
  );
});

test("Query: notLike function testing", () => {
  const query = Query.table("test")
    .where("active", "1")
    .notLike("title", "%nodeJS%")
    .getAll();
  expect(query).toEqual(
    "SELECT * FROM test WHERE active = '1' AND title NOT LIKE '%nodeJS%'"
  );
});

test("Query: orNotLike function testing", () => {
  const query = Query.table("test")
    .where("active", "1")
    .orNotLike("title", "%nodeJS%")
    .getAll();
  expect(query).toEqual(
    "SELECT * FROM test WHERE active = '1' OR title NOT LIKE '%nodeJS%'"
  );
});

test("Query: limit function testing", () => {
  const query = Query.table("test").where("active", "1").limit(20).getAll();
  expect(query).toEqual("SELECT * FROM test WHERE active = '1' LIMIT 20");
});

test("Query: offset function testing", () => {
  const query = Query.table("test")
    .where("active", "1")
    .limit(20)
    .offset(200)
    .getAll();
  expect(query).toEqual(
    "SELECT * FROM test WHERE active = '1' LIMIT 20 OFFSET 200"
  );
});

test("Query: pagination function testing", () => {
  const query = Query.table("test")
    .where("active", "1")
    .pagination(20, 1)
    .getAll();
  expect(query).toEqual(
    "SELECT * FROM test WHERE active = '1' LIMIT 20 OFFSET 20"
  );
});

test("Query: orderBy function testing", () => {
  const query = Query.table("test")
    .where("active", "1")
    .orderBy("date", "desc")
    .getAll();
  expect(query).toEqual(
    "SELECT * FROM test WHERE active = '1' ORDER BY date DESC"
  );
});

test("Query: groupBy function testing", () => {
  const query = Query.table("test").where("active", "1").groupBy("id").getAll();
  expect(query).toEqual("SELECT * FROM test WHERE active = '1' GROUP BY id");
});

test("Query: having function testing", () => {
  const query = Query.table("test")
    .where("active", "1")
    .groupBy("place")
    .having("AVG(salary)", ">=", "3000")
    .getAll();
  expect(query).toEqual(
    "SELECT * FROM test WHERE active = '1' GROUP BY place HAVING AVG(salary) >= '3000'"
  );
});

test("Query: insert function testing", () => {
  const data = {
    id: "3",
    firstName: "John",
  };
  const query = Query.table("test").insert(data);
  expect(query).toEqual(
    "INSERT INTO test (id, firstName) VALUES ('3', 'John')"
  );
});

test("Query: update function testing", () => {
  const data = {
    firstName: "John",
    age: 22,
  };
  const query = Query.table("test").where("id", "3").update(data);
  expect(query).toEqual(
    "UPDATE test SET firstName='John', age='22' WHERE id = '3'"
  );
});

test("Query: delete function testing", () => {
  const query = Query.table("test").where("id", "54").delete();
  expect(query).toEqual("DELETE FROM test WHERE id = '54'");
});

test("Query: analyze function testing", () => {
  const query = Query.table("test").analyze();
  expect(query).toEqual("ANALYZE TABLE test");
});

test("Query: check function testing", () => {
  const query = Query.table("test").check();
  expect(query).toEqual("CHECK TABLE test");
});

test("Query: checksum function testing", () => {
  const query = Query.table("test").checksum();
  expect(query).toEqual("CHECKSUM TABLE test");
});

test("Query: optimize function testing", () => {
  const query = Query.table("test").optimize();
  expect(query).toEqual("OPTIMIZE TABLE test");
});

test("Query: repair function testing", () => {
  const query = Query.table(["test", "test_2"]).repair();
  expect(query).toEqual("REPAIR TABLE test, test_2");
});

test("Query: query function testing", () => {
  const _query = "SELECT * FROM users WHERE userId = ?";
  const query = Query.query(_query, ["1"]).getQuery();
  expect(query).toEqual("SELECT * FROM users WHERE userId = '1'");
});
