var computations = {

    total: function(data) {
        var total = 0;
        total += data.q1;
        total += data.q2.q1;
        total += data.q3;
        total += data.q4;
        total += data.q5.q1;
        total += data.q5.q2;
        return total;
    }

};
