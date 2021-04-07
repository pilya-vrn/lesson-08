export declare namespace Auth {
  namespace Login {
    interface Params {
      login: string;
      password: string;
    }
  }

  namespace Refresh {
    interface Params {
      login: string;
      refreshToken: string;
    }
  }

  namespace Registration {
    interface Params {
      login: string;
      email: string;
      password: string;
      passwordConfirm: string;
    }
  }
}
