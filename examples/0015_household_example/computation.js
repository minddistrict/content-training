var computations = {
    people_under_16: function(data) {
        if (data.num_people === 1) {
            if (data.age < 16) {
                return 1;
            } else {
                return 0;
            }
        } else {
            return data.under_16;
        }
    },
    people_over_16: function(data) {
        if (data.num_people === 1) {
            if (data.age >= 16) {
                return 1;
            } else {
                return 0;
            }
        } else {
            return data.over_16;
        }
    }
};
