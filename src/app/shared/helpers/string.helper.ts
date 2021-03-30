export class StringHelper {
  static clean(text: string): string {
    if (text) {
      return text.trim().replace(/<\/?[^>]+(>|$)/g, '');
    } else {
      return text;
    }
  }

  static cutFromTo(text: string, from: string, to: string, withSearchText: boolean = true, position: number = 0): string {
    let indexFrom: number = text.indexOf(from, position);
    if (!withSearchText && indexFrom > 0) {
      indexFrom += from.length;
    }
    let indexTo: number = text.indexOf(to, position);
    if (withSearchText && indexTo > 0) {
      indexTo += to.length;
    }

    return text.substring(indexFrom, indexTo);
  }

  static lorem(count: number = 1, strBreak: string = ''): string {
    const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo purus, convallis at cursus sit amet, luctus congue orci.
        Ut suscipit tellus a lorem lobortis, a tempor elit congue. Suspendisse eget velit ligula. Donec venenatis in arcu in sodales. Sed tempor
        nisi vel massa rutrum pellentesque. Proin sem nulla, sagittis eu lacinia vel, volutpat vel elit. Donec in ipsum euismod, placerat enim vel,
        scelerisque sapien. Ut risus nunc, sagittis et euismod vitae, mollis quis dolor. Suspendisse leo tortor, gravida ac turpis id, laoreet fermentum eros.${strBreak}`;

    const ret: string = lorem;

    return ret.repeat(count);
  }
}
