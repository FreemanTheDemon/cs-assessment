extra large

insert 1141.4019 ms
append 3.4259 ms

large

insert 9.8739 ms
append 0.6692 ms

medium

insert 0.1801 ms
append 0.1427 ms

small

insert 0.0472 ms
append 0.1076 ms

tiny

insert 0.0368 ms
append 0.0934 ms

all time is in milliseconds
___________________________________________
    |      insert      |      append      |
----|------------------|------------------|
XL  |   1141.4019      |    3.4259        |
----|------------------|------------------|
LR  |   9.8739         |    0.6692        |
----|------------------|------------------|
MD  |   0.1801         |    0.1427        |
----|------------------|------------------|
SM  |   0.0472         |    0.1076        |
----|------------------|------------------|
TI  |   0.0368         |    0.0934        |
===========================================


The insert function scales exponentially, for as the size of the array increases, leaps and bounds are made in how long it takes to calculate as opposed to the append function, which is linear. This makes the append function far better when scaling to larger arrays.

The primary reason why the insert function is slow is because it uses unshift as opposed to push. Unshift itself acts as another loop, for in order to put a value at the beginning of an array, the rest of the values must also be shifted over by one value to make room for this insert.