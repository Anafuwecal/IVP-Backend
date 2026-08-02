/**
 * Client
 **/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model SystemHealth
 *
 */
export type SystemHealth =
  $Result.DefaultSelection<Prisma.$SystemHealthPayload>;
/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model TalentProfile
 *
 */
export type TalentProfile =
  $Result.DefaultSelection<Prisma.$TalentProfilePayload>;
/**
 * Model EmployerProfile
 *
 */
export type EmployerProfile =
  $Result.DefaultSelection<Prisma.$EmployerProfilePayload>;
/**
 * Model Job
 *
 */
export type Job = $Result.DefaultSelection<Prisma.$JobPayload>;
/**
 * Model Application
 *
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>;
/**
 * Model SubscriptionPlan
 *
 */
export type SubscriptionPlan =
  $Result.DefaultSelection<Prisma.$SubscriptionPlanPayload>;
/**
 * Model Subscription
 *
 */
export type Subscription =
  $Result.DefaultSelection<Prisma.$SubscriptionPayload>;
/**
 * Model Payment
 *
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
    ADMIN: 'ADMIN';
    TALENT: 'TALENT';
    EMPLOYER: 'EMPLOYER';
  };

  export type Role = (typeof Role)[keyof typeof Role];

  export const ApplicationStatus: {
    PENDING: 'PENDING';
    REVIEWING: 'REVIEWING';
    ACCEPTED: 'ACCEPTED';
    REJECTED: 'REJECTED';
  };

  export type ApplicationStatus =
    (typeof ApplicationStatus)[keyof typeof ApplicationStatus];

  export const SubscriptionStatus: {
    ACTIVE: 'ACTIVE';
    CANCELED: 'CANCELED';
    PAST_DUE: 'PAST_DUE';
  };

  export type SubscriptionStatus =
    (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus];

  export const PaymentStatus: {
    PENDING: 'PENDING';
    COMPLETED: 'COMPLETED';
    FAILED: 'FAILED';
  };

  export type PaymentStatus =
    (typeof PaymentStatus)[keyof typeof PaymentStatus];
}

export type Role = $Enums.Role;

export const Role: typeof $Enums.Role;

export type ApplicationStatus = $Enums.ApplicationStatus;

export const ApplicationStatus: typeof $Enums.ApplicationStatus;

export type SubscriptionStatus = $Enums.SubscriptionStatus;

export const SubscriptionStatus: typeof $Enums.SubscriptionStatus;

export type PaymentStatus = $Enums.PaymentStatus;

export const PaymentStatus: typeof $Enums.PaymentStatus;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more SystemHealths
 * const systemHealths = await prisma.systemHealth.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more SystemHealths
   * const systemHealths = await prisma.systemHealth.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.systemHealth`: Exposes CRUD operations for the **SystemHealth** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more SystemHealths
   * const systemHealths = await prisma.systemHealth.findMany()
   * ```
   */
  get systemHealth(): Prisma.SystemHealthDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.talentProfile`: Exposes CRUD operations for the **TalentProfile** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more TalentProfiles
   * const talentProfiles = await prisma.talentProfile.findMany()
   * ```
   */
  get talentProfile(): Prisma.TalentProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employerProfile`: Exposes CRUD operations for the **EmployerProfile** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more EmployerProfiles
   * const employerProfiles = await prisma.employerProfile.findMany()
   * ```
   */
  get employerProfile(): Prisma.EmployerProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.job`: Exposes CRUD operations for the **Job** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Jobs
   * const jobs = await prisma.job.findMany()
   * ```
   */
  get job(): Prisma.JobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Applications
   * const applications = await prisma.application.findMany()
   * ```
   */
  get application(): Prisma.ApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscriptionPlan`: Exposes CRUD operations for the **SubscriptionPlan** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more SubscriptionPlans
   * const subscriptionPlans = await prisma.subscriptionPlan.findMany()
   * ```
   */
  get subscriptionPlan(): Prisma.SubscriptionPlanDelegate<
    ExtArgs,
    ClientOptions
  >;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Subscriptions
   * const subscriptions = await prisma.subscription.findMany()
   * ```
   */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Payments
   * const payments = await prisma.payment.findMany()
   * ```
   */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string;
    engine: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import Bytes = runtime.Bytes;
  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends bigint
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
        | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    SystemHealth: 'SystemHealth';
    User: 'User';
    TalentProfile: 'TalentProfile';
    EmployerProfile: 'EmployerProfile';
    Job: 'Job';
    Application: 'Application';
    SubscriptionPlan: 'SubscriptionPlan';
    Subscription: 'Subscription';
    Payment: 'Payment';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<
    { extArgs: $Extensions.InternalArgs },
    $Utils.Record<string, any>
  > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | 'systemHealth'
        | 'user'
        | 'talentProfile'
        | 'employerProfile'
        | 'job'
        | 'application'
        | 'subscriptionPlan'
        | 'subscription'
        | 'payment';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      SystemHealth: {
        payload: Prisma.$SystemHealthPayload<ExtArgs>;
        fields: Prisma.SystemHealthFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.SystemHealthFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SystemHealthPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.SystemHealthFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SystemHealthPayload>;
          };
          findFirst: {
            args: Prisma.SystemHealthFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SystemHealthPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.SystemHealthFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SystemHealthPayload>;
          };
          findMany: {
            args: Prisma.SystemHealthFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SystemHealthPayload>[];
          };
          create: {
            args: Prisma.SystemHealthCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SystemHealthPayload>;
          };
          createMany: {
            args: Prisma.SystemHealthCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.SystemHealthCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SystemHealthPayload>[];
          };
          delete: {
            args: Prisma.SystemHealthDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SystemHealthPayload>;
          };
          update: {
            args: Prisma.SystemHealthUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SystemHealthPayload>;
          };
          deleteMany: {
            args: Prisma.SystemHealthDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.SystemHealthUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.SystemHealthUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SystemHealthPayload>[];
          };
          upsert: {
            args: Prisma.SystemHealthUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SystemHealthPayload>;
          };
          aggregate: {
            args: Prisma.SystemHealthAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSystemHealth>;
          };
          groupBy: {
            args: Prisma.SystemHealthGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SystemHealthGroupByOutputType>[];
          };
          count: {
            args: Prisma.SystemHealthCountArgs<ExtArgs>;
            result:
              $Utils.Optional<SystemHealthCountAggregateOutputType> | number;
          };
        };
      };
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      TalentProfile: {
        payload: Prisma.$TalentProfilePayload<ExtArgs>;
        fields: Prisma.TalentProfileFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TalentProfileFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TalentProfilePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TalentProfileFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TalentProfilePayload>;
          };
          findFirst: {
            args: Prisma.TalentProfileFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TalentProfilePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.TalentProfileFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TalentProfilePayload>;
          };
          findMany: {
            args: Prisma.TalentProfileFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TalentProfilePayload>[];
          };
          create: {
            args: Prisma.TalentProfileCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TalentProfilePayload>;
          };
          createMany: {
            args: Prisma.TalentProfileCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.TalentProfileCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TalentProfilePayload>[];
          };
          delete: {
            args: Prisma.TalentProfileDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TalentProfilePayload>;
          };
          update: {
            args: Prisma.TalentProfileUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TalentProfilePayload>;
          };
          deleteMany: {
            args: Prisma.TalentProfileDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.TalentProfileUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.TalentProfileUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TalentProfilePayload>[];
          };
          upsert: {
            args: Prisma.TalentProfileUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TalentProfilePayload>;
          };
          aggregate: {
            args: Prisma.TalentProfileAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTalentProfile>;
          };
          groupBy: {
            args: Prisma.TalentProfileGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TalentProfileGroupByOutputType>[];
          };
          count: {
            args: Prisma.TalentProfileCountArgs<ExtArgs>;
            result:
              $Utils.Optional<TalentProfileCountAggregateOutputType> | number;
          };
        };
      };
      EmployerProfile: {
        payload: Prisma.$EmployerProfilePayload<ExtArgs>;
        fields: Prisma.EmployerProfileFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.EmployerProfileFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmployerProfilePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.EmployerProfileFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmployerProfilePayload>;
          };
          findFirst: {
            args: Prisma.EmployerProfileFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmployerProfilePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.EmployerProfileFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmployerProfilePayload>;
          };
          findMany: {
            args: Prisma.EmployerProfileFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmployerProfilePayload>[];
          };
          create: {
            args: Prisma.EmployerProfileCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmployerProfilePayload>;
          };
          createMany: {
            args: Prisma.EmployerProfileCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.EmployerProfileCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmployerProfilePayload>[];
          };
          delete: {
            args: Prisma.EmployerProfileDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmployerProfilePayload>;
          };
          update: {
            args: Prisma.EmployerProfileUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmployerProfilePayload>;
          };
          deleteMany: {
            args: Prisma.EmployerProfileDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.EmployerProfileUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.EmployerProfileUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmployerProfilePayload>[];
          };
          upsert: {
            args: Prisma.EmployerProfileUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EmployerProfilePayload>;
          };
          aggregate: {
            args: Prisma.EmployerProfileAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateEmployerProfile>;
          };
          groupBy: {
            args: Prisma.EmployerProfileGroupByArgs<ExtArgs>;
            result: $Utils.Optional<EmployerProfileGroupByOutputType>[];
          };
          count: {
            args: Prisma.EmployerProfileCountArgs<ExtArgs>;
            result:
              $Utils.Optional<EmployerProfileCountAggregateOutputType> | number;
          };
        };
      };
      Job: {
        payload: Prisma.$JobPayload<ExtArgs>;
        fields: Prisma.JobFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.JobFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.JobFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload>;
          };
          findFirst: {
            args: Prisma.JobFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.JobFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload>;
          };
          findMany: {
            args: Prisma.JobFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[];
          };
          create: {
            args: Prisma.JobCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload>;
          };
          createMany: {
            args: Prisma.JobCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.JobCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[];
          };
          delete: {
            args: Prisma.JobDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload>;
          };
          update: {
            args: Prisma.JobUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload>;
          };
          deleteMany: {
            args: Prisma.JobDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.JobUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.JobUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[];
          };
          upsert: {
            args: Prisma.JobUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload>;
          };
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateJob>;
          };
          groupBy: {
            args: Prisma.JobGroupByArgs<ExtArgs>;
            result: $Utils.Optional<JobGroupByOutputType>[];
          };
          count: {
            args: Prisma.JobCountArgs<ExtArgs>;
            result: $Utils.Optional<JobCountAggregateOutputType> | number;
          };
        };
      };
      Application: {
        payload: Prisma.$ApplicationPayload<ExtArgs>;
        fields: Prisma.ApplicationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ApplicationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>;
          };
          findFirst: {
            args: Prisma.ApplicationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>;
          };
          findMany: {
            args: Prisma.ApplicationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[];
          };
          create: {
            args: Prisma.ApplicationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>;
          };
          createMany: {
            args: Prisma.ApplicationCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ApplicationCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[];
          };
          delete: {
            args: Prisma.ApplicationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>;
          };
          update: {
            args: Prisma.ApplicationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>;
          };
          deleteMany: {
            args: Prisma.ApplicationDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ApplicationUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ApplicationUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[];
          };
          upsert: {
            args: Prisma.ApplicationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>;
          };
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateApplication>;
          };
          groupBy: {
            args: Prisma.ApplicationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ApplicationGroupByOutputType>[];
          };
          count: {
            args: Prisma.ApplicationCountArgs<ExtArgs>;
            result:
              $Utils.Optional<ApplicationCountAggregateOutputType> | number;
          };
        };
      };
      SubscriptionPlan: {
        payload: Prisma.$SubscriptionPlanPayload<ExtArgs>;
        fields: Prisma.SubscriptionPlanFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.SubscriptionPlanFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.SubscriptionPlanFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>;
          };
          findFirst: {
            args: Prisma.SubscriptionPlanFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.SubscriptionPlanFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>;
          };
          findMany: {
            args: Prisma.SubscriptionPlanFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>[];
          };
          create: {
            args: Prisma.SubscriptionPlanCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>;
          };
          createMany: {
            args: Prisma.SubscriptionPlanCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.SubscriptionPlanCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>[];
          };
          delete: {
            args: Prisma.SubscriptionPlanDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>;
          };
          update: {
            args: Prisma.SubscriptionPlanUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>;
          };
          deleteMany: {
            args: Prisma.SubscriptionPlanDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.SubscriptionPlanUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.SubscriptionPlanUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>[];
          };
          upsert: {
            args: Prisma.SubscriptionPlanUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>;
          };
          aggregate: {
            args: Prisma.SubscriptionPlanAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSubscriptionPlan>;
          };
          groupBy: {
            args: Prisma.SubscriptionPlanGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SubscriptionPlanGroupByOutputType>[];
          };
          count: {
            args: Prisma.SubscriptionPlanCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<SubscriptionPlanCountAggregateOutputType>
              | number;
          };
        };
      };
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>;
        fields: Prisma.SubscriptionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
          };
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
          };
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[];
          };
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
          };
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[];
          };
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
          };
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
          };
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[];
          };
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>;
          };
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSubscription>;
          };
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SubscriptionGroupByOutputType>[];
          };
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>;
            result:
              $Utils.Optional<SubscriptionCountAggregateOutputType> | number;
          };
        };
      };
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>;
        fields: Prisma.PaymentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>;
          };
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>;
          };
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[];
          };
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>;
          };
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[];
          };
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>;
          };
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>;
          };
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[];
          };
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>;
          };
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePayment>;
          };
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PaymentGroupByOutputType>[];
          };
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>;
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory;
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string;
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
  }
  export type GlobalOmitConfig = {
    systemHealth?: SystemHealthOmit;
    user?: UserOmit;
    talentProfile?: TalentProfileOmit;
    employerProfile?: EmployerProfileOmit;
    job?: JobOmit;
    application?: ApplicationOmit;
    subscriptionPlan?: SubscriptionPlanOmit;
    subscription?: SubscriptionOmit;
    payment?: PaymentOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type TalentProfileCountOutputType
   */

  export type TalentProfileCountOutputType = {
    applications: number;
  };

  export type TalentProfileCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    applications?: boolean | TalentProfileCountOutputTypeCountApplicationsArgs;
  };

  // Custom InputTypes
  /**
   * TalentProfileCountOutputType without action
   */
  export type TalentProfileCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TalentProfileCountOutputType
     */
    select?: TalentProfileCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * TalentProfileCountOutputType without action
   */
  export type TalentProfileCountOutputTypeCountApplicationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ApplicationWhereInput;
  };

  /**
   * Count Type EmployerProfileCountOutputType
   */

  export type EmployerProfileCountOutputType = {
    jobs: number;
    subscriptions: number;
  };

  export type EmployerProfileCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    jobs?: boolean | EmployerProfileCountOutputTypeCountJobsArgs;
    subscriptions?:
      boolean | EmployerProfileCountOutputTypeCountSubscriptionsArgs;
  };

  // Custom InputTypes
  /**
   * EmployerProfileCountOutputType without action
   */
  export type EmployerProfileCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmployerProfileCountOutputType
     */
    select?: EmployerProfileCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * EmployerProfileCountOutputType without action
   */
  export type EmployerProfileCountOutputTypeCountJobsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: JobWhereInput;
  };

  /**
   * EmployerProfileCountOutputType without action
   */
  export type EmployerProfileCountOutputTypeCountSubscriptionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SubscriptionWhereInput;
  };

  /**
   * Count Type JobCountOutputType
   */

  export type JobCountOutputType = {
    applications: number;
  };

  export type JobCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    applications?: boolean | JobCountOutputTypeCountApplicationsArgs;
  };

  // Custom InputTypes
  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobCountOutputType
     */
    select?: JobCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountApplicationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ApplicationWhereInput;
  };

  /**
   * Count Type SubscriptionPlanCountOutputType
   */

  export type SubscriptionPlanCountOutputType = {
    subscriptions: number;
  };

  export type SubscriptionPlanCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    subscriptions?:
      boolean | SubscriptionPlanCountOutputTypeCountSubscriptionsArgs;
  };

  // Custom InputTypes
  /**
   * SubscriptionPlanCountOutputType without action
   */
  export type SubscriptionPlanCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPlanCountOutputType
     */
    select?: SubscriptionPlanCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * SubscriptionPlanCountOutputType without action
   */
  export type SubscriptionPlanCountOutputTypeCountSubscriptionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SubscriptionWhereInput;
  };

  /**
   * Count Type SubscriptionCountOutputType
   */

  export type SubscriptionCountOutputType = {
    payments: number;
  };

  export type SubscriptionCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    payments?: boolean | SubscriptionCountOutputTypeCountPaymentsArgs;
  };

  // Custom InputTypes
  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionCountOutputType
     */
    select?: SubscriptionCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeCountPaymentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PaymentWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model SystemHealth
   */

  export type AggregateSystemHealth = {
    _count: SystemHealthCountAggregateOutputType | null;
    _min: SystemHealthMinAggregateOutputType | null;
    _max: SystemHealthMaxAggregateOutputType | null;
  };

  export type SystemHealthMinAggregateOutputType = {
    id: string | null;
    checkedAt: Date | null;
  };

  export type SystemHealthMaxAggregateOutputType = {
    id: string | null;
    checkedAt: Date | null;
  };

  export type SystemHealthCountAggregateOutputType = {
    id: number;
    checkedAt: number;
    _all: number;
  };

  export type SystemHealthMinAggregateInputType = {
    id?: true;
    checkedAt?: true;
  };

  export type SystemHealthMaxAggregateInputType = {
    id?: true;
    checkedAt?: true;
  };

  export type SystemHealthCountAggregateInputType = {
    id?: true;
    checkedAt?: true;
    _all?: true;
  };

  export type SystemHealthAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which SystemHealth to aggregate.
     */
    where?: SystemHealthWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SystemHealths to fetch.
     */
    orderBy?:
      | SystemHealthOrderByWithRelationInput
      | SystemHealthOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: SystemHealthWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SystemHealths from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SystemHealths.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SystemHealths
     **/
    _count?: true | SystemHealthCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SystemHealthMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SystemHealthMaxAggregateInputType;
  };

  export type GetSystemHealthAggregateType<
    T extends SystemHealthAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateSystemHealth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemHealth[P]>
      : GetScalarType<T[P], AggregateSystemHealth[P]>;
  };

  export type SystemHealthGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SystemHealthWhereInput;
    orderBy?:
      | SystemHealthOrderByWithAggregationInput
      | SystemHealthOrderByWithAggregationInput[];
    by: SystemHealthScalarFieldEnum[] | SystemHealthScalarFieldEnum;
    having?: SystemHealthScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SystemHealthCountAggregateInputType | true;
    _min?: SystemHealthMinAggregateInputType;
    _max?: SystemHealthMaxAggregateInputType;
  };

  export type SystemHealthGroupByOutputType = {
    id: string;
    checkedAt: Date;
    _count: SystemHealthCountAggregateOutputType | null;
    _min: SystemHealthMinAggregateOutputType | null;
    _max: SystemHealthMaxAggregateOutputType | null;
  };

  type GetSystemHealthGroupByPayload<T extends SystemHealthGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<SystemHealthGroupByOutputType, T['by']> & {
          [
            P in keyof T & keyof SystemHealthGroupByOutputType
          ]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemHealthGroupByOutputType[P]>
            : GetScalarType<T[P], SystemHealthGroupByOutputType[P]>;
        }
      >
    >;

  export type SystemHealthSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      checkedAt?: boolean;
    },
    ExtArgs['result']['systemHealth']
  >;

  export type SystemHealthSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      checkedAt?: boolean;
    },
    ExtArgs['result']['systemHealth']
  >;

  export type SystemHealthSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      checkedAt?: boolean;
    },
    ExtArgs['result']['systemHealth']
  >;

  export type SystemHealthSelectScalar = {
    id?: boolean;
    checkedAt?: boolean;
  };

  export type SystemHealthOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'checkedAt',
    ExtArgs['result']['systemHealth']
  >;

  export type $SystemHealthPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'SystemHealth';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        checkedAt: Date;
      },
      ExtArgs['result']['systemHealth']
    >;
    composites: {};
  };

  type SystemHealthGetPayload<
    S extends boolean | null | undefined | SystemHealthDefaultArgs,
  > = $Result.GetResult<Prisma.$SystemHealthPayload, S>;

  type SystemHealthCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    SystemHealthFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: SystemHealthCountAggregateInputType | true;
  };

  export interface SystemHealthDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['SystemHealth'];
      meta: { name: 'SystemHealth' };
    };
    /**
     * Find zero or one SystemHealth that matches the filter.
     * @param {SystemHealthFindUniqueArgs} args - Arguments to find a SystemHealth
     * @example
     * // Get one SystemHealth
     * const systemHealth = await prisma.systemHealth.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemHealthFindUniqueArgs>(
      args: SelectSubset<T, SystemHealthFindUniqueArgs<ExtArgs>>,
    ): Prisma__SystemHealthClient<
      $Result.GetResult<
        Prisma.$SystemHealthPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one SystemHealth that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemHealthFindUniqueOrThrowArgs} args - Arguments to find a SystemHealth
     * @example
     * // Get one SystemHealth
     * const systemHealth = await prisma.systemHealth.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemHealthFindUniqueOrThrowArgs>(
      args: SelectSubset<T, SystemHealthFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__SystemHealthClient<
      $Result.GetResult<
        Prisma.$SystemHealthPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first SystemHealth that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemHealthFindFirstArgs} args - Arguments to find a SystemHealth
     * @example
     * // Get one SystemHealth
     * const systemHealth = await prisma.systemHealth.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemHealthFindFirstArgs>(
      args?: SelectSubset<T, SystemHealthFindFirstArgs<ExtArgs>>,
    ): Prisma__SystemHealthClient<
      $Result.GetResult<
        Prisma.$SystemHealthPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first SystemHealth that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemHealthFindFirstOrThrowArgs} args - Arguments to find a SystemHealth
     * @example
     * // Get one SystemHealth
     * const systemHealth = await prisma.systemHealth.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemHealthFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SystemHealthFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__SystemHealthClient<
      $Result.GetResult<
        Prisma.$SystemHealthPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more SystemHealths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemHealthFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemHealths
     * const systemHealths = await prisma.systemHealth.findMany()
     *
     * // Get first 10 SystemHealths
     * const systemHealths = await prisma.systemHealth.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const systemHealthWithIdOnly = await prisma.systemHealth.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SystemHealthFindManyArgs>(
      args?: SelectSubset<T, SystemHealthFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SystemHealthPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a SystemHealth.
     * @param {SystemHealthCreateArgs} args - Arguments to create a SystemHealth.
     * @example
     * // Create one SystemHealth
     * const SystemHealth = await prisma.systemHealth.create({
     *   data: {
     *     // ... data to create a SystemHealth
     *   }
     * })
     *
     */
    create<T extends SystemHealthCreateArgs>(
      args: SelectSubset<T, SystemHealthCreateArgs<ExtArgs>>,
    ): Prisma__SystemHealthClient<
      $Result.GetResult<
        Prisma.$SystemHealthPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many SystemHealths.
     * @param {SystemHealthCreateManyArgs} args - Arguments to create many SystemHealths.
     * @example
     * // Create many SystemHealths
     * const systemHealth = await prisma.systemHealth.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SystemHealthCreateManyArgs>(
      args?: SelectSubset<T, SystemHealthCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many SystemHealths and returns the data saved in the database.
     * @param {SystemHealthCreateManyAndReturnArgs} args - Arguments to create many SystemHealths.
     * @example
     * // Create many SystemHealths
     * const systemHealth = await prisma.systemHealth.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SystemHealths and only return the `id`
     * const systemHealthWithIdOnly = await prisma.systemHealth.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SystemHealthCreateManyAndReturnArgs>(
      args?: SelectSubset<T, SystemHealthCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SystemHealthPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a SystemHealth.
     * @param {SystemHealthDeleteArgs} args - Arguments to delete one SystemHealth.
     * @example
     * // Delete one SystemHealth
     * const SystemHealth = await prisma.systemHealth.delete({
     *   where: {
     *     // ... filter to delete one SystemHealth
     *   }
     * })
     *
     */
    delete<T extends SystemHealthDeleteArgs>(
      args: SelectSubset<T, SystemHealthDeleteArgs<ExtArgs>>,
    ): Prisma__SystemHealthClient<
      $Result.GetResult<
        Prisma.$SystemHealthPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one SystemHealth.
     * @param {SystemHealthUpdateArgs} args - Arguments to update one SystemHealth.
     * @example
     * // Update one SystemHealth
     * const systemHealth = await prisma.systemHealth.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SystemHealthUpdateArgs>(
      args: SelectSubset<T, SystemHealthUpdateArgs<ExtArgs>>,
    ): Prisma__SystemHealthClient<
      $Result.GetResult<
        Prisma.$SystemHealthPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more SystemHealths.
     * @param {SystemHealthDeleteManyArgs} args - Arguments to filter SystemHealths to delete.
     * @example
     * // Delete a few SystemHealths
     * const { count } = await prisma.systemHealth.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SystemHealthDeleteManyArgs>(
      args?: SelectSubset<T, SystemHealthDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more SystemHealths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemHealthUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemHealths
     * const systemHealth = await prisma.systemHealth.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SystemHealthUpdateManyArgs>(
      args: SelectSubset<T, SystemHealthUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more SystemHealths and returns the data updated in the database.
     * @param {SystemHealthUpdateManyAndReturnArgs} args - Arguments to update many SystemHealths.
     * @example
     * // Update many SystemHealths
     * const systemHealth = await prisma.systemHealth.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SystemHealths and only return the `id`
     * const systemHealthWithIdOnly = await prisma.systemHealth.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends SystemHealthUpdateManyAndReturnArgs>(
      args: SelectSubset<T, SystemHealthUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SystemHealthPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one SystemHealth.
     * @param {SystemHealthUpsertArgs} args - Arguments to update or create a SystemHealth.
     * @example
     * // Update or create a SystemHealth
     * const systemHealth = await prisma.systemHealth.upsert({
     *   create: {
     *     // ... data to create a SystemHealth
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemHealth we want to update
     *   }
     * })
     */
    upsert<T extends SystemHealthUpsertArgs>(
      args: SelectSubset<T, SystemHealthUpsertArgs<ExtArgs>>,
    ): Prisma__SystemHealthClient<
      $Result.GetResult<
        Prisma.$SystemHealthPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of SystemHealths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemHealthCountArgs} args - Arguments to filter SystemHealths to count.
     * @example
     * // Count the number of SystemHealths
     * const count = await prisma.systemHealth.count({
     *   where: {
     *     // ... the filter for the SystemHealths we want to count
     *   }
     * })
     **/
    count<T extends SystemHealthCountArgs>(
      args?: Subset<T, SystemHealthCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemHealthCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a SystemHealth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemHealthAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SystemHealthAggregateArgs>(
      args: Subset<T, SystemHealthAggregateArgs>,
    ): Prisma.PrismaPromise<GetSystemHealthAggregateType<T>>;

    /**
     * Group by SystemHealth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemHealthGroupByArgs} args - Group by arguments.
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
      T extends SystemHealthGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends (True extends HasSelectOrTake
        ? { orderBy: SystemHealthGroupByArgs['orderBy'] }
        : { orderBy?: SystemHealthGroupByArgs['orderBy'] }),
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends (T['by'] extends never[] ? True : False),
      InputErrors extends (ByEmpty extends True
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]),
    >(
      args: SubsetIntersection<T, SystemHealthGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetSystemHealthGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the SystemHealth model
     */
    readonly fields: SystemHealthFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemHealth.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemHealthClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the SystemHealth model
   */
  interface SystemHealthFieldRefs {
    readonly id: FieldRef<'SystemHealth', 'String'>;
    readonly checkedAt: FieldRef<'SystemHealth', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * SystemHealth findUnique
   */
  export type SystemHealthFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SystemHealth
     */
    select?: SystemHealthSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SystemHealth
     */
    omit?: SystemHealthOmit<ExtArgs> | null;
    /**
     * Filter, which SystemHealth to fetch.
     */
    where: SystemHealthWhereUniqueInput;
  };

  /**
   * SystemHealth findUniqueOrThrow
   */
  export type SystemHealthFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SystemHealth
     */
    select?: SystemHealthSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SystemHealth
     */
    omit?: SystemHealthOmit<ExtArgs> | null;
    /**
     * Filter, which SystemHealth to fetch.
     */
    where: SystemHealthWhereUniqueInput;
  };

  /**
   * SystemHealth findFirst
   */
  export type SystemHealthFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SystemHealth
     */
    select?: SystemHealthSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SystemHealth
     */
    omit?: SystemHealthOmit<ExtArgs> | null;
    /**
     * Filter, which SystemHealth to fetch.
     */
    where?: SystemHealthWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SystemHealths to fetch.
     */
    orderBy?:
      | SystemHealthOrderByWithRelationInput
      | SystemHealthOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SystemHealths.
     */
    cursor?: SystemHealthWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SystemHealths from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SystemHealths.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SystemHealths.
     */
    distinct?: SystemHealthScalarFieldEnum | SystemHealthScalarFieldEnum[];
  };

  /**
   * SystemHealth findFirstOrThrow
   */
  export type SystemHealthFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SystemHealth
     */
    select?: SystemHealthSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SystemHealth
     */
    omit?: SystemHealthOmit<ExtArgs> | null;
    /**
     * Filter, which SystemHealth to fetch.
     */
    where?: SystemHealthWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SystemHealths to fetch.
     */
    orderBy?:
      | SystemHealthOrderByWithRelationInput
      | SystemHealthOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SystemHealths.
     */
    cursor?: SystemHealthWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SystemHealths from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SystemHealths.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SystemHealths.
     */
    distinct?: SystemHealthScalarFieldEnum | SystemHealthScalarFieldEnum[];
  };

  /**
   * SystemHealth findMany
   */
  export type SystemHealthFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SystemHealth
     */
    select?: SystemHealthSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SystemHealth
     */
    omit?: SystemHealthOmit<ExtArgs> | null;
    /**
     * Filter, which SystemHealths to fetch.
     */
    where?: SystemHealthWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SystemHealths to fetch.
     */
    orderBy?:
      | SystemHealthOrderByWithRelationInput
      | SystemHealthOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SystemHealths.
     */
    cursor?: SystemHealthWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SystemHealths from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SystemHealths.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SystemHealths.
     */
    distinct?: SystemHealthScalarFieldEnum | SystemHealthScalarFieldEnum[];
  };

  /**
   * SystemHealth create
   */
  export type SystemHealthCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SystemHealth
     */
    select?: SystemHealthSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SystemHealth
     */
    omit?: SystemHealthOmit<ExtArgs> | null;
    /**
     * The data needed to create a SystemHealth.
     */
    data?: XOR<SystemHealthCreateInput, SystemHealthUncheckedCreateInput>;
  };

  /**
   * SystemHealth createMany
   */
  export type SystemHealthCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many SystemHealths.
     */
    data: SystemHealthCreateManyInput | SystemHealthCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * SystemHealth createManyAndReturn
   */
  export type SystemHealthCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SystemHealth
     */
    select?: SystemHealthSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SystemHealth
     */
    omit?: SystemHealthOmit<ExtArgs> | null;
    /**
     * The data used to create many SystemHealths.
     */
    data: SystemHealthCreateManyInput | SystemHealthCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * SystemHealth update
   */
  export type SystemHealthUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SystemHealth
     */
    select?: SystemHealthSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SystemHealth
     */
    omit?: SystemHealthOmit<ExtArgs> | null;
    /**
     * The data needed to update a SystemHealth.
     */
    data: XOR<SystemHealthUpdateInput, SystemHealthUncheckedUpdateInput>;
    /**
     * Choose, which SystemHealth to update.
     */
    where: SystemHealthWhereUniqueInput;
  };

  /**
   * SystemHealth updateMany
   */
  export type SystemHealthUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update SystemHealths.
     */
    data: XOR<
      SystemHealthUpdateManyMutationInput,
      SystemHealthUncheckedUpdateManyInput
    >;
    /**
     * Filter which SystemHealths to update
     */
    where?: SystemHealthWhereInput;
    /**
     * Limit how many SystemHealths to update.
     */
    limit?: number;
  };

  /**
   * SystemHealth updateManyAndReturn
   */
  export type SystemHealthUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SystemHealth
     */
    select?: SystemHealthSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SystemHealth
     */
    omit?: SystemHealthOmit<ExtArgs> | null;
    /**
     * The data used to update SystemHealths.
     */
    data: XOR<
      SystemHealthUpdateManyMutationInput,
      SystemHealthUncheckedUpdateManyInput
    >;
    /**
     * Filter which SystemHealths to update
     */
    where?: SystemHealthWhereInput;
    /**
     * Limit how many SystemHealths to update.
     */
    limit?: number;
  };

  /**
   * SystemHealth upsert
   */
  export type SystemHealthUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SystemHealth
     */
    select?: SystemHealthSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SystemHealth
     */
    omit?: SystemHealthOmit<ExtArgs> | null;
    /**
     * The filter to search for the SystemHealth to update in case it exists.
     */
    where: SystemHealthWhereUniqueInput;
    /**
     * In case the SystemHealth found by the `where` argument doesn't exist, create a new SystemHealth with this data.
     */
    create: XOR<SystemHealthCreateInput, SystemHealthUncheckedCreateInput>;
    /**
     * In case the SystemHealth was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemHealthUpdateInput, SystemHealthUncheckedUpdateInput>;
  };

  /**
   * SystemHealth delete
   */
  export type SystemHealthDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SystemHealth
     */
    select?: SystemHealthSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SystemHealth
     */
    omit?: SystemHealthOmit<ExtArgs> | null;
    /**
     * Filter which SystemHealth to delete.
     */
    where: SystemHealthWhereUniqueInput;
  };

  /**
   * SystemHealth deleteMany
   */
  export type SystemHealthDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which SystemHealths to delete
     */
    where?: SystemHealthWhereInput;
    /**
     * Limit how many SystemHealths to delete.
     */
    limit?: number;
  };

  /**
   * SystemHealth without action
   */
  export type SystemHealthDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SystemHealth
     */
    select?: SystemHealthSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SystemHealth
     */
    omit?: SystemHealthOmit<ExtArgs> | null;
  };

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    passwordHash: string | null;
    role: $Enums.Role | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    passwordHash: string | null;
    role: $Enums.Role | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    passwordHash: number;
    role: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    passwordHash: string;
    role: $Enums.Role;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      passwordHash?: boolean;
      role?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      talentProfile?: boolean | User$talentProfileArgs<ExtArgs>;
      employerProfile?: boolean | User$employerProfileArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      passwordHash?: boolean;
      role?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      passwordHash?: boolean;
      role?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'email' | 'passwordHash' | 'role' | 'createdAt' | 'updatedAt',
    ExtArgs['result']['user']
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    talentProfile?: boolean | User$talentProfileArgs<ExtArgs>;
    employerProfile?: boolean | User$employerProfileArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'User';
    objects: {
      talentProfile: Prisma.$TalentProfilePayload<ExtArgs> | null;
      employerProfile: Prisma.$EmployerProfilePayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        passwordHash: string;
        role: $Enums.Role;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['User'];
      meta: { name: 'User' };
    };
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
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

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
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

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
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

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
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    >;

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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

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
      OrderByArg extends (True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] }),
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends (T['by'] extends never[] ? True : False),
      InputErrors extends (ByEmpty extends True
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]),
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
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
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    talentProfile<T extends User$talentProfileArgs<ExtArgs> = {}>(
      args?: Subset<T, User$talentProfileArgs<ExtArgs>>,
    ): Prisma__TalentProfileClient<
      $Result.GetResult<
        Prisma.$TalentProfilePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    employerProfile<T extends User$employerProfileArgs<ExtArgs> = {}>(
      args?: Subset<T, User$employerProfileArgs<ExtArgs>>,
    ): Prisma__EmployerProfileClient<
      $Result.GetResult<
        Prisma.$EmployerProfilePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'String'>;
    readonly email: FieldRef<'User', 'String'>;
    readonly passwordHash: FieldRef<'User', 'String'>;
    readonly role: FieldRef<'User', 'Role'>;
    readonly createdAt: FieldRef<'User', 'DateTime'>;
    readonly updatedAt: FieldRef<'User', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.talentProfile
   */
  export type User$talentProfileArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TalentProfile
     */
    select?: TalentProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TalentProfile
     */
    omit?: TalentProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalentProfileInclude<ExtArgs> | null;
    where?: TalentProfileWhereInput;
  };

  /**
   * User.employerProfile
   */
  export type User$employerProfileArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmployerProfile
     */
    select?: EmployerProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmployerProfile
     */
    omit?: EmployerProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerProfileInclude<ExtArgs> | null;
    where?: EmployerProfileWhereInput;
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model TalentProfile
   */

  export type AggregateTalentProfile = {
    _count: TalentProfileCountAggregateOutputType | null;
    _min: TalentProfileMinAggregateOutputType | null;
    _max: TalentProfileMaxAggregateOutputType | null;
  };

  export type TalentProfileMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    headline: string | null;
    resumeUrl: string | null;
  };

  export type TalentProfileMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    headline: string | null;
    resumeUrl: string | null;
  };

  export type TalentProfileCountAggregateOutputType = {
    id: number;
    userId: number;
    headline: number;
    skills: number;
    resumeUrl: number;
    _all: number;
  };

  export type TalentProfileMinAggregateInputType = {
    id?: true;
    userId?: true;
    headline?: true;
    resumeUrl?: true;
  };

  export type TalentProfileMaxAggregateInputType = {
    id?: true;
    userId?: true;
    headline?: true;
    resumeUrl?: true;
  };

  export type TalentProfileCountAggregateInputType = {
    id?: true;
    userId?: true;
    headline?: true;
    skills?: true;
    resumeUrl?: true;
    _all?: true;
  };

  export type TalentProfileAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which TalentProfile to aggregate.
     */
    where?: TalentProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TalentProfiles to fetch.
     */
    orderBy?:
      | TalentProfileOrderByWithRelationInput
      | TalentProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TalentProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TalentProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TalentProfiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TalentProfiles
     **/
    _count?: true | TalentProfileCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TalentProfileMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TalentProfileMaxAggregateInputType;
  };

  export type GetTalentProfileAggregateType<
    T extends TalentProfileAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateTalentProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTalentProfile[P]>
      : GetScalarType<T[P], AggregateTalentProfile[P]>;
  };

  export type TalentProfileGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TalentProfileWhereInput;
    orderBy?:
      | TalentProfileOrderByWithAggregationInput
      | TalentProfileOrderByWithAggregationInput[];
    by: TalentProfileScalarFieldEnum[] | TalentProfileScalarFieldEnum;
    having?: TalentProfileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TalentProfileCountAggregateInputType | true;
    _min?: TalentProfileMinAggregateInputType;
    _max?: TalentProfileMaxAggregateInputType;
  };

  export type TalentProfileGroupByOutputType = {
    id: string;
    userId: string;
    headline: string | null;
    skills: string[];
    resumeUrl: string | null;
    _count: TalentProfileCountAggregateOutputType | null;
    _min: TalentProfileMinAggregateOutputType | null;
    _max: TalentProfileMaxAggregateOutputType | null;
  };

  type GetTalentProfileGroupByPayload<T extends TalentProfileGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<TalentProfileGroupByOutputType, T['by']> & {
          [
            P in keyof T & keyof TalentProfileGroupByOutputType
          ]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TalentProfileGroupByOutputType[P]>
            : GetScalarType<T[P], TalentProfileGroupByOutputType[P]>;
        }
      >
    >;

  export type TalentProfileSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      headline?: boolean;
      skills?: boolean;
      resumeUrl?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      applications?: boolean | TalentProfile$applicationsArgs<ExtArgs>;
      _count?: boolean | TalentProfileCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['talentProfile']
  >;

  export type TalentProfileSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      headline?: boolean;
      skills?: boolean;
      resumeUrl?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['talentProfile']
  >;

  export type TalentProfileSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      headline?: boolean;
      skills?: boolean;
      resumeUrl?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['talentProfile']
  >;

  export type TalentProfileSelectScalar = {
    id?: boolean;
    userId?: boolean;
    headline?: boolean;
    skills?: boolean;
    resumeUrl?: boolean;
  };

  export type TalentProfileOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'userId' | 'headline' | 'skills' | 'resumeUrl',
    ExtArgs['result']['talentProfile']
  >;
  export type TalentProfileInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    applications?: boolean | TalentProfile$applicationsArgs<ExtArgs>;
    _count?: boolean | TalentProfileCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type TalentProfileIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type TalentProfileIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $TalentProfilePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'TalentProfile';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      applications: Prisma.$ApplicationPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        headline: string | null;
        skills: string[];
        resumeUrl: string | null;
      },
      ExtArgs['result']['talentProfile']
    >;
    composites: {};
  };

  type TalentProfileGetPayload<
    S extends boolean | null | undefined | TalentProfileDefaultArgs,
  > = $Result.GetResult<Prisma.$TalentProfilePayload, S>;

  type TalentProfileCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    TalentProfileFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: TalentProfileCountAggregateInputType | true;
  };

  export interface TalentProfileDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['TalentProfile'];
      meta: { name: 'TalentProfile' };
    };
    /**
     * Find zero or one TalentProfile that matches the filter.
     * @param {TalentProfileFindUniqueArgs} args - Arguments to find a TalentProfile
     * @example
     * // Get one TalentProfile
     * const talentProfile = await prisma.talentProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TalentProfileFindUniqueArgs>(
      args: SelectSubset<T, TalentProfileFindUniqueArgs<ExtArgs>>,
    ): Prisma__TalentProfileClient<
      $Result.GetResult<
        Prisma.$TalentProfilePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one TalentProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TalentProfileFindUniqueOrThrowArgs} args - Arguments to find a TalentProfile
     * @example
     * // Get one TalentProfile
     * const talentProfile = await prisma.talentProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TalentProfileFindUniqueOrThrowArgs>(
      args: SelectSubset<T, TalentProfileFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__TalentProfileClient<
      $Result.GetResult<
        Prisma.$TalentProfilePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first TalentProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalentProfileFindFirstArgs} args - Arguments to find a TalentProfile
     * @example
     * // Get one TalentProfile
     * const talentProfile = await prisma.talentProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TalentProfileFindFirstArgs>(
      args?: SelectSubset<T, TalentProfileFindFirstArgs<ExtArgs>>,
    ): Prisma__TalentProfileClient<
      $Result.GetResult<
        Prisma.$TalentProfilePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first TalentProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalentProfileFindFirstOrThrowArgs} args - Arguments to find a TalentProfile
     * @example
     * // Get one TalentProfile
     * const talentProfile = await prisma.talentProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TalentProfileFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TalentProfileFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__TalentProfileClient<
      $Result.GetResult<
        Prisma.$TalentProfilePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more TalentProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalentProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TalentProfiles
     * const talentProfiles = await prisma.talentProfile.findMany()
     *
     * // Get first 10 TalentProfiles
     * const talentProfiles = await prisma.talentProfile.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const talentProfileWithIdOnly = await prisma.talentProfile.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TalentProfileFindManyArgs>(
      args?: SelectSubset<T, TalentProfileFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TalentProfilePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a TalentProfile.
     * @param {TalentProfileCreateArgs} args - Arguments to create a TalentProfile.
     * @example
     * // Create one TalentProfile
     * const TalentProfile = await prisma.talentProfile.create({
     *   data: {
     *     // ... data to create a TalentProfile
     *   }
     * })
     *
     */
    create<T extends TalentProfileCreateArgs>(
      args: SelectSubset<T, TalentProfileCreateArgs<ExtArgs>>,
    ): Prisma__TalentProfileClient<
      $Result.GetResult<
        Prisma.$TalentProfilePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many TalentProfiles.
     * @param {TalentProfileCreateManyArgs} args - Arguments to create many TalentProfiles.
     * @example
     * // Create many TalentProfiles
     * const talentProfile = await prisma.talentProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TalentProfileCreateManyArgs>(
      args?: SelectSubset<T, TalentProfileCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many TalentProfiles and returns the data saved in the database.
     * @param {TalentProfileCreateManyAndReturnArgs} args - Arguments to create many TalentProfiles.
     * @example
     * // Create many TalentProfiles
     * const talentProfile = await prisma.talentProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TalentProfiles and only return the `id`
     * const talentProfileWithIdOnly = await prisma.talentProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TalentProfileCreateManyAndReturnArgs>(
      args?: SelectSubset<T, TalentProfileCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TalentProfilePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a TalentProfile.
     * @param {TalentProfileDeleteArgs} args - Arguments to delete one TalentProfile.
     * @example
     * // Delete one TalentProfile
     * const TalentProfile = await prisma.talentProfile.delete({
     *   where: {
     *     // ... filter to delete one TalentProfile
     *   }
     * })
     *
     */
    delete<T extends TalentProfileDeleteArgs>(
      args: SelectSubset<T, TalentProfileDeleteArgs<ExtArgs>>,
    ): Prisma__TalentProfileClient<
      $Result.GetResult<
        Prisma.$TalentProfilePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one TalentProfile.
     * @param {TalentProfileUpdateArgs} args - Arguments to update one TalentProfile.
     * @example
     * // Update one TalentProfile
     * const talentProfile = await prisma.talentProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TalentProfileUpdateArgs>(
      args: SelectSubset<T, TalentProfileUpdateArgs<ExtArgs>>,
    ): Prisma__TalentProfileClient<
      $Result.GetResult<
        Prisma.$TalentProfilePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more TalentProfiles.
     * @param {TalentProfileDeleteManyArgs} args - Arguments to filter TalentProfiles to delete.
     * @example
     * // Delete a few TalentProfiles
     * const { count } = await prisma.talentProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TalentProfileDeleteManyArgs>(
      args?: SelectSubset<T, TalentProfileDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more TalentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalentProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TalentProfiles
     * const talentProfile = await prisma.talentProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TalentProfileUpdateManyArgs>(
      args: SelectSubset<T, TalentProfileUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more TalentProfiles and returns the data updated in the database.
     * @param {TalentProfileUpdateManyAndReturnArgs} args - Arguments to update many TalentProfiles.
     * @example
     * // Update many TalentProfiles
     * const talentProfile = await prisma.talentProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TalentProfiles and only return the `id`
     * const talentProfileWithIdOnly = await prisma.talentProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends TalentProfileUpdateManyAndReturnArgs>(
      args: SelectSubset<T, TalentProfileUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TalentProfilePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one TalentProfile.
     * @param {TalentProfileUpsertArgs} args - Arguments to update or create a TalentProfile.
     * @example
     * // Update or create a TalentProfile
     * const talentProfile = await prisma.talentProfile.upsert({
     *   create: {
     *     // ... data to create a TalentProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TalentProfile we want to update
     *   }
     * })
     */
    upsert<T extends TalentProfileUpsertArgs>(
      args: SelectSubset<T, TalentProfileUpsertArgs<ExtArgs>>,
    ): Prisma__TalentProfileClient<
      $Result.GetResult<
        Prisma.$TalentProfilePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of TalentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalentProfileCountArgs} args - Arguments to filter TalentProfiles to count.
     * @example
     * // Count the number of TalentProfiles
     * const count = await prisma.talentProfile.count({
     *   where: {
     *     // ... the filter for the TalentProfiles we want to count
     *   }
     * })
     **/
    count<T extends TalentProfileCountArgs>(
      args?: Subset<T, TalentProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TalentProfileCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a TalentProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalentProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TalentProfileAggregateArgs>(
      args: Subset<T, TalentProfileAggregateArgs>,
    ): Prisma.PrismaPromise<GetTalentProfileAggregateType<T>>;

    /**
     * Group by TalentProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalentProfileGroupByArgs} args - Group by arguments.
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
      T extends TalentProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends (True extends HasSelectOrTake
        ? { orderBy: TalentProfileGroupByArgs['orderBy'] }
        : { orderBy?: TalentProfileGroupByArgs['orderBy'] }),
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends (T['by'] extends never[] ? True : False),
      InputErrors extends (ByEmpty extends True
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]),
    >(
      args: SubsetIntersection<T, TalentProfileGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetTalentProfileGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TalentProfile model
     */
    readonly fields: TalentProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TalentProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TalentProfileClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    applications<T extends TalentProfile$applicationsArgs<ExtArgs> = {}>(
      args?: Subset<T, TalentProfile$applicationsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ApplicationPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the TalentProfile model
   */
  interface TalentProfileFieldRefs {
    readonly id: FieldRef<'TalentProfile', 'String'>;
    readonly userId: FieldRef<'TalentProfile', 'String'>;
    readonly headline: FieldRef<'TalentProfile', 'String'>;
    readonly skills: FieldRef<'TalentProfile', 'String[]'>;
    readonly resumeUrl: FieldRef<'TalentProfile', 'String'>;
  }

  // Custom InputTypes
  /**
   * TalentProfile findUnique
   */
  export type TalentProfileFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TalentProfile
     */
    select?: TalentProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TalentProfile
     */
    omit?: TalentProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalentProfileInclude<ExtArgs> | null;
    /**
     * Filter, which TalentProfile to fetch.
     */
    where: TalentProfileWhereUniqueInput;
  };

  /**
   * TalentProfile findUniqueOrThrow
   */
  export type TalentProfileFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TalentProfile
     */
    select?: TalentProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TalentProfile
     */
    omit?: TalentProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalentProfileInclude<ExtArgs> | null;
    /**
     * Filter, which TalentProfile to fetch.
     */
    where: TalentProfileWhereUniqueInput;
  };

  /**
   * TalentProfile findFirst
   */
  export type TalentProfileFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TalentProfile
     */
    select?: TalentProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TalentProfile
     */
    omit?: TalentProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalentProfileInclude<ExtArgs> | null;
    /**
     * Filter, which TalentProfile to fetch.
     */
    where?: TalentProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TalentProfiles to fetch.
     */
    orderBy?:
      | TalentProfileOrderByWithRelationInput
      | TalentProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TalentProfiles.
     */
    cursor?: TalentProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TalentProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TalentProfiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TalentProfiles.
     */
    distinct?: TalentProfileScalarFieldEnum | TalentProfileScalarFieldEnum[];
  };

  /**
   * TalentProfile findFirstOrThrow
   */
  export type TalentProfileFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TalentProfile
     */
    select?: TalentProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TalentProfile
     */
    omit?: TalentProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalentProfileInclude<ExtArgs> | null;
    /**
     * Filter, which TalentProfile to fetch.
     */
    where?: TalentProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TalentProfiles to fetch.
     */
    orderBy?:
      | TalentProfileOrderByWithRelationInput
      | TalentProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TalentProfiles.
     */
    cursor?: TalentProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TalentProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TalentProfiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TalentProfiles.
     */
    distinct?: TalentProfileScalarFieldEnum | TalentProfileScalarFieldEnum[];
  };

  /**
   * TalentProfile findMany
   */
  export type TalentProfileFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TalentProfile
     */
    select?: TalentProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TalentProfile
     */
    omit?: TalentProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalentProfileInclude<ExtArgs> | null;
    /**
     * Filter, which TalentProfiles to fetch.
     */
    where?: TalentProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TalentProfiles to fetch.
     */
    orderBy?:
      | TalentProfileOrderByWithRelationInput
      | TalentProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TalentProfiles.
     */
    cursor?: TalentProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TalentProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TalentProfiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TalentProfiles.
     */
    distinct?: TalentProfileScalarFieldEnum | TalentProfileScalarFieldEnum[];
  };

  /**
   * TalentProfile create
   */
  export type TalentProfileCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TalentProfile
     */
    select?: TalentProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TalentProfile
     */
    omit?: TalentProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalentProfileInclude<ExtArgs> | null;
    /**
     * The data needed to create a TalentProfile.
     */
    data: XOR<TalentProfileCreateInput, TalentProfileUncheckedCreateInput>;
  };

  /**
   * TalentProfile createMany
   */
  export type TalentProfileCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many TalentProfiles.
     */
    data: TalentProfileCreateManyInput | TalentProfileCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * TalentProfile createManyAndReturn
   */
  export type TalentProfileCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TalentProfile
     */
    select?: TalentProfileSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TalentProfile
     */
    omit?: TalentProfileOmit<ExtArgs> | null;
    /**
     * The data used to create many TalentProfiles.
     */
    data: TalentProfileCreateManyInput | TalentProfileCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalentProfileIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * TalentProfile update
   */
  export type TalentProfileUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TalentProfile
     */
    select?: TalentProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TalentProfile
     */
    omit?: TalentProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalentProfileInclude<ExtArgs> | null;
    /**
     * The data needed to update a TalentProfile.
     */
    data: XOR<TalentProfileUpdateInput, TalentProfileUncheckedUpdateInput>;
    /**
     * Choose, which TalentProfile to update.
     */
    where: TalentProfileWhereUniqueInput;
  };

  /**
   * TalentProfile updateMany
   */
  export type TalentProfileUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update TalentProfiles.
     */
    data: XOR<
      TalentProfileUpdateManyMutationInput,
      TalentProfileUncheckedUpdateManyInput
    >;
    /**
     * Filter which TalentProfiles to update
     */
    where?: TalentProfileWhereInput;
    /**
     * Limit how many TalentProfiles to update.
     */
    limit?: number;
  };

  /**
   * TalentProfile updateManyAndReturn
   */
  export type TalentProfileUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TalentProfile
     */
    select?: TalentProfileSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TalentProfile
     */
    omit?: TalentProfileOmit<ExtArgs> | null;
    /**
     * The data used to update TalentProfiles.
     */
    data: XOR<
      TalentProfileUpdateManyMutationInput,
      TalentProfileUncheckedUpdateManyInput
    >;
    /**
     * Filter which TalentProfiles to update
     */
    where?: TalentProfileWhereInput;
    /**
     * Limit how many TalentProfiles to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalentProfileIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * TalentProfile upsert
   */
  export type TalentProfileUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TalentProfile
     */
    select?: TalentProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TalentProfile
     */
    omit?: TalentProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalentProfileInclude<ExtArgs> | null;
    /**
     * The filter to search for the TalentProfile to update in case it exists.
     */
    where: TalentProfileWhereUniqueInput;
    /**
     * In case the TalentProfile found by the `where` argument doesn't exist, create a new TalentProfile with this data.
     */
    create: XOR<TalentProfileCreateInput, TalentProfileUncheckedCreateInput>;
    /**
     * In case the TalentProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TalentProfileUpdateInput, TalentProfileUncheckedUpdateInput>;
  };

  /**
   * TalentProfile delete
   */
  export type TalentProfileDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TalentProfile
     */
    select?: TalentProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TalentProfile
     */
    omit?: TalentProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalentProfileInclude<ExtArgs> | null;
    /**
     * Filter which TalentProfile to delete.
     */
    where: TalentProfileWhereUniqueInput;
  };

  /**
   * TalentProfile deleteMany
   */
  export type TalentProfileDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which TalentProfiles to delete
     */
    where?: TalentProfileWhereInput;
    /**
     * Limit how many TalentProfiles to delete.
     */
    limit?: number;
  };

  /**
   * TalentProfile.applications
   */
  export type TalentProfile$applicationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null;
    where?: ApplicationWhereInput;
    orderBy?:
      | ApplicationOrderByWithRelationInput
      | ApplicationOrderByWithRelationInput[];
    cursor?: ApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
  };

  /**
   * TalentProfile without action
   */
  export type TalentProfileDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TalentProfile
     */
    select?: TalentProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TalentProfile
     */
    omit?: TalentProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalentProfileInclude<ExtArgs> | null;
  };

  /**
   * Model EmployerProfile
   */

  export type AggregateEmployerProfile = {
    _count: EmployerProfileCountAggregateOutputType | null;
    _min: EmployerProfileMinAggregateOutputType | null;
    _max: EmployerProfileMaxAggregateOutputType | null;
  };

  export type EmployerProfileMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    companyName: string | null;
    website: string | null;
  };

  export type EmployerProfileMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    companyName: string | null;
    website: string | null;
  };

  export type EmployerProfileCountAggregateOutputType = {
    id: number;
    userId: number;
    companyName: number;
    website: number;
    _all: number;
  };

  export type EmployerProfileMinAggregateInputType = {
    id?: true;
    userId?: true;
    companyName?: true;
    website?: true;
  };

  export type EmployerProfileMaxAggregateInputType = {
    id?: true;
    userId?: true;
    companyName?: true;
    website?: true;
  };

  export type EmployerProfileCountAggregateInputType = {
    id?: true;
    userId?: true;
    companyName?: true;
    website?: true;
    _all?: true;
  };

  export type EmployerProfileAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which EmployerProfile to aggregate.
     */
    where?: EmployerProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EmployerProfiles to fetch.
     */
    orderBy?:
      | EmployerProfileOrderByWithRelationInput
      | EmployerProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: EmployerProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EmployerProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EmployerProfiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned EmployerProfiles
     **/
    _count?: true | EmployerProfileCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: EmployerProfileMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: EmployerProfileMaxAggregateInputType;
  };

  export type GetEmployerProfileAggregateType<
    T extends EmployerProfileAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateEmployerProfile]: P extends
      '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployerProfile[P]>
      : GetScalarType<T[P], AggregateEmployerProfile[P]>;
  };

  export type EmployerProfileGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: EmployerProfileWhereInput;
    orderBy?:
      | EmployerProfileOrderByWithAggregationInput
      | EmployerProfileOrderByWithAggregationInput[];
    by: EmployerProfileScalarFieldEnum[] | EmployerProfileScalarFieldEnum;
    having?: EmployerProfileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EmployerProfileCountAggregateInputType | true;
    _min?: EmployerProfileMinAggregateInputType;
    _max?: EmployerProfileMaxAggregateInputType;
  };

  export type EmployerProfileGroupByOutputType = {
    id: string;
    userId: string;
    companyName: string;
    website: string | null;
    _count: EmployerProfileCountAggregateOutputType | null;
    _min: EmployerProfileMinAggregateOutputType | null;
    _max: EmployerProfileMaxAggregateOutputType | null;
  };

  type GetEmployerProfileGroupByPayload<T extends EmployerProfileGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<EmployerProfileGroupByOutputType, T['by']> & {
          [
            P in keyof T & keyof EmployerProfileGroupByOutputType
          ]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployerProfileGroupByOutputType[P]>
            : GetScalarType<T[P], EmployerProfileGroupByOutputType[P]>;
        }
      >
    >;

  export type EmployerProfileSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      companyName?: boolean;
      website?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      jobs?: boolean | EmployerProfile$jobsArgs<ExtArgs>;
      subscriptions?: boolean | EmployerProfile$subscriptionsArgs<ExtArgs>;
      _count?: boolean | EmployerProfileCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['employerProfile']
  >;

  export type EmployerProfileSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      companyName?: boolean;
      website?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['employerProfile']
  >;

  export type EmployerProfileSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      companyName?: boolean;
      website?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['employerProfile']
  >;

  export type EmployerProfileSelectScalar = {
    id?: boolean;
    userId?: boolean;
    companyName?: boolean;
    website?: boolean;
  };

  export type EmployerProfileOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'userId' | 'companyName' | 'website',
    ExtArgs['result']['employerProfile']
  >;
  export type EmployerProfileInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    jobs?: boolean | EmployerProfile$jobsArgs<ExtArgs>;
    subscriptions?: boolean | EmployerProfile$subscriptionsArgs<ExtArgs>;
    _count?: boolean | EmployerProfileCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type EmployerProfileIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type EmployerProfileIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $EmployerProfilePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'EmployerProfile';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      jobs: Prisma.$JobPayload<ExtArgs>[];
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        companyName: string;
        website: string | null;
      },
      ExtArgs['result']['employerProfile']
    >;
    composites: {};
  };

  type EmployerProfileGetPayload<
    S extends boolean | null | undefined | EmployerProfileDefaultArgs,
  > = $Result.GetResult<Prisma.$EmployerProfilePayload, S>;

  type EmployerProfileCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    EmployerProfileFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: EmployerProfileCountAggregateInputType | true;
  };

  export interface EmployerProfileDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['EmployerProfile'];
      meta: { name: 'EmployerProfile' };
    };
    /**
     * Find zero or one EmployerProfile that matches the filter.
     * @param {EmployerProfileFindUniqueArgs} args - Arguments to find a EmployerProfile
     * @example
     * // Get one EmployerProfile
     * const employerProfile = await prisma.employerProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployerProfileFindUniqueArgs>(
      args: SelectSubset<T, EmployerProfileFindUniqueArgs<ExtArgs>>,
    ): Prisma__EmployerProfileClient<
      $Result.GetResult<
        Prisma.$EmployerProfilePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one EmployerProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployerProfileFindUniqueOrThrowArgs} args - Arguments to find a EmployerProfile
     * @example
     * // Get one EmployerProfile
     * const employerProfile = await prisma.employerProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployerProfileFindUniqueOrThrowArgs>(
      args: SelectSubset<T, EmployerProfileFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__EmployerProfileClient<
      $Result.GetResult<
        Prisma.$EmployerProfilePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first EmployerProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerProfileFindFirstArgs} args - Arguments to find a EmployerProfile
     * @example
     * // Get one EmployerProfile
     * const employerProfile = await prisma.employerProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployerProfileFindFirstArgs>(
      args?: SelectSubset<T, EmployerProfileFindFirstArgs<ExtArgs>>,
    ): Prisma__EmployerProfileClient<
      $Result.GetResult<
        Prisma.$EmployerProfilePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first EmployerProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerProfileFindFirstOrThrowArgs} args - Arguments to find a EmployerProfile
     * @example
     * // Get one EmployerProfile
     * const employerProfile = await prisma.employerProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployerProfileFindFirstOrThrowArgs>(
      args?: SelectSubset<T, EmployerProfileFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__EmployerProfileClient<
      $Result.GetResult<
        Prisma.$EmployerProfilePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more EmployerProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmployerProfiles
     * const employerProfiles = await prisma.employerProfile.findMany()
     *
     * // Get first 10 EmployerProfiles
     * const employerProfiles = await prisma.employerProfile.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const employerProfileWithIdOnly = await prisma.employerProfile.findMany({ select: { id: true } })
     *
     */
    findMany<T extends EmployerProfileFindManyArgs>(
      args?: SelectSubset<T, EmployerProfileFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$EmployerProfilePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a EmployerProfile.
     * @param {EmployerProfileCreateArgs} args - Arguments to create a EmployerProfile.
     * @example
     * // Create one EmployerProfile
     * const EmployerProfile = await prisma.employerProfile.create({
     *   data: {
     *     // ... data to create a EmployerProfile
     *   }
     * })
     *
     */
    create<T extends EmployerProfileCreateArgs>(
      args: SelectSubset<T, EmployerProfileCreateArgs<ExtArgs>>,
    ): Prisma__EmployerProfileClient<
      $Result.GetResult<
        Prisma.$EmployerProfilePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many EmployerProfiles.
     * @param {EmployerProfileCreateManyArgs} args - Arguments to create many EmployerProfiles.
     * @example
     * // Create many EmployerProfiles
     * const employerProfile = await prisma.employerProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EmployerProfileCreateManyArgs>(
      args?: SelectSubset<T, EmployerProfileCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many EmployerProfiles and returns the data saved in the database.
     * @param {EmployerProfileCreateManyAndReturnArgs} args - Arguments to create many EmployerProfiles.
     * @example
     * // Create many EmployerProfiles
     * const employerProfile = await prisma.employerProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many EmployerProfiles and only return the `id`
     * const employerProfileWithIdOnly = await prisma.employerProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EmployerProfileCreateManyAndReturnArgs>(
      args?: SelectSubset<T, EmployerProfileCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$EmployerProfilePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a EmployerProfile.
     * @param {EmployerProfileDeleteArgs} args - Arguments to delete one EmployerProfile.
     * @example
     * // Delete one EmployerProfile
     * const EmployerProfile = await prisma.employerProfile.delete({
     *   where: {
     *     // ... filter to delete one EmployerProfile
     *   }
     * })
     *
     */
    delete<T extends EmployerProfileDeleteArgs>(
      args: SelectSubset<T, EmployerProfileDeleteArgs<ExtArgs>>,
    ): Prisma__EmployerProfileClient<
      $Result.GetResult<
        Prisma.$EmployerProfilePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one EmployerProfile.
     * @param {EmployerProfileUpdateArgs} args - Arguments to update one EmployerProfile.
     * @example
     * // Update one EmployerProfile
     * const employerProfile = await prisma.employerProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EmployerProfileUpdateArgs>(
      args: SelectSubset<T, EmployerProfileUpdateArgs<ExtArgs>>,
    ): Prisma__EmployerProfileClient<
      $Result.GetResult<
        Prisma.$EmployerProfilePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more EmployerProfiles.
     * @param {EmployerProfileDeleteManyArgs} args - Arguments to filter EmployerProfiles to delete.
     * @example
     * // Delete a few EmployerProfiles
     * const { count } = await prisma.employerProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EmployerProfileDeleteManyArgs>(
      args?: SelectSubset<T, EmployerProfileDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more EmployerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmployerProfiles
     * const employerProfile = await prisma.employerProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EmployerProfileUpdateManyArgs>(
      args: SelectSubset<T, EmployerProfileUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more EmployerProfiles and returns the data updated in the database.
     * @param {EmployerProfileUpdateManyAndReturnArgs} args - Arguments to update many EmployerProfiles.
     * @example
     * // Update many EmployerProfiles
     * const employerProfile = await prisma.employerProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more EmployerProfiles and only return the `id`
     * const employerProfileWithIdOnly = await prisma.employerProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends EmployerProfileUpdateManyAndReturnArgs>(
      args: SelectSubset<T, EmployerProfileUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$EmployerProfilePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one EmployerProfile.
     * @param {EmployerProfileUpsertArgs} args - Arguments to update or create a EmployerProfile.
     * @example
     * // Update or create a EmployerProfile
     * const employerProfile = await prisma.employerProfile.upsert({
     *   create: {
     *     // ... data to create a EmployerProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmployerProfile we want to update
     *   }
     * })
     */
    upsert<T extends EmployerProfileUpsertArgs>(
      args: SelectSubset<T, EmployerProfileUpsertArgs<ExtArgs>>,
    ): Prisma__EmployerProfileClient<
      $Result.GetResult<
        Prisma.$EmployerProfilePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of EmployerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerProfileCountArgs} args - Arguments to filter EmployerProfiles to count.
     * @example
     * // Count the number of EmployerProfiles
     * const count = await prisma.employerProfile.count({
     *   where: {
     *     // ... the filter for the EmployerProfiles we want to count
     *   }
     * })
     **/
    count<T extends EmployerProfileCountArgs>(
      args?: Subset<T, EmployerProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployerProfileCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a EmployerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployerProfileAggregateArgs>(
      args: Subset<T, EmployerProfileAggregateArgs>,
    ): Prisma.PrismaPromise<GetEmployerProfileAggregateType<T>>;

    /**
     * Group by EmployerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerProfileGroupByArgs} args - Group by arguments.
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
      T extends EmployerProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends (True extends HasSelectOrTake
        ? { orderBy: EmployerProfileGroupByArgs['orderBy'] }
        : { orderBy?: EmployerProfileGroupByArgs['orderBy'] }),
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends (T['by'] extends never[] ? True : False),
      InputErrors extends (ByEmpty extends True
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]),
    >(
      args: SubsetIntersection<T, EmployerProfileGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetEmployerProfileGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the EmployerProfile model
     */
    readonly fields: EmployerProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmployerProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployerProfileClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    jobs<T extends EmployerProfile$jobsArgs<ExtArgs> = {}>(
      args?: Subset<T, EmployerProfile$jobsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$JobPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    subscriptions<T extends EmployerProfile$subscriptionsArgs<ExtArgs> = {}>(
      args?: Subset<T, EmployerProfile$subscriptionsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$SubscriptionPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the EmployerProfile model
   */
  interface EmployerProfileFieldRefs {
    readonly id: FieldRef<'EmployerProfile', 'String'>;
    readonly userId: FieldRef<'EmployerProfile', 'String'>;
    readonly companyName: FieldRef<'EmployerProfile', 'String'>;
    readonly website: FieldRef<'EmployerProfile', 'String'>;
  }

  // Custom InputTypes
  /**
   * EmployerProfile findUnique
   */
  export type EmployerProfileFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmployerProfile
     */
    select?: EmployerProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmployerProfile
     */
    omit?: EmployerProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerProfileInclude<ExtArgs> | null;
    /**
     * Filter, which EmployerProfile to fetch.
     */
    where: EmployerProfileWhereUniqueInput;
  };

  /**
   * EmployerProfile findUniqueOrThrow
   */
  export type EmployerProfileFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmployerProfile
     */
    select?: EmployerProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmployerProfile
     */
    omit?: EmployerProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerProfileInclude<ExtArgs> | null;
    /**
     * Filter, which EmployerProfile to fetch.
     */
    where: EmployerProfileWhereUniqueInput;
  };

  /**
   * EmployerProfile findFirst
   */
  export type EmployerProfileFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmployerProfile
     */
    select?: EmployerProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmployerProfile
     */
    omit?: EmployerProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerProfileInclude<ExtArgs> | null;
    /**
     * Filter, which EmployerProfile to fetch.
     */
    where?: EmployerProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EmployerProfiles to fetch.
     */
    orderBy?:
      | EmployerProfileOrderByWithRelationInput
      | EmployerProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EmployerProfiles.
     */
    cursor?: EmployerProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EmployerProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EmployerProfiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EmployerProfiles.
     */
    distinct?:
      EmployerProfileScalarFieldEnum | EmployerProfileScalarFieldEnum[];
  };

  /**
   * EmployerProfile findFirstOrThrow
   */
  export type EmployerProfileFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmployerProfile
     */
    select?: EmployerProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmployerProfile
     */
    omit?: EmployerProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerProfileInclude<ExtArgs> | null;
    /**
     * Filter, which EmployerProfile to fetch.
     */
    where?: EmployerProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EmployerProfiles to fetch.
     */
    orderBy?:
      | EmployerProfileOrderByWithRelationInput
      | EmployerProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EmployerProfiles.
     */
    cursor?: EmployerProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EmployerProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EmployerProfiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EmployerProfiles.
     */
    distinct?:
      EmployerProfileScalarFieldEnum | EmployerProfileScalarFieldEnum[];
  };

  /**
   * EmployerProfile findMany
   */
  export type EmployerProfileFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmployerProfile
     */
    select?: EmployerProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmployerProfile
     */
    omit?: EmployerProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerProfileInclude<ExtArgs> | null;
    /**
     * Filter, which EmployerProfiles to fetch.
     */
    where?: EmployerProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EmployerProfiles to fetch.
     */
    orderBy?:
      | EmployerProfileOrderByWithRelationInput
      | EmployerProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing EmployerProfiles.
     */
    cursor?: EmployerProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EmployerProfiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EmployerProfiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EmployerProfiles.
     */
    distinct?:
      EmployerProfileScalarFieldEnum | EmployerProfileScalarFieldEnum[];
  };

  /**
   * EmployerProfile create
   */
  export type EmployerProfileCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmployerProfile
     */
    select?: EmployerProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmployerProfile
     */
    omit?: EmployerProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerProfileInclude<ExtArgs> | null;
    /**
     * The data needed to create a EmployerProfile.
     */
    data: XOR<EmployerProfileCreateInput, EmployerProfileUncheckedCreateInput>;
  };

  /**
   * EmployerProfile createMany
   */
  export type EmployerProfileCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many EmployerProfiles.
     */
    data: EmployerProfileCreateManyInput | EmployerProfileCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * EmployerProfile createManyAndReturn
   */
  export type EmployerProfileCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmployerProfile
     */
    select?: EmployerProfileSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EmployerProfile
     */
    omit?: EmployerProfileOmit<ExtArgs> | null;
    /**
     * The data used to create many EmployerProfiles.
     */
    data: EmployerProfileCreateManyInput | EmployerProfileCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerProfileIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * EmployerProfile update
   */
  export type EmployerProfileUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmployerProfile
     */
    select?: EmployerProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmployerProfile
     */
    omit?: EmployerProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerProfileInclude<ExtArgs> | null;
    /**
     * The data needed to update a EmployerProfile.
     */
    data: XOR<EmployerProfileUpdateInput, EmployerProfileUncheckedUpdateInput>;
    /**
     * Choose, which EmployerProfile to update.
     */
    where: EmployerProfileWhereUniqueInput;
  };

  /**
   * EmployerProfile updateMany
   */
  export type EmployerProfileUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update EmployerProfiles.
     */
    data: XOR<
      EmployerProfileUpdateManyMutationInput,
      EmployerProfileUncheckedUpdateManyInput
    >;
    /**
     * Filter which EmployerProfiles to update
     */
    where?: EmployerProfileWhereInput;
    /**
     * Limit how many EmployerProfiles to update.
     */
    limit?: number;
  };

  /**
   * EmployerProfile updateManyAndReturn
   */
  export type EmployerProfileUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmployerProfile
     */
    select?: EmployerProfileSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EmployerProfile
     */
    omit?: EmployerProfileOmit<ExtArgs> | null;
    /**
     * The data used to update EmployerProfiles.
     */
    data: XOR<
      EmployerProfileUpdateManyMutationInput,
      EmployerProfileUncheckedUpdateManyInput
    >;
    /**
     * Filter which EmployerProfiles to update
     */
    where?: EmployerProfileWhereInput;
    /**
     * Limit how many EmployerProfiles to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerProfileIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * EmployerProfile upsert
   */
  export type EmployerProfileUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmployerProfile
     */
    select?: EmployerProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmployerProfile
     */
    omit?: EmployerProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerProfileInclude<ExtArgs> | null;
    /**
     * The filter to search for the EmployerProfile to update in case it exists.
     */
    where: EmployerProfileWhereUniqueInput;
    /**
     * In case the EmployerProfile found by the `where` argument doesn't exist, create a new EmployerProfile with this data.
     */
    create: XOR<
      EmployerProfileCreateInput,
      EmployerProfileUncheckedCreateInput
    >;
    /**
     * In case the EmployerProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      EmployerProfileUpdateInput,
      EmployerProfileUncheckedUpdateInput
    >;
  };

  /**
   * EmployerProfile delete
   */
  export type EmployerProfileDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmployerProfile
     */
    select?: EmployerProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmployerProfile
     */
    omit?: EmployerProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerProfileInclude<ExtArgs> | null;
    /**
     * Filter which EmployerProfile to delete.
     */
    where: EmployerProfileWhereUniqueInput;
  };

  /**
   * EmployerProfile deleteMany
   */
  export type EmployerProfileDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which EmployerProfiles to delete
     */
    where?: EmployerProfileWhereInput;
    /**
     * Limit how many EmployerProfiles to delete.
     */
    limit?: number;
  };

  /**
   * EmployerProfile.jobs
   */
  export type EmployerProfile$jobsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    where?: JobWhereInput;
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[];
    cursor?: JobWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[];
  };

  /**
   * EmployerProfile.subscriptions
   */
  export type EmployerProfile$subscriptionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null;
    where?: SubscriptionWhereInput;
    orderBy?:
      | SubscriptionOrderByWithRelationInput
      | SubscriptionOrderByWithRelationInput[];
    cursor?: SubscriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[];
  };

  /**
   * EmployerProfile without action
   */
  export type EmployerProfileDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the EmployerProfile
     */
    select?: EmployerProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmployerProfile
     */
    omit?: EmployerProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerProfileInclude<ExtArgs> | null;
  };

  /**
   * Model Job
   */

  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null;
    _min: JobMinAggregateOutputType | null;
    _max: JobMaxAggregateOutputType | null;
  };

  export type JobMinAggregateOutputType = {
    id: string | null;
    employerId: string | null;
    title: string | null;
    description: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type JobMaxAggregateOutputType = {
    id: string | null;
    employerId: string | null;
    title: string | null;
    description: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type JobCountAggregateOutputType = {
    id: number;
    employerId: number;
    title: number;
    description: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type JobMinAggregateInputType = {
    id?: true;
    employerId?: true;
    title?: true;
    description?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type JobMaxAggregateInputType = {
    id?: true;
    employerId?: true;
    title?: true;
    description?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type JobCountAggregateInputType = {
    id?: true;
    employerId?: true;
    title?: true;
    description?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type JobAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Job to aggregate.
     */
    where?: JobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: JobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Jobs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Jobs
     **/
    _count?: true | JobCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: JobMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: JobMaxAggregateInputType;
  };

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
    [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>;
  };

  export type JobGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: JobWhereInput;
    orderBy?: JobOrderByWithAggregationInput | JobOrderByWithAggregationInput[];
    by: JobScalarFieldEnum[] | JobScalarFieldEnum;
    having?: JobScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: JobCountAggregateInputType | true;
    _min?: JobMinAggregateInputType;
    _max?: JobMaxAggregateInputType;
  };

  export type JobGroupByOutputType = {
    id: string;
    employerId: string;
    title: string;
    description: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: JobCountAggregateOutputType | null;
    _min: JobMinAggregateOutputType | null;
    _max: JobMaxAggregateOutputType | null;
  };

  type GetJobGroupByPayload<T extends JobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobGroupByOutputType, T['by']> & {
        [P in keyof T & keyof JobGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], JobGroupByOutputType[P]>
          : GetScalarType<T[P], JobGroupByOutputType[P]>;
      }
    >
  >;

  export type JobSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      employerId?: boolean;
      title?: boolean;
      description?: boolean;
      isActive?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      employer?: boolean | EmployerProfileDefaultArgs<ExtArgs>;
      applications?: boolean | Job$applicationsArgs<ExtArgs>;
      _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['job']
  >;

  export type JobSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      employerId?: boolean;
      title?: boolean;
      description?: boolean;
      isActive?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      employer?: boolean | EmployerProfileDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['job']
  >;

  export type JobSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      employerId?: boolean;
      title?: boolean;
      description?: boolean;
      isActive?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      employer?: boolean | EmployerProfileDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['job']
  >;

  export type JobSelectScalar = {
    id?: boolean;
    employerId?: boolean;
    title?: boolean;
    description?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type JobOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'employerId'
    | 'title'
    | 'description'
    | 'isActive'
    | 'createdAt'
    | 'updatedAt',
    ExtArgs['result']['job']
  >;
  export type JobInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    employer?: boolean | EmployerProfileDefaultArgs<ExtArgs>;
    applications?: boolean | Job$applicationsArgs<ExtArgs>;
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type JobIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    employer?: boolean | EmployerProfileDefaultArgs<ExtArgs>;
  };
  export type JobIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    employer?: boolean | EmployerProfileDefaultArgs<ExtArgs>;
  };

  export type $JobPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Job';
    objects: {
      employer: Prisma.$EmployerProfilePayload<ExtArgs>;
      applications: Prisma.$ApplicationPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        employerId: string;
        title: string;
        description: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['job']
    >;
    composites: {};
  };

  type JobGetPayload<S extends boolean | null | undefined | JobDefaultArgs> =
    $Result.GetResult<Prisma.$JobPayload, S>;

  type JobCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<JobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: JobCountAggregateInputType | true;
  };

  export interface JobDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Job'];
      meta: { name: 'Job' };
    };
    /**
     * Find zero or one Job that matches the filter.
     * @param {JobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobFindUniqueArgs>(
      args: SelectSubset<T, JobFindUniqueArgs<ExtArgs>>,
    ): Prisma__JobClient<
      $Result.GetResult<
        Prisma.$JobPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Job that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobFindUniqueOrThrowArgs>(
      args: SelectSubset<T, JobFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__JobClient<
      $Result.GetResult<
        Prisma.$JobPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobFindFirstArgs>(
      args?: SelectSubset<T, JobFindFirstArgs<ExtArgs>>,
    ): Prisma__JobClient<
      $Result.GetResult<
        Prisma.$JobPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobFindFirstOrThrowArgs>(
      args?: SelectSubset<T, JobFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__JobClient<
      $Result.GetResult<
        Prisma.$JobPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     *
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const jobWithIdOnly = await prisma.job.findMany({ select: { id: true } })
     *
     */
    findMany<T extends JobFindManyArgs>(
      args?: SelectSubset<T, JobFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$JobPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Job.
     * @param {JobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     *
     */
    create<T extends JobCreateArgs>(
      args: SelectSubset<T, JobCreateArgs<ExtArgs>>,
    ): Prisma__JobClient<
      $Result.GetResult<
        Prisma.$JobPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Jobs.
     * @param {JobCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends JobCreateManyArgs>(
      args?: SelectSubset<T, JobCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Jobs and returns the data saved in the database.
     * @param {JobCreateManyAndReturnArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends JobCreateManyAndReturnArgs>(
      args?: SelectSubset<T, JobCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$JobPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Job.
     * @param {JobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     *
     */
    delete<T extends JobDeleteArgs>(
      args: SelectSubset<T, JobDeleteArgs<ExtArgs>>,
    ): Prisma__JobClient<
      $Result.GetResult<
        Prisma.$JobPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Job.
     * @param {JobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends JobUpdateArgs>(
      args: SelectSubset<T, JobUpdateArgs<ExtArgs>>,
    ): Prisma__JobClient<
      $Result.GetResult<
        Prisma.$JobPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Jobs.
     * @param {JobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends JobDeleteManyArgs>(
      args?: SelectSubset<T, JobDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends JobUpdateManyArgs>(
      args: SelectSubset<T, JobUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Jobs and returns the data updated in the database.
     * @param {JobUpdateManyAndReturnArgs} args - Arguments to update many Jobs.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Jobs and only return the `id`
     * const jobWithIdOnly = await prisma.job.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends JobUpdateManyAndReturnArgs>(
      args: SelectSubset<T, JobUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$JobPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Job.
     * @param {JobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
     */
    upsert<T extends JobUpsertArgs>(
      args: SelectSubset<T, JobUpsertArgs<ExtArgs>>,
    ): Prisma__JobClient<
      $Result.GetResult<
        Prisma.$JobPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
     **/
    count<T extends JobCountArgs>(
      args?: Subset<T, JobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobAggregateArgs>(
      args: Subset<T, JobAggregateArgs>,
    ): Prisma.PrismaPromise<GetJobAggregateType<T>>;

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobGroupByArgs} args - Group by arguments.
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
      T extends JobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends (True extends HasSelectOrTake
        ? { orderBy: JobGroupByArgs['orderBy'] }
        : { orderBy?: JobGroupByArgs['orderBy'] }),
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends (T['by'] extends never[] ? True : False),
      InputErrors extends (ByEmpty extends True
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]),
    >(
      args: SubsetIntersection<T, JobGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetJobGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Job model
     */
    readonly fields: JobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    employer<T extends EmployerProfileDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, EmployerProfileDefaultArgs<ExtArgs>>,
    ): Prisma__EmployerProfileClient<
      | $Result.GetResult<
          Prisma.$EmployerProfilePayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    applications<T extends Job$applicationsArgs<ExtArgs> = {}>(
      args?: Subset<T, Job$applicationsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ApplicationPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Job model
   */
  interface JobFieldRefs {
    readonly id: FieldRef<'Job', 'String'>;
    readonly employerId: FieldRef<'Job', 'String'>;
    readonly title: FieldRef<'Job', 'String'>;
    readonly description: FieldRef<'Job', 'String'>;
    readonly isActive: FieldRef<'Job', 'Boolean'>;
    readonly createdAt: FieldRef<'Job', 'DateTime'>;
    readonly updatedAt: FieldRef<'Job', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Job findUnique
   */
  export type JobFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput;
  };

  /**
   * Job findUniqueOrThrow
   */
  export type JobFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput;
  };

  /**
   * Job findFirst
   */
  export type JobFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Jobs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[];
  };

  /**
   * Job findFirstOrThrow
   */
  export type JobFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Jobs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[];
  };

  /**
   * Job findMany
   */
  export type JobFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Jobs.
     */
    cursor?: JobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Jobs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[];
  };

  /**
   * Job create
   */
  export type JobCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    /**
     * The data needed to create a Job.
     */
    data: XOR<JobCreateInput, JobUncheckedCreateInput>;
  };

  /**
   * Job createMany
   */
  export type JobCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Job createManyAndReturn
   */
  export type JobCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null;
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Job update
   */
  export type JobUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    /**
     * The data needed to update a Job.
     */
    data: XOR<JobUpdateInput, JobUncheckedUpdateInput>;
    /**
     * Choose, which Job to update.
     */
    where: JobWhereUniqueInput;
  };

  /**
   * Job updateMany
   */
  export type JobUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>;
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput;
    /**
     * Limit how many Jobs to update.
     */
    limit?: number;
  };

  /**
   * Job updateManyAndReturn
   */
  export type JobUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null;
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>;
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput;
    /**
     * Limit how many Jobs to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Job upsert
   */
  export type JobUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    /**
     * The filter to search for the Job to update in case it exists.
     */
    where: JobWhereUniqueInput;
    /**
     * In case the Job found by the `where` argument doesn't exist, create a new Job with this data.
     */
    create: XOR<JobCreateInput, JobUncheckedCreateInput>;
    /**
     * In case the Job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobUpdateInput, JobUncheckedUpdateInput>;
  };

  /**
   * Job delete
   */
  export type JobDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    /**
     * Filter which Job to delete.
     */
    where: JobWhereUniqueInput;
  };

  /**
   * Job deleteMany
   */
  export type JobDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Jobs to delete
     */
    where?: JobWhereInput;
    /**
     * Limit how many Jobs to delete.
     */
    limit?: number;
  };

  /**
   * Job.applications
   */
  export type Job$applicationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null;
    where?: ApplicationWhereInput;
    orderBy?:
      | ApplicationOrderByWithRelationInput
      | ApplicationOrderByWithRelationInput[];
    cursor?: ApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
  };

  /**
   * Job without action
   */
  export type JobDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
  };

  /**
   * Model Application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null;
    _min: ApplicationMinAggregateOutputType | null;
    _max: ApplicationMaxAggregateOutputType | null;
  };

  export type ApplicationMinAggregateOutputType = {
    id: string | null;
    jobId: string | null;
    talentId: string | null;
    status: $Enums.ApplicationStatus | null;
    appliedAt: Date | null;
  };

  export type ApplicationMaxAggregateOutputType = {
    id: string | null;
    jobId: string | null;
    talentId: string | null;
    status: $Enums.ApplicationStatus | null;
    appliedAt: Date | null;
  };

  export type ApplicationCountAggregateOutputType = {
    id: number;
    jobId: number;
    talentId: number;
    status: number;
    appliedAt: number;
    _all: number;
  };

  export type ApplicationMinAggregateInputType = {
    id?: true;
    jobId?: true;
    talentId?: true;
    status?: true;
    appliedAt?: true;
  };

  export type ApplicationMaxAggregateInputType = {
    id?: true;
    jobId?: true;
    talentId?: true;
    status?: true;
    appliedAt?: true;
  };

  export type ApplicationCountAggregateInputType = {
    id?: true;
    jobId?: true;
    talentId?: true;
    status?: true;
    appliedAt?: true;
    _all?: true;
  };

  export type ApplicationAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Application to aggregate.
     */
    where?: ApplicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Applications to fetch.
     */
    orderBy?:
      | ApplicationOrderByWithRelationInput
      | ApplicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ApplicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Applications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Applications
     **/
    _count?: true | ApplicationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ApplicationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ApplicationMaxAggregateInputType;
  };

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> =
    {
      [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateApplication[P]>
        : GetScalarType<T[P], AggregateApplication[P]>;
    };

  export type ApplicationGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ApplicationWhereInput;
    orderBy?:
      | ApplicationOrderByWithAggregationInput
      | ApplicationOrderByWithAggregationInput[];
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum;
    having?: ApplicationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ApplicationCountAggregateInputType | true;
    _min?: ApplicationMinAggregateInputType;
    _max?: ApplicationMaxAggregateInputType;
  };

  export type ApplicationGroupByOutputType = {
    id: string;
    jobId: string;
    talentId: string;
    status: $Enums.ApplicationStatus;
    appliedAt: Date;
    _count: ApplicationCountAggregateOutputType | null;
    _min: ApplicationMinAggregateOutputType | null;
    _max: ApplicationMaxAggregateOutputType | null;
  };

  type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ApplicationGroupByOutputType, T['by']> & {
          [
            P in keyof T & keyof ApplicationGroupByOutputType
          ]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>;
        }
      >
    >;

  export type ApplicationSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      jobId?: boolean;
      talentId?: boolean;
      status?: boolean;
      appliedAt?: boolean;
      job?: boolean | JobDefaultArgs<ExtArgs>;
      talent?: boolean | TalentProfileDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['application']
  >;

  export type ApplicationSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      jobId?: boolean;
      talentId?: boolean;
      status?: boolean;
      appliedAt?: boolean;
      job?: boolean | JobDefaultArgs<ExtArgs>;
      talent?: boolean | TalentProfileDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['application']
  >;

  export type ApplicationSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      jobId?: boolean;
      talentId?: boolean;
      status?: boolean;
      appliedAt?: boolean;
      job?: boolean | JobDefaultArgs<ExtArgs>;
      talent?: boolean | TalentProfileDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['application']
  >;

  export type ApplicationSelectScalar = {
    id?: boolean;
    jobId?: boolean;
    talentId?: boolean;
    status?: boolean;
    appliedAt?: boolean;
  };

  export type ApplicationOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'jobId' | 'talentId' | 'status' | 'appliedAt',
    ExtArgs['result']['application']
  >;
  export type ApplicationInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    job?: boolean | JobDefaultArgs<ExtArgs>;
    talent?: boolean | TalentProfileDefaultArgs<ExtArgs>;
  };
  export type ApplicationIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    job?: boolean | JobDefaultArgs<ExtArgs>;
    talent?: boolean | TalentProfileDefaultArgs<ExtArgs>;
  };
  export type ApplicationIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    job?: boolean | JobDefaultArgs<ExtArgs>;
    talent?: boolean | TalentProfileDefaultArgs<ExtArgs>;
  };

  export type $ApplicationPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Application';
    objects: {
      job: Prisma.$JobPayload<ExtArgs>;
      talent: Prisma.$TalentProfilePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        jobId: string;
        talentId: string;
        status: $Enums.ApplicationStatus;
        appliedAt: Date;
      },
      ExtArgs['result']['application']
    >;
    composites: {};
  };

  type ApplicationGetPayload<
    S extends boolean | null | undefined | ApplicationDefaultArgs,
  > = $Result.GetResult<Prisma.$ApplicationPayload, S>;

  type ApplicationCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    ApplicationFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: ApplicationCountAggregateInputType | true;
  };

  export interface ApplicationDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Application'];
      meta: { name: 'Application' };
    };
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationFindUniqueArgs>(
      args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>,
    ): Prisma__ApplicationClient<
      $Result.GetResult<
        Prisma.$ApplicationPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Application that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ApplicationClient<
      $Result.GetResult<
        Prisma.$ApplicationPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationFindFirstArgs>(
      args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>,
    ): Prisma__ApplicationClient<
      $Result.GetResult<
        Prisma.$ApplicationPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ApplicationClient<
      $Result.GetResult<
        Prisma.$ApplicationPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     *
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ApplicationFindManyArgs>(
      args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ApplicationPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     *
     */
    create<T extends ApplicationCreateArgs>(
      args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>,
    ): Prisma__ApplicationClient<
      $Result.GetResult<
        Prisma.$ApplicationPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Applications.
     * @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ApplicationCreateManyArgs>(
      args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Applications and returns the data saved in the database.
     * @param {ApplicationCreateManyAndReturnArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ApplicationCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ApplicationCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ApplicationPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     *
     */
    delete<T extends ApplicationDeleteArgs>(
      args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>,
    ): Prisma__ApplicationClient<
      $Result.GetResult<
        Prisma.$ApplicationPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ApplicationUpdateArgs>(
      args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>,
    ): Prisma__ApplicationClient<
      $Result.GetResult<
        Prisma.$ApplicationPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ApplicationDeleteManyArgs>(
      args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ApplicationUpdateManyArgs>(
      args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Applications and returns the data updated in the database.
     * @param {ApplicationUpdateManyAndReturnArgs} args - Arguments to update many Applications.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ApplicationUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ApplicationUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ApplicationPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationUpsertArgs>(
      args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>,
    ): Prisma__ApplicationClient<
      $Result.GetResult<
        Prisma.$ApplicationPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
     **/
    count<T extends ApplicationCountArgs>(
      args?: Subset<T, ApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApplicationAggregateArgs>(
      args: Subset<T, ApplicationAggregateArgs>,
    ): Prisma.PrismaPromise<GetApplicationAggregateType<T>>;

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
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
      T extends ApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends (True extends HasSelectOrTake
        ? { orderBy: ApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationGroupByArgs['orderBy'] }),
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends (T['by'] extends never[] ? True : False),
      InputErrors extends (ByEmpty extends True
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]),
    >(
      args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetApplicationGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Application model
     */
    readonly fields: ApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    job<T extends JobDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, JobDefaultArgs<ExtArgs>>,
    ): Prisma__JobClient<
      | $Result.GetResult<
          Prisma.$JobPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    talent<T extends TalentProfileDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, TalentProfileDefaultArgs<ExtArgs>>,
    ): Prisma__TalentProfileClient<
      | $Result.GetResult<
          Prisma.$TalentProfilePayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Application model
   */
  interface ApplicationFieldRefs {
    readonly id: FieldRef<'Application', 'String'>;
    readonly jobId: FieldRef<'Application', 'String'>;
    readonly talentId: FieldRef<'Application', 'String'>;
    readonly status: FieldRef<'Application', 'ApplicationStatus'>;
    readonly appliedAt: FieldRef<'Application', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Application findUnique
   */
  export type ApplicationFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null;
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput;
  };

  /**
   * Application findUniqueOrThrow
   */
  export type ApplicationFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null;
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput;
  };

  /**
   * Application findFirst
   */
  export type ApplicationFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null;
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Applications to fetch.
     */
    orderBy?:
      | ApplicationOrderByWithRelationInput
      | ApplicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Applications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
  };

  /**
   * Application findFirstOrThrow
   */
  export type ApplicationFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null;
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Applications to fetch.
     */
    orderBy?:
      | ApplicationOrderByWithRelationInput
      | ApplicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Applications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
  };

  /**
   * Application findMany
   */
  export type ApplicationFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null;
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Applications to fetch.
     */
    orderBy?:
      | ApplicationOrderByWithRelationInput
      | ApplicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Applications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
  };

  /**
   * Application create
   */
  export type ApplicationCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null;
    /**
     * The data needed to create a Application.
     */
    data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>;
  };

  /**
   * Application createMany
   */
  export type ApplicationCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Application createManyAndReturn
   */
  export type ApplicationCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Application update
   */
  export type ApplicationUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null;
    /**
     * The data needed to update a Application.
     */
    data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>;
    /**
     * Choose, which Application to update.
     */
    where: ApplicationWhereUniqueInput;
  };

  /**
   * Application updateMany
   */
  export type ApplicationUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Applications.
     */
    data: XOR<
      ApplicationUpdateManyMutationInput,
      ApplicationUncheckedUpdateManyInput
    >;
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput;
    /**
     * Limit how many Applications to update.
     */
    limit?: number;
  };

  /**
   * Application updateManyAndReturn
   */
  export type ApplicationUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * The data used to update Applications.
     */
    data: XOR<
      ApplicationUpdateManyMutationInput,
      ApplicationUncheckedUpdateManyInput
    >;
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput;
    /**
     * Limit how many Applications to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Application upsert
   */
  export type ApplicationUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null;
    /**
     * The filter to search for the Application to update in case it exists.
     */
    where: ApplicationWhereUniqueInput;
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     */
    create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>;
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>;
  };

  /**
   * Application delete
   */
  export type ApplicationDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null;
    /**
     * Filter which Application to delete.
     */
    where: ApplicationWhereUniqueInput;
  };

  /**
   * Application deleteMany
   */
  export type ApplicationDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationWhereInput;
    /**
     * Limit how many Applications to delete.
     */
    limit?: number;
  };

  /**
   * Application without action
   */
  export type ApplicationDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null;
  };

  /**
   * Model SubscriptionPlan
   */

  export type AggregateSubscriptionPlan = {
    _count: SubscriptionPlanCountAggregateOutputType | null;
    _avg: SubscriptionPlanAvgAggregateOutputType | null;
    _sum: SubscriptionPlanSumAggregateOutputType | null;
    _min: SubscriptionPlanMinAggregateOutputType | null;
    _max: SubscriptionPlanMaxAggregateOutputType | null;
  };

  export type SubscriptionPlanAvgAggregateOutputType = {
    price: Decimal | null;
  };

  export type SubscriptionPlanSumAggregateOutputType = {
    price: Decimal | null;
  };

  export type SubscriptionPlanMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    price: Decimal | null;
  };

  export type SubscriptionPlanMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    price: Decimal | null;
  };

  export type SubscriptionPlanCountAggregateOutputType = {
    id: number;
    name: number;
    price: number;
    features: number;
    _all: number;
  };

  export type SubscriptionPlanAvgAggregateInputType = {
    price?: true;
  };

  export type SubscriptionPlanSumAggregateInputType = {
    price?: true;
  };

  export type SubscriptionPlanMinAggregateInputType = {
    id?: true;
    name?: true;
    price?: true;
  };

  export type SubscriptionPlanMaxAggregateInputType = {
    id?: true;
    name?: true;
    price?: true;
  };

  export type SubscriptionPlanCountAggregateInputType = {
    id?: true;
    name?: true;
    price?: true;
    features?: true;
    _all?: true;
  };

  export type SubscriptionPlanAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which SubscriptionPlan to aggregate.
     */
    where?: SubscriptionPlanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?:
      | SubscriptionPlanOrderByWithRelationInput
      | SubscriptionPlanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: SubscriptionPlanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SubscriptionPlans
     **/
    _count?: true | SubscriptionPlanCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: SubscriptionPlanAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: SubscriptionPlanSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SubscriptionPlanMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SubscriptionPlanMaxAggregateInputType;
  };

  export type GetSubscriptionPlanAggregateType<
    T extends SubscriptionPlanAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateSubscriptionPlan]: P extends
      '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptionPlan[P]>
      : GetScalarType<T[P], AggregateSubscriptionPlan[P]>;
  };

  export type SubscriptionPlanGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SubscriptionPlanWhereInput;
    orderBy?:
      | SubscriptionPlanOrderByWithAggregationInput
      | SubscriptionPlanOrderByWithAggregationInput[];
    by: SubscriptionPlanScalarFieldEnum[] | SubscriptionPlanScalarFieldEnum;
    having?: SubscriptionPlanScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SubscriptionPlanCountAggregateInputType | true;
    _avg?: SubscriptionPlanAvgAggregateInputType;
    _sum?: SubscriptionPlanSumAggregateInputType;
    _min?: SubscriptionPlanMinAggregateInputType;
    _max?: SubscriptionPlanMaxAggregateInputType;
  };

  export type SubscriptionPlanGroupByOutputType = {
    id: string;
    name: string;
    price: Decimal;
    features: string[];
    _count: SubscriptionPlanCountAggregateOutputType | null;
    _avg: SubscriptionPlanAvgAggregateOutputType | null;
    _sum: SubscriptionPlanSumAggregateOutputType | null;
    _min: SubscriptionPlanMinAggregateOutputType | null;
    _max: SubscriptionPlanMaxAggregateOutputType | null;
  };

  type GetSubscriptionPlanGroupByPayload<
    T extends SubscriptionPlanGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionPlanGroupByOutputType, T['by']> & {
        [
          P in keyof T & keyof SubscriptionPlanGroupByOutputType
        ]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], SubscriptionPlanGroupByOutputType[P]>
          : GetScalarType<T[P], SubscriptionPlanGroupByOutputType[P]>;
      }
    >
  >;

  export type SubscriptionPlanSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      price?: boolean;
      features?: boolean;
      subscriptions?: boolean | SubscriptionPlan$subscriptionsArgs<ExtArgs>;
      _count?: boolean | SubscriptionPlanCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['subscriptionPlan']
  >;

  export type SubscriptionPlanSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      price?: boolean;
      features?: boolean;
    },
    ExtArgs['result']['subscriptionPlan']
  >;

  export type SubscriptionPlanSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      price?: boolean;
      features?: boolean;
    },
    ExtArgs['result']['subscriptionPlan']
  >;

  export type SubscriptionPlanSelectScalar = {
    id?: boolean;
    name?: boolean;
    price?: boolean;
    features?: boolean;
  };

  export type SubscriptionPlanOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'name' | 'price' | 'features',
    ExtArgs['result']['subscriptionPlan']
  >;
  export type SubscriptionPlanInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    subscriptions?: boolean | SubscriptionPlan$subscriptionsArgs<ExtArgs>;
    _count?: boolean | SubscriptionPlanCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type SubscriptionPlanIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type SubscriptionPlanIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $SubscriptionPlanPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'SubscriptionPlan';
    objects: {
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        price: Prisma.Decimal;
        features: string[];
      },
      ExtArgs['result']['subscriptionPlan']
    >;
    composites: {};
  };

  type SubscriptionPlanGetPayload<
    S extends boolean | null | undefined | SubscriptionPlanDefaultArgs,
  > = $Result.GetResult<Prisma.$SubscriptionPlanPayload, S>;

  type SubscriptionPlanCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    SubscriptionPlanFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: SubscriptionPlanCountAggregateInputType | true;
  };

  export interface SubscriptionPlanDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['SubscriptionPlan'];
      meta: { name: 'SubscriptionPlan' };
    };
    /**
     * Find zero or one SubscriptionPlan that matches the filter.
     * @param {SubscriptionPlanFindUniqueArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionPlanFindUniqueArgs>(
      args: SelectSubset<T, SubscriptionPlanFindUniqueArgs<ExtArgs>>,
    ): Prisma__SubscriptionPlanClient<
      $Result.GetResult<
        Prisma.$SubscriptionPlanPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one SubscriptionPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionPlanFindUniqueOrThrowArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionPlanFindUniqueOrThrowArgs>(
      args: SelectSubset<T, SubscriptionPlanFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__SubscriptionPlanClient<
      $Result.GetResult<
        Prisma.$SubscriptionPlanPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first SubscriptionPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanFindFirstArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionPlanFindFirstArgs>(
      args?: SelectSubset<T, SubscriptionPlanFindFirstArgs<ExtArgs>>,
    ): Prisma__SubscriptionPlanClient<
      $Result.GetResult<
        Prisma.$SubscriptionPlanPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first SubscriptionPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanFindFirstOrThrowArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionPlanFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SubscriptionPlanFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__SubscriptionPlanClient<
      $Result.GetResult<
        Prisma.$SubscriptionPlanPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more SubscriptionPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubscriptionPlans
     * const subscriptionPlans = await prisma.subscriptionPlan.findMany()
     *
     * // Get first 10 SubscriptionPlans
     * const subscriptionPlans = await prisma.subscriptionPlan.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const subscriptionPlanWithIdOnly = await prisma.subscriptionPlan.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SubscriptionPlanFindManyArgs>(
      args?: SelectSubset<T, SubscriptionPlanFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SubscriptionPlanPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a SubscriptionPlan.
     * @param {SubscriptionPlanCreateArgs} args - Arguments to create a SubscriptionPlan.
     * @example
     * // Create one SubscriptionPlan
     * const SubscriptionPlan = await prisma.subscriptionPlan.create({
     *   data: {
     *     // ... data to create a SubscriptionPlan
     *   }
     * })
     *
     */
    create<T extends SubscriptionPlanCreateArgs>(
      args: SelectSubset<T, SubscriptionPlanCreateArgs<ExtArgs>>,
    ): Prisma__SubscriptionPlanClient<
      $Result.GetResult<
        Prisma.$SubscriptionPlanPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many SubscriptionPlans.
     * @param {SubscriptionPlanCreateManyArgs} args - Arguments to create many SubscriptionPlans.
     * @example
     * // Create many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SubscriptionPlanCreateManyArgs>(
      args?: SelectSubset<T, SubscriptionPlanCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many SubscriptionPlans and returns the data saved in the database.
     * @param {SubscriptionPlanCreateManyAndReturnArgs} args - Arguments to create many SubscriptionPlans.
     * @example
     * // Create many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SubscriptionPlans and only return the `id`
     * const subscriptionPlanWithIdOnly = await prisma.subscriptionPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SubscriptionPlanCreateManyAndReturnArgs>(
      args?: SelectSubset<T, SubscriptionPlanCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SubscriptionPlanPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a SubscriptionPlan.
     * @param {SubscriptionPlanDeleteArgs} args - Arguments to delete one SubscriptionPlan.
     * @example
     * // Delete one SubscriptionPlan
     * const SubscriptionPlan = await prisma.subscriptionPlan.delete({
     *   where: {
     *     // ... filter to delete one SubscriptionPlan
     *   }
     * })
     *
     */
    delete<T extends SubscriptionPlanDeleteArgs>(
      args: SelectSubset<T, SubscriptionPlanDeleteArgs<ExtArgs>>,
    ): Prisma__SubscriptionPlanClient<
      $Result.GetResult<
        Prisma.$SubscriptionPlanPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one SubscriptionPlan.
     * @param {SubscriptionPlanUpdateArgs} args - Arguments to update one SubscriptionPlan.
     * @example
     * // Update one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SubscriptionPlanUpdateArgs>(
      args: SelectSubset<T, SubscriptionPlanUpdateArgs<ExtArgs>>,
    ): Prisma__SubscriptionPlanClient<
      $Result.GetResult<
        Prisma.$SubscriptionPlanPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more SubscriptionPlans.
     * @param {SubscriptionPlanDeleteManyArgs} args - Arguments to filter SubscriptionPlans to delete.
     * @example
     * // Delete a few SubscriptionPlans
     * const { count } = await prisma.subscriptionPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SubscriptionPlanDeleteManyArgs>(
      args?: SelectSubset<T, SubscriptionPlanDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more SubscriptionPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SubscriptionPlanUpdateManyArgs>(
      args: SelectSubset<T, SubscriptionPlanUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more SubscriptionPlans and returns the data updated in the database.
     * @param {SubscriptionPlanUpdateManyAndReturnArgs} args - Arguments to update many SubscriptionPlans.
     * @example
     * // Update many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SubscriptionPlans and only return the `id`
     * const subscriptionPlanWithIdOnly = await prisma.subscriptionPlan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends SubscriptionPlanUpdateManyAndReturnArgs>(
      args: SelectSubset<T, SubscriptionPlanUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SubscriptionPlanPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one SubscriptionPlan.
     * @param {SubscriptionPlanUpsertArgs} args - Arguments to update or create a SubscriptionPlan.
     * @example
     * // Update or create a SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.upsert({
     *   create: {
     *     // ... data to create a SubscriptionPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubscriptionPlan we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionPlanUpsertArgs>(
      args: SelectSubset<T, SubscriptionPlanUpsertArgs<ExtArgs>>,
    ): Prisma__SubscriptionPlanClient<
      $Result.GetResult<
        Prisma.$SubscriptionPlanPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of SubscriptionPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanCountArgs} args - Arguments to filter SubscriptionPlans to count.
     * @example
     * // Count the number of SubscriptionPlans
     * const count = await prisma.subscriptionPlan.count({
     *   where: {
     *     // ... the filter for the SubscriptionPlans we want to count
     *   }
     * })
     **/
    count<T extends SubscriptionPlanCountArgs>(
      args?: Subset<T, SubscriptionPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionPlanCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a SubscriptionPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionPlanAggregateArgs>(
      args: Subset<T, SubscriptionPlanAggregateArgs>,
    ): Prisma.PrismaPromise<GetSubscriptionPlanAggregateType<T>>;

    /**
     * Group by SubscriptionPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends (True extends HasSelectOrTake
        ? { orderBy: SubscriptionPlanGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionPlanGroupByArgs['orderBy'] }),
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends (T['by'] extends never[] ? True : False),
      InputErrors extends (ByEmpty extends True
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]),
    >(
      args: SubsetIntersection<T, SubscriptionPlanGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetSubscriptionPlanGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the SubscriptionPlan model
     */
    readonly fields: SubscriptionPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubscriptionPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionPlanClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    subscriptions<T extends SubscriptionPlan$subscriptionsArgs<ExtArgs> = {}>(
      args?: Subset<T, SubscriptionPlan$subscriptionsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$SubscriptionPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the SubscriptionPlan model
   */
  interface SubscriptionPlanFieldRefs {
    readonly id: FieldRef<'SubscriptionPlan', 'String'>;
    readonly name: FieldRef<'SubscriptionPlan', 'String'>;
    readonly price: FieldRef<'SubscriptionPlan', 'Decimal'>;
    readonly features: FieldRef<'SubscriptionPlan', 'String[]'>;
  }

  // Custom InputTypes
  /**
   * SubscriptionPlan findUnique
   */
  export type SubscriptionPlanFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null;
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where: SubscriptionPlanWhereUniqueInput;
  };

  /**
   * SubscriptionPlan findUniqueOrThrow
   */
  export type SubscriptionPlanFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null;
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where: SubscriptionPlanWhereUniqueInput;
  };

  /**
   * SubscriptionPlan findFirst
   */
  export type SubscriptionPlanFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null;
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where?: SubscriptionPlanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?:
      | SubscriptionPlanOrderByWithRelationInput
      | SubscriptionPlanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SubscriptionPlans.
     */
    cursor?: SubscriptionPlanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SubscriptionPlans.
     */
    distinct?:
      SubscriptionPlanScalarFieldEnum | SubscriptionPlanScalarFieldEnum[];
  };

  /**
   * SubscriptionPlan findFirstOrThrow
   */
  export type SubscriptionPlanFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null;
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where?: SubscriptionPlanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?:
      | SubscriptionPlanOrderByWithRelationInput
      | SubscriptionPlanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SubscriptionPlans.
     */
    cursor?: SubscriptionPlanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SubscriptionPlans.
     */
    distinct?:
      SubscriptionPlanScalarFieldEnum | SubscriptionPlanScalarFieldEnum[];
  };

  /**
   * SubscriptionPlan findMany
   */
  export type SubscriptionPlanFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null;
    /**
     * Filter, which SubscriptionPlans to fetch.
     */
    where?: SubscriptionPlanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?:
      | SubscriptionPlanOrderByWithRelationInput
      | SubscriptionPlanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SubscriptionPlans.
     */
    cursor?: SubscriptionPlanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SubscriptionPlans.
     */
    distinct?:
      SubscriptionPlanScalarFieldEnum | SubscriptionPlanScalarFieldEnum[];
  };

  /**
   * SubscriptionPlan create
   */
  export type SubscriptionPlanCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null;
    /**
     * The data needed to create a SubscriptionPlan.
     */
    data: XOR<
      SubscriptionPlanCreateInput,
      SubscriptionPlanUncheckedCreateInput
    >;
  };

  /**
   * SubscriptionPlan createMany
   */
  export type SubscriptionPlanCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many SubscriptionPlans.
     */
    data: SubscriptionPlanCreateManyInput | SubscriptionPlanCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * SubscriptionPlan createManyAndReturn
   */
  export type SubscriptionPlanCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null;
    /**
     * The data used to create many SubscriptionPlans.
     */
    data: SubscriptionPlanCreateManyInput | SubscriptionPlanCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * SubscriptionPlan update
   */
  export type SubscriptionPlanUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null;
    /**
     * The data needed to update a SubscriptionPlan.
     */
    data: XOR<
      SubscriptionPlanUpdateInput,
      SubscriptionPlanUncheckedUpdateInput
    >;
    /**
     * Choose, which SubscriptionPlan to update.
     */
    where: SubscriptionPlanWhereUniqueInput;
  };

  /**
   * SubscriptionPlan updateMany
   */
  export type SubscriptionPlanUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update SubscriptionPlans.
     */
    data: XOR<
      SubscriptionPlanUpdateManyMutationInput,
      SubscriptionPlanUncheckedUpdateManyInput
    >;
    /**
     * Filter which SubscriptionPlans to update
     */
    where?: SubscriptionPlanWhereInput;
    /**
     * Limit how many SubscriptionPlans to update.
     */
    limit?: number;
  };

  /**
   * SubscriptionPlan updateManyAndReturn
   */
  export type SubscriptionPlanUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null;
    /**
     * The data used to update SubscriptionPlans.
     */
    data: XOR<
      SubscriptionPlanUpdateManyMutationInput,
      SubscriptionPlanUncheckedUpdateManyInput
    >;
    /**
     * Filter which SubscriptionPlans to update
     */
    where?: SubscriptionPlanWhereInput;
    /**
     * Limit how many SubscriptionPlans to update.
     */
    limit?: number;
  };

  /**
   * SubscriptionPlan upsert
   */
  export type SubscriptionPlanUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null;
    /**
     * The filter to search for the SubscriptionPlan to update in case it exists.
     */
    where: SubscriptionPlanWhereUniqueInput;
    /**
     * In case the SubscriptionPlan found by the `where` argument doesn't exist, create a new SubscriptionPlan with this data.
     */
    create: XOR<
      SubscriptionPlanCreateInput,
      SubscriptionPlanUncheckedCreateInput
    >;
    /**
     * In case the SubscriptionPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      SubscriptionPlanUpdateInput,
      SubscriptionPlanUncheckedUpdateInput
    >;
  };

  /**
   * SubscriptionPlan delete
   */
  export type SubscriptionPlanDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null;
    /**
     * Filter which SubscriptionPlan to delete.
     */
    where: SubscriptionPlanWhereUniqueInput;
  };

  /**
   * SubscriptionPlan deleteMany
   */
  export type SubscriptionPlanDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which SubscriptionPlans to delete
     */
    where?: SubscriptionPlanWhereInput;
    /**
     * Limit how many SubscriptionPlans to delete.
     */
    limit?: number;
  };

  /**
   * SubscriptionPlan.subscriptions
   */
  export type SubscriptionPlan$subscriptionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null;
    where?: SubscriptionWhereInput;
    orderBy?:
      | SubscriptionOrderByWithRelationInput
      | SubscriptionOrderByWithRelationInput[];
    cursor?: SubscriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[];
  };

  /**
   * SubscriptionPlan without action
   */
  export type SubscriptionPlanDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null;
  };

  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null;
    _min: SubscriptionMinAggregateOutputType | null;
    _max: SubscriptionMaxAggregateOutputType | null;
  };

  export type SubscriptionMinAggregateOutputType = {
    id: string | null;
    employerId: string | null;
    planId: string | null;
    status: $Enums.SubscriptionStatus | null;
    startDate: Date | null;
    endDate: Date | null;
  };

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null;
    employerId: string | null;
    planId: string | null;
    status: $Enums.SubscriptionStatus | null;
    startDate: Date | null;
    endDate: Date | null;
  };

  export type SubscriptionCountAggregateOutputType = {
    id: number;
    employerId: number;
    planId: number;
    status: number;
    startDate: number;
    endDate: number;
    _all: number;
  };

  export type SubscriptionMinAggregateInputType = {
    id?: true;
    employerId?: true;
    planId?: true;
    status?: true;
    startDate?: true;
    endDate?: true;
  };

  export type SubscriptionMaxAggregateInputType = {
    id?: true;
    employerId?: true;
    planId?: true;
    status?: true;
    startDate?: true;
    endDate?: true;
  };

  export type SubscriptionCountAggregateInputType = {
    id?: true;
    employerId?: true;
    planId?: true;
    status?: true;
    startDate?: true;
    endDate?: true;
    _all?: true;
  };

  export type SubscriptionAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?:
      | SubscriptionOrderByWithRelationInput
      | SubscriptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subscriptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Subscriptions
     **/
    _count?: true | SubscriptionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SubscriptionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SubscriptionMaxAggregateInputType;
  };

  export type GetSubscriptionAggregateType<
    T extends SubscriptionAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>;
  };

  export type SubscriptionGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: SubscriptionWhereInput;
    orderBy?:
      | SubscriptionOrderByWithAggregationInput
      | SubscriptionOrderByWithAggregationInput[];
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum;
    having?: SubscriptionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SubscriptionCountAggregateInputType | true;
    _min?: SubscriptionMinAggregateInputType;
    _max?: SubscriptionMaxAggregateInputType;
  };

  export type SubscriptionGroupByOutputType = {
    id: string;
    employerId: string;
    planId: string;
    status: $Enums.SubscriptionStatus;
    startDate: Date;
    endDate: Date;
    _count: SubscriptionCountAggregateOutputType | null;
    _min: SubscriptionMinAggregateOutputType | null;
    _max: SubscriptionMaxAggregateOutputType | null;
  };

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<SubscriptionGroupByOutputType, T['by']> & {
          [
            P in keyof T & keyof SubscriptionGroupByOutputType
          ]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>;
        }
      >
    >;

  export type SubscriptionSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      employerId?: boolean;
      planId?: boolean;
      status?: boolean;
      startDate?: boolean;
      endDate?: boolean;
      employer?: boolean | EmployerProfileDefaultArgs<ExtArgs>;
      plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>;
      payments?: boolean | Subscription$paymentsArgs<ExtArgs>;
      _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['subscription']
  >;

  export type SubscriptionSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      employerId?: boolean;
      planId?: boolean;
      status?: boolean;
      startDate?: boolean;
      endDate?: boolean;
      employer?: boolean | EmployerProfileDefaultArgs<ExtArgs>;
      plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['subscription']
  >;

  export type SubscriptionSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      employerId?: boolean;
      planId?: boolean;
      status?: boolean;
      startDate?: boolean;
      endDate?: boolean;
      employer?: boolean | EmployerProfileDefaultArgs<ExtArgs>;
      plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['subscription']
  >;

  export type SubscriptionSelectScalar = {
    id?: boolean;
    employerId?: boolean;
    planId?: boolean;
    status?: boolean;
    startDate?: boolean;
    endDate?: boolean;
  };

  export type SubscriptionOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'employerId' | 'planId' | 'status' | 'startDate' | 'endDate',
    ExtArgs['result']['subscription']
  >;
  export type SubscriptionInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    employer?: boolean | EmployerProfileDefaultArgs<ExtArgs>;
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>;
    payments?: boolean | Subscription$paymentsArgs<ExtArgs>;
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type SubscriptionIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    employer?: boolean | EmployerProfileDefaultArgs<ExtArgs>;
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>;
  };
  export type SubscriptionIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    employer?: boolean | EmployerProfileDefaultArgs<ExtArgs>;
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>;
  };

  export type $SubscriptionPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Subscription';
    objects: {
      employer: Prisma.$EmployerProfilePayload<ExtArgs>;
      plan: Prisma.$SubscriptionPlanPayload<ExtArgs>;
      payments: Prisma.$PaymentPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        employerId: string;
        planId: string;
        status: $Enums.SubscriptionStatus;
        startDate: Date;
        endDate: Date;
      },
      ExtArgs['result']['subscription']
    >;
    composites: {};
  };

  type SubscriptionGetPayload<
    S extends boolean | null | undefined | SubscriptionDefaultArgs,
  > = $Result.GetResult<Prisma.$SubscriptionPayload, S>;

  type SubscriptionCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    SubscriptionFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: SubscriptionCountAggregateInputType | true;
  };

  export interface SubscriptionDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Subscription'];
      meta: { name: 'Subscription' };
    };
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(
      args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>,
    ): Prisma__SubscriptionClient<
      $Result.GetResult<
        Prisma.$SubscriptionPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(
      args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__SubscriptionClient<
      $Result.GetResult<
        Prisma.$SubscriptionPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(
      args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>,
    ): Prisma__SubscriptionClient<
      $Result.GetResult<
        Prisma.$SubscriptionPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__SubscriptionClient<
      $Result.GetResult<
        Prisma.$SubscriptionPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     *
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SubscriptionFindManyArgs>(
      args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SubscriptionPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     *
     */
    create<T extends SubscriptionCreateArgs>(
      args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>,
    ): Prisma__SubscriptionClient<
      $Result.GetResult<
        Prisma.$SubscriptionPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SubscriptionCreateManyArgs>(
      args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(
      args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SubscriptionPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     *
     */
    delete<T extends SubscriptionDeleteArgs>(
      args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>,
    ): Prisma__SubscriptionClient<
      $Result.GetResult<
        Prisma.$SubscriptionPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SubscriptionUpdateArgs>(
      args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>,
    ): Prisma__SubscriptionClient<
      $Result.GetResult<
        Prisma.$SubscriptionPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(
      args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(
      args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(
      args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$SubscriptionPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(
      args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>,
    ): Prisma__SubscriptionClient<
      $Result.GetResult<
        Prisma.$SubscriptionPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
     **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionAggregateArgs>(
      args: Subset<T, SubscriptionAggregateArgs>,
    ): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>;

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends (True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] }),
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends (T['by'] extends never[] ? True : False),
      InputErrors extends (ByEmpty extends True
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]),
    >(
      args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetSubscriptionGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Subscription model
     */
    readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    employer<T extends EmployerProfileDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, EmployerProfileDefaultArgs<ExtArgs>>,
    ): Prisma__EmployerProfileClient<
      | $Result.GetResult<
          Prisma.$EmployerProfilePayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    plan<T extends SubscriptionPlanDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, SubscriptionPlanDefaultArgs<ExtArgs>>,
    ): Prisma__SubscriptionPlanClient<
      | $Result.GetResult<
          Prisma.$SubscriptionPlanPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    payments<T extends Subscription$paymentsArgs<ExtArgs> = {}>(
      args?: Subset<T, Subscription$paymentsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$PaymentPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<'Subscription', 'String'>;
    readonly employerId: FieldRef<'Subscription', 'String'>;
    readonly planId: FieldRef<'Subscription', 'String'>;
    readonly status: FieldRef<'Subscription', 'SubscriptionStatus'>;
    readonly startDate: FieldRef<'Subscription', 'DateTime'>;
    readonly endDate: FieldRef<'Subscription', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null;
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput;
  };

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null;
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput;
  };

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null;
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?:
      | SubscriptionOrderByWithRelationInput
      | SubscriptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subscriptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[];
  };

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null;
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?:
      | SubscriptionOrderByWithRelationInput
      | SubscriptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subscriptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[];
  };

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null;
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?:
      | SubscriptionOrderByWithRelationInput
      | SubscriptionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Subscriptions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[];
  };

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null;
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>;
  };

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null;
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>;
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput;
  };

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<
      SubscriptionUpdateManyMutationInput,
      SubscriptionUncheckedUpdateManyInput
    >;
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput;
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number;
  };

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<
      SubscriptionUpdateManyMutationInput,
      SubscriptionUncheckedUpdateManyInput
    >;
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput;
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null;
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput;
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>;
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>;
  };

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null;
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput;
  };

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput;
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number;
  };

  /**
   * Subscription.payments
   */
  export type Subscription$paymentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    where?: PaymentWhereInput;
    orderBy?:
      PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[];
    cursor?: PaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null;
  };

  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null;
    _avg: PaymentAvgAggregateOutputType | null;
    _sum: PaymentSumAggregateOutputType | null;
    _min: PaymentMinAggregateOutputType | null;
    _max: PaymentMaxAggregateOutputType | null;
  };

  export type PaymentAvgAggregateOutputType = {
    amount: Decimal | null;
  };

  export type PaymentSumAggregateOutputType = {
    amount: Decimal | null;
  };

  export type PaymentMinAggregateOutputType = {
    id: string | null;
    subscriptionId: string | null;
    amount: Decimal | null;
    status: $Enums.PaymentStatus | null;
    paidAt: Date | null;
  };

  export type PaymentMaxAggregateOutputType = {
    id: string | null;
    subscriptionId: string | null;
    amount: Decimal | null;
    status: $Enums.PaymentStatus | null;
    paidAt: Date | null;
  };

  export type PaymentCountAggregateOutputType = {
    id: number;
    subscriptionId: number;
    amount: number;
    status: number;
    paidAt: number;
    _all: number;
  };

  export type PaymentAvgAggregateInputType = {
    amount?: true;
  };

  export type PaymentSumAggregateInputType = {
    amount?: true;
  };

  export type PaymentMinAggregateInputType = {
    id?: true;
    subscriptionId?: true;
    amount?: true;
    status?: true;
    paidAt?: true;
  };

  export type PaymentMaxAggregateInputType = {
    id?: true;
    subscriptionId?: true;
    amount?: true;
    status?: true;
    paidAt?: true;
  };

  export type PaymentCountAggregateInputType = {
    id?: true;
    subscriptionId?: true;
    amount?: true;
    status?: true;
    paidAt?: true;
    _all?: true;
  };

  export type PaymentAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payments to fetch.
     */
    orderBy?:
      PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Payments
     **/
    _count?: true | PaymentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PaymentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PaymentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PaymentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PaymentMaxAggregateInputType;
  };

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
    [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>;
  };

  export type PaymentGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PaymentWhereInput;
    orderBy?:
      PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[];
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum;
    having?: PaymentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentCountAggregateInputType | true;
    _avg?: PaymentAvgAggregateInputType;
    _sum?: PaymentSumAggregateInputType;
    _min?: PaymentMinAggregateInputType;
    _max?: PaymentMaxAggregateInputType;
  };

  export type PaymentGroupByOutputType = {
    id: string;
    subscriptionId: string;
    amount: Decimal;
    status: $Enums.PaymentStatus;
    paidAt: Date;
    _count: PaymentCountAggregateOutputType | null;
    _avg: PaymentAvgAggregateOutputType | null;
    _sum: PaymentSumAggregateOutputType | null;
    _min: PaymentMinAggregateOutputType | null;
    _max: PaymentMaxAggregateOutputType | null;
  };

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<PaymentGroupByOutputType, T['by']> & {
          [P in keyof T & keyof PaymentGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>;
        }
      >
    >;

  export type PaymentSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      subscriptionId?: boolean;
      amount?: boolean;
      status?: boolean;
      paidAt?: boolean;
      subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['payment']
  >;

  export type PaymentSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      subscriptionId?: boolean;
      amount?: boolean;
      status?: boolean;
      paidAt?: boolean;
      subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['payment']
  >;

  export type PaymentSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      subscriptionId?: boolean;
      amount?: boolean;
      status?: boolean;
      paidAt?: boolean;
      subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['payment']
  >;

  export type PaymentSelectScalar = {
    id?: boolean;
    subscriptionId?: boolean;
    amount?: boolean;
    status?: boolean;
    paidAt?: boolean;
  };

  export type PaymentOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'subscriptionId' | 'amount' | 'status' | 'paidAt',
    ExtArgs['result']['payment']
  >;
  export type PaymentInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>;
  };
  export type PaymentIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>;
  };
  export type PaymentIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>;
  };

  export type $PaymentPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Payment';
    objects: {
      subscription: Prisma.$SubscriptionPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        subscriptionId: string;
        amount: Prisma.Decimal;
        status: $Enums.PaymentStatus;
        paidAt: Date;
      },
      ExtArgs['result']['payment']
    >;
    composites: {};
  };

  type PaymentGetPayload<
    S extends boolean | null | undefined | PaymentDefaultArgs,
  > = $Result.GetResult<Prisma.$PaymentPayload, S>;

  type PaymentCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PaymentCountAggregateInputType | true;
  };

  export interface PaymentDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Payment'];
      meta: { name: 'Payment' };
    };
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(
      args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(
      args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     *
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PaymentFindManyArgs>(
      args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     *
     */
    create<T extends PaymentCreateArgs>(
      args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PaymentCreateManyArgs>(
      args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(
      args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     *
     */
    delete<T extends PaymentDeleteArgs>(
      args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PaymentUpdateArgs>(
      args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PaymentDeleteManyArgs>(
      args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PaymentUpdateManyArgs>(
      args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(
      args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(
      args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>,
    ): Prisma__PaymentClient<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
     **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(
      args: Subset<T, PaymentAggregateArgs>,
    ): Prisma.PrismaPromise<GetPaymentAggregateType<T>>;

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends (True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] }),
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends (T['by'] extends never[] ? True : False),
      InputErrors extends (ByEmpty extends True
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]),
    >(
      args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetPaymentGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Payment model
     */
    readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    subscription<T extends SubscriptionDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, SubscriptionDefaultArgs<ExtArgs>>,
    ): Prisma__SubscriptionClient<
      | $Result.GetResult<
          Prisma.$SubscriptionPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<'Payment', 'String'>;
    readonly subscriptionId: FieldRef<'Payment', 'String'>;
    readonly amount: FieldRef<'Payment', 'Decimal'>;
    readonly status: FieldRef<'Payment', 'PaymentStatus'>;
    readonly paidAt: FieldRef<'Payment', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput;
  };

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput;
  };

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payments to fetch.
     */
    orderBy?:
      PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payments to fetch.
     */
    orderBy?:
      PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payments to fetch.
     */
    orderBy?:
      PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * Payment create
   */
  export type PaymentCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>;
  };

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>;
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput;
  };

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>;
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput;
    /**
     * Limit how many Payments to update.
     */
    limit?: number;
  };

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>;
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput;
    /**
     * Limit how many Payments to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput;
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>;
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>;
  };

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput;
  };

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput;
    /**
     * Limit how many Payments to delete.
     */
    limit?: number;
  };

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const SystemHealthScalarFieldEnum: {
    id: 'id';
    checkedAt: 'checkedAt';
  };

  export type SystemHealthScalarFieldEnum =
    (typeof SystemHealthScalarFieldEnum)[keyof typeof SystemHealthScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    passwordHash: 'passwordHash';
    role: 'role';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const TalentProfileScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    headline: 'headline';
    skills: 'skills';
    resumeUrl: 'resumeUrl';
  };

  export type TalentProfileScalarFieldEnum =
    (typeof TalentProfileScalarFieldEnum)[keyof typeof TalentProfileScalarFieldEnum];

  export const EmployerProfileScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    companyName: 'companyName';
    website: 'website';
  };

  export type EmployerProfileScalarFieldEnum =
    (typeof EmployerProfileScalarFieldEnum)[keyof typeof EmployerProfileScalarFieldEnum];

  export const JobScalarFieldEnum: {
    id: 'id';
    employerId: 'employerId';
    title: 'title';
    description: 'description';
    isActive: 'isActive';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type JobScalarFieldEnum =
    (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum];

  export const ApplicationScalarFieldEnum: {
    id: 'id';
    jobId: 'jobId';
    talentId: 'talentId';
    status: 'status';
    appliedAt: 'appliedAt';
  };

  export type ApplicationScalarFieldEnum =
    (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum];

  export const SubscriptionPlanScalarFieldEnum: {
    id: 'id';
    name: 'name';
    price: 'price';
    features: 'features';
  };

  export type SubscriptionPlanScalarFieldEnum =
    (typeof SubscriptionPlanScalarFieldEnum)[keyof typeof SubscriptionPlanScalarFieldEnum];

  export const SubscriptionScalarFieldEnum: {
    id: 'id';
    employerId: 'employerId';
    planId: 'planId';
    status: 'status';
    startDate: 'startDate';
    endDate: 'endDate';
  };

  export type SubscriptionScalarFieldEnum =
    (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum];

  export const PaymentScalarFieldEnum: {
    id: 'id';
    subscriptionId: 'subscriptionId';
    amount: 'amount';
    status: 'status';
    paidAt: 'paidAt';
  };

  export type PaymentScalarFieldEnum =
    (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Role'
  >;

  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Role[]'
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Boolean'
  >;

  /**
   * Reference to a field of type 'ApplicationStatus'
   */
  export type EnumApplicationStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'ApplicationStatus'>;

  /**
   * Reference to a field of type 'ApplicationStatus[]'
   */
  export type ListEnumApplicationStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'ApplicationStatus[]'>;

  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Decimal'
  >;

  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Decimal[]'
  >;

  /**
   * Reference to a field of type 'SubscriptionStatus'
   */
  export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>;

  /**
   * Reference to a field of type 'SubscriptionStatus[]'
   */
  export type ListEnumSubscriptionStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'SubscriptionStatus[]'>;

  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'PaymentStatus'
  >;

  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Deep Input Types
   */

  export type SystemHealthWhereInput = {
    AND?: SystemHealthWhereInput | SystemHealthWhereInput[];
    OR?: SystemHealthWhereInput[];
    NOT?: SystemHealthWhereInput | SystemHealthWhereInput[];
    id?: StringFilter<'SystemHealth'> | string;
    checkedAt?: DateTimeFilter<'SystemHealth'> | Date | string;
  };

  export type SystemHealthOrderByWithRelationInput = {
    id?: SortOrder;
    checkedAt?: SortOrder;
  };

  export type SystemHealthWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: SystemHealthWhereInput | SystemHealthWhereInput[];
      OR?: SystemHealthWhereInput[];
      NOT?: SystemHealthWhereInput | SystemHealthWhereInput[];
      checkedAt?: DateTimeFilter<'SystemHealth'> | Date | string;
    },
    'id'
  >;

  export type SystemHealthOrderByWithAggregationInput = {
    id?: SortOrder;
    checkedAt?: SortOrder;
    _count?: SystemHealthCountOrderByAggregateInput;
    _max?: SystemHealthMaxOrderByAggregateInput;
    _min?: SystemHealthMinOrderByAggregateInput;
  };

  export type SystemHealthScalarWhereWithAggregatesInput = {
    AND?:
      | SystemHealthScalarWhereWithAggregatesInput
      | SystemHealthScalarWhereWithAggregatesInput[];
    OR?: SystemHealthScalarWhereWithAggregatesInput[];
    NOT?:
      | SystemHealthScalarWhereWithAggregatesInput
      | SystemHealthScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'SystemHealth'> | string;
    checkedAt?: DateTimeWithAggregatesFilter<'SystemHealth'> | Date | string;
  };

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<'User'> | string;
    email?: StringFilter<'User'> | string;
    passwordHash?: StringFilter<'User'> | string;
    role?: EnumRoleFilter<'User'> | $Enums.Role;
    createdAt?: DateTimeFilter<'User'> | Date | string;
    updatedAt?: DateTimeFilter<'User'> | Date | string;
    talentProfile?: XOR<
      TalentProfileNullableScalarRelationFilter,
      TalentProfileWhereInput
    > | null;
    employerProfile?: XOR<
      EmployerProfileNullableScalarRelationFilter,
      EmployerProfileWhereInput
    > | null;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    talentProfile?: TalentProfileOrderByWithRelationInput;
    employerProfile?: EmployerProfileOrderByWithRelationInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      passwordHash?: StringFilter<'User'> | string;
      role?: EnumRoleFilter<'User'> | $Enums.Role;
      createdAt?: DateTimeFilter<'User'> | Date | string;
      updatedAt?: DateTimeFilter<'User'> | Date | string;
      talentProfile?: XOR<
        TalentProfileNullableScalarRelationFilter,
        TalentProfileWhereInput
      > | null;
      employerProfile?: XOR<
        EmployerProfileNullableScalarRelationFilter,
        EmployerProfileWhereInput
      > | null;
    },
    'id' | 'email'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'User'> | string;
    email?: StringWithAggregatesFilter<'User'> | string;
    passwordHash?: StringWithAggregatesFilter<'User'> | string;
    role?: EnumRoleWithAggregatesFilter<'User'> | $Enums.Role;
    createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
  };

  export type TalentProfileWhereInput = {
    AND?: TalentProfileWhereInput | TalentProfileWhereInput[];
    OR?: TalentProfileWhereInput[];
    NOT?: TalentProfileWhereInput | TalentProfileWhereInput[];
    id?: StringFilter<'TalentProfile'> | string;
    userId?: StringFilter<'TalentProfile'> | string;
    headline?: StringNullableFilter<'TalentProfile'> | string | null;
    skills?: StringNullableListFilter<'TalentProfile'>;
    resumeUrl?: StringNullableFilter<'TalentProfile'> | string | null;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    applications?: ApplicationListRelationFilter;
  };

  export type TalentProfileOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    headline?: SortOrderInput | SortOrder;
    skills?: SortOrder;
    resumeUrl?: SortOrderInput | SortOrder;
    user?: UserOrderByWithRelationInput;
    applications?: ApplicationOrderByRelationAggregateInput;
  };

  export type TalentProfileWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      userId?: string;
      AND?: TalentProfileWhereInput | TalentProfileWhereInput[];
      OR?: TalentProfileWhereInput[];
      NOT?: TalentProfileWhereInput | TalentProfileWhereInput[];
      headline?: StringNullableFilter<'TalentProfile'> | string | null;
      skills?: StringNullableListFilter<'TalentProfile'>;
      resumeUrl?: StringNullableFilter<'TalentProfile'> | string | null;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      applications?: ApplicationListRelationFilter;
    },
    'id' | 'userId'
  >;

  export type TalentProfileOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    headline?: SortOrderInput | SortOrder;
    skills?: SortOrder;
    resumeUrl?: SortOrderInput | SortOrder;
    _count?: TalentProfileCountOrderByAggregateInput;
    _max?: TalentProfileMaxOrderByAggregateInput;
    _min?: TalentProfileMinOrderByAggregateInput;
  };

  export type TalentProfileScalarWhereWithAggregatesInput = {
    AND?:
      | TalentProfileScalarWhereWithAggregatesInput
      | TalentProfileScalarWhereWithAggregatesInput[];
    OR?: TalentProfileScalarWhereWithAggregatesInput[];
    NOT?:
      | TalentProfileScalarWhereWithAggregatesInput
      | TalentProfileScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'TalentProfile'> | string;
    userId?: StringWithAggregatesFilter<'TalentProfile'> | string;
    headline?:
      StringNullableWithAggregatesFilter<'TalentProfile'> | string | null;
    skills?: StringNullableListFilter<'TalentProfile'>;
    resumeUrl?:
      StringNullableWithAggregatesFilter<'TalentProfile'> | string | null;
  };

  export type EmployerProfileWhereInput = {
    AND?: EmployerProfileWhereInput | EmployerProfileWhereInput[];
    OR?: EmployerProfileWhereInput[];
    NOT?: EmployerProfileWhereInput | EmployerProfileWhereInput[];
    id?: StringFilter<'EmployerProfile'> | string;
    userId?: StringFilter<'EmployerProfile'> | string;
    companyName?: StringFilter<'EmployerProfile'> | string;
    website?: StringNullableFilter<'EmployerProfile'> | string | null;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    jobs?: JobListRelationFilter;
    subscriptions?: SubscriptionListRelationFilter;
  };

  export type EmployerProfileOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    companyName?: SortOrder;
    website?: SortOrderInput | SortOrder;
    user?: UserOrderByWithRelationInput;
    jobs?: JobOrderByRelationAggregateInput;
    subscriptions?: SubscriptionOrderByRelationAggregateInput;
  };

  export type EmployerProfileWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      userId?: string;
      AND?: EmployerProfileWhereInput | EmployerProfileWhereInput[];
      OR?: EmployerProfileWhereInput[];
      NOT?: EmployerProfileWhereInput | EmployerProfileWhereInput[];
      companyName?: StringFilter<'EmployerProfile'> | string;
      website?: StringNullableFilter<'EmployerProfile'> | string | null;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      jobs?: JobListRelationFilter;
      subscriptions?: SubscriptionListRelationFilter;
    },
    'id' | 'userId'
  >;

  export type EmployerProfileOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    companyName?: SortOrder;
    website?: SortOrderInput | SortOrder;
    _count?: EmployerProfileCountOrderByAggregateInput;
    _max?: EmployerProfileMaxOrderByAggregateInput;
    _min?: EmployerProfileMinOrderByAggregateInput;
  };

  export type EmployerProfileScalarWhereWithAggregatesInput = {
    AND?:
      | EmployerProfileScalarWhereWithAggregatesInput
      | EmployerProfileScalarWhereWithAggregatesInput[];
    OR?: EmployerProfileScalarWhereWithAggregatesInput[];
    NOT?:
      | EmployerProfileScalarWhereWithAggregatesInput
      | EmployerProfileScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'EmployerProfile'> | string;
    userId?: StringWithAggregatesFilter<'EmployerProfile'> | string;
    companyName?: StringWithAggregatesFilter<'EmployerProfile'> | string;
    website?:
      StringNullableWithAggregatesFilter<'EmployerProfile'> | string | null;
  };

  export type JobWhereInput = {
    AND?: JobWhereInput | JobWhereInput[];
    OR?: JobWhereInput[];
    NOT?: JobWhereInput | JobWhereInput[];
    id?: StringFilter<'Job'> | string;
    employerId?: StringFilter<'Job'> | string;
    title?: StringFilter<'Job'> | string;
    description?: StringFilter<'Job'> | string;
    isActive?: BoolFilter<'Job'> | boolean;
    createdAt?: DateTimeFilter<'Job'> | Date | string;
    updatedAt?: DateTimeFilter<'Job'> | Date | string;
    employer?: XOR<
      EmployerProfileScalarRelationFilter,
      EmployerProfileWhereInput
    >;
    applications?: ApplicationListRelationFilter;
  };

  export type JobOrderByWithRelationInput = {
    id?: SortOrder;
    employerId?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    isActive?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    employer?: EmployerProfileOrderByWithRelationInput;
    applications?: ApplicationOrderByRelationAggregateInput;
  };

  export type JobWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: JobWhereInput | JobWhereInput[];
      OR?: JobWhereInput[];
      NOT?: JobWhereInput | JobWhereInput[];
      employerId?: StringFilter<'Job'> | string;
      title?: StringFilter<'Job'> | string;
      description?: StringFilter<'Job'> | string;
      isActive?: BoolFilter<'Job'> | boolean;
      createdAt?: DateTimeFilter<'Job'> | Date | string;
      updatedAt?: DateTimeFilter<'Job'> | Date | string;
      employer?: XOR<
        EmployerProfileScalarRelationFilter,
        EmployerProfileWhereInput
      >;
      applications?: ApplicationListRelationFilter;
    },
    'id'
  >;

  export type JobOrderByWithAggregationInput = {
    id?: SortOrder;
    employerId?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    isActive?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: JobCountOrderByAggregateInput;
    _max?: JobMaxOrderByAggregateInput;
    _min?: JobMinOrderByAggregateInput;
  };

  export type JobScalarWhereWithAggregatesInput = {
    AND?:
      JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[];
    OR?: JobScalarWhereWithAggregatesInput[];
    NOT?:
      JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Job'> | string;
    employerId?: StringWithAggregatesFilter<'Job'> | string;
    title?: StringWithAggregatesFilter<'Job'> | string;
    description?: StringWithAggregatesFilter<'Job'> | string;
    isActive?: BoolWithAggregatesFilter<'Job'> | boolean;
    createdAt?: DateTimeWithAggregatesFilter<'Job'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Job'> | Date | string;
  };

  export type ApplicationWhereInput = {
    AND?: ApplicationWhereInput | ApplicationWhereInput[];
    OR?: ApplicationWhereInput[];
    NOT?: ApplicationWhereInput | ApplicationWhereInput[];
    id?: StringFilter<'Application'> | string;
    jobId?: StringFilter<'Application'> | string;
    talentId?: StringFilter<'Application'> | string;
    status?:
      EnumApplicationStatusFilter<'Application'> | $Enums.ApplicationStatus;
    appliedAt?: DateTimeFilter<'Application'> | Date | string;
    job?: XOR<JobScalarRelationFilter, JobWhereInput>;
    talent?: XOR<TalentProfileScalarRelationFilter, TalentProfileWhereInput>;
  };

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder;
    jobId?: SortOrder;
    talentId?: SortOrder;
    status?: SortOrder;
    appliedAt?: SortOrder;
    job?: JobOrderByWithRelationInput;
    talent?: TalentProfileOrderByWithRelationInput;
  };

  export type ApplicationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      jobId_talentId?: ApplicationJobIdTalentIdCompoundUniqueInput;
      AND?: ApplicationWhereInput | ApplicationWhereInput[];
      OR?: ApplicationWhereInput[];
      NOT?: ApplicationWhereInput | ApplicationWhereInput[];
      jobId?: StringFilter<'Application'> | string;
      talentId?: StringFilter<'Application'> | string;
      status?:
        EnumApplicationStatusFilter<'Application'> | $Enums.ApplicationStatus;
      appliedAt?: DateTimeFilter<'Application'> | Date | string;
      job?: XOR<JobScalarRelationFilter, JobWhereInput>;
      talent?: XOR<TalentProfileScalarRelationFilter, TalentProfileWhereInput>;
    },
    'id' | 'jobId_talentId'
  >;

  export type ApplicationOrderByWithAggregationInput = {
    id?: SortOrder;
    jobId?: SortOrder;
    talentId?: SortOrder;
    status?: SortOrder;
    appliedAt?: SortOrder;
    _count?: ApplicationCountOrderByAggregateInput;
    _max?: ApplicationMaxOrderByAggregateInput;
    _min?: ApplicationMinOrderByAggregateInput;
  };

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?:
      | ApplicationScalarWhereWithAggregatesInput
      | ApplicationScalarWhereWithAggregatesInput[];
    OR?: ApplicationScalarWhereWithAggregatesInput[];
    NOT?:
      | ApplicationScalarWhereWithAggregatesInput
      | ApplicationScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Application'> | string;
    jobId?: StringWithAggregatesFilter<'Application'> | string;
    talentId?: StringWithAggregatesFilter<'Application'> | string;
    status?:
      | EnumApplicationStatusWithAggregatesFilter<'Application'>
      | $Enums.ApplicationStatus;
    appliedAt?: DateTimeWithAggregatesFilter<'Application'> | Date | string;
  };

  export type SubscriptionPlanWhereInput = {
    AND?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[];
    OR?: SubscriptionPlanWhereInput[];
    NOT?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[];
    id?: StringFilter<'SubscriptionPlan'> | string;
    name?: StringFilter<'SubscriptionPlan'> | string;
    price?:
      | DecimalFilter<'SubscriptionPlan'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    features?: StringNullableListFilter<'SubscriptionPlan'>;
    subscriptions?: SubscriptionListRelationFilter;
  };

  export type SubscriptionPlanOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    price?: SortOrder;
    features?: SortOrder;
    subscriptions?: SubscriptionOrderByRelationAggregateInput;
  };

  export type SubscriptionPlanWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      name?: string;
      AND?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[];
      OR?: SubscriptionPlanWhereInput[];
      NOT?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[];
      price?:
        | DecimalFilter<'SubscriptionPlan'>
        | Decimal
        | DecimalJsLike
        | number
        | string;
      features?: StringNullableListFilter<'SubscriptionPlan'>;
      subscriptions?: SubscriptionListRelationFilter;
    },
    'id' | 'name'
  >;

  export type SubscriptionPlanOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    price?: SortOrder;
    features?: SortOrder;
    _count?: SubscriptionPlanCountOrderByAggregateInput;
    _avg?: SubscriptionPlanAvgOrderByAggregateInput;
    _max?: SubscriptionPlanMaxOrderByAggregateInput;
    _min?: SubscriptionPlanMinOrderByAggregateInput;
    _sum?: SubscriptionPlanSumOrderByAggregateInput;
  };

  export type SubscriptionPlanScalarWhereWithAggregatesInput = {
    AND?:
      | SubscriptionPlanScalarWhereWithAggregatesInput
      | SubscriptionPlanScalarWhereWithAggregatesInput[];
    OR?: SubscriptionPlanScalarWhereWithAggregatesInput[];
    NOT?:
      | SubscriptionPlanScalarWhereWithAggregatesInput
      | SubscriptionPlanScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'SubscriptionPlan'> | string;
    name?: StringWithAggregatesFilter<'SubscriptionPlan'> | string;
    price?:
      | DecimalWithAggregatesFilter<'SubscriptionPlan'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    features?: StringNullableListFilter<'SubscriptionPlan'>;
  };

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[];
    OR?: SubscriptionWhereInput[];
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[];
    id?: StringFilter<'Subscription'> | string;
    employerId?: StringFilter<'Subscription'> | string;
    planId?: StringFilter<'Subscription'> | string;
    status?:
      EnumSubscriptionStatusFilter<'Subscription'> | $Enums.SubscriptionStatus;
    startDate?: DateTimeFilter<'Subscription'> | Date | string;
    endDate?: DateTimeFilter<'Subscription'> | Date | string;
    employer?: XOR<
      EmployerProfileScalarRelationFilter,
      EmployerProfileWhereInput
    >;
    plan?: XOR<
      SubscriptionPlanScalarRelationFilter,
      SubscriptionPlanWhereInput
    >;
    payments?: PaymentListRelationFilter;
  };

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder;
    employerId?: SortOrder;
    planId?: SortOrder;
    status?: SortOrder;
    startDate?: SortOrder;
    endDate?: SortOrder;
    employer?: EmployerProfileOrderByWithRelationInput;
    plan?: SubscriptionPlanOrderByWithRelationInput;
    payments?: PaymentOrderByRelationAggregateInput;
  };

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: SubscriptionWhereInput | SubscriptionWhereInput[];
      OR?: SubscriptionWhereInput[];
      NOT?: SubscriptionWhereInput | SubscriptionWhereInput[];
      employerId?: StringFilter<'Subscription'> | string;
      planId?: StringFilter<'Subscription'> | string;
      status?:
        | EnumSubscriptionStatusFilter<'Subscription'>
        | $Enums.SubscriptionStatus;
      startDate?: DateTimeFilter<'Subscription'> | Date | string;
      endDate?: DateTimeFilter<'Subscription'> | Date | string;
      employer?: XOR<
        EmployerProfileScalarRelationFilter,
        EmployerProfileWhereInput
      >;
      plan?: XOR<
        SubscriptionPlanScalarRelationFilter,
        SubscriptionPlanWhereInput
      >;
      payments?: PaymentListRelationFilter;
    },
    'id'
  >;

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder;
    employerId?: SortOrder;
    planId?: SortOrder;
    status?: SortOrder;
    startDate?: SortOrder;
    endDate?: SortOrder;
    _count?: SubscriptionCountOrderByAggregateInput;
    _max?: SubscriptionMaxOrderByAggregateInput;
    _min?: SubscriptionMinOrderByAggregateInput;
  };

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?:
      | SubscriptionScalarWhereWithAggregatesInput
      | SubscriptionScalarWhereWithAggregatesInput[];
    OR?: SubscriptionScalarWhereWithAggregatesInput[];
    NOT?:
      | SubscriptionScalarWhereWithAggregatesInput
      | SubscriptionScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Subscription'> | string;
    employerId?: StringWithAggregatesFilter<'Subscription'> | string;
    planId?: StringWithAggregatesFilter<'Subscription'> | string;
    status?:
      | EnumSubscriptionStatusWithAggregatesFilter<'Subscription'>
      | $Enums.SubscriptionStatus;
    startDate?: DateTimeWithAggregatesFilter<'Subscription'> | Date | string;
    endDate?: DateTimeWithAggregatesFilter<'Subscription'> | Date | string;
  };

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[];
    OR?: PaymentWhereInput[];
    NOT?: PaymentWhereInput | PaymentWhereInput[];
    id?: StringFilter<'Payment'> | string;
    subscriptionId?: StringFilter<'Payment'> | string;
    amount?:
      DecimalFilter<'Payment'> | Decimal | DecimalJsLike | number | string;
    status?: EnumPaymentStatusFilter<'Payment'> | $Enums.PaymentStatus;
    paidAt?: DateTimeFilter<'Payment'> | Date | string;
    subscription?: XOR<
      SubscriptionScalarRelationFilter,
      SubscriptionWhereInput
    >;
  };

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder;
    subscriptionId?: SortOrder;
    amount?: SortOrder;
    status?: SortOrder;
    paidAt?: SortOrder;
    subscription?: SubscriptionOrderByWithRelationInput;
  };

  export type PaymentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: PaymentWhereInput | PaymentWhereInput[];
      OR?: PaymentWhereInput[];
      NOT?: PaymentWhereInput | PaymentWhereInput[];
      subscriptionId?: StringFilter<'Payment'> | string;
      amount?:
        DecimalFilter<'Payment'> | Decimal | DecimalJsLike | number | string;
      status?: EnumPaymentStatusFilter<'Payment'> | $Enums.PaymentStatus;
      paidAt?: DateTimeFilter<'Payment'> | Date | string;
      subscription?: XOR<
        SubscriptionScalarRelationFilter,
        SubscriptionWhereInput
      >;
    },
    'id'
  >;

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder;
    subscriptionId?: SortOrder;
    amount?: SortOrder;
    status?: SortOrder;
    paidAt?: SortOrder;
    _count?: PaymentCountOrderByAggregateInput;
    _avg?: PaymentAvgOrderByAggregateInput;
    _max?: PaymentMaxOrderByAggregateInput;
    _min?: PaymentMinOrderByAggregateInput;
    _sum?: PaymentSumOrderByAggregateInput;
  };

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?:
      | PaymentScalarWhereWithAggregatesInput
      | PaymentScalarWhereWithAggregatesInput[];
    OR?: PaymentScalarWhereWithAggregatesInput[];
    NOT?:
      | PaymentScalarWhereWithAggregatesInput
      | PaymentScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Payment'> | string;
    subscriptionId?: StringWithAggregatesFilter<'Payment'> | string;
    amount?:
      | DecimalWithAggregatesFilter<'Payment'>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    status?:
      EnumPaymentStatusWithAggregatesFilter<'Payment'> | $Enums.PaymentStatus;
    paidAt?: DateTimeWithAggregatesFilter<'Payment'> | Date | string;
  };

  export type SystemHealthCreateInput = {
    id?: string;
    checkedAt?: Date | string;
  };

  export type SystemHealthUncheckedCreateInput = {
    id?: string;
    checkedAt?: Date | string;
  };

  export type SystemHealthUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    checkedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SystemHealthUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    checkedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SystemHealthCreateManyInput = {
    id?: string;
    checkedAt?: Date | string;
  };

  export type SystemHealthUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    checkedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SystemHealthUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    checkedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserCreateInput = {
    id?: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    talentProfile?: TalentProfileCreateNestedOneWithoutUserInput;
    employerProfile?: EmployerProfileCreateNestedOneWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    talentProfile?: TalentProfileUncheckedCreateNestedOneWithoutUserInput;
    employerProfile?: EmployerProfileUncheckedCreateNestedOneWithoutUserInput;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    talentProfile?: TalentProfileUpdateOneWithoutUserNestedInput;
    employerProfile?: EmployerProfileUpdateOneWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    talentProfile?: TalentProfileUncheckedUpdateOneWithoutUserNestedInput;
    employerProfile?: EmployerProfileUncheckedUpdateOneWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TalentProfileCreateInput = {
    id?: string;
    headline?: string | null;
    skills?: TalentProfileCreateskillsInput | string[];
    resumeUrl?: string | null;
    user: UserCreateNestedOneWithoutTalentProfileInput;
    applications?: ApplicationCreateNestedManyWithoutTalentInput;
  };

  export type TalentProfileUncheckedCreateInput = {
    id?: string;
    userId: string;
    headline?: string | null;
    skills?: TalentProfileCreateskillsInput | string[];
    resumeUrl?: string | null;
    applications?: ApplicationUncheckedCreateNestedManyWithoutTalentInput;
  };

  export type TalentProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    headline?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: TalentProfileUpdateskillsInput | string[];
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    user?: UserUpdateOneRequiredWithoutTalentProfileNestedInput;
    applications?: ApplicationUpdateManyWithoutTalentNestedInput;
  };

  export type TalentProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    headline?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: TalentProfileUpdateskillsInput | string[];
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    applications?: ApplicationUncheckedUpdateManyWithoutTalentNestedInput;
  };

  export type TalentProfileCreateManyInput = {
    id?: string;
    userId: string;
    headline?: string | null;
    skills?: TalentProfileCreateskillsInput | string[];
    resumeUrl?: string | null;
  };

  export type TalentProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    headline?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: TalentProfileUpdateskillsInput | string[];
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type TalentProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    headline?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: TalentProfileUpdateskillsInput | string[];
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type EmployerProfileCreateInput = {
    id?: string;
    companyName: string;
    website?: string | null;
    user: UserCreateNestedOneWithoutEmployerProfileInput;
    jobs?: JobCreateNestedManyWithoutEmployerInput;
    subscriptions?: SubscriptionCreateNestedManyWithoutEmployerInput;
  };

  export type EmployerProfileUncheckedCreateInput = {
    id?: string;
    userId: string;
    companyName: string;
    website?: string | null;
    jobs?: JobUncheckedCreateNestedManyWithoutEmployerInput;
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutEmployerInput;
  };

  export type EmployerProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    companyName?: StringFieldUpdateOperationsInput | string;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    user?: UserUpdateOneRequiredWithoutEmployerProfileNestedInput;
    jobs?: JobUpdateManyWithoutEmployerNestedInput;
    subscriptions?: SubscriptionUpdateManyWithoutEmployerNestedInput;
  };

  export type EmployerProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    companyName?: StringFieldUpdateOperationsInput | string;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    jobs?: JobUncheckedUpdateManyWithoutEmployerNestedInput;
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutEmployerNestedInput;
  };

  export type EmployerProfileCreateManyInput = {
    id?: string;
    userId: string;
    companyName: string;
    website?: string | null;
  };

  export type EmployerProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    companyName?: StringFieldUpdateOperationsInput | string;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type EmployerProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    companyName?: StringFieldUpdateOperationsInput | string;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type JobCreateInput = {
    id?: string;
    title: string;
    description: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    employer: EmployerProfileCreateNestedOneWithoutJobsInput;
    applications?: ApplicationCreateNestedManyWithoutJobInput;
  };

  export type JobUncheckedCreateInput = {
    id?: string;
    employerId: string;
    title: string;
    description: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applications?: ApplicationUncheckedCreateNestedManyWithoutJobInput;
  };

  export type JobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    employer?: EmployerProfileUpdateOneRequiredWithoutJobsNestedInput;
    applications?: ApplicationUpdateManyWithoutJobNestedInput;
  };

  export type JobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    employerId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    applications?: ApplicationUncheckedUpdateManyWithoutJobNestedInput;
  };

  export type JobCreateManyInput = {
    id?: string;
    employerId: string;
    title: string;
    description: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type JobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type JobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    employerId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ApplicationCreateInput = {
    id?: string;
    status?: $Enums.ApplicationStatus;
    appliedAt?: Date | string;
    job: JobCreateNestedOneWithoutApplicationsInput;
    talent: TalentProfileCreateNestedOneWithoutApplicationsInput;
  };

  export type ApplicationUncheckedCreateInput = {
    id?: string;
    jobId: string;
    talentId: string;
    status?: $Enums.ApplicationStatus;
    appliedAt?: Date | string;
  };

  export type ApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumApplicationStatusFieldUpdateOperationsInput
      | $Enums.ApplicationStatus;
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    job?: JobUpdateOneRequiredWithoutApplicationsNestedInput;
    talent?: TalentProfileUpdateOneRequiredWithoutApplicationsNestedInput;
  };

  export type ApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    jobId?: StringFieldUpdateOperationsInput | string;
    talentId?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumApplicationStatusFieldUpdateOperationsInput
      | $Enums.ApplicationStatus;
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ApplicationCreateManyInput = {
    id?: string;
    jobId: string;
    talentId: string;
    status?: $Enums.ApplicationStatus;
    appliedAt?: Date | string;
  };

  export type ApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumApplicationStatusFieldUpdateOperationsInput
      | $Enums.ApplicationStatus;
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    jobId?: StringFieldUpdateOperationsInput | string;
    talentId?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumApplicationStatusFieldUpdateOperationsInput
      | $Enums.ApplicationStatus;
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SubscriptionPlanCreateInput = {
    id?: string;
    name: string;
    price: Decimal | DecimalJsLike | number | string;
    features?: SubscriptionPlanCreatefeaturesInput | string[];
    subscriptions?: SubscriptionCreateNestedManyWithoutPlanInput;
  };

  export type SubscriptionPlanUncheckedCreateInput = {
    id?: string;
    name: string;
    price: Decimal | DecimalJsLike | number | string;
    features?: SubscriptionPlanCreatefeaturesInput | string[];
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutPlanInput;
  };

  export type SubscriptionPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    features?: SubscriptionPlanUpdatefeaturesInput | string[];
    subscriptions?: SubscriptionUpdateManyWithoutPlanNestedInput;
  };

  export type SubscriptionPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    features?: SubscriptionPlanUpdatefeaturesInput | string[];
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutPlanNestedInput;
  };

  export type SubscriptionPlanCreateManyInput = {
    id?: string;
    name: string;
    price: Decimal | DecimalJsLike | number | string;
    features?: SubscriptionPlanCreatefeaturesInput | string[];
  };

  export type SubscriptionPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    features?: SubscriptionPlanUpdatefeaturesInput | string[];
  };

  export type SubscriptionPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    features?: SubscriptionPlanUpdatefeaturesInput | string[];
  };

  export type SubscriptionCreateInput = {
    id?: string;
    status?: $Enums.SubscriptionStatus;
    startDate?: Date | string;
    endDate: Date | string;
    employer: EmployerProfileCreateNestedOneWithoutSubscriptionsInput;
    plan: SubscriptionPlanCreateNestedOneWithoutSubscriptionsInput;
    payments?: PaymentCreateNestedManyWithoutSubscriptionInput;
  };

  export type SubscriptionUncheckedCreateInput = {
    id?: string;
    employerId: string;
    planId: string;
    status?: $Enums.SubscriptionStatus;
    startDate?: Date | string;
    endDate: Date | string;
    payments?: PaymentUncheckedCreateNestedManyWithoutSubscriptionInput;
  };

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumSubscriptionStatusFieldUpdateOperationsInput
      | $Enums.SubscriptionStatus;
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    employer?: EmployerProfileUpdateOneRequiredWithoutSubscriptionsNestedInput;
    plan?: SubscriptionPlanUpdateOneRequiredWithoutSubscriptionsNestedInput;
    payments?: PaymentUpdateManyWithoutSubscriptionNestedInput;
  };

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    employerId?: StringFieldUpdateOperationsInput | string;
    planId?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumSubscriptionStatusFieldUpdateOperationsInput
      | $Enums.SubscriptionStatus;
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    payments?: PaymentUncheckedUpdateManyWithoutSubscriptionNestedInput;
  };

  export type SubscriptionCreateManyInput = {
    id?: string;
    employerId: string;
    planId: string;
    status?: $Enums.SubscriptionStatus;
    startDate?: Date | string;
    endDate: Date | string;
  };

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumSubscriptionStatusFieldUpdateOperationsInput
      | $Enums.SubscriptionStatus;
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    employerId?: StringFieldUpdateOperationsInput | string;
    planId?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumSubscriptionStatusFieldUpdateOperationsInput
      | $Enums.SubscriptionStatus;
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PaymentCreateInput = {
    id?: string;
    amount: Decimal | DecimalJsLike | number | string;
    status?: $Enums.PaymentStatus;
    paidAt?: Date | string;
    subscription: SubscriptionCreateNestedOneWithoutPaymentsInput;
  };

  export type PaymentUncheckedCreateInput = {
    id?: string;
    subscriptionId: string;
    amount: Decimal | DecimalJsLike | number | string;
    status?: $Enums.PaymentStatus;
    paidAt?: Date | string;
  };

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    subscription?: SubscriptionUpdateOneRequiredWithoutPaymentsNestedInput;
  };

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    subscriptionId?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PaymentCreateManyInput = {
    id?: string;
    subscriptionId: string;
    amount: Decimal | DecimalJsLike | number | string;
    status?: $Enums.PaymentStatus;
    paidAt?: Date | string;
  };

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    subscriptionId?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type SystemHealthCountOrderByAggregateInput = {
    id?: SortOrder;
    checkedAt?: SortOrder;
  };

  export type SystemHealthMaxOrderByAggregateInput = {
    id?: SortOrder;
    checkedAt?: SortOrder;
  };

  export type SystemHealthMinOrderByAggregateInput = {
    id?: SortOrder;
    checkedAt?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
  };

  export type TalentProfileNullableScalarRelationFilter = {
    is?: TalentProfileWhereInput | null;
    isNot?: TalentProfileWhereInput | null;
  };

  export type EmployerProfileNullableScalarRelationFilter = {
    is?: EmployerProfileWhereInput | null;
    isNot?: EmployerProfileWhereInput | null;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    role?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumRoleFilter<$PrismaModel>;
    _max?: NestedEnumRoleFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type ApplicationListRelationFilter = {
    every?: ApplicationWhereInput;
    some?: ApplicationWhereInput;
    none?: ApplicationWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type ApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type TalentProfileCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    headline?: SortOrder;
    skills?: SortOrder;
    resumeUrl?: SortOrder;
  };

  export type TalentProfileMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    headline?: SortOrder;
    resumeUrl?: SortOrder;
  };

  export type TalentProfileMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    headline?: SortOrder;
    resumeUrl?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type JobListRelationFilter = {
    every?: JobWhereInput;
    some?: JobWhereInput;
    none?: JobWhereInput;
  };

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput;
    some?: SubscriptionWhereInput;
    none?: SubscriptionWhereInput;
  };

  export type JobOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type EmployerProfileCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    companyName?: SortOrder;
    website?: SortOrder;
  };

  export type EmployerProfileMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    companyName?: SortOrder;
    website?: SortOrder;
  };

  export type EmployerProfileMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    companyName?: SortOrder;
    website?: SortOrder;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type EmployerProfileScalarRelationFilter = {
    is?: EmployerProfileWhereInput;
    isNot?: EmployerProfileWhereInput;
  };

  export type JobCountOrderByAggregateInput = {
    id?: SortOrder;
    employerId?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    isActive?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type JobMaxOrderByAggregateInput = {
    id?: SortOrder;
    employerId?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    isActive?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type JobMinOrderByAggregateInput = {
    id?: SortOrder;
    employerId?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    isActive?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type EnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.ApplicationStatus
      | EnumApplicationStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.ApplicationStatus[]
      | ListEnumApplicationStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ApplicationStatus[]
      | ListEnumApplicationStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumApplicationStatusFilter<$PrismaModel>
      | $Enums.ApplicationStatus;
  };

  export type JobScalarRelationFilter = {
    is?: JobWhereInput;
    isNot?: JobWhereInput;
  };

  export type TalentProfileScalarRelationFilter = {
    is?: TalentProfileWhereInput;
    isNot?: TalentProfileWhereInput;
  };

  export type ApplicationJobIdTalentIdCompoundUniqueInput = {
    jobId: string;
    talentId: string;
  };

  export type ApplicationCountOrderByAggregateInput = {
    id?: SortOrder;
    jobId?: SortOrder;
    talentId?: SortOrder;
    status?: SortOrder;
    appliedAt?: SortOrder;
  };

  export type ApplicationMaxOrderByAggregateInput = {
    id?: SortOrder;
    jobId?: SortOrder;
    talentId?: SortOrder;
    status?: SortOrder;
    appliedAt?: SortOrder;
  };

  export type ApplicationMinOrderByAggregateInput = {
    id?: SortOrder;
    jobId?: SortOrder;
    talentId?: SortOrder;
    status?: SortOrder;
    appliedAt?: SortOrder;
  };

  export type EnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?:
        | $Enums.ApplicationStatus
        | EnumApplicationStatusFieldRefInput<$PrismaModel>;
      in?:
        | $Enums.ApplicationStatus[]
        | ListEnumApplicationStatusFieldRefInput<$PrismaModel>;
      notIn?:
        | $Enums.ApplicationStatus[]
        | ListEnumApplicationStatusFieldRefInput<$PrismaModel>;
      not?:
        | NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel>
        | $Enums.ApplicationStatus;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedEnumApplicationStatusFilter<$PrismaModel>;
      _max?: NestedEnumApplicationStatusFilter<$PrismaModel>;
    };

  export type DecimalFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type SubscriptionPlanCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    price?: SortOrder;
    features?: SortOrder;
  };

  export type SubscriptionPlanAvgOrderByAggregateInput = {
    price?: SortOrder;
  };

  export type SubscriptionPlanMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    price?: SortOrder;
  };

  export type SubscriptionPlanMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    price?: SortOrder;
  };

  export type SubscriptionPlanSumOrderByAggregateInput = {
    price?: SortOrder;
  };

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalWithAggregatesFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedDecimalFilter<$PrismaModel>;
    _sum?: NestedDecimalFilter<$PrismaModel>;
    _min?: NestedDecimalFilter<$PrismaModel>;
    _max?: NestedDecimalFilter<$PrismaModel>;
  };

  export type EnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.SubscriptionStatus
      | EnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.SubscriptionStatus[]
      | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.SubscriptionStatus[]
      | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumSubscriptionStatusFilter<$PrismaModel>
      | $Enums.SubscriptionStatus;
  };

  export type SubscriptionPlanScalarRelationFilter = {
    is?: SubscriptionPlanWhereInput;
    isNot?: SubscriptionPlanWhereInput;
  };

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput;
    some?: PaymentWhereInput;
    none?: PaymentWhereInput;
  };

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder;
    employerId?: SortOrder;
    planId?: SortOrder;
    status?: SortOrder;
    startDate?: SortOrder;
    endDate?: SortOrder;
  };

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder;
    employerId?: SortOrder;
    planId?: SortOrder;
    status?: SortOrder;
    startDate?: SortOrder;
    endDate?: SortOrder;
  };

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder;
    employerId?: SortOrder;
    planId?: SortOrder;
    status?: SortOrder;
    startDate?: SortOrder;
    endDate?: SortOrder;
  };

  export type EnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?:
        | $Enums.SubscriptionStatus
        | EnumSubscriptionStatusFieldRefInput<$PrismaModel>;
      in?:
        | $Enums.SubscriptionStatus[]
        | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>;
      notIn?:
        | $Enums.SubscriptionStatus[]
        | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>;
      not?:
        | NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel>
        | $Enums.SubscriptionStatus;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>;
      _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>;
    };

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?:
      $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?:
      $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    notIn?:
      $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus;
  };

  export type SubscriptionScalarRelationFilter = {
    is?: SubscriptionWhereInput;
    isNot?: SubscriptionWhereInput;
  };

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder;
    subscriptionId?: SortOrder;
    amount?: SortOrder;
    status?: SortOrder;
    paidAt?: SortOrder;
  };

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder;
    subscriptionId?: SortOrder;
    amount?: SortOrder;
    status?: SortOrder;
    paidAt?: SortOrder;
  };

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder;
    subscriptionId?: SortOrder;
    amount?: SortOrder;
    status?: SortOrder;
    paidAt?: SortOrder;
  };

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?:
      $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    notIn?:
      $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.PaymentStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>;
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type TalentProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<
      TalentProfileCreateWithoutUserInput,
      TalentProfileUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: TalentProfileCreateOrConnectWithoutUserInput;
    connect?: TalentProfileWhereUniqueInput;
  };

  export type EmployerProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<
      EmployerProfileCreateWithoutUserInput,
      EmployerProfileUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: EmployerProfileCreateOrConnectWithoutUserInput;
    connect?: EmployerProfileWhereUniqueInput;
  };

  export type TalentProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<
      TalentProfileCreateWithoutUserInput,
      TalentProfileUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: TalentProfileCreateOrConnectWithoutUserInput;
    connect?: TalentProfileWhereUniqueInput;
  };

  export type EmployerProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<
      EmployerProfileCreateWithoutUserInput,
      EmployerProfileUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: EmployerProfileCreateOrConnectWithoutUserInput;
    connect?: EmployerProfileWhereUniqueInput;
  };

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
  };

  export type TalentProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      TalentProfileCreateWithoutUserInput,
      TalentProfileUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: TalentProfileCreateOrConnectWithoutUserInput;
    upsert?: TalentProfileUpsertWithoutUserInput;
    disconnect?: TalentProfileWhereInput | boolean;
    delete?: TalentProfileWhereInput | boolean;
    connect?: TalentProfileWhereUniqueInput;
    update?: XOR<
      XOR<
        TalentProfileUpdateToOneWithWhereWithoutUserInput,
        TalentProfileUpdateWithoutUserInput
      >,
      TalentProfileUncheckedUpdateWithoutUserInput
    >;
  };

  export type EmployerProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      EmployerProfileCreateWithoutUserInput,
      EmployerProfileUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: EmployerProfileCreateOrConnectWithoutUserInput;
    upsert?: EmployerProfileUpsertWithoutUserInput;
    disconnect?: EmployerProfileWhereInput | boolean;
    delete?: EmployerProfileWhereInput | boolean;
    connect?: EmployerProfileWhereUniqueInput;
    update?: XOR<
      XOR<
        EmployerProfileUpdateToOneWithWhereWithoutUserInput,
        EmployerProfileUpdateWithoutUserInput
      >,
      EmployerProfileUncheckedUpdateWithoutUserInput
    >;
  };

  export type TalentProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      TalentProfileCreateWithoutUserInput,
      TalentProfileUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: TalentProfileCreateOrConnectWithoutUserInput;
    upsert?: TalentProfileUpsertWithoutUserInput;
    disconnect?: TalentProfileWhereInput | boolean;
    delete?: TalentProfileWhereInput | boolean;
    connect?: TalentProfileWhereUniqueInput;
    update?: XOR<
      XOR<
        TalentProfileUpdateToOneWithWhereWithoutUserInput,
        TalentProfileUpdateWithoutUserInput
      >,
      TalentProfileUncheckedUpdateWithoutUserInput
    >;
  };

  export type EmployerProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      EmployerProfileCreateWithoutUserInput,
      EmployerProfileUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: EmployerProfileCreateOrConnectWithoutUserInput;
    upsert?: EmployerProfileUpsertWithoutUserInput;
    disconnect?: EmployerProfileWhereInput | boolean;
    delete?: EmployerProfileWhereInput | boolean;
    connect?: EmployerProfileWhereUniqueInput;
    update?: XOR<
      XOR<
        EmployerProfileUpdateToOneWithWhereWithoutUserInput,
        EmployerProfileUpdateWithoutUserInput
      >,
      EmployerProfileUncheckedUpdateWithoutUserInput
    >;
  };

  export type TalentProfileCreateskillsInput = {
    set: string[];
  };

  export type UserCreateNestedOneWithoutTalentProfileInput = {
    create?: XOR<
      UserCreateWithoutTalentProfileInput,
      UserUncheckedCreateWithoutTalentProfileInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutTalentProfileInput;
    connect?: UserWhereUniqueInput;
  };

  export type ApplicationCreateNestedManyWithoutTalentInput = {
    create?:
      | XOR<
          ApplicationCreateWithoutTalentInput,
          ApplicationUncheckedCreateWithoutTalentInput
        >
      | ApplicationCreateWithoutTalentInput[]
      | ApplicationUncheckedCreateWithoutTalentInput[];
    connectOrCreate?:
      | ApplicationCreateOrConnectWithoutTalentInput
      | ApplicationCreateOrConnectWithoutTalentInput[];
    createMany?: ApplicationCreateManyTalentInputEnvelope;
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
  };

  export type ApplicationUncheckedCreateNestedManyWithoutTalentInput = {
    create?:
      | XOR<
          ApplicationCreateWithoutTalentInput,
          ApplicationUncheckedCreateWithoutTalentInput
        >
      | ApplicationCreateWithoutTalentInput[]
      | ApplicationUncheckedCreateWithoutTalentInput[];
    connectOrCreate?:
      | ApplicationCreateOrConnectWithoutTalentInput
      | ApplicationCreateOrConnectWithoutTalentInput[];
    createMany?: ApplicationCreateManyTalentInputEnvelope;
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type TalentProfileUpdateskillsInput = {
    set?: string[];
    push?: string | string[];
  };

  export type UserUpdateOneRequiredWithoutTalentProfileNestedInput = {
    create?: XOR<
      UserCreateWithoutTalentProfileInput,
      UserUncheckedCreateWithoutTalentProfileInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutTalentProfileInput;
    upsert?: UserUpsertWithoutTalentProfileInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutTalentProfileInput,
        UserUpdateWithoutTalentProfileInput
      >,
      UserUncheckedUpdateWithoutTalentProfileInput
    >;
  };

  export type ApplicationUpdateManyWithoutTalentNestedInput = {
    create?:
      | XOR<
          ApplicationCreateWithoutTalentInput,
          ApplicationUncheckedCreateWithoutTalentInput
        >
      | ApplicationCreateWithoutTalentInput[]
      | ApplicationUncheckedCreateWithoutTalentInput[];
    connectOrCreate?:
      | ApplicationCreateOrConnectWithoutTalentInput
      | ApplicationCreateOrConnectWithoutTalentInput[];
    upsert?:
      | ApplicationUpsertWithWhereUniqueWithoutTalentInput
      | ApplicationUpsertWithWhereUniqueWithoutTalentInput[];
    createMany?: ApplicationCreateManyTalentInputEnvelope;
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    update?:
      | ApplicationUpdateWithWhereUniqueWithoutTalentInput
      | ApplicationUpdateWithWhereUniqueWithoutTalentInput[];
    updateMany?:
      | ApplicationUpdateManyWithWhereWithoutTalentInput
      | ApplicationUpdateManyWithWhereWithoutTalentInput[];
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[];
  };

  export type ApplicationUncheckedUpdateManyWithoutTalentNestedInput = {
    create?:
      | XOR<
          ApplicationCreateWithoutTalentInput,
          ApplicationUncheckedCreateWithoutTalentInput
        >
      | ApplicationCreateWithoutTalentInput[]
      | ApplicationUncheckedCreateWithoutTalentInput[];
    connectOrCreate?:
      | ApplicationCreateOrConnectWithoutTalentInput
      | ApplicationCreateOrConnectWithoutTalentInput[];
    upsert?:
      | ApplicationUpsertWithWhereUniqueWithoutTalentInput
      | ApplicationUpsertWithWhereUniqueWithoutTalentInput[];
    createMany?: ApplicationCreateManyTalentInputEnvelope;
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    update?:
      | ApplicationUpdateWithWhereUniqueWithoutTalentInput
      | ApplicationUpdateWithWhereUniqueWithoutTalentInput[];
    updateMany?:
      | ApplicationUpdateManyWithWhereWithoutTalentInput
      | ApplicationUpdateManyWithWhereWithoutTalentInput[];
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutEmployerProfileInput = {
    create?: XOR<
      UserCreateWithoutEmployerProfileInput,
      UserUncheckedCreateWithoutEmployerProfileInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutEmployerProfileInput;
    connect?: UserWhereUniqueInput;
  };

  export type JobCreateNestedManyWithoutEmployerInput = {
    create?:
      | XOR<
          JobCreateWithoutEmployerInput,
          JobUncheckedCreateWithoutEmployerInput
        >
      | JobCreateWithoutEmployerInput[]
      | JobUncheckedCreateWithoutEmployerInput[];
    connectOrCreate?:
      | JobCreateOrConnectWithoutEmployerInput
      | JobCreateOrConnectWithoutEmployerInput[];
    createMany?: JobCreateManyEmployerInputEnvelope;
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[];
  };

  export type SubscriptionCreateNestedManyWithoutEmployerInput = {
    create?:
      | XOR<
          SubscriptionCreateWithoutEmployerInput,
          SubscriptionUncheckedCreateWithoutEmployerInput
        >
      | SubscriptionCreateWithoutEmployerInput[]
      | SubscriptionUncheckedCreateWithoutEmployerInput[];
    connectOrCreate?:
      | SubscriptionCreateOrConnectWithoutEmployerInput
      | SubscriptionCreateOrConnectWithoutEmployerInput[];
    createMany?: SubscriptionCreateManyEmployerInputEnvelope;
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[];
  };

  export type JobUncheckedCreateNestedManyWithoutEmployerInput = {
    create?:
      | XOR<
          JobCreateWithoutEmployerInput,
          JobUncheckedCreateWithoutEmployerInput
        >
      | JobCreateWithoutEmployerInput[]
      | JobUncheckedCreateWithoutEmployerInput[];
    connectOrCreate?:
      | JobCreateOrConnectWithoutEmployerInput
      | JobCreateOrConnectWithoutEmployerInput[];
    createMany?: JobCreateManyEmployerInputEnvelope;
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[];
  };

  export type SubscriptionUncheckedCreateNestedManyWithoutEmployerInput = {
    create?:
      | XOR<
          SubscriptionCreateWithoutEmployerInput,
          SubscriptionUncheckedCreateWithoutEmployerInput
        >
      | SubscriptionCreateWithoutEmployerInput[]
      | SubscriptionUncheckedCreateWithoutEmployerInput[];
    connectOrCreate?:
      | SubscriptionCreateOrConnectWithoutEmployerInput
      | SubscriptionCreateOrConnectWithoutEmployerInput[];
    createMany?: SubscriptionCreateManyEmployerInputEnvelope;
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[];
  };

  export type UserUpdateOneRequiredWithoutEmployerProfileNestedInput = {
    create?: XOR<
      UserCreateWithoutEmployerProfileInput,
      UserUncheckedCreateWithoutEmployerProfileInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutEmployerProfileInput;
    upsert?: UserUpsertWithoutEmployerProfileInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutEmployerProfileInput,
        UserUpdateWithoutEmployerProfileInput
      >,
      UserUncheckedUpdateWithoutEmployerProfileInput
    >;
  };

  export type JobUpdateManyWithoutEmployerNestedInput = {
    create?:
      | XOR<
          JobCreateWithoutEmployerInput,
          JobUncheckedCreateWithoutEmployerInput
        >
      | JobCreateWithoutEmployerInput[]
      | JobUncheckedCreateWithoutEmployerInput[];
    connectOrCreate?:
      | JobCreateOrConnectWithoutEmployerInput
      | JobCreateOrConnectWithoutEmployerInput[];
    upsert?:
      | JobUpsertWithWhereUniqueWithoutEmployerInput
      | JobUpsertWithWhereUniqueWithoutEmployerInput[];
    createMany?: JobCreateManyEmployerInputEnvelope;
    set?: JobWhereUniqueInput | JobWhereUniqueInput[];
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[];
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[];
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[];
    update?:
      | JobUpdateWithWhereUniqueWithoutEmployerInput
      | JobUpdateWithWhereUniqueWithoutEmployerInput[];
    updateMany?:
      | JobUpdateManyWithWhereWithoutEmployerInput
      | JobUpdateManyWithWhereWithoutEmployerInput[];
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[];
  };

  export type SubscriptionUpdateManyWithoutEmployerNestedInput = {
    create?:
      | XOR<
          SubscriptionCreateWithoutEmployerInput,
          SubscriptionUncheckedCreateWithoutEmployerInput
        >
      | SubscriptionCreateWithoutEmployerInput[]
      | SubscriptionUncheckedCreateWithoutEmployerInput[];
    connectOrCreate?:
      | SubscriptionCreateOrConnectWithoutEmployerInput
      | SubscriptionCreateOrConnectWithoutEmployerInput[];
    upsert?:
      | SubscriptionUpsertWithWhereUniqueWithoutEmployerInput
      | SubscriptionUpsertWithWhereUniqueWithoutEmployerInput[];
    createMany?: SubscriptionCreateManyEmployerInputEnvelope;
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[];
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[];
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[];
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[];
    update?:
      | SubscriptionUpdateWithWhereUniqueWithoutEmployerInput
      | SubscriptionUpdateWithWhereUniqueWithoutEmployerInput[];
    updateMany?:
      | SubscriptionUpdateManyWithWhereWithoutEmployerInput
      | SubscriptionUpdateManyWithWhereWithoutEmployerInput[];
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[];
  };

  export type JobUncheckedUpdateManyWithoutEmployerNestedInput = {
    create?:
      | XOR<
          JobCreateWithoutEmployerInput,
          JobUncheckedCreateWithoutEmployerInput
        >
      | JobCreateWithoutEmployerInput[]
      | JobUncheckedCreateWithoutEmployerInput[];
    connectOrCreate?:
      | JobCreateOrConnectWithoutEmployerInput
      | JobCreateOrConnectWithoutEmployerInput[];
    upsert?:
      | JobUpsertWithWhereUniqueWithoutEmployerInput
      | JobUpsertWithWhereUniqueWithoutEmployerInput[];
    createMany?: JobCreateManyEmployerInputEnvelope;
    set?: JobWhereUniqueInput | JobWhereUniqueInput[];
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[];
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[];
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[];
    update?:
      | JobUpdateWithWhereUniqueWithoutEmployerInput
      | JobUpdateWithWhereUniqueWithoutEmployerInput[];
    updateMany?:
      | JobUpdateManyWithWhereWithoutEmployerInput
      | JobUpdateManyWithWhereWithoutEmployerInput[];
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[];
  };

  export type SubscriptionUncheckedUpdateManyWithoutEmployerNestedInput = {
    create?:
      | XOR<
          SubscriptionCreateWithoutEmployerInput,
          SubscriptionUncheckedCreateWithoutEmployerInput
        >
      | SubscriptionCreateWithoutEmployerInput[]
      | SubscriptionUncheckedCreateWithoutEmployerInput[];
    connectOrCreate?:
      | SubscriptionCreateOrConnectWithoutEmployerInput
      | SubscriptionCreateOrConnectWithoutEmployerInput[];
    upsert?:
      | SubscriptionUpsertWithWhereUniqueWithoutEmployerInput
      | SubscriptionUpsertWithWhereUniqueWithoutEmployerInput[];
    createMany?: SubscriptionCreateManyEmployerInputEnvelope;
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[];
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[];
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[];
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[];
    update?:
      | SubscriptionUpdateWithWhereUniqueWithoutEmployerInput
      | SubscriptionUpdateWithWhereUniqueWithoutEmployerInput[];
    updateMany?:
      | SubscriptionUpdateManyWithWhereWithoutEmployerInput
      | SubscriptionUpdateManyWithWhereWithoutEmployerInput[];
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[];
  };

  export type EmployerProfileCreateNestedOneWithoutJobsInput = {
    create?: XOR<
      EmployerProfileCreateWithoutJobsInput,
      EmployerProfileUncheckedCreateWithoutJobsInput
    >;
    connectOrCreate?: EmployerProfileCreateOrConnectWithoutJobsInput;
    connect?: EmployerProfileWhereUniqueInput;
  };

  export type ApplicationCreateNestedManyWithoutJobInput = {
    create?:
      | XOR<
          ApplicationCreateWithoutJobInput,
          ApplicationUncheckedCreateWithoutJobInput
        >
      | ApplicationCreateWithoutJobInput[]
      | ApplicationUncheckedCreateWithoutJobInput[];
    connectOrCreate?:
      | ApplicationCreateOrConnectWithoutJobInput
      | ApplicationCreateOrConnectWithoutJobInput[];
    createMany?: ApplicationCreateManyJobInputEnvelope;
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
  };

  export type ApplicationUncheckedCreateNestedManyWithoutJobInput = {
    create?:
      | XOR<
          ApplicationCreateWithoutJobInput,
          ApplicationUncheckedCreateWithoutJobInput
        >
      | ApplicationCreateWithoutJobInput[]
      | ApplicationUncheckedCreateWithoutJobInput[];
    connectOrCreate?:
      | ApplicationCreateOrConnectWithoutJobInput
      | ApplicationCreateOrConnectWithoutJobInput[];
    createMany?: ApplicationCreateManyJobInputEnvelope;
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type EmployerProfileUpdateOneRequiredWithoutJobsNestedInput = {
    create?: XOR<
      EmployerProfileCreateWithoutJobsInput,
      EmployerProfileUncheckedCreateWithoutJobsInput
    >;
    connectOrCreate?: EmployerProfileCreateOrConnectWithoutJobsInput;
    upsert?: EmployerProfileUpsertWithoutJobsInput;
    connect?: EmployerProfileWhereUniqueInput;
    update?: XOR<
      XOR<
        EmployerProfileUpdateToOneWithWhereWithoutJobsInput,
        EmployerProfileUpdateWithoutJobsInput
      >,
      EmployerProfileUncheckedUpdateWithoutJobsInput
    >;
  };

  export type ApplicationUpdateManyWithoutJobNestedInput = {
    create?:
      | XOR<
          ApplicationCreateWithoutJobInput,
          ApplicationUncheckedCreateWithoutJobInput
        >
      | ApplicationCreateWithoutJobInput[]
      | ApplicationUncheckedCreateWithoutJobInput[];
    connectOrCreate?:
      | ApplicationCreateOrConnectWithoutJobInput
      | ApplicationCreateOrConnectWithoutJobInput[];
    upsert?:
      | ApplicationUpsertWithWhereUniqueWithoutJobInput
      | ApplicationUpsertWithWhereUniqueWithoutJobInput[];
    createMany?: ApplicationCreateManyJobInputEnvelope;
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    update?:
      | ApplicationUpdateWithWhereUniqueWithoutJobInput
      | ApplicationUpdateWithWhereUniqueWithoutJobInput[];
    updateMany?:
      | ApplicationUpdateManyWithWhereWithoutJobInput
      | ApplicationUpdateManyWithWhereWithoutJobInput[];
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[];
  };

  export type ApplicationUncheckedUpdateManyWithoutJobNestedInput = {
    create?:
      | XOR<
          ApplicationCreateWithoutJobInput,
          ApplicationUncheckedCreateWithoutJobInput
        >
      | ApplicationCreateWithoutJobInput[]
      | ApplicationUncheckedCreateWithoutJobInput[];
    connectOrCreate?:
      | ApplicationCreateOrConnectWithoutJobInput
      | ApplicationCreateOrConnectWithoutJobInput[];
    upsert?:
      | ApplicationUpsertWithWhereUniqueWithoutJobInput
      | ApplicationUpsertWithWhereUniqueWithoutJobInput[];
    createMany?: ApplicationCreateManyJobInputEnvelope;
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    update?:
      | ApplicationUpdateWithWhereUniqueWithoutJobInput
      | ApplicationUpdateWithWhereUniqueWithoutJobInput[];
    updateMany?:
      | ApplicationUpdateManyWithWhereWithoutJobInput
      | ApplicationUpdateManyWithWhereWithoutJobInput[];
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[];
  };

  export type JobCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<
      JobCreateWithoutApplicationsInput,
      JobUncheckedCreateWithoutApplicationsInput
    >;
    connectOrCreate?: JobCreateOrConnectWithoutApplicationsInput;
    connect?: JobWhereUniqueInput;
  };

  export type TalentProfileCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<
      TalentProfileCreateWithoutApplicationsInput,
      TalentProfileUncheckedCreateWithoutApplicationsInput
    >;
    connectOrCreate?: TalentProfileCreateOrConnectWithoutApplicationsInput;
    connect?: TalentProfileWhereUniqueInput;
  };

  export type EnumApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationStatus;
  };

  export type JobUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<
      JobCreateWithoutApplicationsInput,
      JobUncheckedCreateWithoutApplicationsInput
    >;
    connectOrCreate?: JobCreateOrConnectWithoutApplicationsInput;
    upsert?: JobUpsertWithoutApplicationsInput;
    connect?: JobWhereUniqueInput;
    update?: XOR<
      XOR<
        JobUpdateToOneWithWhereWithoutApplicationsInput,
        JobUpdateWithoutApplicationsInput
      >,
      JobUncheckedUpdateWithoutApplicationsInput
    >;
  };

  export type TalentProfileUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<
      TalentProfileCreateWithoutApplicationsInput,
      TalentProfileUncheckedCreateWithoutApplicationsInput
    >;
    connectOrCreate?: TalentProfileCreateOrConnectWithoutApplicationsInput;
    upsert?: TalentProfileUpsertWithoutApplicationsInput;
    connect?: TalentProfileWhereUniqueInput;
    update?: XOR<
      XOR<
        TalentProfileUpdateToOneWithWhereWithoutApplicationsInput,
        TalentProfileUpdateWithoutApplicationsInput
      >,
      TalentProfileUncheckedUpdateWithoutApplicationsInput
    >;
  };

  export type SubscriptionPlanCreatefeaturesInput = {
    set: string[];
  };

  export type SubscriptionCreateNestedManyWithoutPlanInput = {
    create?:
      | XOR<
          SubscriptionCreateWithoutPlanInput,
          SubscriptionUncheckedCreateWithoutPlanInput
        >
      | SubscriptionCreateWithoutPlanInput[]
      | SubscriptionUncheckedCreateWithoutPlanInput[];
    connectOrCreate?:
      | SubscriptionCreateOrConnectWithoutPlanInput
      | SubscriptionCreateOrConnectWithoutPlanInput[];
    createMany?: SubscriptionCreateManyPlanInputEnvelope;
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[];
  };

  export type SubscriptionUncheckedCreateNestedManyWithoutPlanInput = {
    create?:
      | XOR<
          SubscriptionCreateWithoutPlanInput,
          SubscriptionUncheckedCreateWithoutPlanInput
        >
      | SubscriptionCreateWithoutPlanInput[]
      | SubscriptionUncheckedCreateWithoutPlanInput[];
    connectOrCreate?:
      | SubscriptionCreateOrConnectWithoutPlanInput
      | SubscriptionCreateOrConnectWithoutPlanInput[];
    createMany?: SubscriptionCreateManyPlanInputEnvelope;
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[];
  };

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string;
    increment?: Decimal | DecimalJsLike | number | string;
    decrement?: Decimal | DecimalJsLike | number | string;
    multiply?: Decimal | DecimalJsLike | number | string;
    divide?: Decimal | DecimalJsLike | number | string;
  };

  export type SubscriptionPlanUpdatefeaturesInput = {
    set?: string[];
    push?: string | string[];
  };

  export type SubscriptionUpdateManyWithoutPlanNestedInput = {
    create?:
      | XOR<
          SubscriptionCreateWithoutPlanInput,
          SubscriptionUncheckedCreateWithoutPlanInput
        >
      | SubscriptionCreateWithoutPlanInput[]
      | SubscriptionUncheckedCreateWithoutPlanInput[];
    connectOrCreate?:
      | SubscriptionCreateOrConnectWithoutPlanInput
      | SubscriptionCreateOrConnectWithoutPlanInput[];
    upsert?:
      | SubscriptionUpsertWithWhereUniqueWithoutPlanInput
      | SubscriptionUpsertWithWhereUniqueWithoutPlanInput[];
    createMany?: SubscriptionCreateManyPlanInputEnvelope;
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[];
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[];
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[];
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[];
    update?:
      | SubscriptionUpdateWithWhereUniqueWithoutPlanInput
      | SubscriptionUpdateWithWhereUniqueWithoutPlanInput[];
    updateMany?:
      | SubscriptionUpdateManyWithWhereWithoutPlanInput
      | SubscriptionUpdateManyWithWhereWithoutPlanInput[];
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[];
  };

  export type SubscriptionUncheckedUpdateManyWithoutPlanNestedInput = {
    create?:
      | XOR<
          SubscriptionCreateWithoutPlanInput,
          SubscriptionUncheckedCreateWithoutPlanInput
        >
      | SubscriptionCreateWithoutPlanInput[]
      | SubscriptionUncheckedCreateWithoutPlanInput[];
    connectOrCreate?:
      | SubscriptionCreateOrConnectWithoutPlanInput
      | SubscriptionCreateOrConnectWithoutPlanInput[];
    upsert?:
      | SubscriptionUpsertWithWhereUniqueWithoutPlanInput
      | SubscriptionUpsertWithWhereUniqueWithoutPlanInput[];
    createMany?: SubscriptionCreateManyPlanInputEnvelope;
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[];
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[];
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[];
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[];
    update?:
      | SubscriptionUpdateWithWhereUniqueWithoutPlanInput
      | SubscriptionUpdateWithWhereUniqueWithoutPlanInput[];
    updateMany?:
      | SubscriptionUpdateManyWithWhereWithoutPlanInput
      | SubscriptionUpdateManyWithWhereWithoutPlanInput[];
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[];
  };

  export type EmployerProfileCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<
      EmployerProfileCreateWithoutSubscriptionsInput,
      EmployerProfileUncheckedCreateWithoutSubscriptionsInput
    >;
    connectOrCreate?: EmployerProfileCreateOrConnectWithoutSubscriptionsInput;
    connect?: EmployerProfileWhereUniqueInput;
  };

  export type SubscriptionPlanCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<
      SubscriptionPlanCreateWithoutSubscriptionsInput,
      SubscriptionPlanUncheckedCreateWithoutSubscriptionsInput
    >;
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutSubscriptionsInput;
    connect?: SubscriptionPlanWhereUniqueInput;
  };

  export type PaymentCreateNestedManyWithoutSubscriptionInput = {
    create?:
      | XOR<
          PaymentCreateWithoutSubscriptionInput,
          PaymentUncheckedCreateWithoutSubscriptionInput
        >
      | PaymentCreateWithoutSubscriptionInput[]
      | PaymentUncheckedCreateWithoutSubscriptionInput[];
    connectOrCreate?:
      | PaymentCreateOrConnectWithoutSubscriptionInput
      | PaymentCreateOrConnectWithoutSubscriptionInput[];
    createMany?: PaymentCreateManySubscriptionInputEnvelope;
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
  };

  export type PaymentUncheckedCreateNestedManyWithoutSubscriptionInput = {
    create?:
      | XOR<
          PaymentCreateWithoutSubscriptionInput,
          PaymentUncheckedCreateWithoutSubscriptionInput
        >
      | PaymentCreateWithoutSubscriptionInput[]
      | PaymentUncheckedCreateWithoutSubscriptionInput[];
    connectOrCreate?:
      | PaymentCreateOrConnectWithoutSubscriptionInput
      | PaymentCreateOrConnectWithoutSubscriptionInput[];
    createMany?: PaymentCreateManySubscriptionInputEnvelope;
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
  };

  export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus;
  };

  export type EmployerProfileUpdateOneRequiredWithoutSubscriptionsNestedInput =
    {
      create?: XOR<
        EmployerProfileCreateWithoutSubscriptionsInput,
        EmployerProfileUncheckedCreateWithoutSubscriptionsInput
      >;
      connectOrCreate?: EmployerProfileCreateOrConnectWithoutSubscriptionsInput;
      upsert?: EmployerProfileUpsertWithoutSubscriptionsInput;
      connect?: EmployerProfileWhereUniqueInput;
      update?: XOR<
        XOR<
          EmployerProfileUpdateToOneWithWhereWithoutSubscriptionsInput,
          EmployerProfileUpdateWithoutSubscriptionsInput
        >,
        EmployerProfileUncheckedUpdateWithoutSubscriptionsInput
      >;
    };

  export type SubscriptionPlanUpdateOneRequiredWithoutSubscriptionsNestedInput =
    {
      create?: XOR<
        SubscriptionPlanCreateWithoutSubscriptionsInput,
        SubscriptionPlanUncheckedCreateWithoutSubscriptionsInput
      >;
      connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutSubscriptionsInput;
      upsert?: SubscriptionPlanUpsertWithoutSubscriptionsInput;
      connect?: SubscriptionPlanWhereUniqueInput;
      update?: XOR<
        XOR<
          SubscriptionPlanUpdateToOneWithWhereWithoutSubscriptionsInput,
          SubscriptionPlanUpdateWithoutSubscriptionsInput
        >,
        SubscriptionPlanUncheckedUpdateWithoutSubscriptionsInput
      >;
    };

  export type PaymentUpdateManyWithoutSubscriptionNestedInput = {
    create?:
      | XOR<
          PaymentCreateWithoutSubscriptionInput,
          PaymentUncheckedCreateWithoutSubscriptionInput
        >
      | PaymentCreateWithoutSubscriptionInput[]
      | PaymentUncheckedCreateWithoutSubscriptionInput[];
    connectOrCreate?:
      | PaymentCreateOrConnectWithoutSubscriptionInput
      | PaymentCreateOrConnectWithoutSubscriptionInput[];
    upsert?:
      | PaymentUpsertWithWhereUniqueWithoutSubscriptionInput
      | PaymentUpsertWithWhereUniqueWithoutSubscriptionInput[];
    createMany?: PaymentCreateManySubscriptionInputEnvelope;
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    update?:
      | PaymentUpdateWithWhereUniqueWithoutSubscriptionInput
      | PaymentUpdateWithWhereUniqueWithoutSubscriptionInput[];
    updateMany?:
      | PaymentUpdateManyWithWhereWithoutSubscriptionInput
      | PaymentUpdateManyWithWhereWithoutSubscriptionInput[];
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[];
  };

  export type PaymentUncheckedUpdateManyWithoutSubscriptionNestedInput = {
    create?:
      | XOR<
          PaymentCreateWithoutSubscriptionInput,
          PaymentUncheckedCreateWithoutSubscriptionInput
        >
      | PaymentCreateWithoutSubscriptionInput[]
      | PaymentUncheckedCreateWithoutSubscriptionInput[];
    connectOrCreate?:
      | PaymentCreateOrConnectWithoutSubscriptionInput
      | PaymentCreateOrConnectWithoutSubscriptionInput[];
    upsert?:
      | PaymentUpsertWithWhereUniqueWithoutSubscriptionInput
      | PaymentUpsertWithWhereUniqueWithoutSubscriptionInput[];
    createMany?: PaymentCreateManySubscriptionInputEnvelope;
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    update?:
      | PaymentUpdateWithWhereUniqueWithoutSubscriptionInput
      | PaymentUpdateWithWhereUniqueWithoutSubscriptionInput[];
    updateMany?:
      | PaymentUpdateManyWithWhereWithoutSubscriptionInput
      | PaymentUpdateManyWithWhereWithoutSubscriptionInput[];
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[];
  };

  export type SubscriptionCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<
      SubscriptionCreateWithoutPaymentsInput,
      SubscriptionUncheckedCreateWithoutPaymentsInput
    >;
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPaymentsInput;
    connect?: SubscriptionWhereUniqueInput;
  };

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus;
  };

  export type SubscriptionUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<
      SubscriptionCreateWithoutPaymentsInput,
      SubscriptionUncheckedCreateWithoutPaymentsInput
    >;
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPaymentsInput;
    upsert?: SubscriptionUpsertWithoutPaymentsInput;
    connect?: SubscriptionWhereUniqueInput;
    update?: XOR<
      XOR<
        SubscriptionUpdateToOneWithWhereWithoutPaymentsInput,
        SubscriptionUpdateWithoutPaymentsInput
      >,
      SubscriptionUncheckedUpdateWithoutPaymentsInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
  };

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumRoleFilter<$PrismaModel>;
    _max?: NestedEnumRoleFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedEnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.ApplicationStatus
      | EnumApplicationStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.ApplicationStatus[]
      | ListEnumApplicationStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ApplicationStatus[]
      | ListEnumApplicationStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumApplicationStatusFilter<$PrismaModel>
      | $Enums.ApplicationStatus;
  };

  export type NestedEnumApplicationStatusWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.ApplicationStatus
      | EnumApplicationStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.ApplicationStatus[]
      | ListEnumApplicationStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.ApplicationStatus[]
      | ListEnumApplicationStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.ApplicationStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>;
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>;
  };

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string;
  };

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    in?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    notIn?:
      | Decimal[]
      | DecimalJsLike[]
      | number[]
      | string[]
      | ListDecimalFieldRefInput<$PrismaModel>;
    lt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    lte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gt?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    gte?:
      | Decimal
      | DecimalJsLike
      | number
      | string
      | DecimalFieldRefInput<$PrismaModel>;
    not?:
      | NestedDecimalWithAggregatesFilter<$PrismaModel>
      | Decimal
      | DecimalJsLike
      | number
      | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedDecimalFilter<$PrismaModel>;
    _sum?: NestedDecimalFilter<$PrismaModel>;
    _min?: NestedDecimalFilter<$PrismaModel>;
    _max?: NestedDecimalFilter<$PrismaModel>;
  };

  export type NestedEnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.SubscriptionStatus
      | EnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.SubscriptionStatus[]
      | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.SubscriptionStatus[]
      | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumSubscriptionStatusFilter<$PrismaModel>
      | $Enums.SubscriptionStatus;
  };

  export type NestedEnumSubscriptionStatusWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.SubscriptionStatus
      | EnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.SubscriptionStatus[]
      | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.SubscriptionStatus[]
      | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.SubscriptionStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>;
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>;
  };

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?:
      $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?:
      $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    notIn?:
      $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus;
  };

  export type NestedEnumPaymentStatusWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>;
    in?:
      $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    notIn?:
      $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.PaymentStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>;
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>;
  };

  export type TalentProfileCreateWithoutUserInput = {
    id?: string;
    headline?: string | null;
    skills?: TalentProfileCreateskillsInput | string[];
    resumeUrl?: string | null;
    applications?: ApplicationCreateNestedManyWithoutTalentInput;
  };

  export type TalentProfileUncheckedCreateWithoutUserInput = {
    id?: string;
    headline?: string | null;
    skills?: TalentProfileCreateskillsInput | string[];
    resumeUrl?: string | null;
    applications?: ApplicationUncheckedCreateNestedManyWithoutTalentInput;
  };

  export type TalentProfileCreateOrConnectWithoutUserInput = {
    where: TalentProfileWhereUniqueInput;
    create: XOR<
      TalentProfileCreateWithoutUserInput,
      TalentProfileUncheckedCreateWithoutUserInput
    >;
  };

  export type EmployerProfileCreateWithoutUserInput = {
    id?: string;
    companyName: string;
    website?: string | null;
    jobs?: JobCreateNestedManyWithoutEmployerInput;
    subscriptions?: SubscriptionCreateNestedManyWithoutEmployerInput;
  };

  export type EmployerProfileUncheckedCreateWithoutUserInput = {
    id?: string;
    companyName: string;
    website?: string | null;
    jobs?: JobUncheckedCreateNestedManyWithoutEmployerInput;
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutEmployerInput;
  };

  export type EmployerProfileCreateOrConnectWithoutUserInput = {
    where: EmployerProfileWhereUniqueInput;
    create: XOR<
      EmployerProfileCreateWithoutUserInput,
      EmployerProfileUncheckedCreateWithoutUserInput
    >;
  };

  export type TalentProfileUpsertWithoutUserInput = {
    update: XOR<
      TalentProfileUpdateWithoutUserInput,
      TalentProfileUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      TalentProfileCreateWithoutUserInput,
      TalentProfileUncheckedCreateWithoutUserInput
    >;
    where?: TalentProfileWhereInput;
  };

  export type TalentProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: TalentProfileWhereInput;
    data: XOR<
      TalentProfileUpdateWithoutUserInput,
      TalentProfileUncheckedUpdateWithoutUserInput
    >;
  };

  export type TalentProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    headline?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: TalentProfileUpdateskillsInput | string[];
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    applications?: ApplicationUpdateManyWithoutTalentNestedInput;
  };

  export type TalentProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    headline?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: TalentProfileUpdateskillsInput | string[];
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    applications?: ApplicationUncheckedUpdateManyWithoutTalentNestedInput;
  };

  export type EmployerProfileUpsertWithoutUserInput = {
    update: XOR<
      EmployerProfileUpdateWithoutUserInput,
      EmployerProfileUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      EmployerProfileCreateWithoutUserInput,
      EmployerProfileUncheckedCreateWithoutUserInput
    >;
    where?: EmployerProfileWhereInput;
  };

  export type EmployerProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: EmployerProfileWhereInput;
    data: XOR<
      EmployerProfileUpdateWithoutUserInput,
      EmployerProfileUncheckedUpdateWithoutUserInput
    >;
  };

  export type EmployerProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    companyName?: StringFieldUpdateOperationsInput | string;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    jobs?: JobUpdateManyWithoutEmployerNestedInput;
    subscriptions?: SubscriptionUpdateManyWithoutEmployerNestedInput;
  };

  export type EmployerProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    companyName?: StringFieldUpdateOperationsInput | string;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    jobs?: JobUncheckedUpdateManyWithoutEmployerNestedInput;
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutEmployerNestedInput;
  };

  export type UserCreateWithoutTalentProfileInput = {
    id?: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    employerProfile?: EmployerProfileCreateNestedOneWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutTalentProfileInput = {
    id?: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    employerProfile?: EmployerProfileUncheckedCreateNestedOneWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutTalentProfileInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutTalentProfileInput,
      UserUncheckedCreateWithoutTalentProfileInput
    >;
  };

  export type ApplicationCreateWithoutTalentInput = {
    id?: string;
    status?: $Enums.ApplicationStatus;
    appliedAt?: Date | string;
    job: JobCreateNestedOneWithoutApplicationsInput;
  };

  export type ApplicationUncheckedCreateWithoutTalentInput = {
    id?: string;
    jobId: string;
    status?: $Enums.ApplicationStatus;
    appliedAt?: Date | string;
  };

  export type ApplicationCreateOrConnectWithoutTalentInput = {
    where: ApplicationWhereUniqueInput;
    create: XOR<
      ApplicationCreateWithoutTalentInput,
      ApplicationUncheckedCreateWithoutTalentInput
    >;
  };

  export type ApplicationCreateManyTalentInputEnvelope = {
    data: ApplicationCreateManyTalentInput | ApplicationCreateManyTalentInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutTalentProfileInput = {
    update: XOR<
      UserUpdateWithoutTalentProfileInput,
      UserUncheckedUpdateWithoutTalentProfileInput
    >;
    create: XOR<
      UserCreateWithoutTalentProfileInput,
      UserUncheckedCreateWithoutTalentProfileInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutTalentProfileInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutTalentProfileInput,
      UserUncheckedUpdateWithoutTalentProfileInput
    >;
  };

  export type UserUpdateWithoutTalentProfileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    employerProfile?: EmployerProfileUpdateOneWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutTalentProfileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    employerProfile?: EmployerProfileUncheckedUpdateOneWithoutUserNestedInput;
  };

  export type ApplicationUpsertWithWhereUniqueWithoutTalentInput = {
    where: ApplicationWhereUniqueInput;
    update: XOR<
      ApplicationUpdateWithoutTalentInput,
      ApplicationUncheckedUpdateWithoutTalentInput
    >;
    create: XOR<
      ApplicationCreateWithoutTalentInput,
      ApplicationUncheckedCreateWithoutTalentInput
    >;
  };

  export type ApplicationUpdateWithWhereUniqueWithoutTalentInput = {
    where: ApplicationWhereUniqueInput;
    data: XOR<
      ApplicationUpdateWithoutTalentInput,
      ApplicationUncheckedUpdateWithoutTalentInput
    >;
  };

  export type ApplicationUpdateManyWithWhereWithoutTalentInput = {
    where: ApplicationScalarWhereInput;
    data: XOR<
      ApplicationUpdateManyMutationInput,
      ApplicationUncheckedUpdateManyWithoutTalentInput
    >;
  };

  export type ApplicationScalarWhereInput = {
    AND?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[];
    OR?: ApplicationScalarWhereInput[];
    NOT?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[];
    id?: StringFilter<'Application'> | string;
    jobId?: StringFilter<'Application'> | string;
    talentId?: StringFilter<'Application'> | string;
    status?:
      EnumApplicationStatusFilter<'Application'> | $Enums.ApplicationStatus;
    appliedAt?: DateTimeFilter<'Application'> | Date | string;
  };

  export type UserCreateWithoutEmployerProfileInput = {
    id?: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    talentProfile?: TalentProfileCreateNestedOneWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutEmployerProfileInput = {
    id?: string;
    email: string;
    passwordHash: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    talentProfile?: TalentProfileUncheckedCreateNestedOneWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutEmployerProfileInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutEmployerProfileInput,
      UserUncheckedCreateWithoutEmployerProfileInput
    >;
  };

  export type JobCreateWithoutEmployerInput = {
    id?: string;
    title: string;
    description: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applications?: ApplicationCreateNestedManyWithoutJobInput;
  };

  export type JobUncheckedCreateWithoutEmployerInput = {
    id?: string;
    title: string;
    description: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applications?: ApplicationUncheckedCreateNestedManyWithoutJobInput;
  };

  export type JobCreateOrConnectWithoutEmployerInput = {
    where: JobWhereUniqueInput;
    create: XOR<
      JobCreateWithoutEmployerInput,
      JobUncheckedCreateWithoutEmployerInput
    >;
  };

  export type JobCreateManyEmployerInputEnvelope = {
    data: JobCreateManyEmployerInput | JobCreateManyEmployerInput[];
    skipDuplicates?: boolean;
  };

  export type SubscriptionCreateWithoutEmployerInput = {
    id?: string;
    status?: $Enums.SubscriptionStatus;
    startDate?: Date | string;
    endDate: Date | string;
    plan: SubscriptionPlanCreateNestedOneWithoutSubscriptionsInput;
    payments?: PaymentCreateNestedManyWithoutSubscriptionInput;
  };

  export type SubscriptionUncheckedCreateWithoutEmployerInput = {
    id?: string;
    planId: string;
    status?: $Enums.SubscriptionStatus;
    startDate?: Date | string;
    endDate: Date | string;
    payments?: PaymentUncheckedCreateNestedManyWithoutSubscriptionInput;
  };

  export type SubscriptionCreateOrConnectWithoutEmployerInput = {
    where: SubscriptionWhereUniqueInput;
    create: XOR<
      SubscriptionCreateWithoutEmployerInput,
      SubscriptionUncheckedCreateWithoutEmployerInput
    >;
  };

  export type SubscriptionCreateManyEmployerInputEnvelope = {
    data:
      | SubscriptionCreateManyEmployerInput
      | SubscriptionCreateManyEmployerInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutEmployerProfileInput = {
    update: XOR<
      UserUpdateWithoutEmployerProfileInput,
      UserUncheckedUpdateWithoutEmployerProfileInput
    >;
    create: XOR<
      UserCreateWithoutEmployerProfileInput,
      UserUncheckedCreateWithoutEmployerProfileInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutEmployerProfileInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutEmployerProfileInput,
      UserUncheckedUpdateWithoutEmployerProfileInput
    >;
  };

  export type UserUpdateWithoutEmployerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    talentProfile?: TalentProfileUpdateOneWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutEmployerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    talentProfile?: TalentProfileUncheckedUpdateOneWithoutUserNestedInput;
  };

  export type JobUpsertWithWhereUniqueWithoutEmployerInput = {
    where: JobWhereUniqueInput;
    update: XOR<
      JobUpdateWithoutEmployerInput,
      JobUncheckedUpdateWithoutEmployerInput
    >;
    create: XOR<
      JobCreateWithoutEmployerInput,
      JobUncheckedCreateWithoutEmployerInput
    >;
  };

  export type JobUpdateWithWhereUniqueWithoutEmployerInput = {
    where: JobWhereUniqueInput;
    data: XOR<
      JobUpdateWithoutEmployerInput,
      JobUncheckedUpdateWithoutEmployerInput
    >;
  };

  export type JobUpdateManyWithWhereWithoutEmployerInput = {
    where: JobScalarWhereInput;
    data: XOR<
      JobUpdateManyMutationInput,
      JobUncheckedUpdateManyWithoutEmployerInput
    >;
  };

  export type JobScalarWhereInput = {
    AND?: JobScalarWhereInput | JobScalarWhereInput[];
    OR?: JobScalarWhereInput[];
    NOT?: JobScalarWhereInput | JobScalarWhereInput[];
    id?: StringFilter<'Job'> | string;
    employerId?: StringFilter<'Job'> | string;
    title?: StringFilter<'Job'> | string;
    description?: StringFilter<'Job'> | string;
    isActive?: BoolFilter<'Job'> | boolean;
    createdAt?: DateTimeFilter<'Job'> | Date | string;
    updatedAt?: DateTimeFilter<'Job'> | Date | string;
  };

  export type SubscriptionUpsertWithWhereUniqueWithoutEmployerInput = {
    where: SubscriptionWhereUniqueInput;
    update: XOR<
      SubscriptionUpdateWithoutEmployerInput,
      SubscriptionUncheckedUpdateWithoutEmployerInput
    >;
    create: XOR<
      SubscriptionCreateWithoutEmployerInput,
      SubscriptionUncheckedCreateWithoutEmployerInput
    >;
  };

  export type SubscriptionUpdateWithWhereUniqueWithoutEmployerInput = {
    where: SubscriptionWhereUniqueInput;
    data: XOR<
      SubscriptionUpdateWithoutEmployerInput,
      SubscriptionUncheckedUpdateWithoutEmployerInput
    >;
  };

  export type SubscriptionUpdateManyWithWhereWithoutEmployerInput = {
    where: SubscriptionScalarWhereInput;
    data: XOR<
      SubscriptionUpdateManyMutationInput,
      SubscriptionUncheckedUpdateManyWithoutEmployerInput
    >;
  };

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[];
    OR?: SubscriptionScalarWhereInput[];
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[];
    id?: StringFilter<'Subscription'> | string;
    employerId?: StringFilter<'Subscription'> | string;
    planId?: StringFilter<'Subscription'> | string;
    status?:
      EnumSubscriptionStatusFilter<'Subscription'> | $Enums.SubscriptionStatus;
    startDate?: DateTimeFilter<'Subscription'> | Date | string;
    endDate?: DateTimeFilter<'Subscription'> | Date | string;
  };

  export type EmployerProfileCreateWithoutJobsInput = {
    id?: string;
    companyName: string;
    website?: string | null;
    user: UserCreateNestedOneWithoutEmployerProfileInput;
    subscriptions?: SubscriptionCreateNestedManyWithoutEmployerInput;
  };

  export type EmployerProfileUncheckedCreateWithoutJobsInput = {
    id?: string;
    userId: string;
    companyName: string;
    website?: string | null;
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutEmployerInput;
  };

  export type EmployerProfileCreateOrConnectWithoutJobsInput = {
    where: EmployerProfileWhereUniqueInput;
    create: XOR<
      EmployerProfileCreateWithoutJobsInput,
      EmployerProfileUncheckedCreateWithoutJobsInput
    >;
  };

  export type ApplicationCreateWithoutJobInput = {
    id?: string;
    status?: $Enums.ApplicationStatus;
    appliedAt?: Date | string;
    talent: TalentProfileCreateNestedOneWithoutApplicationsInput;
  };

  export type ApplicationUncheckedCreateWithoutJobInput = {
    id?: string;
    talentId: string;
    status?: $Enums.ApplicationStatus;
    appliedAt?: Date | string;
  };

  export type ApplicationCreateOrConnectWithoutJobInput = {
    where: ApplicationWhereUniqueInput;
    create: XOR<
      ApplicationCreateWithoutJobInput,
      ApplicationUncheckedCreateWithoutJobInput
    >;
  };

  export type ApplicationCreateManyJobInputEnvelope = {
    data: ApplicationCreateManyJobInput | ApplicationCreateManyJobInput[];
    skipDuplicates?: boolean;
  };

  export type EmployerProfileUpsertWithoutJobsInput = {
    update: XOR<
      EmployerProfileUpdateWithoutJobsInput,
      EmployerProfileUncheckedUpdateWithoutJobsInput
    >;
    create: XOR<
      EmployerProfileCreateWithoutJobsInput,
      EmployerProfileUncheckedCreateWithoutJobsInput
    >;
    where?: EmployerProfileWhereInput;
  };

  export type EmployerProfileUpdateToOneWithWhereWithoutJobsInput = {
    where?: EmployerProfileWhereInput;
    data: XOR<
      EmployerProfileUpdateWithoutJobsInput,
      EmployerProfileUncheckedUpdateWithoutJobsInput
    >;
  };

  export type EmployerProfileUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    companyName?: StringFieldUpdateOperationsInput | string;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    user?: UserUpdateOneRequiredWithoutEmployerProfileNestedInput;
    subscriptions?: SubscriptionUpdateManyWithoutEmployerNestedInput;
  };

  export type EmployerProfileUncheckedUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    companyName?: StringFieldUpdateOperationsInput | string;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutEmployerNestedInput;
  };

  export type ApplicationUpsertWithWhereUniqueWithoutJobInput = {
    where: ApplicationWhereUniqueInput;
    update: XOR<
      ApplicationUpdateWithoutJobInput,
      ApplicationUncheckedUpdateWithoutJobInput
    >;
    create: XOR<
      ApplicationCreateWithoutJobInput,
      ApplicationUncheckedCreateWithoutJobInput
    >;
  };

  export type ApplicationUpdateWithWhereUniqueWithoutJobInput = {
    where: ApplicationWhereUniqueInput;
    data: XOR<
      ApplicationUpdateWithoutJobInput,
      ApplicationUncheckedUpdateWithoutJobInput
    >;
  };

  export type ApplicationUpdateManyWithWhereWithoutJobInput = {
    where: ApplicationScalarWhereInput;
    data: XOR<
      ApplicationUpdateManyMutationInput,
      ApplicationUncheckedUpdateManyWithoutJobInput
    >;
  };

  export type JobCreateWithoutApplicationsInput = {
    id?: string;
    title: string;
    description: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    employer: EmployerProfileCreateNestedOneWithoutJobsInput;
  };

  export type JobUncheckedCreateWithoutApplicationsInput = {
    id?: string;
    employerId: string;
    title: string;
    description: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type JobCreateOrConnectWithoutApplicationsInput = {
    where: JobWhereUniqueInput;
    create: XOR<
      JobCreateWithoutApplicationsInput,
      JobUncheckedCreateWithoutApplicationsInput
    >;
  };

  export type TalentProfileCreateWithoutApplicationsInput = {
    id?: string;
    headline?: string | null;
    skills?: TalentProfileCreateskillsInput | string[];
    resumeUrl?: string | null;
    user: UserCreateNestedOneWithoutTalentProfileInput;
  };

  export type TalentProfileUncheckedCreateWithoutApplicationsInput = {
    id?: string;
    userId: string;
    headline?: string | null;
    skills?: TalentProfileCreateskillsInput | string[];
    resumeUrl?: string | null;
  };

  export type TalentProfileCreateOrConnectWithoutApplicationsInput = {
    where: TalentProfileWhereUniqueInput;
    create: XOR<
      TalentProfileCreateWithoutApplicationsInput,
      TalentProfileUncheckedCreateWithoutApplicationsInput
    >;
  };

  export type JobUpsertWithoutApplicationsInput = {
    update: XOR<
      JobUpdateWithoutApplicationsInput,
      JobUncheckedUpdateWithoutApplicationsInput
    >;
    create: XOR<
      JobCreateWithoutApplicationsInput,
      JobUncheckedCreateWithoutApplicationsInput
    >;
    where?: JobWhereInput;
  };

  export type JobUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: JobWhereInput;
    data: XOR<
      JobUpdateWithoutApplicationsInput,
      JobUncheckedUpdateWithoutApplicationsInput
    >;
  };

  export type JobUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    employer?: EmployerProfileUpdateOneRequiredWithoutJobsNestedInput;
  };

  export type JobUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    employerId?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TalentProfileUpsertWithoutApplicationsInput = {
    update: XOR<
      TalentProfileUpdateWithoutApplicationsInput,
      TalentProfileUncheckedUpdateWithoutApplicationsInput
    >;
    create: XOR<
      TalentProfileCreateWithoutApplicationsInput,
      TalentProfileUncheckedCreateWithoutApplicationsInput
    >;
    where?: TalentProfileWhereInput;
  };

  export type TalentProfileUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: TalentProfileWhereInput;
    data: XOR<
      TalentProfileUpdateWithoutApplicationsInput,
      TalentProfileUncheckedUpdateWithoutApplicationsInput
    >;
  };

  export type TalentProfileUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    headline?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: TalentProfileUpdateskillsInput | string[];
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    user?: UserUpdateOneRequiredWithoutTalentProfileNestedInput;
  };

  export type TalentProfileUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    headline?: NullableStringFieldUpdateOperationsInput | string | null;
    skills?: TalentProfileUpdateskillsInput | string[];
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type SubscriptionCreateWithoutPlanInput = {
    id?: string;
    status?: $Enums.SubscriptionStatus;
    startDate?: Date | string;
    endDate: Date | string;
    employer: EmployerProfileCreateNestedOneWithoutSubscriptionsInput;
    payments?: PaymentCreateNestedManyWithoutSubscriptionInput;
  };

  export type SubscriptionUncheckedCreateWithoutPlanInput = {
    id?: string;
    employerId: string;
    status?: $Enums.SubscriptionStatus;
    startDate?: Date | string;
    endDate: Date | string;
    payments?: PaymentUncheckedCreateNestedManyWithoutSubscriptionInput;
  };

  export type SubscriptionCreateOrConnectWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput;
    create: XOR<
      SubscriptionCreateWithoutPlanInput,
      SubscriptionUncheckedCreateWithoutPlanInput
    >;
  };

  export type SubscriptionCreateManyPlanInputEnvelope = {
    data: SubscriptionCreateManyPlanInput | SubscriptionCreateManyPlanInput[];
    skipDuplicates?: boolean;
  };

  export type SubscriptionUpsertWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput;
    update: XOR<
      SubscriptionUpdateWithoutPlanInput,
      SubscriptionUncheckedUpdateWithoutPlanInput
    >;
    create: XOR<
      SubscriptionCreateWithoutPlanInput,
      SubscriptionUncheckedCreateWithoutPlanInput
    >;
  };

  export type SubscriptionUpdateWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput;
    data: XOR<
      SubscriptionUpdateWithoutPlanInput,
      SubscriptionUncheckedUpdateWithoutPlanInput
    >;
  };

  export type SubscriptionUpdateManyWithWhereWithoutPlanInput = {
    where: SubscriptionScalarWhereInput;
    data: XOR<
      SubscriptionUpdateManyMutationInput,
      SubscriptionUncheckedUpdateManyWithoutPlanInput
    >;
  };

  export type EmployerProfileCreateWithoutSubscriptionsInput = {
    id?: string;
    companyName: string;
    website?: string | null;
    user: UserCreateNestedOneWithoutEmployerProfileInput;
    jobs?: JobCreateNestedManyWithoutEmployerInput;
  };

  export type EmployerProfileUncheckedCreateWithoutSubscriptionsInput = {
    id?: string;
    userId: string;
    companyName: string;
    website?: string | null;
    jobs?: JobUncheckedCreateNestedManyWithoutEmployerInput;
  };

  export type EmployerProfileCreateOrConnectWithoutSubscriptionsInput = {
    where: EmployerProfileWhereUniqueInput;
    create: XOR<
      EmployerProfileCreateWithoutSubscriptionsInput,
      EmployerProfileUncheckedCreateWithoutSubscriptionsInput
    >;
  };

  export type SubscriptionPlanCreateWithoutSubscriptionsInput = {
    id?: string;
    name: string;
    price: Decimal | DecimalJsLike | number | string;
    features?: SubscriptionPlanCreatefeaturesInput | string[];
  };

  export type SubscriptionPlanUncheckedCreateWithoutSubscriptionsInput = {
    id?: string;
    name: string;
    price: Decimal | DecimalJsLike | number | string;
    features?: SubscriptionPlanCreatefeaturesInput | string[];
  };

  export type SubscriptionPlanCreateOrConnectWithoutSubscriptionsInput = {
    where: SubscriptionPlanWhereUniqueInput;
    create: XOR<
      SubscriptionPlanCreateWithoutSubscriptionsInput,
      SubscriptionPlanUncheckedCreateWithoutSubscriptionsInput
    >;
  };

  export type PaymentCreateWithoutSubscriptionInput = {
    id?: string;
    amount: Decimal | DecimalJsLike | number | string;
    status?: $Enums.PaymentStatus;
    paidAt?: Date | string;
  };

  export type PaymentUncheckedCreateWithoutSubscriptionInput = {
    id?: string;
    amount: Decimal | DecimalJsLike | number | string;
    status?: $Enums.PaymentStatus;
    paidAt?: Date | string;
  };

  export type PaymentCreateOrConnectWithoutSubscriptionInput = {
    where: PaymentWhereUniqueInput;
    create: XOR<
      PaymentCreateWithoutSubscriptionInput,
      PaymentUncheckedCreateWithoutSubscriptionInput
    >;
  };

  export type PaymentCreateManySubscriptionInputEnvelope = {
    data:
      PaymentCreateManySubscriptionInput | PaymentCreateManySubscriptionInput[];
    skipDuplicates?: boolean;
  };

  export type EmployerProfileUpsertWithoutSubscriptionsInput = {
    update: XOR<
      EmployerProfileUpdateWithoutSubscriptionsInput,
      EmployerProfileUncheckedUpdateWithoutSubscriptionsInput
    >;
    create: XOR<
      EmployerProfileCreateWithoutSubscriptionsInput,
      EmployerProfileUncheckedCreateWithoutSubscriptionsInput
    >;
    where?: EmployerProfileWhereInput;
  };

  export type EmployerProfileUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: EmployerProfileWhereInput;
    data: XOR<
      EmployerProfileUpdateWithoutSubscriptionsInput,
      EmployerProfileUncheckedUpdateWithoutSubscriptionsInput
    >;
  };

  export type EmployerProfileUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    companyName?: StringFieldUpdateOperationsInput | string;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    user?: UserUpdateOneRequiredWithoutEmployerProfileNestedInput;
    jobs?: JobUpdateManyWithoutEmployerNestedInput;
  };

  export type EmployerProfileUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    companyName?: StringFieldUpdateOperationsInput | string;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    jobs?: JobUncheckedUpdateManyWithoutEmployerNestedInput;
  };

  export type SubscriptionPlanUpsertWithoutSubscriptionsInput = {
    update: XOR<
      SubscriptionPlanUpdateWithoutSubscriptionsInput,
      SubscriptionPlanUncheckedUpdateWithoutSubscriptionsInput
    >;
    create: XOR<
      SubscriptionPlanCreateWithoutSubscriptionsInput,
      SubscriptionPlanUncheckedCreateWithoutSubscriptionsInput
    >;
    where?: SubscriptionPlanWhereInput;
  };

  export type SubscriptionPlanUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: SubscriptionPlanWhereInput;
    data: XOR<
      SubscriptionPlanUpdateWithoutSubscriptionsInput,
      SubscriptionPlanUncheckedUpdateWithoutSubscriptionsInput
    >;
  };

  export type SubscriptionPlanUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    features?: SubscriptionPlanUpdatefeaturesInput | string[];
  };

  export type SubscriptionPlanUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    price?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    features?: SubscriptionPlanUpdatefeaturesInput | string[];
  };

  export type PaymentUpsertWithWhereUniqueWithoutSubscriptionInput = {
    where: PaymentWhereUniqueInput;
    update: XOR<
      PaymentUpdateWithoutSubscriptionInput,
      PaymentUncheckedUpdateWithoutSubscriptionInput
    >;
    create: XOR<
      PaymentCreateWithoutSubscriptionInput,
      PaymentUncheckedCreateWithoutSubscriptionInput
    >;
  };

  export type PaymentUpdateWithWhereUniqueWithoutSubscriptionInput = {
    where: PaymentWhereUniqueInput;
    data: XOR<
      PaymentUpdateWithoutSubscriptionInput,
      PaymentUncheckedUpdateWithoutSubscriptionInput
    >;
  };

  export type PaymentUpdateManyWithWhereWithoutSubscriptionInput = {
    where: PaymentScalarWhereInput;
    data: XOR<
      PaymentUpdateManyMutationInput,
      PaymentUncheckedUpdateManyWithoutSubscriptionInput
    >;
  };

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[];
    OR?: PaymentScalarWhereInput[];
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[];
    id?: StringFilter<'Payment'> | string;
    subscriptionId?: StringFilter<'Payment'> | string;
    amount?:
      DecimalFilter<'Payment'> | Decimal | DecimalJsLike | number | string;
    status?: EnumPaymentStatusFilter<'Payment'> | $Enums.PaymentStatus;
    paidAt?: DateTimeFilter<'Payment'> | Date | string;
  };

  export type SubscriptionCreateWithoutPaymentsInput = {
    id?: string;
    status?: $Enums.SubscriptionStatus;
    startDate?: Date | string;
    endDate: Date | string;
    employer: EmployerProfileCreateNestedOneWithoutSubscriptionsInput;
    plan: SubscriptionPlanCreateNestedOneWithoutSubscriptionsInput;
  };

  export type SubscriptionUncheckedCreateWithoutPaymentsInput = {
    id?: string;
    employerId: string;
    planId: string;
    status?: $Enums.SubscriptionStatus;
    startDate?: Date | string;
    endDate: Date | string;
  };

  export type SubscriptionCreateOrConnectWithoutPaymentsInput = {
    where: SubscriptionWhereUniqueInput;
    create: XOR<
      SubscriptionCreateWithoutPaymentsInput,
      SubscriptionUncheckedCreateWithoutPaymentsInput
    >;
  };

  export type SubscriptionUpsertWithoutPaymentsInput = {
    update: XOR<
      SubscriptionUpdateWithoutPaymentsInput,
      SubscriptionUncheckedUpdateWithoutPaymentsInput
    >;
    create: XOR<
      SubscriptionCreateWithoutPaymentsInput,
      SubscriptionUncheckedCreateWithoutPaymentsInput
    >;
    where?: SubscriptionWhereInput;
  };

  export type SubscriptionUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: SubscriptionWhereInput;
    data: XOR<
      SubscriptionUpdateWithoutPaymentsInput,
      SubscriptionUncheckedUpdateWithoutPaymentsInput
    >;
  };

  export type SubscriptionUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumSubscriptionStatusFieldUpdateOperationsInput
      | $Enums.SubscriptionStatus;
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    employer?: EmployerProfileUpdateOneRequiredWithoutSubscriptionsNestedInput;
    plan?: SubscriptionPlanUpdateOneRequiredWithoutSubscriptionsNestedInput;
  };

  export type SubscriptionUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    employerId?: StringFieldUpdateOperationsInput | string;
    planId?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumSubscriptionStatusFieldUpdateOperationsInput
      | $Enums.SubscriptionStatus;
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ApplicationCreateManyTalentInput = {
    id?: string;
    jobId: string;
    status?: $Enums.ApplicationStatus;
    appliedAt?: Date | string;
  };

  export type ApplicationUpdateWithoutTalentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumApplicationStatusFieldUpdateOperationsInput
      | $Enums.ApplicationStatus;
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    job?: JobUpdateOneRequiredWithoutApplicationsNestedInput;
  };

  export type ApplicationUncheckedUpdateWithoutTalentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    jobId?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumApplicationStatusFieldUpdateOperationsInput
      | $Enums.ApplicationStatus;
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ApplicationUncheckedUpdateManyWithoutTalentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    jobId?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumApplicationStatusFieldUpdateOperationsInput
      | $Enums.ApplicationStatus;
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type JobCreateManyEmployerInput = {
    id?: string;
    title: string;
    description: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type SubscriptionCreateManyEmployerInput = {
    id?: string;
    planId: string;
    status?: $Enums.SubscriptionStatus;
    startDate?: Date | string;
    endDate: Date | string;
  };

  export type JobUpdateWithoutEmployerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    applications?: ApplicationUpdateManyWithoutJobNestedInput;
  };

  export type JobUncheckedUpdateWithoutEmployerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    applications?: ApplicationUncheckedUpdateManyWithoutJobNestedInput;
  };

  export type JobUncheckedUpdateManyWithoutEmployerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    isActive?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SubscriptionUpdateWithoutEmployerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumSubscriptionStatusFieldUpdateOperationsInput
      | $Enums.SubscriptionStatus;
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    plan?: SubscriptionPlanUpdateOneRequiredWithoutSubscriptionsNestedInput;
    payments?: PaymentUpdateManyWithoutSubscriptionNestedInput;
  };

  export type SubscriptionUncheckedUpdateWithoutEmployerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    planId?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumSubscriptionStatusFieldUpdateOperationsInput
      | $Enums.SubscriptionStatus;
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    payments?: PaymentUncheckedUpdateManyWithoutSubscriptionNestedInput;
  };

  export type SubscriptionUncheckedUpdateManyWithoutEmployerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    planId?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumSubscriptionStatusFieldUpdateOperationsInput
      | $Enums.SubscriptionStatus;
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ApplicationCreateManyJobInput = {
    id?: string;
    talentId: string;
    status?: $Enums.ApplicationStatus;
    appliedAt?: Date | string;
  };

  export type ApplicationUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumApplicationStatusFieldUpdateOperationsInput
      | $Enums.ApplicationStatus;
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    talent?: TalentProfileUpdateOneRequiredWithoutApplicationsNestedInput;
  };

  export type ApplicationUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string;
    talentId?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumApplicationStatusFieldUpdateOperationsInput
      | $Enums.ApplicationStatus;
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ApplicationUncheckedUpdateManyWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string;
    talentId?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumApplicationStatusFieldUpdateOperationsInput
      | $Enums.ApplicationStatus;
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type SubscriptionCreateManyPlanInput = {
    id?: string;
    employerId: string;
    status?: $Enums.SubscriptionStatus;
    startDate?: Date | string;
    endDate: Date | string;
  };

  export type SubscriptionUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumSubscriptionStatusFieldUpdateOperationsInput
      | $Enums.SubscriptionStatus;
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    employer?: EmployerProfileUpdateOneRequiredWithoutSubscriptionsNestedInput;
    payments?: PaymentUpdateManyWithoutSubscriptionNestedInput;
  };

  export type SubscriptionUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string;
    employerId?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumSubscriptionStatusFieldUpdateOperationsInput
      | $Enums.SubscriptionStatus;
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    payments?: PaymentUncheckedUpdateManyWithoutSubscriptionNestedInput;
  };

  export type SubscriptionUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string;
    employerId?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumSubscriptionStatusFieldUpdateOperationsInput
      | $Enums.SubscriptionStatus;
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PaymentCreateManySubscriptionInput = {
    id?: string;
    amount: Decimal | DecimalJsLike | number | string;
    status?: $Enums.PaymentStatus;
    paidAt?: Date | string;
  };

  export type PaymentUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PaymentUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PaymentUncheckedUpdateManyWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    amount?:
      | DecimalFieldUpdateOperationsInput
      | Decimal
      | DecimalJsLike
      | number
      | string;
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
