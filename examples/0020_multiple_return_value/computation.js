var computations = {
    average_and_percentage: function(data){
        var sum;
        var percentage;
        var average;

        sum = 0;
        sum = sum + data.bears;
        sum = sum + data.dogs;
        sum = sum + data.cats;

        average = sum / 3;
        percentage = ((sum / 3) / 5) * 100;


        return {
            'average': average,
            'percentage': percentage
        };
    }
};
