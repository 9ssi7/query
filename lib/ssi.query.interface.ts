/**
 *
 *
 * @export
 * @interface ISsiQuery
 */
export interface ISsiQuery {
  /**
   *
   *
   * @param {(string | Array<string>)} table
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  table(table: string | Array<string>): ISsiQuery;

  /**
   *
   *
   * @param {(string | Array<string>)} fields
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  select(fields: string | Array<string>): ISsiQuery;

  /**
   *
   *
   * @param {string} fields
   * @param {(string | null)} [name]
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  max(fields: string, name?: string | null): ISsiQuery;

  /**
   *
   *
   * @param {string} fields
   * @param {(string | null)} [name]
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  min(fields: string, name?: string | null): ISsiQuery;

  /**
   *
   *
   * @param {string} fields
   * @param {(string | null)} [name]
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  sum(fields: string, name?: string | null): ISsiQuery;

  /**
   *
   *
   * @param {string} fields
   * @param {(string | null)} [name]
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  count(fields: string, name?: string | null): ISsiQuery;

  /**
   *
   *
   * @param {string} fields
   * @param {(string | null)} [name]
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  avg(fields: string, name?: string | null): ISsiQuery;

  /**
   *
   *
   * @param {string} table
   * @param {(string | null)} [field1]
   * @param {(string | null)} [field2]
   * @param {string} [type]
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  join(
    table: string,
    field1?: string | null,
    field2?: string | null,
    type?: string
  ): ISsiQuery;

  /**
   *
   *
   * @param {string} table
   * @param {string} field1
   * @param {string} [operator]
   * @param {string} [field2]
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  innerJoin(
    table: string,
    field1: string,
    operator?: string,
    field2?: string
  ): ISsiQuery;

  /**
   *
   *
   * @param {string} table
   * @param {string} field1
   * @param {string} [operator]
   * @param {string} [field2]
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  leftJoin(
    table: string,
    field1: string,
    operator?: string,
    field2?: string
  ): ISsiQuery;

  /**
   *
   *
   * @param {string} table
   * @param {string} field1
   * @param {string} [operator]
   * @param {string} [field2]
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  rightJoin(
    table: string,
    field1: string,
    operator?: string,
    field2?: string
  ): ISsiQuery;

  /**
   *
   *
   * @param {string} table
   * @param {string} field1
   * @param {string} [operator]
   * @param {string} [field2]
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  fullOuterJoin(
    table: string,
    field1: string,
    operator?: string,
    field2?: string
  ): ISsiQuery;

  /**
   *
   *
   * @param {string} table
   * @param {string} field1
   * @param {string} [operator]
   * @param {string} [field2]
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  leftOuterJoin(
    table: string,
    field1: string,
    operator?: string,
    field2?: string
  ): ISsiQuery;

  /**
   *
   *
   * @param {string} table
   * @param {string} field1
   * @param {string} [operator]
   * @param {string} [field2]
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  rightOuterJoin(
    table: string,
    field1: string,
    operator?: string,
    field2?: string
  ): ISsiQuery;

  /**
   *
   *
   * @param {(string | Array<string>)} where
   * @param {(string | Array<string> | boolean | null)} [operator]
   * @param {(string | null| number)} [val]
   * @param {string} [type]
   * @param {string} [andOr]
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  where(
    where: string | Array<string>,
    operator?: string | Array<string> | boolean | null,
    val?: string | null | number,
    type?: string,
    andOr?: string
  ): ISsiQuery;

  /**
   *
   *
   * @param {(string | Array<string>)} where
   * @param {(string | Array<string> | boolean | null)} [operator]
   * @param {(string | null| number)} [val]
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  orWhere(
    where: string | Array<string>,
    operator?: string | Array<string> | boolean | null,
    val?: string | null | number
  ): ISsiQuery;

  /**
   *
   *
   * @param {(string | Array<string>)} where
   * @param {(string | Array<string> | boolean | null)} [operator]
   * @param {(string | null| number)} [val]
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  notWhere(
    where: string | Array<string>,
    operator?: string | Array<string> | boolean | null,
    val?: string | null | number
  ): ISsiQuery;

  /**
   *
   *
   * @param {(string | Array<string>)} where
   * @param {(string | Array<string> | boolean | null)} [operator]
   * @param {(string | null| number)} [val]
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  orNotWhere(
    where: string | Array<string>,
    operator?: string | Array<string> | boolean | null,
    val?: string | null | number
  ): ISsiQuery;

  /**
   *
   *
   * @param {string} where
   * @param {boolean} [not]
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  whereNull(where: string, not?: boolean): ISsiQuery;

  /**
   *
   *
   * @param {string} where
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  whereNotNull(where: string): ISsiQuery;

  /**
   *
   *
   * @param {(q: ISsiQuery) => any} callback
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  grouped(callback: (q: ISsiQuery) => any): ISsiQuery;

  /**
   *
   *
   * @param {string} field
   * @param {(Array<string | number>)} keys
   * @param {string} [type]
   * @param {string} [andOr]
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  in(
    field: string,
    keys: Array<string | number>,
    type?: string,
    andOr?: string
  ): ISsiQuery;

  /**
   *
   *
   * @param {string} field
   * @param {(Array<string | number>)} keys
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  notIn(field: string, keys: Array<string | number>): ISsiQuery;

  /**
   *
   *
   * @param {string} field
   * @param {(Array<string | number>)} keys
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  orIn(field: string, keys: Array<string | number>): ISsiQuery;

  /**
   *
   *
   * @param {string} field
   * @param {(Array<string | number>)} keys
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  orNotIn(field: string, keys: Array<string | number>): ISsiQuery;

  /**
   *
   *
   * @param {string} field
   * @param {(string | number)} key
   * @param {string} [type]
   * @param {string} [andOr]
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  findInSet(
    field: string,
    key: string | number,
    type?: string,
    andOr?: string
  ): ISsiQuery;

  /**
   *
   *
   * @param {string} field
   * @param {(string | number)} key
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  notFindInSet(field: string, key: string | number): ISsiQuery;

  /**
   *
   *
   * @param {string} field
   * @param {(string | number)} key
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  orFindInSet(field: string, key: string | number): ISsiQuery;

  /**
   *
   *
   * @param {string} field
   * @param {(string | number)} key
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  orNotFindInSet(field: string, key: string | number): ISsiQuery;

  /**
   *
   *
   * @param {string} field
   * @param {(string | number)} value1
   * @param {(string | number)} value2
   * @param {string} [type]
   * @param {string} [andOr]
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  between(
    field: string,
    value1: string | number,
    value2: string | number,
    type?: string,
    andOr?: string
  ): ISsiQuery;

  /**
   *
   *
   * @param {string} field
   * @param {(string | number)} value1
   * @param {(string | number)} value2
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  notBetween(
    field: string,
    value1: string | number,
    value2: string | number
  ): ISsiQuery;

  /**
   *
   *
   * @param {string} field
   * @param {(string | number)} value1
   * @param {(string | number)} value2
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  orBetween(
    field: string,
    value1: string | number,
    value2: string | number
  ): ISsiQuery;

  /**
   *
   *
   * @param {string} field
   * @param {(string | number)} value1
   * @param {(string | number)} value2
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  orNotBetween(
    field: string,
    value1: string | number,
    value2: string | number
  ): ISsiQuery;

  /**
   *
   *
   * @param {string} field
   * @param {string} data
   * @param {string} [type]
   * @param {string} [andOr]
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  like(field: string, data: string, type?: string, andOr?: string): ISsiQuery;

  /**
   *
   *
   * @param {string} field
   * @param {string} data
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  orLike(field: string, data: string): ISsiQuery;

  /**
   *
   *
   * @param {string} field
   * @param {string} data
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  notLike(field: string, data: string): ISsiQuery;

  /**
   *
   *
   * @param {string} field
   * @param {string} data
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  orNotLike(field: string, data: string): ISsiQuery;

  /**
   *
   *
   * @param {number} limit
   * @param {(number | null)} [limitEnd]
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  limit(limit: number, limitEnd?: number | null): ISsiQuery;

  /**
   *
   *
   * @param {number} offset
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  offset(offset: number): ISsiQuery;

  /**
   *
   *
   * @param {number} perPage
   * @param {number} page
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  pagination(perPage: number, page: number): ISsiQuery;

  /**
   *
   *
   * @param {string} orderBy
   * @param {(string | null)} [orderDir]
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  orderBy(orderBy: string, orderDir?: string | null): ISsiQuery;

  /**
   *
   *
   * @param {(string | Array<string>)} groupBy
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  groupBy(groupBy: string | Array<string>): ISsiQuery;

  /**
   *
   *
   * @param {string} field
   * @param {(string | Array<string> | null)} [operator]
   * @param {(string | null)} [val]
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  having(
    field: string,
    operator?: string | Array<string> | null,
    val?: string | null
  ): ISsiQuery;

  /**
   *
   *
   * @param {string} query
   * @param {(Array<string| number> | null)} [values]
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  query(query: string, values?: Array<string | number> | null): ISsiQuery;

  /**
   *
   *
   * @return {*}  {string}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  get(): string;

  /**
   *
   *
   * @return {*}  {string}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  getAll(): string;

  /**
   *
   *
   * @param {object} data
   * @return {*}  {string}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  insert(data: object): string;

  /**
   *
   *
   * @param {object} data
   * @return {*}  {string}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  update(data: object): string;

  /**
   *
   *
   * @return {*}  {string}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  delete(): string;

  /**
   *
   *
   * @return {*}  {string}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  analyze(): string;

  /**
   *
   *
   * @return {*}  {string}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  check(): string;

  /**
   *
   *
   * @return {*}  {string}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  checksum(): string;

  /**
   *
   *
   * @return {*}  {string}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  optimize(): string;

  /**
   *
   *
   * @return {*}  {string}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  repair(): string;

  /**
   *
   *
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  reset(): void;

  /**
   *
   *
   * @return {*}  {string | null}
   * @memberof ISsiQuery
   * @since 0.0.1
   */
  getQuery(): string | null;
}
