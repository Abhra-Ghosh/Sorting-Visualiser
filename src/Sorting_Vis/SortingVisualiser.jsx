import React, { Component } from "react";
import { getMergeSortAnimations } from "./getMergeSort";
import { getInsertionSortAnimations } from "./getInsertionSort";
import "./SortingVisualiser.css";
import { getBubbleSortAnimation } from "./getBubbleSort";
import { getSelectionSortAnimation } from "./getSelecttionSort";
//import { getInsertionSortAnimation } from "./getInsertionSort";

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 5;

// Change this value for the number of bars (value) in the array.
//const NUMBER_OF_ARRAY_BARS = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = "turquoise";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "black";

class SortingVisualiser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < 90; i++) {
      array.push(randomIntFromInterval(5, 600));
    }
    this.setState({ array });
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    console.log(animations);

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      //console.log(arrayBars);
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;

        const barTwoStyle = arrayBars[barTwoIdx].style;

        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
        //console.log(barTwoStyle);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  selectionSort() {
    const animations = getSelectionSortAnimation(this.state.array);
    const hash = [];
    var length = this.state.array.length - 1;
    var dlength = length * 2 + 2;
    var x = -1;
    var a = dlength;
    var b = dlength - 2;
    var c = a + b;

    for (let k = dlength - 4; k > 0; k = k - 2) {
      hash[k] = c;
      c = c + k;
    }
    //console.log(hash[4]);
    //console.log(dlength);

    console.log(animations);

    for (let i = 0; i < animations.length; i++) {
      x = x + 1;
      if (i < dlength || i < a + dlength) {
        // var b = dlength;
        var m = a;
        //var c = a+b;

        if (x === dlength) {
          dlength = dlength - 2;

          x = 0;
        }
      } else {
        if (x === dlength) {
          dlength = dlength - 2;

          x = 0;
        }

        for (let k = a - 4; k > 0; k = k - 2) {
          if (dlength === k) m = hash[k];
          //console.log(hash[k]);
          // console.log(m);
        }

        //var m =50;
      }

      console.log(i);
      console.log(m);
      console.log(dlength);
      // console.log(c);

      const arrayBars = document.getElementsByClassName("array-bar");
      var k = i % m;
      const isColorChange = k !== dlength - 2 && k !== dlength - 1;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;

        const barTwoStyle = arrayBars[barTwoIdx].style;

        const color = k % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
        //console.log(barTwoStyle);
        //console.log(animations[i]);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];

          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
          //console.log(animations[i]);
          //console.log(dlength);
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  insertionSort() {
    /* 
    const animations = getInsertionSortAnimations(this.state.array);
    console.log(animations);

    
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      //console.log(arrayBars);
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;

        const barTwoStyle = arrayBars[barTwoIdx].style;

        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
        //console.log(barTwoStyle);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    } */
    //this.disableSortButtons();

    const animations = getInsertionSortAnimations(this.state.array);
    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const colorChange =
        animations[i][0] === "comparison1" ||
        animations[i][0] === "comparison2";
      const arrayBars = document.getElementsByClassName("array-bar");

      if (colorChange === true) {
        const color =
          animations[i][0] === "comparison1" ? SECONDARY_COLOR : PRIMARY_COLOR;
        const [temp, barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        const [temp, barIdx, newHeight] = animations[i];
        const barStyle = arrayBars[barIdx].style;
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  bubbleSort() {
    const animations = getBubbleSortAnimation(this.state.array);

    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      //console.log("array-container");
      const isColorChange = i % 4 !== 3 && i % 4 !== 2;
      if (isColorChange) {
        console.log(animations[i]);
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;

        const barTwoStyle = arrayBars[barTwoIdx].style;

        const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
        //console.log(barTwoStyle);
      } else {
        setTimeout(() => {
          console.log(animations[i]);
          const [barOneIdx, newHeight1] = animations[i];
          //const [barTwoIdx, newHeight2] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          //const barTwoStyle = arrayBars[barTwoIdx].style;
          barOneStyle.height = `${newHeight1}px`;
          //barTwoStyle.height = `${newHeight2}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  render() {
    const { array } = this.state;
    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{ height: `${value}px` }}
          ></div>
        ))}
        <div>
          <button onClick={() => this.resetArray()}>Generate New Array</button>
          <button onClick={() => this.mergeSort()}>Merge Sort</button>
          <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
          <button onClick={() => this.insertionSort()}>Insertion Sort</button>
          <button onClick={() => this.selectionSort()}>Selection Sort</button>
        </div>
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/* function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) return false;
  }
  return true;
} */

export default SortingVisualiser;
