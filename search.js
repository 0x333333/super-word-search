#!/usr/bin/env node
/*jshint node:true*/
'use strict';
var fs = require('fs');

///////////////////////////////////////////////////////
//                   Configuration                   //
///////////////////////////////////////////////////////
var RED    = '\x1B[31m', 
    CLEAR  = '\x1B[m';

var N      = 0,
    M      = 0,
    Matrix = [],
    Mode   = '',
    P      = 0,
    List   = [],
    Data   = {};

// Eight directions
var Directions = [[0,1], [1,1],  [1,0], [1,-1],
                  [0,-1],[-1,-1],[-1,0],[-1,1]];

// Check command format
if (process.argv.length !== 3) {
  process.stdout.write(RED + 'Format Error: command is not complete' + CLEAR + '\n');
  process.stdout.write(RED + 'Example: node search.js input.txt' + CLEAR + '\n');
  return;
}

var pathToFile        = process.argv[2],
    bufferString      = null,
    bufferStringSplit = null;


///////////////////////////////////////////////////////
//                        Main                       //
///////////////////////////////////////////////////////
readFile(main);


///////////////////////////////////////////////////////
//                       Tools                       //
///////////////////////////////////////////////////////


//////////////////// Check possible direction for each node ////////////////////
function checkDirection(length) {
  Object.keys(Data).forEach(function(key) {
    if (M - Data[key].y < length) {
      Data[key].direction[0] = false;
      Data[key].direction[1] = false;
      Data[key].direction[7] = false;
    }
    if (N - Data[key].x < length) {
      Data[key].direction[1] = false;
      Data[key].direction[2] = false;
      Data[key].direction[3] = false;
    }
    if (Data[key].y + 1 < length) {
      Data[key].direction[3] = false;
      Data[key].direction[4] = false;
      Data[key].direction[5] = false;
    }
    if (Data[key].x + 1 < length) {
      Data[key].direction[5] = false;
      Data[key].direction[6] = false;
      Data[key].direction[7] = false;
    }
  });
}

//////////////////// Check correctness by given path ////////////////////
function search() {
  List.forEach(function(str) {
    // Calculate all possible directions for each node, if mode is NO_WRAP
    if (Mode === 'NO_WRAP') { checkDirection(str.length); }

    var start = {
      key: str[0],
      x: Data[str[0]].x,
      y: Data[str[0]].y
    };
    var end = {
      key: str[0],
      x: Data[str[0]].x,
      y: Data[str[0]].y
    };

    // Get all possible directions for the first point
    var directions = Data[str[0]].direction;
    // Check each direction, goon determines if continue or not
    var goon = true;

    // Check all directions
    for (var i = 0; i < directions.length && goon; i ++) {
      if (directions[i]) {
        // In given direction, check if character fall in the same line
        for (var j = 1; j < str.length; j ++) {

          // Get next possible position
          var x = end.x + Directions[i][0],
              y = end.y + Directions[i][1];

          // If in WRAP mode, change boder position
          if (Mode === 'WRAP') {
            x = (x < 0) ? (N+x) : x;
            y = (y < 0) ? (M+y) : y;
            x = (x === N) ? (N-x) : x;
            y = (y === M) ? (M-y) : y;
          }

          // If find the same character
          if (str[j] === Matrix[x][y]) {
            end.key = str[j];
            end.x = x;
            end.y = y;
          } else {
            // Else, set end'key as the start's key to discard current direction
            end.key = start.key;
            break;
          }

          // Check loop existance
          if (str[j] === start.key) { goon = false; break;}
          
          // If path is found, no need to query rest directions
          if (j === str.length-1) { goon = false; }
        }
      }
    }
    
    if (start.key === end.key) { 
      console.log('NOT FOUND'); 
    } else {
      console.log('(' + start.x + ',' + start.y + ')', '(' + end.x + ',' + end.y + ')');
    }
  });
}

//////////////////// Read file ////////////////////
function readFile(callback) {
  fs.readFile(pathToFile, function (err, data) {
    if (!err) {
      bufferString = data.toString(); 
      bufferStringSplit = bufferString.split('\n'); 
      callback(search);
    } else  { 
      console.error(err); 
    }
  });
}

//////////////////// Analyse data ////////////////////
function main(callback) {
  // console.log(bufferStringSplit);
  try {
    // Get matrix size
    var size = bufferStringSplit[0].trim().split(' ');
    N = parseInt(size[0]);
    M = parseInt(size[1]);

    // Get matrix
    var i = 0;
    for (; i < N; i ++) {
      Matrix.push(bufferStringSplit[i+1].trim().split(''));
    }

    // Get mode
    Mode = bufferStringSplit[++i].trim();

    // Get test case amount
    P = parseInt(bufferStringSplit[++i].trim());

    // Get all test cases
    for (i++; i < (P+N+3); i ++) {
      List.push(bufferStringSplit[i].trim());
    }

    // Construct node object
    for (var n = 0; n < N; n ++) {
      for (var m = 0; m < M; m++) {
        Data[Matrix[n][m]] = {
          x: n,
          y: m,
          direction: [true, true, true, true, true, true, true, true]
        };
      }
    }

    // Call search function
    callback();
  } catch(e) {
    process.stdout.write(RED + 'Input Error: Can not load input file' + CLEAR + '\n');
    console.error(e);
  }
}