var computations = {
    rescaled:function(data){
        var total;
        total = 0;

        var q2_rescaled; // will contain rescaled value
        if (data.q2 === 1) {
            q2_rescaled = 5;
        } else if (data.q2 === 2) {
            q2_rescaled = 4;
        } else if (data.q2 === 3) {
            q2_rescaled = 3;
        } else if (data.q2 === 4) {
            q2_rescaled = 2;
        } else if (data.q2 === 5) {
            q2_rescaled = 1;
        }

        total = total + data.q1;
        total = total + q2_rescaled;
        total = total + data.q3;

        return total;
    }
};
