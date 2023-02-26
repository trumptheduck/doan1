class DevEnvironment {
  static apiUrl = 'http://localhost:4000';
}
class ProdEnvironment {
  static apiUrl = 'http://localhost:4000';
}

export const Environment =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? DevEnvironment
    : ProdEnvironment;
