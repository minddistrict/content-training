var computations = {
    greeting:function(data){
        if (data.language === 'en' && data.time_of_day === 'morning') {
            return "Good morning";
        } else if (data.language === 'en' && data.time_of_day === 'afternoon') {
            return "Good afternoon";
        } else if (data.language === 'en' && data.time_of_day === 'evening') {
            return "Evening guv'nor!";
        } else if (data.language === 'de' && data.time_of_day === 'morning') {
            return "Guten morgen";
        } else if (data.language === 'de' && data.time_of_day === 'afternoon') {
            return "Guten Tag";
        } else if (data.language === 'de' && data.time_of_day === 'evening') {
            return "Guten Abend";
        }
    }
};
