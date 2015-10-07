var computations = {
    rescaled:function(data){
        var total;
        total = 0;


        var q2_rescaled; // will contain rescaled value
        q2_rescaled = 6 - data.q2;

        total = total + data.q1;
        total = total + q2_rescaled;
        total = total + data.q3;

        return total;
    }
};
