var computations = {
    animal_liking_average: function(data) {
        var average;
        average = (0 + data.horses + data.cats + data.dogs) / 3;
        return average;
    },
    depression_total: function (data) {
        var total;
        total = 0;
        total += data.Depression.q1;
        total += data.Depression.q2;
        total += data.Depression.q3;
        return total;
    }
};
