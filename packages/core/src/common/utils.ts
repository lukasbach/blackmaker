import Color from "color";

export const switchEnum = <Type, Return>(e: Type, possibilities: Array<[Type, Return]>, defaultValue?: Return): Return => {
  for (let p of possibilities) {
    if (e === p[0]) {
      return p[1];
    }
  }

  if (defaultValue) {
    return defaultValue;
  }

  throw Error(`Value ${e} not specified, specified are: ${possibilities.map(p => p[0]).join(', ')}.`);
};

export const lighten = (color: string, percent: number) => new Color(color).lighten(percent).toString();
export const darken = (color: string, percent: number) => new Color(color).darken(percent).toString();
