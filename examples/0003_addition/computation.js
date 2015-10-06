var computations = {
    animal_liking:function(data){
        var total;
        total = 0;
        total = total + data.horses;
        total = total + data.cats;
        total = total + data.dogs;
        return total;
    }
};
