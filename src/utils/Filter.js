import * as fili from "fili";

let instance;

class Filter {
  constructor() {
    if (instance) {
      throw new Error("New instance cannot be created!");
    }

    const iirCalculator = new fili.CalcCascades();
    const iirFilterCoeffs = iirCalculator.highpass({
      order: 2,
      characteristic: "butterworth",
      Fs: Math.round(1 / 0.005),
      Fc: 1,
    });

    this.iirFilter = new fili.IirFilter(iirFilterCoeffs);

    instance = this;
  }
}

export const filterInstance = Object.freeze(new Filter());
