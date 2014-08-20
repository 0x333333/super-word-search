Super word search
=================

Search word in a grid in 8 directions, [http://en.wikipedia.org/wiki/Word_search](http://en.wikipedia.org/wiki/Word_search).

![pic](http://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wordsearch.svg/632px-Wordsearch.svg.png)

![pic](http://www.spacemonsters.co.uk/wp-content/uploads/2011/04/wp-sprite-directions.png)

## Run

This solution is implemented with [Node.js](http://nodejs.org/download/).

	node search test.txt

## Example

**Test 1**

	3 3
	ABC
	DEF
	GHI
	NO_WRAP
	6
	FE
	FED
	CAB
	GAD
	BID
	HIGH


**Output**

	(1,2) (1,1)
	(1,2) (1,0)
	NOT FOUND
	NOT FOUND
	NOT FOUND
	NOT FOUND


**Test 2**

	3 3 
	ABC 
	DEF 
	GHI 
	WRAP 
	9
	FED 
	CAB 
	GAD 
	BID 
	HFA
	HFD
	HIGH
	HIGHI
	HIGHIG


**Output**

	(1,2) (1,0)
	(0,2) (0,1)
	(2,0) (1,0)
	(0,1) (1,0)
	(2,1) (0,0)
	NOT FOUND
	NOT FOUND
	NOT FOUND
	NOT FOUND

## License

The MIT License (MIT)

Copyright (c) <2014> <Zhipeng Jiang>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.