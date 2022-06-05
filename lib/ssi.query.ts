import { ISsiQuery } from "./ssi.query.interface";
import "./util/string.util";

export class SsiQuery implements ISsiQuery {
  private _select = "*";
  private _from: string | null = null;
  private _where: string | null = null;
  private _limit: string | null | number = null;
  private _offset: number | null = null;
  private _join: string | null = null;
  private _orderBy: string | null = null;
  private _groupBy: string | null = null;
  private _having: string | null = null;
  private _grouped: boolean | null = null;
  private _query: string | null = null;
  private _prefix: string | null = "";

  private _operators: Array<string> = ["=", "!=", "<", ">", "<=", ">=", "<>"];

  constructor() {}

  table(table: string | Array<string>): this {
    if (table instanceof Array) {
      let from: string = "";
      for (const field of table) {
        from += this._prefix + field + ", ";
      }
      this._from = from.rtrim(", ");
    } else {
      if (table.includes(",")) {
        const tables: Array<string> = table
          .split(",")
          .map((t) => this._prefix + t.ltrim());
        this._from = tables.join(", ");
      } else {
        this._from = this._prefix + table;
      }
    }
    return this;
  }

  select(
    fields:
      | string
      | Record<string, string>
      | Array<string>
      | Array<Record<string, string>>
  ): this {
    let _fields = "";
    if (fields instanceof Array && fields.length > 0) {
      if (typeof fields[0] !== "string") {
        fields.forEach((field) => {
          if (_fields.length > 1) {
            _fields += ", ";
          }
          _fields += this.parseSelectWithAsObject(field as object);
        });
      } else {
        _fields = fields.join(", ");
      }
    } else if (typeof fields !== "string") {
      _fields = this.parseSelectWithAsObject(fields);
    } else {
      _fields = fields;
    }
    this.optimizeSelect(_fields);
    return this;
  }

  private parseSelectWithAsObject = (obj: object): string => {
    return Object.entries(obj)
      .map(([key, value]) => `${key} AS ${value}`)
      .join(", ");
  };

  groupConcat(fields: string, name: string | null): this {
    this.optimizeSelect(
      this.optimizeSqlFunctionWithPlaceholder("GROUP_CONCAT", fields, name)
    );
    return this;
  }

  least(fields: Array<string>, name: string | null): this {
    this.optimizeSelect(
      this.optimizeSqlFunctionWithPlaceholder("LEAST", fields.join(","), name)
    );
    return this;
  }

  max(fields: string, name: string | null): this {
    this.optimizeSelect(
      this.optimizeSqlFunctionWithPlaceholder("MAX", fields, name)
    );
    return this;
  }

  min(fields: string, name: string | null): this {
    this.optimizeSelect(
      this.optimizeSqlFunctionWithPlaceholder("MIN", fields, name)
    );
    return this;
  }

  sum(fields: string, name: string | null): this {
    this.optimizeSelect(
      this.optimizeSqlFunctionWithPlaceholder("SUM", fields, name)
    );
    return this;
  }

  count(fields: string, name: string | null): this {
    this.optimizeSelect(
      this.optimizeSqlFunctionWithPlaceholder("COUNT", fields, name)
    );
    return this;
  }

  avg(fields: string, name: string | null): this {
    this.optimizeSelect(
      this.optimizeSqlFunctionWithPlaceholder("AVG", fields, name)
    );
    return this;
  }

  join(
    table: string,
    field1: string | null = null,
    operator: string | null = null,
    field2: string | null = null,
    type: string = ""
  ): this {
    let on = field1;
    let _table = this._prefix + table;
    if (operator !== null) {
      if (!this._operators.includes(operator)) {
        on = `${field1} = ${operator}${field2 !== null ? field2 : ""}`;
      } else {
        on = `${field1} ${operator} ${field2}`;
      }
    }
    this._join =
      this._join === null
        ? ` ${type} JOIN ${_table} ON ${on}`
        : `${this._join} ${type} JOIN ${_table} ON ${on}`;
    return this;
  }

  innerJoin(
    table: string,
    field1: string,
    operator: string = "",
    field2: string = ""
  ): this {
    return this.join(table, field1, operator, field2, "INNER");
  }

  leftJoin(
    table: string,
    field1: string,
    operator: string = "",
    field2: string = ""
  ): this {
    return this.join(table, field1, operator, field2, "LEFT");
  }

  rightJoin(
    table: string,
    field1: string,
    operator: string = "",
    field2: string = ""
  ): this {
    return this.join(table, field1, operator, field2, "RIGHT");
  }

  fullOuterJoin(
    table: string,
    field1: string,
    operator: string = "",
    field2: string = ""
  ): this {
    return this.join(table, field1, operator, field2, "FULL OUTER");
  }

  leftOuterJoin(
    table: string,
    field1: string,
    operator: string = "",
    field2: string = ""
  ): this {
    return this.join(table, field1, operator, field2, "LEFT OUTER");
  }

  rightOuterJoin(
    table: string,
    field1: string,
    operator: string = "",
    field2: string = ""
  ): this {
    return this.join(table, field1, operator, field2, "RIGHT OUTER");
  }

  where(
    where: string | Array<string>,
    operator: string | Array<string> | boolean | null = null,
    val: string | null | number = null,
    type: string = "",
    andOr: string = "AND"
  ): this {
    if (where instanceof Array && where.length !== 0) {
      let _where: Array<string> = where.map(
        (w, index) => type + index + "=" + this.escape(w)
      );
      where = _where.join(` ${andOr} `);
    } else {
      if (where === null || where.length === 0 || typeof where !== "string")
        return this;
      if (operator instanceof Array) {
        let params = where.split("?");
        let _where = "";
        params.forEach((param, index) => {
          if (!!!param) return;
          _where +=
            type +
            param +
            (!!operator[index] ? this.escape(operator[index]) : "");
        });
        where = _where;
      } else if (
        (typeof operator === "string" && !this._operators.includes(operator)) ||
        operator === false
      ) {
        where = type + where + " = " + this.escape(operator);
      } else {
        where = type + where + " " + operator + " " + this.escape(val);
      }
    }
    this.setWhereGrouped(where, andOr);
    return this;
  }

  orWhere(
    where: string | Array<string>,
    operator: string | Array<string> | boolean | null = null,
    val: string | null | number = null
  ): this {
    return this.where(where, operator, val, "", "OR");
  }

  notWhere(
    where: string | Array<string>,
    operator: string | Array<string> | boolean | null = null,
    val: string | null | number = null
  ): this {
    return this.where(where, operator, val, "NOT ", "AND");
  }

  orNotWhere(
    where: string | Array<string>,
    operator: string | Array<string> | boolean | null = null,
    val: string | null | number = null
  ): this {
    return this.where(where, operator, val, "NOT ", "OR");
  }

  whereNull(where: string, not: boolean = false): this {
    where = `${where} IS ${not ? "NOT " : ""}NULL`;
    this.setWhere(where, "AND");
    return this;
  }

  whereNotNull(where: string) {
    return this.whereNull(where, true);
  }

  grouped(callback: (q: this) => any) {
    this._grouped = true;
    callback(this);
    this._where += ")";
    return this;
  }

  in(
    field: string,
    keys: Array<string | number>,
    type: string = "",
    andOr: string = "AND"
  ): this {
    if (keys instanceof Array) {
      keys = keys.map((k) => this.escape(k));
      let _where = field + " " + type + "IN (" + keys.join(", ") + ")";
      this.setWhereGrouped(_where, andOr);
    }
    return this;
  }

  notIn(field: string, keys: Array<string | number>): this {
    return this.in(field, keys, "NOT ", "AND");
  }

  orIn(field: string, keys: Array<string | number>): this {
    return this.in(field, keys, "", "OR");
  }

  orNotIn(field: string, keys: Array<string | number>): this {
    return this.in(field, keys, "NOT ", "OR");
  }

  findInSet(
    field: string,
    key: string | number,
    type: string = "",
    andOr: string = "AND"
  ): this {
    key = typeof key === "string" ? this.escape(key) : key;
    let _where = type + "FIND_IN_SET (" + key + ", " + field + ")";
    this.setWhereGrouped(_where, andOr);
    return this;
  }

  notFindInSet(field: string, key: string | number): this {
    return this.findInSet(field, key, "NOT ");
  }

  orFindInSet(field: string, key: string | number): this {
    return this.findInSet(field, key, "", "OR");
  }

  orNotFindInSet(field: string, key: string | number): this {
    return this.findInSet(field, key, "NOT ", "OR");
  }

  between(
    field: string,
    value1: string | number,
    value2: string | number,
    type: string = "",
    andOr: string = "AND"
  ): this {
    let where =
      "(" +
      field +
      " " +
      type +
      "BETWEEN " +
      this.escape(value1) +
      " AND " +
      this.escape(value2) +
      ")";
    this.setWhereGrouped(where, andOr);
    return this;
  }

  notBetween(
    field: string,
    value1: string | number,
    value2: string | number
  ): this {
    return this.between(field, value1, value2, "NOT ", "AND");
  }

  orBetween(
    field: string,
    value1: string | number,
    value2: string | number
  ): this {
    return this.between(field, value1, value2, "", "OR");
  }

  orNotBetween(
    field: string,
    value1: string | number,
    value2: string | number
  ): this {
    return this.between(field, value1, value2, "NOT ", "OR");
  }

  like(
    field: string,
    data: string,
    type: string = "",
    andOr: string = "AND"
  ): this {
    let like = this.escape(data);
    let where = field + " " + type + "LIKE " + like;

    this.setWhereGrouped(where, andOr);
    return this;
  }

  orLike(field: string, data: string): this {
    return this.like(field, data, "", "OR");
  }

  notLike(field: string, data: string): this {
    return this.like(field, data, "NOT ");
  }

  orNotLike(field: string, data: string): this {
    return this.like(field, data, "NOT ", "OR");
  }

  limit(limit: number, limitEnd: number | null = null): this {
    this._limit = limitEnd !== null ? limit + ", " + limitEnd : limit;
    return this;
  }

  offset(offset: number): this {
    this._offset = offset;
    return this;
  }

  pagination(perPage: number, page: number): this {
    this._limit = perPage;
    this._offset = (page > 0 ? page : 1) * perPage;
    return this;
  }

  orderBy(orderBy: string, orderDir: string | null = null): this {
    if (orderDir !== null) {
      this._orderBy = orderBy + " " + orderDir.toUpperCase();
    } else {
      this._orderBy =
        orderBy.slice(orderBy.indexOf(" "), orderBy.length - 1) ||
        orderBy.toLowerCase() === "rand()"
          ? orderBy
          : orderBy + " ASC";
    }
    return this;
  }

  groupBy(groupBy: string | Array<string>): this {
    this._groupBy = groupBy instanceof Array ? groupBy.join(", ") : groupBy;
    return this;
  }

  having(
    field: string,
    operator: string | Array<string> | null = null,
    val: string | null = null
  ): this {
    if (operator instanceof Array) {
      let fields = field.split("?");
      let where = "";
      fields.forEach((field, index) => {
        if (field) {
          where +=
            field + (!!operator[index] ? this.escape(operator[index]) : "");
        }
      });
      this._having = where;
    } else if (!this._operators.includes(operator!)) {
      this._having = field + " > " + this.escape(operator);
    } else {
      this._having = field + " " + operator + " " + this.escape(val);
    }
    return this;
  }

  get(): string {
    this._limit = 1;
    return this.getAll();
  }

  getAll(): string {
    let query = "SELECT " + this._select + " FROM " + this._from;
    if (this._join !== null) {
      query += this._join;
    }
    if (this._where !== null) {
      query += " WHERE " + this._where;
    }
    if (this._groupBy !== null) {
      query += " GROUP BY " + this._groupBy;
    }
    if (this._having !== null) {
      query += " HAVING " + this._having;
    }
    if (this._orderBy !== null) {
      query += " ORDER BY " + this._orderBy;
    }
    if (this._limit !== null) {
      query += " LIMIT " + this._limit;
    }
    if (this._offset !== null) {
      query += " OFFSET " + this._offset;
    }
    this.reset();
    return query;
  }

  insert(data: object): string {
    let query = "INSERT INTO " + this._from;
    let values: any[] = Object.values(data);
    if (!!values[0] && typeof values[0] === "object") {
      let col = Object.keys(values[0]).join(", ");
      query += " (" + col + ") VALUES ";
      for (const value of values) {
        let val = value.map((v: string) => this.escape(v)).join(", ");
        query += "(" + val + "), ";
      }
      query = query.trim("), ");
    } else {
      let col = Object.keys(data).join(", ");
      let val = values.map((v) => this.escape(v)).join(", ");
      query += " (" + col + ") VALUES (" + val + ")";
    }
    this.reset();
    return query;
  }

  update(data: object): string {
    let query = "UPDATE " + this._from + " SET ";
    let values: Array<string> = Object.entries(data).map(
      ([key, value]) => key + "=" + this.escape(value)
    );
    query += values.join(", ");
    query = this.updateQueryForUpdateAndDeleteQueries(query);
    this.reset();
    return query;
  }

  delete(): string {
    let query = "DELETE FROM " + this._from;
    let initialQuery = query;
    query = this.updateQueryForUpdateAndDeleteQueries(query);
    if (query === initialQuery) {
      query += "TRUNCATE TABLE " + this._from;
    }
    this.reset();
    return query;
  }

  analyze(): string {
    this.query("ANALYZE TABLE " + this._from);
    return this._query!;
  }

  check(): string {
    this.query("CHECK TABLE " + this._from);
    return this._query!;
  }

  checksum(): string {
    this.query("CHECKSUM TABLE " + this._from);
    return this._query!;
  }

  optimize(): string {
    this.query("OPTIMIZE TABLE " + this._from);
    return this._query!;
  }
  repair(): string {
    this.query("REPAIR TABLE " + this._from);
    return this._query!;
  }

  query(query: string, values: Array<string | number> | null = null): this {
    this.reset();
    if (values === null) {
      this._query = query;
      return this;
    }
    let params = query.split("?");
    let _query = "";
    params.forEach((param, index) => {
      if (!!param) {
        _query += param + this.escape(values[index]);
      }
    });
    this._query = _query;
    return this;
  }

  reset(): void {
    this._select = "*";
    this._from = null;
    this._where = null;
    this._limit = null;
    this._offset = null;
    this._join = null;
    this._orderBy = null;
    this._groupBy = null;
    this._having = null;
    this._grouped = null;
    this._query = null;
    this._prefix = "";
  }

  getQuery(): string | null {
    return this._query;
  }

  private setWhere(where: string, andOr: string): void {
    this._where =
      this._where === null ? where : this._where + " " + andOr + " " + where;
  }

  private setWhereGrouped(where: string, andOr: string): void {
    if (this._grouped) {
      where = "(" + where;
      this._grouped = false;
    }
    this.setWhere(where, andOr);
  }

  private optimizeSelect(fields: string): void {
    this._select = this._select === "*" ? fields : this._select + ", " + fields;
  }

  private optimizeSqlFunctionWithPlaceholder(
    funcName: string,
    fields: string,
    name: string | null
  ): string {
    return `${funcName}(${fields})${name !== null ? " AS " + name : ""}`;
  }

  private escape(data: null | number | string | boolean | unknown): string {
    if (data === null) return "NULL";
    if (typeof data === "number") data.toString();
    return `'${data}'`;
  }

  private updateQueryForUpdateAndDeleteQueries(query: string): string {
    if (this._where !== null) {
      query += " WHERE " + this._where;
    }
    if (this._orderBy !== null) {
      query += " ORDER BY " + this._orderBy;
    }
    if (this._limit !== null) {
      query += " LIMIT " + this._limit;
    }
    return query;
  }
}

export const Query = new SsiQuery();
