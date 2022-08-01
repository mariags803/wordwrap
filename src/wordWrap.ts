export class ColumnWidth{
    private constructor(private  readonly width: number) { }
    static create(width: number){
        if (width < 0){
            throw new Error('Negative column width not allowed');
        }
        return new ColumnWidth(width);
    }

    value(){
        return this.width;
    }
}

export class WrappableText{
    private constructor(private readonly text: string) { }
    static create(text: string){
        if(text === null || text === undefined){
            return new WrappableText("");
        }
        return new WrappableText(text);
    }

    wordWrap(columnWidth: ColumnWidth) {
        if (this.text.length <= columnWidth.value()) return WrappableText.create(this.text);
        const wrappedText = this.wrappedText(columnWidth);
        const unwrappedText = this.unwrappedText(columnWidth);
        return wrappedText.concat(unwrappedText.wordWrap(columnWidth));
    }

    private concat(text: WrappableText){
        return WrappableText.create(this.text.concat(text.text))
    }

    private wrappedText(columnWidth: ColumnWidth) {
        let wrapIndex = columnWidth.value();
        if(this.indexOfSpace() > -1 && this.indexOfSpace() < columnWidth.value()){
            wrapIndex =this.indexOfSpace();
        }
        return WrappableText.create(this.text.substring(0, wrapIndex).concat('\n'));
    }

    private unwrappedText(columnWidth: ColumnWidth) {
        let unwrapIndex = columnWidth.value();
        if(this.indexOfSpace() > -1 && this.text.indexOf(' ') < columnWidth.value()){
            unwrapIndex = this.indexOfSpace() + 1
        }
        return WrappableText.create(this.text.substring(unwrapIndex));
    }

    private indexOfSpace() {
        return this.text.indexOf(' ');
    }
}