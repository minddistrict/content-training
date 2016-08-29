var computations = {
    average: function (data) {
        var average;
        var sum = 0;

        sum = sum + data.bears;
        sum = sum + data.dogs;
        sum = sum + data.cats;

        average = sum / 3;
        return average;
    },
    sum: function(data){

        var sum = 0;

        sum = sum + data.bears;
        sum = sum + data.dogs;
        sum = sum + data.cats;

        return sum;
    }
};
