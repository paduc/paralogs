import { Result } from "../../core/Result";

const isEmail = (str: string): boolean =>
  !!str.match(
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );

export class Email {
  private constructor(public readonly value: string) {
    this.value = value;
  }

  static create(email: string): Result<Email> {
    if (!isEmail(email)) {
      return Result.fail("Not a valid Email");
    }

    return Result.ok(new Email(email.toLowerCase()));
  }
}
