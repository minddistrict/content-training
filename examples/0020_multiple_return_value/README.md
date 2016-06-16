# Computation with multiple return values

Normally a computation calculates/computes one thing (a numerical or boolean
value) and returns that. Sometimes it can be handy to have a computation
return multiple values. One reason for this may be that you're doing some
calculation on a series of answers and you want to use whatever comes out of
this calculation multiple times.

## Example

We have three questions, with numerical values 0 to 5. We want to calculate the
average and the percentage score for these questions. To get to the average
and the percentage we'd need to get the sum first. We could calculate the sum
separately in two computations but we can also make the computation return two
values.

## How to

To return multiple values you want to return a JavaScript "object", which is a
"key/value" map. Or to say it more simply: it's a collection of values and
each value has a descriptive name. It can be something as simple as this:

    {
        'average': 12,
        'percentage': 80
    }

But it can also be more complicated like so:

    {
        'average': 12,
        'average_threshold_reached': true,
        'percentage': 80,
        'percentage_depression': 65,
        'addiction_tendency_scale': 4
    }

To use the value of an object use the following notation in a value-of or
conditional content:

    computation:result.average

In this line "result" is the (function) name of the computation and "average"
is the "key" pointing to the value 12.

## Computation result

If you fill out the questions, press "display" and navigate to the computation
you will see something like the following as the result of the computation.

    {
        "average_and_percentage": {
            "average": 2.6666666666666665,
            "percentage": 53.333333333333336
        }
    }


See the computation attached for a running example.
