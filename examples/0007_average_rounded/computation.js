var computations = {
    animal_liking_average:function(data){
        var total;
        var average;

        total = 0;
        total += data.horses;
        total += data.cats;
        total += data.dogs;

        average = total / 3;
        average = average.toFixed(1);
        return average;
    }
};
