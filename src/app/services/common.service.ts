export class CommonUtils {

  static deepCopy<T>(object: T): T {
    return JSON.parse(JSON.stringify(object)) as T;
  }

}
