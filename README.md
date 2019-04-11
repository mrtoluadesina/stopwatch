# Simple Stopwatch

Learning OOP concepts, so I decided to build a stopwatch, Learnt using a Video by Mosh.

I attempted doing things differently than he did, but it is really similar, so I went ahead to write tests for the stopwatch. Used my understanding of TDD and added to my new knowledge of OOP.

To have a feel of the stopwatch, you create an instance of the constructor.


```
const sw = new Stopwatch();

sw.start(); // to start the stopwatch

sw.stop(); // to stop the stopwatch

sw.duration; // to know how long the stopwatch ran for

sw.reset // to reset the stopwatch back to initial


```

Jest is already installed in the package.json, all you need to do is ** npm install ** to get the dependencies.

## Extra

if you want to test your code, you will need to install jest in your package.json

```
npm init

npm install --save-dev jest

```

then go to the package.json file and add the below to scripts

```
"scripts": {
    "test": "jest --coverage" // --coverage is to show how much
  }

```