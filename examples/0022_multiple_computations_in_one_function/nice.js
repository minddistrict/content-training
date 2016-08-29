var computations = {
    average_and_sum: function(data){
        // First we write a function inside this computation function
        function calculate_sum(data) {
            var sum = 0;
            sum = sum + data.bears;
            sum = sum + data.dogs;
            sum = sum + data.cats;
            return sum;
        }

        // Then we write a function that calculates the average.
        function calculate_average(sum, number_of_questions) {
            return sum/number_of_questions;
        }

        // So now inside of this function average_and_sum we only _defined_
        // two functions, we didn't actually calculate anything yet, that's
        // what we'll do now.
        var sum;
        var average;

        sum = calculate_sum(data);
        // By this point we have a variable sum that contains the sum. We can
        // pass this sum to the calculate_average function and later on we can
        // also return it.
        average = calculate_average(sum, 3);

        return {
            'sum': sum,
            'average': average
        };
    }
};
