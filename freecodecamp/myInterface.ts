interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrail: () => string;
  startTrail(): string;
  getCoupon(couponname: string, value: number): number;
}

const ahsan: User = {
  dbId: 23,
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
