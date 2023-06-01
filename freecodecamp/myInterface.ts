interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrail: () => string;
  startTrail(): string;
  getCoupon(couponname: string, value: number): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const ahsan: Admin = {
  dbId: 23,
  role: "admin",
  githubToken: "github",
  email: "ah@san.com",
  userId: 6,
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "Ahsan", off: 10) => {
    return off;
  },
};
ahsan.email = "san@ah.com";
export {};
