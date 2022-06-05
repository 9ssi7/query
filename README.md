<p align="center"><br><img src="https://avatars.githubusercontent.com/u/76786120?v=4" width="128" height="128" style="border-radius: 50px;" /></p>
<h3 align="center">@ssibrahimbas/query</h3>
<p align="center">
  A fast, synchronized and dynamic query builder package.
</p>

### What is?

In short, the query builder. You can write complex and parameterized queries fast, plain and dynamically using the Query class, which uses the `chain of responsibility pattern`!

### Motivation

Generally, adding parameters to queries and parsing objects increases the distance of us as software developers to sql. This package was influenced by mongoose's Query class, aiming to make it usable in SQL databases, and that's what it ultimately does.

Run it on the drive you want! Sequelize can work with postgresql or any driver. All it needs is a driver that accepts sql code!

Looking forward to your pull requests and issues to make this package better.

Finally, all functions are gesture tested.

### Installation

To include this package in your project, run the following command:

```
npm install @ssibrahimbas/query
```

> or with yarn
> 
> ```
> yarn add @ssibrahimbas/query
> ```

And try this:

```typescript
import { Query } from "@ssibrahimbas/query"

console.log(Query.table("users").getAll())

// SELECT * FROM users
```

### Contributing

If you want to contribute to the project or play with the codes on your local machine, follow the steps below:

#### install dependencies:

```
npm install
```

> or with yarn
> 
> ```
> yarn
> ```

#### run tests

```
npm run test
```

> or with yarn
>
> ```
> yarn test
> ```

### Documentation

<docgen-index>

|Interface|
|---------|
|**[`ISsiQuery`](#issiquery)**|


|       Functions          |
|--------------------------|
|**[`table(...)`](#table)**|
|**[`select(...)`](#select)**|
|**[`groupConcat(...)`](#groupconcat)**|
|**[`least(...)`](#least)**|
|**[`max(...)`](#max)**|
|**[`min(...)`](#min)**|
|**[`sum(...)`](#sum)**|
|**[`count(...)`](#count)**|
|**[`avg(...)`](#avg)**|
|**[`innerJoin(...)`](#innerjoin)**|
|**[`leftJoin(...)`](#leftjoin)**|
|**[`rightJoin(...)`](#rightjoin)**|
|**[`fullOuterJoin(...)`](#fullouterjoin)**|
|**[`leftOuterJoin(...)`](#leftouterjoin)**|
|**[`rightOuterJoin(...)`](#rightOuterjoin)**|
|**[`where(...)`](#where)**|
|**[`orWhere(...)`](#orwhere)**|
|**[`notWhere(...)`](#notwhere)**|
|**[`orNotWhere(...)`](#ornotwhere)**|
|**[`whereNull(...)`](#wherenull)**|
|**[`whereNotNull(...)`](#wherenotnull)**|
|**[`grouped(...)`](#grouped)**|
|**[`in(...)`](#in)**|
|**[`notIn(...)`](#notin)**|
|**[`orIn(...)`](#orin)**|
|**[`orNotIn(...)`](#ornotin)**|
|**[`findInSet(...)`](#findinset)**|
|**[`notFindInSet(...)`](#notfindinset)**|
|**[`orFindInSet(...)`](#orfindinset)**|
|**[`orNotFindInSet(...)`](#ornotfindinset)**|
|**[`between(...)`](#between)**|
|**[`notBetween(...)`](#notbetween)**|
|**[`orBetween(...)`](#orbetween)**|
|**[`orNotBetween(...)`](#ornotbetween)**|
|**[`like(...)`](#like)**|
|**[`orLike(...)`](#orlike)**|
|**[`notLike(...)`](#notlike)**|
|**[`orNotLike(...)`](#ornotlike)**|
|**[`limit(...)`](#limit)**|
|**[`pagination(...)`](#pagination)**|
|**[`orderBy(...)`](#orderby)**|
|**[`groupBy(...)`](#groupby)**|
|**[`having(...)`](#having)**|
|**[`query(...)`](#query)**|
|**[`get()`](#get)**|
|**[`getAll()`](#getall)**|
|**[`insert(...)`](#insert)**|
|**[`update(...)`](#update)**|
|**[`delete()`](#delete)**|
|**[`analyze()`](#analyze)**|
|**[`check()`](#check)**|
|**[`checksum()`](#checksum)**|
|**[`optimize()`](#optimize)**|
|**[`repair()`](#repair)**|
|**[`reset()`](#reset)**|



</docgen-index>

<docgen-api>

### ISsiQuery

Abstract of the Query class. If you wish, you can use as follows:

```typescript
import { ISsiQueue, SsiQuery } from "@ssibrahimbas/query"

const Query : ISsiQuery = new SsiQuery();
```

Although this doable, it is memory redundant as the `new` key is constantly used. The Queue class has been developed to reset itself after each query. So you can use it with peace of mind as follows:

```typescript
import { Query } from "@ssibrahimbas/query"
```

### Functions

<br>

### table

It is used to declare a table in SQL.

Abstract:

```typescript
table(table: string | Array<string>) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("users").getAll();

// SELECT * FROM users
```

Using arrays:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table(["users", "products"]).analyze();

// ANALYZE TABLE users, products
```

<br>

### select

Select the fields to use for the query

Abstract:

```typescript
select(fields: string | Array<string>) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("users").select("id").getAll();

// SELECT id FROM users
```

Using arrays:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("users").select(["id As userId", "name As userName"]).analyze();

// SELECT id As userId, name As userName FROM users
```

Using Records:

```typescript
import { Query } from "@ssibrahimbas/query"

const data = { Id: "userId", FirstName: "firstName" };
const query : string = Query.table("users").select(data).getAll();

// SELECT Id AS userId, FirstName AS firstName FROM users
```

Using Records With Arrays:

```typescript
import { Query } from "@ssibrahimbas/query"

const data: Array<Record<string, string>> = [
  { Id: "userId" },
  { FirstName: "firstName" },
];
const query : string = Query.table("users").select(data).getAll();

// SELECT Id AS userId, FirstName AS firstName FROM users
```

<br>

### least

Abstract:

```typescript
least(fields: Array<string>, name?: string | null) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("users").least(["point1", "point2", "point3"], "minPoint").getAll();

// "SELECT LEAST(point1, point2, point3) AS minPoint FROM users"
```

Single Parameter:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("users").least(["point1", "point2", "point3"]).getAll();

// "SELECT LEAST(point1, point2, point3) FROM users"
```

<br>

### groupConcat

Abstract:

```typescript
groupConcat(fields: string, name?: string | null) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("users").groupConcat("UserId", "users").getAll();

// "SELECT GROUP_CONCAT(UserId) AS users FROM users"
```

Single Parameter:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("users").groupConcat("UserId").getAll();

// "SELECT GROUP_CONCAT(UserId) FROM users"
```

<br>

### max

Abstract:

```typescript
max(fields: string, name?: string | null) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("users").max("id", "count").getAll();

// "SELECT MAX(id) AS count FROM users"
```

Single Parameter:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("users").max("id").getAll();

// "SELECT MAX(id) FROM users"
```

<br>

### min

Abstract:

```typescript
min(fields: string, name?: string | null) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("users").min("id", "count").getAll();

// "SELECT MIN(id) AS count FROM users"
```

Single Parameter:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("users").min("id").getAll();

// "SELECT MIN(id) FROM users"
```

<br>

### sum

Abstract:

```typescript
sum(fields: string, name?: string | null) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("users").sum("id", "count").getAll();

// "SELECT SUM(id) AS count FROM users"
```

Single Parameter:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("users").sum("id").getAll();

// "SELECT SUM(id) FROM users"
```

<br>

### count

Abstract:

```typescript
count(fields: string, name?: string | null) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("users").count("id", "count").getAll();

// "SELECT COUNT(id) AS count FROM users"
```

Single Parameter:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("users").count("id").getAll();

// "SELECT COUNT(id) FROM users"
```

<br>

### avg

Abstract:

```typescript
avg(fields: string, name?: string | null) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("users").avg("id", "avg").getAll();

// "SELECT AVG(id) AS avg FROM users"
```

Single Parameter:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("users").avg("id").getAll();

// "SELECT AVG(id) FROM users"
```

<br>

### innerJoin

Abstract:

```typescript
innerJoin(table: string, field1: string, operator?: string, field2?: string) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("user_posts")
    .select([
      "user_posts.id as postId",
      "user_posts.title as postTitle",
      "users_username as username",
    ])
    .innerJoin("users", "user_posts.userId", "users.id")
    .getAll();

// "SELECT user_posts.id as postId, user_posts.title as postTitle, users_username as username FROM user_posts INNER JOIN users ON user_posts.userId = users.id"
```

<br>

### leftJoin

Abstract:

```typescript
leftJoin(table: string, field1: string, operator?: string, field2?: string) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("users")
    .select(["users.id As userId", "user_posts.title As postTitle"])
    .leftJoin("user_posts", "users.id", "user_posts.userId")
    .getAll();

// "SELECT users.id As userId, user_posts.title As postTitle FROM users LEFT JOIN user_posts ON users.id = user_posts.userId"
```

<br>

### rightJoin

Abstract:

```typescript
rightJoin(table: string, field1: string, operator?: string, field2?: string) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("user_posts")
    .select(["users.id As userId", "user_posts.title As postTitle"])
    .rightJoin("users", "user_posts.userId", "users.id")
    .getAll();

// "SELECT users.id As userId, user_posts.title As postTitle FROM user_posts RIGHT JOIN users ON user_posts.userId = users.id"
```

<br>

### fullOuterJoin

Abstract:

```typescript
fullOuterJoin(table: string, field1: string, operator?: string, field2?: string) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("users")
    .select(["users.id As userId", "user_posts.title As postTitle"])
    .fullOuterJoin("user_posts", "users.id", "user_posts.userId")
    .getAll();

// "SELECT users.id As userId, user_posts.title As postTitle FROM users FULL OUTER JOIN user_posts ON users.id = user_posts.userId"
```

<br>

### leftOuterJoin

Abstract:

```typescript
leftOuterJoin(table: string, field1: string, operator?: string, field2?: string) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("users")
    .select(["users.id As userId", "user_posts.title As postTitle"])
    .leftOuterJoin("user_posts", "users.id", "user_posts.userId")
    .getAll();

// "SELECT users.id As userId, user_posts.title As postTitle FROM users LEFT OUTER JOIN user_posts ON users.id = user_posts.userId"
```

<br>

### rightOuterJoin

Abstract:

```typescript
rightOuterJoin(table: string, field1: string, operator?: string, field2?: string) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("user_posts")
    .select(["users.id As userId", "user_posts.title As postTitle"])
    .rightOuterJoin("users", "user_posts.userId", "users.id")
    .getAll();

// "SELECT users.id As userId, user_posts.title As postTitle FROM user_posts RIGHT OUTER JOIN users ON user_posts.userId = users.id"
```

<br>

### where

Abstract:

```typescript
where(
    where: string | Array<string>,
    operator?: string | Array<string> | boolean | null,
    val?: string | null | number,
    type?: string,
    andOr?: string
) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("users")
    .where("id", "=", "1")
    .getAll();

// "SELECT * FROM users WHERE id = '1'"
```

<br>

### orWhere

Abstract:

```typescript
orWhere(
    where: string | Array<string>,
    operator?: string | Array<string> | boolean | null,
    val?: string | null | number
) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("users")
    .where("age", "20")
    .orWhere("age", ">", "25")
    .getAll();

// "SELECT * FROM users WHERE age = '20' OR age > '25'"
```

<br>

### notWhere

Abstract:

```typescript
notWhere(
    where: string | Array<string>,
    operator?: string | Array<string> | boolean | null,
    val?: string | null | number
) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("users")
    .where("age", "20")
    .notWhere("age", ">", "25")
    .getAll();

// "SELECT * FROM users WHERE age = '20' AND NOT age > '25'"
```

<br>

### orNotWhere

Abstract:

```typescript
orNotWhere(
    where: string | Array<string>,
    operator?: string | Array<string> | boolean | null,
    val?: string | null | number
) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("users")
    .where("age", "20")
    .orNotWhere("age", ">", "25")
    .getAll();

// "SELECT * FROM users WHERE age = '20' OR NOT age > '25'"
```

<br>

### whereNull

Abstract:

```typescript
whereNull(
    where: string,
    not?: boolean
) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("users").whereNull("email").getAll();

// "SELECT * FROM users WHERE email IS NULL"
```

<br>

### whereNotNull

Abstract:

```typescript
whereNotNull(
    where: string
) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("users").whereNotNull("email").getAll();

// "SELECT * FROM users WHERE email IS NOT NULL"
```

<br>

### grouped

Abstract:

```typescript
grouped(
    callback: (q: ISsiQuery) => any
) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("users")
    .grouped((q) => {
      q.where("country", "TURKEY").orWhere("country", "ENGLAND");
    })
    .getAll();

// "SELECT * FROM users WHERE (country = 'TURKEY' OR country = 'ENGLAND')"
```

<br>

### in

Abstract:

```typescript
in(
    field: string,
    keys: Array<string | number>,
    type?: string,
    andOr?: string
) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("users")
    .in("state", [1, 2, 3, 4])
    .getAll();

// "SELECT * FROM users WHERE state IN ('1', '2', '3', '4')"
```

<br>

### notIn

Abstract:

```typescript
notIn(
    field: string,
    keys: Array<string | number>
) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("test")
    .where("active", "1")
    .notIn("id", [1, 2, 3])
    .getAll();

// "SELECT * FROM test WHERE active = '1' AND id NOT IN ('1', '2', '3')"
```

<br>

### orIn

Abstract:

```typescript
orIn(
    field: string,
    keys: Array<string | number>
) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("test")
    .where("active", "1")
    .orIn("id", [1, 2, 3])
    .getAll();

// "SELECT * FROM test WHERE active = '1' OR id IN ('1', '2', '3')"
```

<br>

### orNotIn

Abstract:

```typescript
orNotIn(
    field: string,
    keys: Array<string | number>
) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("test")
    .where("active", "1")
    .orNotIn("id", [1, 2, 3])
    .getAll();

// "SELECT * FROM test WHERE active = '1' OR id NOT IN ('1', '2', '3')"
```

<br>

### findInSet

Abstract:

```typescript
findInSet(
    field: string,
    key: string | number,
    type?: string,
    andOr?: string
) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("test")
    .where("active", "1")
    .findInSet("selected_tests", 1)
    .getAll();

// "SELECT * FROM test WHERE active = '1' AND FIND_IN_SET (1, selected_tests)"
```

<br>

### notFindInSet

Abstract:

```typescript
notFindInSet(
    field: string,
    key: string | number
) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("test")
    .where("active", "1")
    .notFindInSet("selected_tests", 1)
    .getAll();

// "SELECT * FROM test WHERE active = '1' AND NOT FIND_IN_SET (1, selected_tests)"
```

<br>

### orFindInSet

Abstract:

```typescript
orFindInSet(
    field: string,
    key: string | number
) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("test")
    .where("active", "1")
    .orFindInSet("selected_tests", 1)
    .getAll();

// "SELECT * FROM test WHERE active = '1' OR FIND_IN_SET (1, selected_tests)"
```

<br>

### orNotFindInSet

Abstract:

```typescript
orNotFindInSet(
    field: string,
    key: string | number
) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string =  Query.table("test")
    .where("active", "1")
    .orNotFindInSet("selected_tests", 1)
    .getAll();

// "SELECT * FROM test WHERE active = '1' OR NOT FIND_IN_SET (1, selected_tests)"
```

<br>

### between

Abstract:

```typescript
between(
    field: string,
    value1: string | number,
    value2: string | number,
    type?: string,
    andOr?: string
) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("test")
    .where("active", "1")
    .between("age", 12, 35)
    .getAll();

// "SELECT * FROM test WHERE active = '1' AND (age BETWEEN '12' AND '35')"
```

<br>

### notBetween

Abstract:

```typescript
notBetween(
    field: string,
    value1: string | number,
    value2: string | number
) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("test")
    .where("active", "1")
    .notBetween("age", 12, 35)
    .getAll();

// "SELECT * FROM test WHERE active = '1' AND (age NOT BETWEEN '12' AND '35')"
```

<br>

### orBetween

Abstract:

```typescript
orBetween(
    field: string,
    value1: string | number,
    value2: string | number
) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("test")
    .where("active", "1")
    .orBetween("age", 12, 35)
    .getAll();

// "SELECT * FROM test WHERE active = '1' OR (age BETWEEN '12' AND '35')"
```

<br>

### orNotBetween

Abstract:

```typescript
orNotBetween(
    field: string,
    value1: string | number,
    value2: string | number
) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("test")
    .where("active", "1")
    .orNotBetween("age", 12, 35)
    .getAll();

// "SELECT * FROM test WHERE active = '1' OR (age NOT BETWEEN '12' AND '35')"
```

<br>

### like

Abstract:

```typescript
like(
    field: string,
    data: string,
    type?: string,
    andOr?: string
) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("test")
    .where("active", "1")
    .like("title", "%nodeJS%")
    .getAll();

// "SELECT * FROM test WHERE active = '1' AND title LIKE '%nodeJS%'"
```

<br>

### orLike

Abstract:

```typescript
orLike(
    field: string,
    data: string
) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("test")
    .where("active", "1")
    .orLike("title", "%nodeJS%")
    .getAll();

// "SELECT * FROM test WHERE active = '1' OR title LIKE '%nodeJS%'"
```

<br>

### notLike

Abstract:

```typescript
notLike(
    field: string,
    data: string
) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("test")
    .where("active", "1")
    .notLike("title", "%nodeJS%")
    .getAll();

// "SELECT * FROM test WHERE active = '1' AND title NOT LIKE '%nodeJS%'"
```

<br>

### orNotLike

Abstract:

```typescript
orNotLike(
    field: string,
    data: string
) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("test")
    .where("active", "1")
    .orNotLike("title", "%nodeJS%")
    .getAll();

// "SELECT * FROM test WHERE active = '1' OR title NOT LIKE '%nodeJS%'"
```

<br>

### limit

Abstract:

```typescript
limit(
    limit: number,
    limitEnd?: number | null
) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("test").where("active", "1").limit(20).getAll();

// "SELECT * FROM test WHERE active = '1' LIMIT 20"
```

<br>

### offset

Abstract:

```typescript
offset(
    offset: number
) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("test")
    .where("active", "1")
    .limit(20)
    .offset(200)
    .getAll();

// "SELECT * FROM test WHERE active = '1' LIMIT 20 OFFSET 200"
```

<br>

### pagination

Abstract:

```typescript
pagination(
    perPage: number,
    page: number
) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("test")
    .where("active", "1")
    .pagination(20, 1)
    .getAll();

// "SELECT * FROM test WHERE active = '1' LIMIT 20 OFFSET 20"
```

<br>

### orderBy

Abstract:

```typescript
orderBy(
    orderBy: string,
    orderDir?: string | null
) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("test")
    .where("active", "1")
    .orderBy("date", "desc")
    .getAll();

// "SELECT * FROM test WHERE active = '1' ORDER BY date DESC"
```

<br>

### groupBy

Abstract:

```typescript
groupBy(
    groupBy: string | Array<string>
) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("test").where("active", "1").groupBy("id").getAll();

// "SELECT * FROM test WHERE active = '1' GROUP BY id"
```

<br>

### having

Abstract:

```typescript
having(
    field: string,
    operator?: string | Array<string> | null,
    val?: string | null
) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query : string = Query.table("test")
    .where("active", "1")
    .groupBy("place")
    .having("AVG(salary)", ">=", "3000")
    .getAll();

// "SELECT * FROM test WHERE active = '1' GROUP BY place HAVING AVG(salary) >= '3000'"
```

<br>

### query

Abstract:

```typescript
query(
    query: string,
    values?: Array<string | number> | null
) : ISsiQuery;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const _query = "SELECT * FROM users WHERE userId = ?";
const query = Query.query(_query, ["1"]).getQuery();

// "SELECT * FROM users WHERE userId = '1'"
```

<br>

### get

Builds the select query with a limit of 1

Abstract:

```typescript
get() : string;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query = Query.table("users").select("id, firstName").get();

// "SELECT id, firstName FROM users LIMIT 1"
```

<br>

### getAll

Builds the select query

Abstract:

```typescript
getAll() : string;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query = Query.table("users").select("id, firstName").getAll();

// "SELECT id, firstName FROM users"
```

<br>

### insert

Builds the insert query

Abstract:

```typescript
insert(data: object) : string;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const data = {
    id: "3",
    firstName: "John",
  };
const query = Query.table("test").insert(data);

// "INSERT INTO test (id, firstName) VALUES ('3', 'John')"
```

<br>

### update

Builds the update query

Abstract:

```typescript
update(data: object) : string;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const data = {
    firstName: "John",
    age: 22,
  };
const query = Query.table("test").where("id", "3").update(data);

// "UPDATE test SET firstName='John', age='22' WHERE id = '3'"
```

<br>

### delete

Builds the delete query

Abstract:

```typescript
delete() : string;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query = Query.table("test").where("id", "54").delete();

// "DELETE FROM test WHERE id = '54'"
```

<br>

### analyze

Builds the analyze query

Abstract:

```typescript
analyze() : string;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query = Query.table("test").analyze();

// "ANALYZE TABLE test"
```

<br>

### check

Builds the check query

Abstract:

```typescript
check() : string;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query = Query.table("test").check();

// "CHECK TABLE test"
```

<br>

### checksum

Builds the checksum query

Abstract:

```typescript
checksum() : string;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query = Query.table("test").checksum();

// "CHECKSUM TABLE test"
```

<br>

### optimize

Builds the optimize query

Abstract:

```typescript
optimize() : string;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query = Query.table("test").optimize();

// "OPTIMIZE TABLE test"
```

<br>

### repair

Builds the repair query

Abstract:

```typescript
repair() : string;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

const query = Query.table(["test", "test_2"]).repair();

// "REPAIR TABLE test, test_2"
```

<br>

### reset

It clears all the values of the query in the class, it is not recommended to use it externally.

Abstract:

```typescript
reset() : void;
```

Example:

```typescript
import { Query } from "@ssibrahimbas/query"

Query.reset();
```


</docgen-api>

