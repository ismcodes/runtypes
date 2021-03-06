/**
 * A successful validation result.
 */
export type Success<A> = {
  /**
   * A tag indicating success.
   */
  success: true;

  /**
   * The original value, cast to its validated type.
   */
  value: A;
};

/**
 * A failed validation result.
 */
export type Failure = {
  /**
   * A tag indicating failure.
   */
  success: false;

  /**
   * A message indicating the reason validation failed.
   */
  message: string;

  /**
   * A key indicating the location at which validation failed.
   */
  key?: string;
};

/**
 * The result of a type validation.
 */
export type Result<A> = Success<A> | Failure;
