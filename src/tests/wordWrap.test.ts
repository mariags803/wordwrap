import { ColumnWidth, WrappableText} from "../wordWrap";

describe('The Word Wrap', () => {
    it('does not allow a negative column width', () => {
        expect(() => WrappableText.create('hello').wordWrap(ColumnWidth.create(-5))).toThrow('Negative column width not allowed');
    });
    it('does not need to wrap an empty text', () => {
        expect(WrappableText.create('').wordWrap(ColumnWidth.create(5))).toEqual({ text: '' });
        expect(WrappableText.create(null).wordWrap(ColumnWidth.create(5))).toEqual({ text: '' });
        expect(WrappableText.create(undefined).wordWrap(ColumnWidth.create(5))).toEqual({ text: '' });
    });
    it('does not need to wrap words smaller than the column width', () => {
        expect(WrappableText.create('hello').wordWrap(ColumnWidth.create(5))).toEqual({ text: 'hello' });
    });
    it('wraps the words when they exceed the column width', () => {
        expect(WrappableText.create('helloworld').wordWrap(ColumnWidth.create(5))).toEqual({ text: 'hello\nworld' });
        expect(WrappableText.create('helloworld!').wordWrap(ColumnWidth.create(5))).toEqual({ text: 'hello\nworld\n!' });
    });
    it('wraps the text when it finds a space before exceeding the column width', () => {
        expect(WrappableText.create('hello world!').wordWrap(ColumnWidth.create(6))).toEqual({ text: 'hello\nworld!' });
        expect(WrappableText.create(' world!').wordWrap(ColumnWidth.create(5))).toEqual({ text: '\nworld\n!' });
    });
});