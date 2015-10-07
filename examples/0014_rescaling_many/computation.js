var computations = {
    rescaled:function(data){
        var total;
        var to_rescale;
        var property;

        total = 0;

        to_rescale = [
            "q1",
            "q3",
            "q5",
            "q7",
            "q9",
            "q11",
            "q13",
            "q15",
            "q17"
        ];
        // To iterate over the properties of an object:
        // http://stackoverflow.com/a/16735184/61109
        for (property in data) {
            if (data.hasOwnProperty(property)) {
                // The property variable now contains the string "q1" for
                // example.
                // Do we need to rescale?
                // In other words: is the string "q1" in the to_rescale array?
                if (to_rescale.indexOf(property) > -1) {
                    // Add the rescaled value.
                    total = total + (6 - data[property]);
                } else {
                    // Add the regular value.
                    total = total + data[property];
                }
            }
        }
        return total;
    }
};
