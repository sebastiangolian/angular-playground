export class StringHelper {
    static clean(text: string): string {
        if (text) {
            return text.trim().replace(/<\/?[^>]+(>|$)/g, "");
        } else {
            return text
        }
    }

    static cutFromTo(text: string, from: string, to: string, withSearchText: boolean = true, position: number = 0) {
        let indexFrom: number = text.indexOf(from, position)
        if (!withSearchText && indexFrom > 0) indexFrom += from.length
        let indexTo: number = text.indexOf(to, position)
        if (withSearchText && indexTo > 0) indexTo += to.length

        return text.substring(indexFrom, indexTo)
    }
}