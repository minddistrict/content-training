var computations = {
    depression:function(data){
        if (data.ill) {
            return false;
        }
        if (data.hallucination) {
            return false;
        }
        if (
            data.depressed_most_of_the_day &&
            data.depressed_every_day &&
            (
                data.depressed_self_observation ||
                data.depressed_others_observation
            ) &&
            data.less_pleasure &&
            data.less_pleasure_most_of_the_day &&
            data.less_pleasure_every_day
        ){
            return true;
        } else {
            return false;
        }
    }
};
