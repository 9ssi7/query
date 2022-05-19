/**
 *
 *
 * @export
 * @interface ISsiQuery
 * @author Sami Salih İBRAHİMBAŞ
 */
export interface ISsiQuery {
  /**
   *
   *
   * @param {(string | Array<string>)} table
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   * @author Sami Salih İBRAHİMBAŞ
   */
  table(table: string | Array<string>): ISsiQuery;

  /**
   *
   *
   * @param {(string | Array<string>)} fields
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   * @author Sami Salih İBRAHİMBAŞ
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
   * @author Sami Salih İBRAHİMBAŞ
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
   * @author Sami Salih İBRAHİMBAŞ
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
   * @author Sami Salih İBRAHİMBAŞ
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
   * @author Sami Salih İBRAHİMBAŞ
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
   * @author Sami Salih İBRAHİMBAŞ
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
   * @author Sami Salih İBRAHİMBAŞ
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
   * @author Sami Salih İBRAHİMBAŞ
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
   * @author Sami Salih İBRAHİMBAŞ
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
   * @author Sami Salih İBRAHİMBAŞ
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
   * @author Sami Salih İBRAHİMBAŞ
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
   * @author Sami Salih İBRAHİMBAŞ
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
   * @author Sami Salih İBRAHİMBAŞ
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
   * @author Sami Salih İBRAHİMBAŞ
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
   * @author Sami Salih İBRAHİMBAŞ
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
   * @author Sami Salih İBRAHİMBAŞ
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
   * @author Sami Salih İBRAHİMBAŞ
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
   * @author Sami Salih İBRAHİMBAŞ
   */
  whereNull(where: string, not?: boolean): ISsiQuery;

  /**
   *
   *
   * @param {string} where
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   * @author Sami Salih İBRAHİMBAŞ
   */
  whereNotNull(where: string): ISsiQuery;

  /**
   *
   *
   * @param {(q: ISsiQuery) => any} callback
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   * @author Sami Salih İBRAHİMBAŞ
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
   * @author Sami Salih İBRAHİMBAŞ
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
   * @author Sami Salih İBRAHİMBAŞ
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
   * @author Sami Salih İBRAHİMBAŞ
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
   * @author Sami Salih İBRAHİMBAŞ
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
   * @author Sami Salih İBRAHİMBAŞ
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
   * @author Sami Salih İBRAHİMBAŞ
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
   * @author Sami Salih İBRAHİMBAŞ
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
   * @author Sami Salih İBRAHİMBAŞ
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
   * @author Sami Salih İBRAHİMBAŞ
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
   * @author Sami Salih İBRAHİMBAŞ
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
   * @author Sami Salih İBRAHİMBAŞ
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
   * @author Sami Salih İBRAHİMBAŞ
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
   * @author Sami Salih İBRAHİMBAŞ
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
   * @author Sami Salih İBRAHİMBAŞ
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
   * @author Sami Salih İBRAHİMBAŞ
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
   * @author Sami Salih İBRAHİMBAŞ
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
   * @author Sami Salih İBRAHİMBAŞ
   */
  limit(limit: number, limitEnd?: number | null): ISsiQuery;

  /**
   *
   *
   * @param {number} offset
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   * @author Sami Salih İBRAHİMBAŞ
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
   * @author Sami Salih İBRAHİMBAŞ
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
   * @author Sami Salih İBRAHİMBAŞ
   */
  orderBy(orderBy: string, orderDir?: string | null): ISsiQuery;

  /**
   *
   *
   * @param {(string | Array<string>)} groupBy
   * @return {*}  {ISsiQuery}
   * @memberof ISsiQuery
   * @since 0.0.1
   * @author Sami Salih İBRAHİMBAŞ
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
   * @author Sami Salih İBRAHİMBAŞ
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
   * @author Sami Salih İBRAHİMBAŞ
   */
  query(query: string, values?: Array<string | number> | null): ISsiQuery;

  /**
   *
   *
   * @return {*}  {string}
   * @memberof ISsiQuery
   * @since 0.0.1
   * @author Sami Salih İBRAHİMBAŞ
   */
  get(): string;

  /**
   *
   *
   * @return {*}  {string}
   * @memberof ISsiQuery
   * @since 0.0.1
   * @author Sami Salih İBRAHİMBAŞ
   */
  getAll(): string;

  /**
   *
   *
   * @param {object} data
   * @return {*}  {string}
   * @memberof ISsiQuery
   * @since 0.0.1
   * @author Sami Salih İBRAHİMBAŞ
   */
  insert(data: object): string;

  /**
   *
   *
   * @param {object} data
   * @return {*}  {string}
   * @memberof ISsiQuery
   * @since 0.0.1
   * @author Sami Salih İBRAHİMBAŞ
   */
  update(data: object): string;

  /**
   *
   *
   * @return {*}  {string}
   * @memberof ISsiQuery
   * @since 0.0.1
   * @author Sami Salih İBRAHİMBAŞ
   */
  delete(): string;

  /**
   *
   *
   * @return {*}  {string}
   * @memberof ISsiQuery
   * @since 0.0.1
   * @author Sami Salih İBRAHİMBAŞ
   */
  analyze(): string;

  /**
   *
   *
   * @return {*}  {string}
   * @memberof ISsiQuery
   * @since 0.0.1
   * @author Sami Salih İBRAHİMBAŞ
   */
  check(): string;

  /**
   *
   *
   * @return {*}  {string}
   * @memberof ISsiQuery
   * @since 0.0.1
   * @author Sami Salih İBRAHİMBAŞ
   */
  checksum(): string;

  /**
   *
   *
   * @return {*}  {string}
   * @memberof ISsiQuery
   * @since 0.0.1
   * @author Sami Salih İBRAHİMBAŞ
   */
  optimize(): string;

  /**
   *
   *
   * @return {*}  {string}
   * @memberof ISsiQuery
   * @since 0.0.1
   * @author Sami Salih İBRAHİMBAŞ
   */
  repair(): string;

  /**
   *
   *
   * @memberof ISsiQuery
   * @since 0.0.1
   * @author Sami Salih İBRAHİMBAŞ
   */
  reset(): void;

  /**
   *
   *
   * @return {*}  {string | null}
   * @memberof ISsiQuery
   * @since 0.0.1
   * @author Sami Salih İBRAHİMBAŞ
   */
  getQuery(): string | null;
}
