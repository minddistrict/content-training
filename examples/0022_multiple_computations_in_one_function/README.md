# Function that does multiple computations

Example 0020 already introduces this concept, please read and understand that
first.

It can happen that you have two computations where you need the same
intermediate value. Included is an example of how to do this that's not so
nice, because you need to repeat code (which introduces more opportunities for
bugs) and the better way to do this.

We have a field with 5 questions. We want to calculate the average and the
total. In the not-nice example we write two functions, if you look at these
functions a big part of them are duplicated. In the nicer example we don't
duplicate this effort.

# notnice.js
If you count correctly we have 4 lines duplicated in the `average` and in the
`sum` function. But this is for a field with only 3 questions. If you have 30
questions and you need this intermediate value 4 times you'll already have 31
lines duplicated 3 times! And if you have to change one, you have to remember
to change all of them, it's very easy to make mistakes then and hard to find
them.


# nice.js
What we do is create two functions inside of the surrounding `average_and_sum`
function. You don't *need* to do this but it can help to separate out
different calculations. This example is very simple and I wouldn't actually
recommend using functions in this case, I would just calculate the two values
and return them. But if you're doing complicated calculations definitely "draw
some lines" around that code and stick a name on it by putting it in a
function.

# nice_and_short.js
I've specifically made `nice.js` quite verbose (use more code than strictly
necessary) to make the example as clear as possible. This `nice_and_short.js`
may be a little harder to read for novice programmers, but it is shorter and
shorter code on average contains fewer bugs.
