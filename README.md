# Code kata: Word Wrap


## Description

This function receives a text and a column width and returns the same text with 
line breaks every time the number of characters exceeds the column width. If before
reaching the column width the function finds a space, it will separate the words by the space.

__Example__

``` js
text = '', columnWidth = 5 // => ''
text = 'hello', columnWidth = 5 // => 'hello'
text = 'helloworld', columnWidth = 5 // => 'hello\nworld'
text = 'helloworld!', columnWidth = 5 // => 'hello\nworld\n!'
text = 'hello world!', columnWidth = 6 // => 'hello\nworld!'
```

## Run project

__Install__

    npm install

__Run test__

    npm test
