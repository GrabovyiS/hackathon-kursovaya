const map = [[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,9,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,9,9,1,1,1,1,1,1,1,9,9,9,1,1,9,9,9,1,1,1,1,1,1,1,9,9,9,1,1,9,9,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,4,1,9,1,1,1,1,9,9,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,9,9,1,1,1,1,1,1,1,9,9,9,1,1,9,9,9,1,1,1,1,1,1,1,9,9,9,1,1,9,9,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,9,9,9],
[9,4,1,4,9,1,1,1,1,9,9,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,9,9,1,1,9,9,9,1,1,1,1,1,1,1,9,9,9,1,1,9,9,9,1,1,1,1,1,1,1,1,1,1,1,9,9,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,9,9,9,9],
[9,1,4,1,9,1,1,1,1,9,9,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,9,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,9,9,9,9],
[9,4,1,4,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,1,4,4,4,4,4,1,1,1,1,1,1,4,4,4,1,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,9,9,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,4,1,1,1,9],
[9,1,4,1,9,1,1,1,1,4,4,4,4,1,1,1,1,1,1,1,1,1,1,9,9,9,1,1,9,9,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,4,0,0,4,9],
[9,4,1,4,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,9,9,1,1,9,9,9,1,1,1,1,1,1,1,1,1,9,9,9,1,1,9,9,9,1,1,1,1,1,1,1,9,9,9,1,1,9,9,9,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,9,9,1,1,9,9,9,1,1,1,1,1,1,1,1,1,9,9,9,1,1,9,9,9,1,1,1,1,1,1,1,9,9,9,1,1,9,9,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,9,9,1,1,9,9,9,1,1,1,1,1,1,1,9,9,9,1,1,9,9,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,1,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,1,4,1,4,1,4,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,9,9,1,1,9,9,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,9,9,1,1,9,9,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,9,9,1,1,9,9,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,1,9,9,9,1,1,9,9,9,1,1,2,2,2,2,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9,9,9,1,1,9,9,9,1,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9,9,9,1,1,9,9,9,1,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,4,4,4,4,4,4,4,4,4,2,2,2,2,2,2,2,2,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,1,1,1,1,1,1,1,1,9,9,9,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,1,9,1,1,1,1,1,1,9,9,9,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,1,9,1,1,1,1,1,1,9,9,9,1,1,1,2,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,9,9,9,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,1,9,1,1,1,1,1,1,4,4,4,4,1,1,2,1,1,9,9,9,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,9,9,9,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,4,4,4,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,2,2,1,1,1,1,1,1,1,1,1,1,2,1,9],
[9,1,1,1,9,1,1,1,9,9,9,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,2,2,2,1,1,1,1,1,1,1,1,1,2,1,9],
[9,1,1,1,9,1,1,1,9,9,9,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,2,2,2,1,1,1,1,1,1,1,1,1,2,1,9],
[9,1,1,1,9,1,1,1,9,9,9,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,2,2,2,1,1,1,1,1,1,1,1,1,2,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,1,1,1,1,1,1,1,1,1,2,1,9],
[9,1,1,1,9,1,1,1,4,4,4,4,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,1,1,1,1,1,1,1,1,1,2,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,1,1,1,1,1,1,1,1,1,2,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,1,1,1,1,1,1,1,1,1,2,1,9],
[9,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,1,1,1,1,1,1,1,1,1,2,1,9],
[9,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,1,1,1,1,1,1,1,1,1,2,1,9],
[9,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,1,1,1,1,1,1,1,1,1,2,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,9,9,9,1,1,9,9,9,1,2,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,2,2,2,9,9,9,1,1,9,9,9,1,2,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,2,2,2,9,9,9,1,1,9,9,9,1,2,1,9],
[9,1,1,1,9,1,1,1,1,1,9,9,9,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,2,2,2,1,1,1,1,1,1,1,1,1,2,1,9],
[9,1,1,1,9,1,1,1,1,1,9,9,9,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,2,2,2,4,4,4,1,4,4,4,4,4,2,1,9],
[9,1,1,1,9,1,1,1,1,1,9,9,9,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,2,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9,9,9,1,1,9,9,9,1,2,1,9],
[9,1,1,1,9,1,1,1,1,1,4,4,4,4,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,9,9,9,1,1,9,9,9,1,2,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,9,9,9,1,1,9,9,9,1,2,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,2,2,1,1,1,1,1,1,1,1,1,1,2,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,2,2,1,4,1,4,1,4,1,4,1,4,2,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,2,2,1,1,1,1,1,1,1,1,1,1,2,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,2,2,1,9,9,9,1,1,9,9,9,1,2,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,2,2,1,9,9,9,1,1,9,9,9,1,2,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,2,2,1,9,9,9,1,1,9,9,9,1,2,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,2,2,1,1,1,1,1,1,1,1,1,1,2,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,2,2,4,4,4,4,4,4,4,4,4,4,4,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,9,9,0,0,0,0,0,0,0,0,0,1,2,2,1,9,9,9,1,1,9,9,9,1,1,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,9,9,9,0,0,0,0,0,0,0,0,0,1,2,2,1,9,9,9,1,1,9,9,9,1,1,1,9],
[9,1,1,1,9,1,1,1,9,9,9,1,1,1,1,1,2,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,9,9,9,0,0,0,0,0,0,0,0,0,1,2,2,1,9,9,9,1,1,9,9,9,1,1,1,9],
[9,1,1,1,9,1,1,4,9,9,9,1,1,1,1,1,2,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,4,1,1,1,0,0,0,0,0,0,0,0,0,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,1,9,1,1,4,9,9,9,1,1,1,1,1,2,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,4,4,4,4,0,0,0,0,0,0,0,0,0,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,1,9,1,1,4,1,1,1,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,1,9,1,1,4,4,4,4,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,2,9,9,9,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,9,9,9,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,2,9,9,9,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,9,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,9,9,9,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,1,9,1,1,1,1,1,1,4,9,9,9,1,2,2,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,9,9,1,9,1,1,1,1,1,1,4,9,9,9,1,2,2,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,9,9,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,9,9,1,9,1,1,1,1,1,1,4,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,9,9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,9,9,1,9,1,1,1,1,1,1,4,4,4,4,1,2,2,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,9,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,9,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,9,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,1,1,0,0,0,0,0,0,1,2,2,1,4,1,4,1,4,1,4,1,4,2,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,1,1,1,1,0,0,0,0,1,2,2,1,1,1,1,1,1,1,1,1,1,2,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,2,2,1,9,9,9,1,1,9,9,9,1,2,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,2,2,1,9,9,9,1,1,9,9,9,1,2,1,9],
[9,1,1,9,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,2,2,1,9,9,9,1,1,9,9,9,1,2,1,9],
[9,1,1,9,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,2,2,1,1,1,1,1,1,1,1,1,1,2,1,9],
[9,1,1,9,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,2,2,1,4,4,4,4,4,4,4,4,4,4,1,9],
[9,1,1,9,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,4,1,4,1,4,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,1,9,9,9,1,1,9,9,9,1,1,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,9,9,9,9,9,9,9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,1,9,9,9,1,1,9,9,9,1,1,1,9],
[9,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,9,9,9,9,9,9,9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,1,9,9,9,1,1,9,9,9,1,1,1,9],
[9,1,1,9,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,9,9,9,9,9,9,9,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,9,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,4,1,4,1,4,1,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,4,4,4,1,1,1,1,1,1,1,1,9],
[9,1,1,9,9,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,4,1,4,1,1,1,1,1,1,1,1,9],
[9,1,1,1,9,1,9,9,9,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,4,1,4,1,1,1,1,1,1,1,1,9],
[9,4,4,1,9,4,9,9,9,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,4,4,4,1,1,1,1,1,1,1,1,9],
[9,4,4,1,9,4,9,9,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,1,9,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,9,9,9,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,1,1,1,9,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,9,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]]


const html_map = document.getElementById('map');
const html_vector = document.getElementById('vector');
const html_radius = document.getElementById('radius');
const santa = document.createElement("div");
santa.className = "santa";
let clickableArea = [];

const RADIUS = {"9": -1, "0": 0, "1": 1, "2": 2, "4": 2, "3": 2}



santaX = 57;
santaY = 49;

let vector = [0, 0];
let radius;

let gifts = 0;
let points = 0;
let steps = 0;


function createBlock(item, y, x) {
    let div = document.createElement("button");
    div.setAttribute('data-x', x);
    div.setAttribute('data-y', y);
    // div.innerHTML = item;
    switch (item) {
        case 0:
            div.className = "cell ice";
            break;
        case 1:
            div.className = "cell snow";
            break;
        case 2:
            div.className = "cell road";
            break;
        case 3:
            div.className = "cell santa";
            div.appendChild(santa);
            break;
        case 4:
            div.className = "cell gift";
            break;
        case 9:
            div.className = "cell death";
    }
    return div;
}

for (let i in map) {
    let row = document.createElement("div");
    row.className = "row";
    for (let j in map) {
        let div = createBlock(map[i][j], i, j);
        row.appendChild(div);
    }
    html_map.appendChild(row);
}




radius = RADIUS[map[santaY][santaX]];
$('#santa')[0].innerHTML = `${santaX}, ${santaY}`;


html_radius.innerHTML = radius;
html_vector.innerHTML = vector;
$('#gifts')[0].innerHTML = gifts;
$('#points')[0].innerHTML = points;
$('#steps')[0].innerHTML = steps;


makeClickable();
gameHasStarted = true;

function moveSanta(x, y) {
    html_map.childNodes[y].childNodes[x].classList.add('santa');
    html_map.childNodes[santaY].childNodes[santaX].classList.remove('santa');
    santaX = x;
    santaY = y;
    steps++;
    $('#steps')[0].innerHTML = steps;
    $('#santa')[0].innerHTML = `${santaX}, ${santaY}`;
    if (map[y][x] === 4) {
        gifts++;
        $('#gifts')[0].innerHTML = gifts;
        $(html_map.childNodes[y].childNodes[x]).removeClass('gift');
        map[y][x] = 2;
        $(html_map.childNodes[y].childNodes[x]).addClass('road');
    }
    $('#points')[0].innerHTML = 3600 * (Math.pow(1.1, gifts)) / steps;
}

function makeClickable() {
    $(':button').prop('disabled', true); // Disable all the buttons
    const size = radius * 2 + 1;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let cell = html_map.childNodes[santaY - radius + vector[1] + i].childNodes[santaX - radius + vector[0] + j];
            if (cell && map[cell.getAttribute('data-y')][cell.getAttribute('data-x')] !== 9) {
                $(cell).addClass('clickable');
                $(cell)[0].removeAttribute('disabled');
            }
        }
    }
    if (!$('.clickable').length || steps>=3600) {
        $('#gameover').modal();
    }
}

function clearClickable() {
    $('.clickable').removeClass('clickable');
}

$('#gameover').on('hidden.bs.modal', function() {
    console.log('close');
});



function getMovements() {
    
}

let vectorArray = [];
function updateVectorArray(vector) {
    vectorArray.push(vector);
}


function scoreDependants() {
    if (points <= 10000000) {
        $('#submit').prop('disabled', true);
    } else {
        $('#submit').prop('disabled', false);
        $('#hidden-input').value = JSON.stringify(vectorArray);
    }
}

$('.cell').on('click', function() {
    let x = $(this).attr('data-x');
    let y = $(this).attr('data-y');
    updateVectorArray(vector);
    scoreDependants();
    vector[0] = x - santaX;
    vector[1] = y - santaY;
    html_vector.innerHTML = vector;
    clearClickable();
    moveSanta(x, y);
    radius = RADIUS[map[santaY][santaX]];
    html_radius.innerHTML = radius;
    makeClickable();
})

