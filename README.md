Super word search
=================

Search word in a grid in 8 directions, [http://en.wikipedia.org/wiki/Word_search](http://en.wikipedia.org/wiki/Word_search).

![pic](http://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wordsearch.svg/632px-Wordsearch.svg.png)

![pic](http://www.spacemonsters.co.uk/wp-content/uploads/2011/04/wp-sprite-directions.png)

## Test

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

