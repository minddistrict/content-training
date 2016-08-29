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

        var sum = calculate_sum(data);

        // We calculate the average in-line simply because it's a very simple
        // calculation.
        return {
            'sum': sum,
            'average': sum/3
        };
    }
};
