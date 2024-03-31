
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model BloodRequest
 * 
 */
export type BloodRequest = $Result.DefaultSelection<Prisma.$BloodRequestPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RequestStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]

}

export type RequestStatus = $Enums.RequestStatus

export const RequestStatus: typeof $Enums.RequestStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs>;

  /**
   * `prisma.bloodRequest`: Exposes CRUD operations for the **BloodRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BloodRequests
    * const bloodRequests = await prisma.bloodRequest.findMany()
    * ```
    */
  get bloodRequest(): Prisma.BloodRequestDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.11.0
   * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UserProfile: 'UserProfile',
    BloodRequest: 'BloodRequest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'userProfile' | 'bloodRequest'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>,
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      BloodRequest: {
        payload: Prisma.$BloodRequestPayload<ExtArgs>
        fields: Prisma.BloodRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BloodRequestFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BloodRequestFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>
          }
          findFirst: {
            args: Prisma.BloodRequestFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BloodRequestFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>
          }
          findMany: {
            args: Prisma.BloodRequestFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>[]
          }
          create: {
            args: Prisma.BloodRequestCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>
          }
          createMany: {
            args: Prisma.BloodRequestCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BloodRequestDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>
          }
          update: {
            args: Prisma.BloodRequestUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>
          }
          deleteMany: {
            args: Prisma.BloodRequestDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BloodRequestUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BloodRequestUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>
          }
          aggregate: {
            args: Prisma.BloodRequestAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBloodRequest>
          }
          groupBy: {
            args: Prisma.BloodRequestGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BloodRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.BloodRequestCountArgs<ExtArgs>,
            result: $Utils.Optional<BloodRequestCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    requestedBloodRequests: number
    donatedBloodRequests: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requestedBloodRequests?: boolean | UserCountOutputTypeCountRequestedBloodRequestsArgs
    donatedBloodRequests?: boolean | UserCountOutputTypeCountDonatedBloodRequestsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRequestedBloodRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BloodRequestWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDonatedBloodRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BloodRequestWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    bloodType: string | null
    location: string | null
    availability: boolean | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    bloodType: string | null
    location: string | null
    availability: boolean | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    bloodType: number
    location: number
    availability: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    bloodType?: true
    location?: true
    availability?: true
    createdAt?: true
    updateAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    bloodType?: true
    location?: true
    availability?: true
    createdAt?: true
    updateAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    bloodType?: true
    location?: true
    availability?: true
    createdAt?: true
    updateAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    bloodType: string
    location: string
    availability: boolean
    createdAt: Date
    updateAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    bloodType?: boolean
    location?: boolean
    availability?: boolean
    createdAt?: boolean
    updateAt?: boolean
    requestedBloodRequests?: boolean | User$requestedBloodRequestsArgs<ExtArgs>
    donatedBloodRequests?: boolean | User$donatedBloodRequestsArgs<ExtArgs>
    userProfile?: boolean | User$userProfileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    bloodType?: boolean
    location?: boolean
    availability?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requestedBloodRequests?: boolean | User$requestedBloodRequestsArgs<ExtArgs>
    donatedBloodRequests?: boolean | User$donatedBloodRequestsArgs<ExtArgs>
    userProfile?: boolean | User$userProfileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      requestedBloodRequests: Prisma.$BloodRequestPayload<ExtArgs>[]
      donatedBloodRequests: Prisma.$BloodRequestPayload<ExtArgs>[]
      userProfile: Prisma.$UserProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      bloodType: string
      location: string
      availability: boolean
      createdAt: Date
      updateAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    requestedBloodRequests<T extends User$requestedBloodRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$requestedBloodRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, 'findMany'> | Null>;

    donatedBloodRequests<T extends User$donatedBloodRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$donatedBloodRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, 'findMany'> | Null>;

    userProfile<T extends User$userProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$userProfileArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly bloodType: FieldRef<"User", 'String'>
    readonly location: FieldRef<"User", 'String'>
    readonly availability: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updateAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.requestedBloodRequests
   */
  export type User$requestedBloodRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BloodRequestInclude<ExtArgs> | null
    where?: BloodRequestWhereInput
    orderBy?: BloodRequestOrderByWithRelationInput | BloodRequestOrderByWithRelationInput[]
    cursor?: BloodRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BloodRequestScalarFieldEnum | BloodRequestScalarFieldEnum[]
  }


  /**
   * User.donatedBloodRequests
   */
  export type User$donatedBloodRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BloodRequestInclude<ExtArgs> | null
    where?: BloodRequestWhereInput
    orderBy?: BloodRequestOrderByWithRelationInput | BloodRequestOrderByWithRelationInput[]
    cursor?: BloodRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BloodRequestScalarFieldEnum | BloodRequestScalarFieldEnum[]
  }


  /**
   * User.userProfile
   */
  export type User$userProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    where?: UserProfileWhereInput
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileAvgAggregateOutputType = {
    age: number | null
  }

  export type UserProfileSumAggregateOutputType = {
    age: number | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    bio: string | null
    age: number | null
    lastDonationDate: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    bio: string | null
    age: number | null
    lastDonationDate: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    userId: number
    bio: number
    age: number
    lastDonationDate: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type UserProfileAvgAggregateInputType = {
    age?: true
  }

  export type UserProfileSumAggregateInputType = {
    age?: true
  }

  export type UserProfileMinAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    age?: true
    lastDonationDate?: true
    createdAt?: true
    updateAt?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    age?: true
    lastDonationDate?: true
    createdAt?: true
    updateAt?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    age?: true
    lastDonationDate?: true
    createdAt?: true
    updateAt?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _avg?: UserProfileAvgAggregateInputType
    _sum?: UserProfileSumAggregateInputType
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    id: string
    userId: string
    bio: string
    age: number
    lastDonationDate: string
    createdAt: Date
    updateAt: Date
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bio?: boolean
    age?: boolean
    lastDonationDate?: boolean
    createdAt?: boolean
    updateAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    bio?: boolean
    age?: boolean
    lastDonationDate?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      bio: string
      age: number
      lastDonationDate: string
      createdAt: Date
      updateAt: Date
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }


  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserProfileFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserProfile that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserProfileFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserProfileFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
    **/
    create<T extends UserProfileCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserProfiles.
     *     @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     *     @example
     *     // Create many UserProfiles
     *     const userProfile = await prisma.userProfile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserProfileCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
    **/
    delete<T extends UserProfileDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserProfileUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserProfileDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserProfileUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
    **/
    upsert<T extends UserProfileUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>
    ): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserProfile model
   */ 
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", 'String'>
    readonly userId: FieldRef<"UserProfile", 'String'>
    readonly bio: FieldRef<"UserProfile", 'String'>
    readonly age: FieldRef<"UserProfile", 'Int'>
    readonly lastDonationDate: FieldRef<"UserProfile", 'String'>
    readonly createdAt: FieldRef<"UserProfile", 'DateTime'>
    readonly updateAt: FieldRef<"UserProfile", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }


  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }


  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }


  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }


  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }


  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }


  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }


  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
  }


  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }


  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }


  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
  }


  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserProfileInclude<ExtArgs> | null
  }



  /**
   * Model BloodRequest
   */

  export type AggregateBloodRequest = {
    _count: BloodRequestCountAggregateOutputType | null
    _min: BloodRequestMinAggregateOutputType | null
    _max: BloodRequestMaxAggregateOutputType | null
  }

  export type BloodRequestMinAggregateOutputType = {
    id: string | null
    donorId: string | null
    requesterId: string | null
    phoneNumber: string | null
    dateOfDonation: string | null
    hospitalName: string | null
    hospitalAddress: string | null
    reason: string | null
    requestStatus: $Enums.RequestStatus | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type BloodRequestMaxAggregateOutputType = {
    id: string | null
    donorId: string | null
    requesterId: string | null
    phoneNumber: string | null
    dateOfDonation: string | null
    hospitalName: string | null
    hospitalAddress: string | null
    reason: string | null
    requestStatus: $Enums.RequestStatus | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type BloodRequestCountAggregateOutputType = {
    id: number
    donorId: number
    requesterId: number
    phoneNumber: number
    dateOfDonation: number
    hospitalName: number
    hospitalAddress: number
    reason: number
    requestStatus: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type BloodRequestMinAggregateInputType = {
    id?: true
    donorId?: true
    requesterId?: true
    phoneNumber?: true
    dateOfDonation?: true
    hospitalName?: true
    hospitalAddress?: true
    reason?: true
    requestStatus?: true
    createdAt?: true
    updateAt?: true
  }

  export type BloodRequestMaxAggregateInputType = {
    id?: true
    donorId?: true
    requesterId?: true
    phoneNumber?: true
    dateOfDonation?: true
    hospitalName?: true
    hospitalAddress?: true
    reason?: true
    requestStatus?: true
    createdAt?: true
    updateAt?: true
  }

  export type BloodRequestCountAggregateInputType = {
    id?: true
    donorId?: true
    requesterId?: true
    phoneNumber?: true
    dateOfDonation?: true
    hospitalName?: true
    hospitalAddress?: true
    reason?: true
    requestStatus?: true
    createdAt?: true
    updateAt?: true
    _all?: true
  }

  export type BloodRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BloodRequest to aggregate.
     */
    where?: BloodRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloodRequests to fetch.
     */
    orderBy?: BloodRequestOrderByWithRelationInput | BloodRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BloodRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloodRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloodRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BloodRequests
    **/
    _count?: true | BloodRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BloodRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BloodRequestMaxAggregateInputType
  }

  export type GetBloodRequestAggregateType<T extends BloodRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateBloodRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBloodRequest[P]>
      : GetScalarType<T[P], AggregateBloodRequest[P]>
  }




  export type BloodRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BloodRequestWhereInput
    orderBy?: BloodRequestOrderByWithAggregationInput | BloodRequestOrderByWithAggregationInput[]
    by: BloodRequestScalarFieldEnum[] | BloodRequestScalarFieldEnum
    having?: BloodRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BloodRequestCountAggregateInputType | true
    _min?: BloodRequestMinAggregateInputType
    _max?: BloodRequestMaxAggregateInputType
  }

  export type BloodRequestGroupByOutputType = {
    id: string
    donorId: string
    requesterId: string
    phoneNumber: string
    dateOfDonation: string
    hospitalName: string
    hospitalAddress: string
    reason: string
    requestStatus: $Enums.RequestStatus
    createdAt: Date
    updateAt: Date
    _count: BloodRequestCountAggregateOutputType | null
    _min: BloodRequestMinAggregateOutputType | null
    _max: BloodRequestMaxAggregateOutputType | null
  }

  type GetBloodRequestGroupByPayload<T extends BloodRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BloodRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BloodRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BloodRequestGroupByOutputType[P]>
            : GetScalarType<T[P], BloodRequestGroupByOutputType[P]>
        }
      >
    >


  export type BloodRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    donorId?: boolean
    requesterId?: boolean
    phoneNumber?: boolean
    dateOfDonation?: boolean
    hospitalName?: boolean
    hospitalAddress?: boolean
    reason?: boolean
    requestStatus?: boolean
    createdAt?: boolean
    updateAt?: boolean
    donor?: boolean | UserDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bloodRequest"]>

  export type BloodRequestSelectScalar = {
    id?: boolean
    donorId?: boolean
    requesterId?: boolean
    phoneNumber?: boolean
    dateOfDonation?: boolean
    hospitalName?: boolean
    hospitalAddress?: boolean
    reason?: boolean
    requestStatus?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type BloodRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donor?: boolean | UserDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $BloodRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BloodRequest"
    objects: {
      donor: Prisma.$UserPayload<ExtArgs>
      requester: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      donorId: string
      requesterId: string
      phoneNumber: string
      dateOfDonation: string
      hospitalName: string
      hospitalAddress: string
      reason: string
      requestStatus: $Enums.RequestStatus
      createdAt: Date
      updateAt: Date
    }, ExtArgs["result"]["bloodRequest"]>
    composites: {}
  }


  type BloodRequestGetPayload<S extends boolean | null | undefined | BloodRequestDefaultArgs> = $Result.GetResult<Prisma.$BloodRequestPayload, S>

  type BloodRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BloodRequestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BloodRequestCountAggregateInputType | true
    }

  export interface BloodRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BloodRequest'], meta: { name: 'BloodRequest' } }
    /**
     * Find zero or one BloodRequest that matches the filter.
     * @param {BloodRequestFindUniqueArgs} args - Arguments to find a BloodRequest
     * @example
     * // Get one BloodRequest
     * const bloodRequest = await prisma.bloodRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BloodRequestFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BloodRequestFindUniqueArgs<ExtArgs>>
    ): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one BloodRequest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BloodRequestFindUniqueOrThrowArgs} args - Arguments to find a BloodRequest
     * @example
     * // Get one BloodRequest
     * const bloodRequest = await prisma.bloodRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BloodRequestFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BloodRequestFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first BloodRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestFindFirstArgs} args - Arguments to find a BloodRequest
     * @example
     * // Get one BloodRequest
     * const bloodRequest = await prisma.bloodRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BloodRequestFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BloodRequestFindFirstArgs<ExtArgs>>
    ): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first BloodRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestFindFirstOrThrowArgs} args - Arguments to find a BloodRequest
     * @example
     * // Get one BloodRequest
     * const bloodRequest = await prisma.bloodRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BloodRequestFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BloodRequestFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more BloodRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BloodRequests
     * const bloodRequests = await prisma.bloodRequest.findMany()
     * 
     * // Get first 10 BloodRequests
     * const bloodRequests = await prisma.bloodRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bloodRequestWithIdOnly = await prisma.bloodRequest.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BloodRequestFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BloodRequestFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a BloodRequest.
     * @param {BloodRequestCreateArgs} args - Arguments to create a BloodRequest.
     * @example
     * // Create one BloodRequest
     * const BloodRequest = await prisma.bloodRequest.create({
     *   data: {
     *     // ... data to create a BloodRequest
     *   }
     * })
     * 
    **/
    create<T extends BloodRequestCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BloodRequestCreateArgs<ExtArgs>>
    ): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many BloodRequests.
     *     @param {BloodRequestCreateManyArgs} args - Arguments to create many BloodRequests.
     *     @example
     *     // Create many BloodRequests
     *     const bloodRequest = await prisma.bloodRequest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BloodRequestCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BloodRequestCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BloodRequest.
     * @param {BloodRequestDeleteArgs} args - Arguments to delete one BloodRequest.
     * @example
     * // Delete one BloodRequest
     * const BloodRequest = await prisma.bloodRequest.delete({
     *   where: {
     *     // ... filter to delete one BloodRequest
     *   }
     * })
     * 
    **/
    delete<T extends BloodRequestDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BloodRequestDeleteArgs<ExtArgs>>
    ): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one BloodRequest.
     * @param {BloodRequestUpdateArgs} args - Arguments to update one BloodRequest.
     * @example
     * // Update one BloodRequest
     * const bloodRequest = await prisma.bloodRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BloodRequestUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BloodRequestUpdateArgs<ExtArgs>>
    ): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more BloodRequests.
     * @param {BloodRequestDeleteManyArgs} args - Arguments to filter BloodRequests to delete.
     * @example
     * // Delete a few BloodRequests
     * const { count } = await prisma.bloodRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BloodRequestDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BloodRequestDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BloodRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BloodRequests
     * const bloodRequest = await prisma.bloodRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BloodRequestUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BloodRequestUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BloodRequest.
     * @param {BloodRequestUpsertArgs} args - Arguments to update or create a BloodRequest.
     * @example
     * // Update or create a BloodRequest
     * const bloodRequest = await prisma.bloodRequest.upsert({
     *   create: {
     *     // ... data to create a BloodRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BloodRequest we want to update
     *   }
     * })
    **/
    upsert<T extends BloodRequestUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BloodRequestUpsertArgs<ExtArgs>>
    ): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of BloodRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestCountArgs} args - Arguments to filter BloodRequests to count.
     * @example
     * // Count the number of BloodRequests
     * const count = await prisma.bloodRequest.count({
     *   where: {
     *     // ... the filter for the BloodRequests we want to count
     *   }
     * })
    **/
    count<T extends BloodRequestCountArgs>(
      args?: Subset<T, BloodRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BloodRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BloodRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BloodRequestAggregateArgs>(args: Subset<T, BloodRequestAggregateArgs>): Prisma.PrismaPromise<GetBloodRequestAggregateType<T>>

    /**
     * Group by BloodRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BloodRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BloodRequestGroupByArgs['orderBy'] }
        : { orderBy?: BloodRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BloodRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBloodRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BloodRequest model
   */
  readonly fields: BloodRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BloodRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BloodRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    donor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    requester<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the BloodRequest model
   */ 
  interface BloodRequestFieldRefs {
    readonly id: FieldRef<"BloodRequest", 'String'>
    readonly donorId: FieldRef<"BloodRequest", 'String'>
    readonly requesterId: FieldRef<"BloodRequest", 'String'>
    readonly phoneNumber: FieldRef<"BloodRequest", 'String'>
    readonly dateOfDonation: FieldRef<"BloodRequest", 'String'>
    readonly hospitalName: FieldRef<"BloodRequest", 'String'>
    readonly hospitalAddress: FieldRef<"BloodRequest", 'String'>
    readonly reason: FieldRef<"BloodRequest", 'String'>
    readonly requestStatus: FieldRef<"BloodRequest", 'RequestStatus'>
    readonly createdAt: FieldRef<"BloodRequest", 'DateTime'>
    readonly updateAt: FieldRef<"BloodRequest", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * BloodRequest findUnique
   */
  export type BloodRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * Filter, which BloodRequest to fetch.
     */
    where: BloodRequestWhereUniqueInput
  }


  /**
   * BloodRequest findUniqueOrThrow
   */
  export type BloodRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * Filter, which BloodRequest to fetch.
     */
    where: BloodRequestWhereUniqueInput
  }


  /**
   * BloodRequest findFirst
   */
  export type BloodRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * Filter, which BloodRequest to fetch.
     */
    where?: BloodRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloodRequests to fetch.
     */
    orderBy?: BloodRequestOrderByWithRelationInput | BloodRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BloodRequests.
     */
    cursor?: BloodRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloodRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloodRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BloodRequests.
     */
    distinct?: BloodRequestScalarFieldEnum | BloodRequestScalarFieldEnum[]
  }


  /**
   * BloodRequest findFirstOrThrow
   */
  export type BloodRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * Filter, which BloodRequest to fetch.
     */
    where?: BloodRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloodRequests to fetch.
     */
    orderBy?: BloodRequestOrderByWithRelationInput | BloodRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BloodRequests.
     */
    cursor?: BloodRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloodRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloodRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BloodRequests.
     */
    distinct?: BloodRequestScalarFieldEnum | BloodRequestScalarFieldEnum[]
  }


  /**
   * BloodRequest findMany
   */
  export type BloodRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * Filter, which BloodRequests to fetch.
     */
    where?: BloodRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloodRequests to fetch.
     */
    orderBy?: BloodRequestOrderByWithRelationInput | BloodRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BloodRequests.
     */
    cursor?: BloodRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloodRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloodRequests.
     */
    skip?: number
    distinct?: BloodRequestScalarFieldEnum | BloodRequestScalarFieldEnum[]
  }


  /**
   * BloodRequest create
   */
  export type BloodRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a BloodRequest.
     */
    data: XOR<BloodRequestCreateInput, BloodRequestUncheckedCreateInput>
  }


  /**
   * BloodRequest createMany
   */
  export type BloodRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BloodRequests.
     */
    data: BloodRequestCreateManyInput | BloodRequestCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * BloodRequest update
   */
  export type BloodRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a BloodRequest.
     */
    data: XOR<BloodRequestUpdateInput, BloodRequestUncheckedUpdateInput>
    /**
     * Choose, which BloodRequest to update.
     */
    where: BloodRequestWhereUniqueInput
  }


  /**
   * BloodRequest updateMany
   */
  export type BloodRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BloodRequests.
     */
    data: XOR<BloodRequestUpdateManyMutationInput, BloodRequestUncheckedUpdateManyInput>
    /**
     * Filter which BloodRequests to update
     */
    where?: BloodRequestWhereInput
  }


  /**
   * BloodRequest upsert
   */
  export type BloodRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the BloodRequest to update in case it exists.
     */
    where: BloodRequestWhereUniqueInput
    /**
     * In case the BloodRequest found by the `where` argument doesn't exist, create a new BloodRequest with this data.
     */
    create: XOR<BloodRequestCreateInput, BloodRequestUncheckedCreateInput>
    /**
     * In case the BloodRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BloodRequestUpdateInput, BloodRequestUncheckedUpdateInput>
  }


  /**
   * BloodRequest delete
   */
  export type BloodRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BloodRequestInclude<ExtArgs> | null
    /**
     * Filter which BloodRequest to delete.
     */
    where: BloodRequestWhereUniqueInput
  }


  /**
   * BloodRequest deleteMany
   */
  export type BloodRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BloodRequests to delete
     */
    where?: BloodRequestWhereInput
  }


  /**
   * BloodRequest without action
   */
  export type BloodRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BloodRequestInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    bloodType: 'bloodType',
    location: 'location',
    availability: 'availability',
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bio: 'bio',
    age: 'age',
    lastDonationDate: 'lastDonationDate',
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const BloodRequestScalarFieldEnum: {
    id: 'id',
    donorId: 'donorId',
    requesterId: 'requesterId',
    phoneNumber: 'phoneNumber',
    dateOfDonation: 'dateOfDonation',
    hospitalName: 'hospitalName',
    hospitalAddress: 'hospitalAddress',
    reason: 'reason',
    requestStatus: 'requestStatus',
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  };

  export type BloodRequestScalarFieldEnum = (typeof BloodRequestScalarFieldEnum)[keyof typeof BloodRequestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'RequestStatus'
   */
  export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>
    


  /**
   * Reference to a field of type 'RequestStatus[]'
   */
  export type ListEnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    bloodType?: StringFilter<"User"> | string
    location?: StringFilter<"User"> | string
    availability?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    requestedBloodRequests?: BloodRequestListRelationFilter
    donatedBloodRequests?: BloodRequestListRelationFilter
    userProfile?: XOR<UserProfileNullableRelationFilter, UserProfileWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    bloodType?: SortOrder
    location?: SortOrder
    availability?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    requestedBloodRequests?: BloodRequestOrderByRelationAggregateInput
    donatedBloodRequests?: BloodRequestOrderByRelationAggregateInput
    userProfile?: UserProfileOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    bloodType?: StringFilter<"User"> | string
    location?: StringFilter<"User"> | string
    availability?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    requestedBloodRequests?: BloodRequestListRelationFilter
    donatedBloodRequests?: BloodRequestListRelationFilter
    userProfile?: XOR<UserProfileNullableRelationFilter, UserProfileWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    bloodType?: SortOrder
    location?: SortOrder
    availability?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    bloodType?: StringWithAggregatesFilter<"User"> | string
    location?: StringWithAggregatesFilter<"User"> | string
    availability?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    id?: StringFilter<"UserProfile"> | string
    userId?: StringFilter<"UserProfile"> | string
    bio?: StringFilter<"UserProfile"> | string
    age?: IntFilter<"UserProfile"> | number
    lastDonationDate?: StringFilter<"UserProfile"> | string
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updateAt?: DateTimeFilter<"UserProfile"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    age?: SortOrder
    lastDonationDate?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    bio?: StringFilter<"UserProfile"> | string
    age?: IntFilter<"UserProfile"> | number
    lastDonationDate?: StringFilter<"UserProfile"> | string
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updateAt?: DateTimeFilter<"UserProfile"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    age?: SortOrder
    lastDonationDate?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _avg?: UserProfileAvgOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
    _sum?: UserProfileSumOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserProfile"> | string
    userId?: StringWithAggregatesFilter<"UserProfile"> | string
    bio?: StringWithAggregatesFilter<"UserProfile"> | string
    age?: IntWithAggregatesFilter<"UserProfile"> | number
    lastDonationDate?: StringWithAggregatesFilter<"UserProfile"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
  }

  export type BloodRequestWhereInput = {
    AND?: BloodRequestWhereInput | BloodRequestWhereInput[]
    OR?: BloodRequestWhereInput[]
    NOT?: BloodRequestWhereInput | BloodRequestWhereInput[]
    id?: StringFilter<"BloodRequest"> | string
    donorId?: StringFilter<"BloodRequest"> | string
    requesterId?: StringFilter<"BloodRequest"> | string
    phoneNumber?: StringFilter<"BloodRequest"> | string
    dateOfDonation?: StringFilter<"BloodRequest"> | string
    hospitalName?: StringFilter<"BloodRequest"> | string
    hospitalAddress?: StringFilter<"BloodRequest"> | string
    reason?: StringFilter<"BloodRequest"> | string
    requestStatus?: EnumRequestStatusFilter<"BloodRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"BloodRequest"> | Date | string
    updateAt?: DateTimeFilter<"BloodRequest"> | Date | string
    donor?: XOR<UserRelationFilter, UserWhereInput>
    requester?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type BloodRequestOrderByWithRelationInput = {
    id?: SortOrder
    donorId?: SortOrder
    requesterId?: SortOrder
    phoneNumber?: SortOrder
    dateOfDonation?: SortOrder
    hospitalName?: SortOrder
    hospitalAddress?: SortOrder
    reason?: SortOrder
    requestStatus?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    donor?: UserOrderByWithRelationInput
    requester?: UserOrderByWithRelationInput
  }

  export type BloodRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BloodRequestWhereInput | BloodRequestWhereInput[]
    OR?: BloodRequestWhereInput[]
    NOT?: BloodRequestWhereInput | BloodRequestWhereInput[]
    donorId?: StringFilter<"BloodRequest"> | string
    requesterId?: StringFilter<"BloodRequest"> | string
    phoneNumber?: StringFilter<"BloodRequest"> | string
    dateOfDonation?: StringFilter<"BloodRequest"> | string
    hospitalName?: StringFilter<"BloodRequest"> | string
    hospitalAddress?: StringFilter<"BloodRequest"> | string
    reason?: StringFilter<"BloodRequest"> | string
    requestStatus?: EnumRequestStatusFilter<"BloodRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"BloodRequest"> | Date | string
    updateAt?: DateTimeFilter<"BloodRequest"> | Date | string
    donor?: XOR<UserRelationFilter, UserWhereInput>
    requester?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type BloodRequestOrderByWithAggregationInput = {
    id?: SortOrder
    donorId?: SortOrder
    requesterId?: SortOrder
    phoneNumber?: SortOrder
    dateOfDonation?: SortOrder
    hospitalName?: SortOrder
    hospitalAddress?: SortOrder
    reason?: SortOrder
    requestStatus?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    _count?: BloodRequestCountOrderByAggregateInput
    _max?: BloodRequestMaxOrderByAggregateInput
    _min?: BloodRequestMinOrderByAggregateInput
  }

  export type BloodRequestScalarWhereWithAggregatesInput = {
    AND?: BloodRequestScalarWhereWithAggregatesInput | BloodRequestScalarWhereWithAggregatesInput[]
    OR?: BloodRequestScalarWhereWithAggregatesInput[]
    NOT?: BloodRequestScalarWhereWithAggregatesInput | BloodRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BloodRequest"> | string
    donorId?: StringWithAggregatesFilter<"BloodRequest"> | string
    requesterId?: StringWithAggregatesFilter<"BloodRequest"> | string
    phoneNumber?: StringWithAggregatesFilter<"BloodRequest"> | string
    dateOfDonation?: StringWithAggregatesFilter<"BloodRequest"> | string
    hospitalName?: StringWithAggregatesFilter<"BloodRequest"> | string
    hospitalAddress?: StringWithAggregatesFilter<"BloodRequest"> | string
    reason?: StringWithAggregatesFilter<"BloodRequest"> | string
    requestStatus?: EnumRequestStatusWithAggregatesFilter<"BloodRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeWithAggregatesFilter<"BloodRequest"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"BloodRequest"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    bloodType: string
    location: string
    availability?: boolean
    createdAt?: Date | string
    updateAt?: Date | string
    requestedBloodRequests?: BloodRequestCreateNestedManyWithoutDonorInput
    donatedBloodRequests?: BloodRequestCreateNestedManyWithoutRequesterInput
    userProfile?: UserProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    bloodType: string
    location: string
    availability?: boolean
    createdAt?: Date | string
    updateAt?: Date | string
    requestedBloodRequests?: BloodRequestUncheckedCreateNestedManyWithoutDonorInput
    donatedBloodRequests?: BloodRequestUncheckedCreateNestedManyWithoutRequesterInput
    userProfile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bloodType?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestedBloodRequests?: BloodRequestUpdateManyWithoutDonorNestedInput
    donatedBloodRequests?: BloodRequestUpdateManyWithoutRequesterNestedInput
    userProfile?: UserProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bloodType?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestedBloodRequests?: BloodRequestUncheckedUpdateManyWithoutDonorNestedInput
    donatedBloodRequests?: BloodRequestUncheckedUpdateManyWithoutRequesterNestedInput
    userProfile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    bloodType: string
    location: string
    availability?: boolean
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bloodType?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bloodType?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateInput = {
    id?: string
    bio: string
    age: number
    lastDonationDate: string
    createdAt?: Date | string
    updateAt?: Date | string
    user: UserCreateNestedOneWithoutUserProfileInput
  }

  export type UserProfileUncheckedCreateInput = {
    id?: string
    userId: string
    bio: string
    age: number
    lastDonationDate: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type UserProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    lastDonationDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserProfileNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    lastDonationDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateManyInput = {
    id?: string
    userId: string
    bio: string
    age: number
    lastDonationDate: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type UserProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    lastDonationDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    lastDonationDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloodRequestCreateInput = {
    id?: string
    phoneNumber: string
    dateOfDonation: string
    hospitalName: string
    hospitalAddress: string
    reason: string
    requestStatus?: $Enums.RequestStatus
    createdAt?: Date | string
    updateAt?: Date | string
    donor: UserCreateNestedOneWithoutRequestedBloodRequestsInput
    requester: UserCreateNestedOneWithoutDonatedBloodRequestsInput
  }

  export type BloodRequestUncheckedCreateInput = {
    id?: string
    donorId: string
    requesterId: string
    phoneNumber: string
    dateOfDonation: string
    hospitalName: string
    hospitalAddress: string
    reason: string
    requestStatus?: $Enums.RequestStatus
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type BloodRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    dateOfDonation?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    hospitalAddress?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    requestStatus?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donor?: UserUpdateOneRequiredWithoutRequestedBloodRequestsNestedInput
    requester?: UserUpdateOneRequiredWithoutDonatedBloodRequestsNestedInput
  }

  export type BloodRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    donorId?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    dateOfDonation?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    hospitalAddress?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    requestStatus?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloodRequestCreateManyInput = {
    id?: string
    donorId: string
    requesterId: string
    phoneNumber: string
    dateOfDonation: string
    hospitalName: string
    hospitalAddress: string
    reason: string
    requestStatus?: $Enums.RequestStatus
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type BloodRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    dateOfDonation?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    hospitalAddress?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    requestStatus?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloodRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    donorId?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    dateOfDonation?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    hospitalAddress?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    requestStatus?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BloodRequestListRelationFilter = {
    every?: BloodRequestWhereInput
    some?: BloodRequestWhereInput
    none?: BloodRequestWhereInput
  }

  export type UserProfileNullableRelationFilter = {
    is?: UserProfileWhereInput | null
    isNot?: UserProfileWhereInput | null
  }

  export type BloodRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    bloodType?: SortOrder
    location?: SortOrder
    availability?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    bloodType?: SortOrder
    location?: SortOrder
    availability?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    bloodType?: SortOrder
    location?: SortOrder
    availability?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    age?: SortOrder
    lastDonationDate?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserProfileAvgOrderByAggregateInput = {
    age?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    age?: SortOrder
    lastDonationDate?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    age?: SortOrder
    lastDonationDate?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserProfileSumOrderByAggregateInput = {
    age?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type BloodRequestCountOrderByAggregateInput = {
    id?: SortOrder
    donorId?: SortOrder
    requesterId?: SortOrder
    phoneNumber?: SortOrder
    dateOfDonation?: SortOrder
    hospitalName?: SortOrder
    hospitalAddress?: SortOrder
    reason?: SortOrder
    requestStatus?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type BloodRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    donorId?: SortOrder
    requesterId?: SortOrder
    phoneNumber?: SortOrder
    dateOfDonation?: SortOrder
    hospitalName?: SortOrder
    hospitalAddress?: SortOrder
    reason?: SortOrder
    requestStatus?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type BloodRequestMinOrderByAggregateInput = {
    id?: SortOrder
    donorId?: SortOrder
    requesterId?: SortOrder
    phoneNumber?: SortOrder
    dateOfDonation?: SortOrder
    hospitalName?: SortOrder
    hospitalAddress?: SortOrder
    reason?: SortOrder
    requestStatus?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type EnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type BloodRequestCreateNestedManyWithoutDonorInput = {
    create?: XOR<BloodRequestCreateWithoutDonorInput, BloodRequestUncheckedCreateWithoutDonorInput> | BloodRequestCreateWithoutDonorInput[] | BloodRequestUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: BloodRequestCreateOrConnectWithoutDonorInput | BloodRequestCreateOrConnectWithoutDonorInput[]
    createMany?: BloodRequestCreateManyDonorInputEnvelope
    connect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
  }

  export type BloodRequestCreateNestedManyWithoutRequesterInput = {
    create?: XOR<BloodRequestCreateWithoutRequesterInput, BloodRequestUncheckedCreateWithoutRequesterInput> | BloodRequestCreateWithoutRequesterInput[] | BloodRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: BloodRequestCreateOrConnectWithoutRequesterInput | BloodRequestCreateOrConnectWithoutRequesterInput[]
    createMany?: BloodRequestCreateManyRequesterInputEnvelope
    connect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
  }

  export type UserProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type BloodRequestUncheckedCreateNestedManyWithoutDonorInput = {
    create?: XOR<BloodRequestCreateWithoutDonorInput, BloodRequestUncheckedCreateWithoutDonorInput> | BloodRequestCreateWithoutDonorInput[] | BloodRequestUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: BloodRequestCreateOrConnectWithoutDonorInput | BloodRequestCreateOrConnectWithoutDonorInput[]
    createMany?: BloodRequestCreateManyDonorInputEnvelope
    connect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
  }

  export type BloodRequestUncheckedCreateNestedManyWithoutRequesterInput = {
    create?: XOR<BloodRequestCreateWithoutRequesterInput, BloodRequestUncheckedCreateWithoutRequesterInput> | BloodRequestCreateWithoutRequesterInput[] | BloodRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: BloodRequestCreateOrConnectWithoutRequesterInput | BloodRequestCreateOrConnectWithoutRequesterInput[]
    createMany?: BloodRequestCreateManyRequesterInputEnvelope
    connect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
  }

  export type UserProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BloodRequestUpdateManyWithoutDonorNestedInput = {
    create?: XOR<BloodRequestCreateWithoutDonorInput, BloodRequestUncheckedCreateWithoutDonorInput> | BloodRequestCreateWithoutDonorInput[] | BloodRequestUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: BloodRequestCreateOrConnectWithoutDonorInput | BloodRequestCreateOrConnectWithoutDonorInput[]
    upsert?: BloodRequestUpsertWithWhereUniqueWithoutDonorInput | BloodRequestUpsertWithWhereUniqueWithoutDonorInput[]
    createMany?: BloodRequestCreateManyDonorInputEnvelope
    set?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    disconnect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    delete?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    connect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    update?: BloodRequestUpdateWithWhereUniqueWithoutDonorInput | BloodRequestUpdateWithWhereUniqueWithoutDonorInput[]
    updateMany?: BloodRequestUpdateManyWithWhereWithoutDonorInput | BloodRequestUpdateManyWithWhereWithoutDonorInput[]
    deleteMany?: BloodRequestScalarWhereInput | BloodRequestScalarWhereInput[]
  }

  export type BloodRequestUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<BloodRequestCreateWithoutRequesterInput, BloodRequestUncheckedCreateWithoutRequesterInput> | BloodRequestCreateWithoutRequesterInput[] | BloodRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: BloodRequestCreateOrConnectWithoutRequesterInput | BloodRequestCreateOrConnectWithoutRequesterInput[]
    upsert?: BloodRequestUpsertWithWhereUniqueWithoutRequesterInput | BloodRequestUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: BloodRequestCreateManyRequesterInputEnvelope
    set?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    disconnect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    delete?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    connect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    update?: BloodRequestUpdateWithWhereUniqueWithoutRequesterInput | BloodRequestUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: BloodRequestUpdateManyWithWhereWithoutRequesterInput | BloodRequestUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: BloodRequestScalarWhereInput | BloodRequestScalarWhereInput[]
  }

  export type UserProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type BloodRequestUncheckedUpdateManyWithoutDonorNestedInput = {
    create?: XOR<BloodRequestCreateWithoutDonorInput, BloodRequestUncheckedCreateWithoutDonorInput> | BloodRequestCreateWithoutDonorInput[] | BloodRequestUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: BloodRequestCreateOrConnectWithoutDonorInput | BloodRequestCreateOrConnectWithoutDonorInput[]
    upsert?: BloodRequestUpsertWithWhereUniqueWithoutDonorInput | BloodRequestUpsertWithWhereUniqueWithoutDonorInput[]
    createMany?: BloodRequestCreateManyDonorInputEnvelope
    set?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    disconnect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    delete?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    connect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    update?: BloodRequestUpdateWithWhereUniqueWithoutDonorInput | BloodRequestUpdateWithWhereUniqueWithoutDonorInput[]
    updateMany?: BloodRequestUpdateManyWithWhereWithoutDonorInput | BloodRequestUpdateManyWithWhereWithoutDonorInput[]
    deleteMany?: BloodRequestScalarWhereInput | BloodRequestScalarWhereInput[]
  }

  export type BloodRequestUncheckedUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<BloodRequestCreateWithoutRequesterInput, BloodRequestUncheckedCreateWithoutRequesterInput> | BloodRequestCreateWithoutRequesterInput[] | BloodRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: BloodRequestCreateOrConnectWithoutRequesterInput | BloodRequestCreateOrConnectWithoutRequesterInput[]
    upsert?: BloodRequestUpsertWithWhereUniqueWithoutRequesterInput | BloodRequestUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: BloodRequestCreateManyRequesterInputEnvelope
    set?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    disconnect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    delete?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    connect?: BloodRequestWhereUniqueInput | BloodRequestWhereUniqueInput[]
    update?: BloodRequestUpdateWithWhereUniqueWithoutRequesterInput | BloodRequestUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: BloodRequestUpdateManyWithWhereWithoutRequesterInput | BloodRequestUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: BloodRequestScalarWhereInput | BloodRequestScalarWhereInput[]
  }

  export type UserProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutUserProfileInput = {
    create?: XOR<UserCreateWithoutUserProfileInput, UserUncheckedCreateWithoutUserProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserProfileInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutUserProfileNestedInput = {
    create?: XOR<UserCreateWithoutUserProfileInput, UserUncheckedCreateWithoutUserProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserProfileInput
    upsert?: UserUpsertWithoutUserProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserProfileInput, UserUpdateWithoutUserProfileInput>, UserUncheckedUpdateWithoutUserProfileInput>
  }

  export type UserCreateNestedOneWithoutRequestedBloodRequestsInput = {
    create?: XOR<UserCreateWithoutRequestedBloodRequestsInput, UserUncheckedCreateWithoutRequestedBloodRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestedBloodRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDonatedBloodRequestsInput = {
    create?: XOR<UserCreateWithoutDonatedBloodRequestsInput, UserUncheckedCreateWithoutDonatedBloodRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonatedBloodRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus
  }

  export type UserUpdateOneRequiredWithoutRequestedBloodRequestsNestedInput = {
    create?: XOR<UserCreateWithoutRequestedBloodRequestsInput, UserUncheckedCreateWithoutRequestedBloodRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestedBloodRequestsInput
    upsert?: UserUpsertWithoutRequestedBloodRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRequestedBloodRequestsInput, UserUpdateWithoutRequestedBloodRequestsInput>, UserUncheckedUpdateWithoutRequestedBloodRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutDonatedBloodRequestsNestedInput = {
    create?: XOR<UserCreateWithoutDonatedBloodRequestsInput, UserUncheckedCreateWithoutDonatedBloodRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonatedBloodRequestsInput
    upsert?: UserUpsertWithoutDonatedBloodRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDonatedBloodRequestsInput, UserUpdateWithoutDonatedBloodRequestsInput>, UserUncheckedUpdateWithoutDonatedBloodRequestsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type BloodRequestCreateWithoutDonorInput = {
    id?: string
    phoneNumber: string
    dateOfDonation: string
    hospitalName: string
    hospitalAddress: string
    reason: string
    requestStatus?: $Enums.RequestStatus
    createdAt?: Date | string
    updateAt?: Date | string
    requester: UserCreateNestedOneWithoutDonatedBloodRequestsInput
  }

  export type BloodRequestUncheckedCreateWithoutDonorInput = {
    id?: string
    requesterId: string
    phoneNumber: string
    dateOfDonation: string
    hospitalName: string
    hospitalAddress: string
    reason: string
    requestStatus?: $Enums.RequestStatus
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type BloodRequestCreateOrConnectWithoutDonorInput = {
    where: BloodRequestWhereUniqueInput
    create: XOR<BloodRequestCreateWithoutDonorInput, BloodRequestUncheckedCreateWithoutDonorInput>
  }

  export type BloodRequestCreateManyDonorInputEnvelope = {
    data: BloodRequestCreateManyDonorInput | BloodRequestCreateManyDonorInput[]
    skipDuplicates?: boolean
  }

  export type BloodRequestCreateWithoutRequesterInput = {
    id?: string
    phoneNumber: string
    dateOfDonation: string
    hospitalName: string
    hospitalAddress: string
    reason: string
    requestStatus?: $Enums.RequestStatus
    createdAt?: Date | string
    updateAt?: Date | string
    donor: UserCreateNestedOneWithoutRequestedBloodRequestsInput
  }

  export type BloodRequestUncheckedCreateWithoutRequesterInput = {
    id?: string
    donorId: string
    phoneNumber: string
    dateOfDonation: string
    hospitalName: string
    hospitalAddress: string
    reason: string
    requestStatus?: $Enums.RequestStatus
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type BloodRequestCreateOrConnectWithoutRequesterInput = {
    where: BloodRequestWhereUniqueInput
    create: XOR<BloodRequestCreateWithoutRequesterInput, BloodRequestUncheckedCreateWithoutRequesterInput>
  }

  export type BloodRequestCreateManyRequesterInputEnvelope = {
    data: BloodRequestCreateManyRequesterInput | BloodRequestCreateManyRequesterInput[]
    skipDuplicates?: boolean
  }

  export type UserProfileCreateWithoutUserInput = {
    id?: string
    bio: string
    age: number
    lastDonationDate: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type UserProfileUncheckedCreateWithoutUserInput = {
    id?: string
    bio: string
    age: number
    lastDonationDate: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type UserProfileCreateOrConnectWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type BloodRequestUpsertWithWhereUniqueWithoutDonorInput = {
    where: BloodRequestWhereUniqueInput
    update: XOR<BloodRequestUpdateWithoutDonorInput, BloodRequestUncheckedUpdateWithoutDonorInput>
    create: XOR<BloodRequestCreateWithoutDonorInput, BloodRequestUncheckedCreateWithoutDonorInput>
  }

  export type BloodRequestUpdateWithWhereUniqueWithoutDonorInput = {
    where: BloodRequestWhereUniqueInput
    data: XOR<BloodRequestUpdateWithoutDonorInput, BloodRequestUncheckedUpdateWithoutDonorInput>
  }

  export type BloodRequestUpdateManyWithWhereWithoutDonorInput = {
    where: BloodRequestScalarWhereInput
    data: XOR<BloodRequestUpdateManyMutationInput, BloodRequestUncheckedUpdateManyWithoutDonorInput>
  }

  export type BloodRequestScalarWhereInput = {
    AND?: BloodRequestScalarWhereInput | BloodRequestScalarWhereInput[]
    OR?: BloodRequestScalarWhereInput[]
    NOT?: BloodRequestScalarWhereInput | BloodRequestScalarWhereInput[]
    id?: StringFilter<"BloodRequest"> | string
    donorId?: StringFilter<"BloodRequest"> | string
    requesterId?: StringFilter<"BloodRequest"> | string
    phoneNumber?: StringFilter<"BloodRequest"> | string
    dateOfDonation?: StringFilter<"BloodRequest"> | string
    hospitalName?: StringFilter<"BloodRequest"> | string
    hospitalAddress?: StringFilter<"BloodRequest"> | string
    reason?: StringFilter<"BloodRequest"> | string
    requestStatus?: EnumRequestStatusFilter<"BloodRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"BloodRequest"> | Date | string
    updateAt?: DateTimeFilter<"BloodRequest"> | Date | string
  }

  export type BloodRequestUpsertWithWhereUniqueWithoutRequesterInput = {
    where: BloodRequestWhereUniqueInput
    update: XOR<BloodRequestUpdateWithoutRequesterInput, BloodRequestUncheckedUpdateWithoutRequesterInput>
    create: XOR<BloodRequestCreateWithoutRequesterInput, BloodRequestUncheckedCreateWithoutRequesterInput>
  }

  export type BloodRequestUpdateWithWhereUniqueWithoutRequesterInput = {
    where: BloodRequestWhereUniqueInput
    data: XOR<BloodRequestUpdateWithoutRequesterInput, BloodRequestUncheckedUpdateWithoutRequesterInput>
  }

  export type BloodRequestUpdateManyWithWhereWithoutRequesterInput = {
    where: BloodRequestScalarWhereInput
    data: XOR<BloodRequestUpdateManyMutationInput, BloodRequestUncheckedUpdateManyWithoutRequesterInput>
  }

  export type UserProfileUpsertWithoutUserInput = {
    update: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    lastDonationDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    lastDonationDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutUserProfileInput = {
    id?: string
    name: string
    email: string
    password: string
    bloodType: string
    location: string
    availability?: boolean
    createdAt?: Date | string
    updateAt?: Date | string
    requestedBloodRequests?: BloodRequestCreateNestedManyWithoutDonorInput
    donatedBloodRequests?: BloodRequestCreateNestedManyWithoutRequesterInput
  }

  export type UserUncheckedCreateWithoutUserProfileInput = {
    id?: string
    name: string
    email: string
    password: string
    bloodType: string
    location: string
    availability?: boolean
    createdAt?: Date | string
    updateAt?: Date | string
    requestedBloodRequests?: BloodRequestUncheckedCreateNestedManyWithoutDonorInput
    donatedBloodRequests?: BloodRequestUncheckedCreateNestedManyWithoutRequesterInput
  }

  export type UserCreateOrConnectWithoutUserProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserProfileInput, UserUncheckedCreateWithoutUserProfileInput>
  }

  export type UserUpsertWithoutUserProfileInput = {
    update: XOR<UserUpdateWithoutUserProfileInput, UserUncheckedUpdateWithoutUserProfileInput>
    create: XOR<UserCreateWithoutUserProfileInput, UserUncheckedCreateWithoutUserProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserProfileInput, UserUncheckedUpdateWithoutUserProfileInput>
  }

  export type UserUpdateWithoutUserProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bloodType?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestedBloodRequests?: BloodRequestUpdateManyWithoutDonorNestedInput
    donatedBloodRequests?: BloodRequestUpdateManyWithoutRequesterNestedInput
  }

  export type UserUncheckedUpdateWithoutUserProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bloodType?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestedBloodRequests?: BloodRequestUncheckedUpdateManyWithoutDonorNestedInput
    donatedBloodRequests?: BloodRequestUncheckedUpdateManyWithoutRequesterNestedInput
  }

  export type UserCreateWithoutRequestedBloodRequestsInput = {
    id?: string
    name: string
    email: string
    password: string
    bloodType: string
    location: string
    availability?: boolean
    createdAt?: Date | string
    updateAt?: Date | string
    donatedBloodRequests?: BloodRequestCreateNestedManyWithoutRequesterInput
    userProfile?: UserProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRequestedBloodRequestsInput = {
    id?: string
    name: string
    email: string
    password: string
    bloodType: string
    location: string
    availability?: boolean
    createdAt?: Date | string
    updateAt?: Date | string
    donatedBloodRequests?: BloodRequestUncheckedCreateNestedManyWithoutRequesterInput
    userProfile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRequestedBloodRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRequestedBloodRequestsInput, UserUncheckedCreateWithoutRequestedBloodRequestsInput>
  }

  export type UserCreateWithoutDonatedBloodRequestsInput = {
    id?: string
    name: string
    email: string
    password: string
    bloodType: string
    location: string
    availability?: boolean
    createdAt?: Date | string
    updateAt?: Date | string
    requestedBloodRequests?: BloodRequestCreateNestedManyWithoutDonorInput
    userProfile?: UserProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDonatedBloodRequestsInput = {
    id?: string
    name: string
    email: string
    password: string
    bloodType: string
    location: string
    availability?: boolean
    createdAt?: Date | string
    updateAt?: Date | string
    requestedBloodRequests?: BloodRequestUncheckedCreateNestedManyWithoutDonorInput
    userProfile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDonatedBloodRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDonatedBloodRequestsInput, UserUncheckedCreateWithoutDonatedBloodRequestsInput>
  }

  export type UserUpsertWithoutRequestedBloodRequestsInput = {
    update: XOR<UserUpdateWithoutRequestedBloodRequestsInput, UserUncheckedUpdateWithoutRequestedBloodRequestsInput>
    create: XOR<UserCreateWithoutRequestedBloodRequestsInput, UserUncheckedCreateWithoutRequestedBloodRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRequestedBloodRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRequestedBloodRequestsInput, UserUncheckedUpdateWithoutRequestedBloodRequestsInput>
  }

  export type UserUpdateWithoutRequestedBloodRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bloodType?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donatedBloodRequests?: BloodRequestUpdateManyWithoutRequesterNestedInput
    userProfile?: UserProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRequestedBloodRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bloodType?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donatedBloodRequests?: BloodRequestUncheckedUpdateManyWithoutRequesterNestedInput
    userProfile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUpsertWithoutDonatedBloodRequestsInput = {
    update: XOR<UserUpdateWithoutDonatedBloodRequestsInput, UserUncheckedUpdateWithoutDonatedBloodRequestsInput>
    create: XOR<UserCreateWithoutDonatedBloodRequestsInput, UserUncheckedCreateWithoutDonatedBloodRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDonatedBloodRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDonatedBloodRequestsInput, UserUncheckedUpdateWithoutDonatedBloodRequestsInput>
  }

  export type UserUpdateWithoutDonatedBloodRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bloodType?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestedBloodRequests?: BloodRequestUpdateManyWithoutDonorNestedInput
    userProfile?: UserProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDonatedBloodRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bloodType?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestedBloodRequests?: BloodRequestUncheckedUpdateManyWithoutDonorNestedInput
    userProfile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type BloodRequestCreateManyDonorInput = {
    id?: string
    requesterId: string
    phoneNumber: string
    dateOfDonation: string
    hospitalName: string
    hospitalAddress: string
    reason: string
    requestStatus?: $Enums.RequestStatus
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type BloodRequestCreateManyRequesterInput = {
    id?: string
    donorId: string
    phoneNumber: string
    dateOfDonation: string
    hospitalName: string
    hospitalAddress: string
    reason: string
    requestStatus?: $Enums.RequestStatus
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type BloodRequestUpdateWithoutDonorInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    dateOfDonation?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    hospitalAddress?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    requestStatus?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requester?: UserUpdateOneRequiredWithoutDonatedBloodRequestsNestedInput
  }

  export type BloodRequestUncheckedUpdateWithoutDonorInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    dateOfDonation?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    hospitalAddress?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    requestStatus?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloodRequestUncheckedUpdateManyWithoutDonorInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    dateOfDonation?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    hospitalAddress?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    requestStatus?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloodRequestUpdateWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    dateOfDonation?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    hospitalAddress?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    requestStatus?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donor?: UserUpdateOneRequiredWithoutRequestedBloodRequestsNestedInput
  }

  export type BloodRequestUncheckedUpdateWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    donorId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    dateOfDonation?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    hospitalAddress?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    requestStatus?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloodRequestUncheckedUpdateManyWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    donorId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    dateOfDonation?: StringFieldUpdateOperationsInput | string
    hospitalName?: StringFieldUpdateOperationsInput | string
    hospitalAddress?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    requestStatus?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserProfileDefaultArgs instead
     */
    export type UserProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BloodRequestDefaultArgs instead
     */
    export type BloodRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BloodRequestDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}