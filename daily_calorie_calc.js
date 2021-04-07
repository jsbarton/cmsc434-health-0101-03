function calc_calories() {
    var weight //lbs; 
    var height //inches; 
    var age //years;
    var is_male; // = true or false
    var exercise_coefficient;

    //exercise val guide:
    //	little to no exercise: 1.2
    //	lightly active (light exercise/sports 1-3 days/week): 1.375
    //	moderately active (moderate exercise/sports 3-5 days/week): 1.55
    //	very active (hard exercise/sports 6-7 days a week): 1.725
    //	Extra active (very hard exercise/sports & physical job or 2x training): 1.9

    var bmr = 0;

    if (is_male) {
    	bmr = 66 + (6.3 * weight) + (12.9 * height) - (6.8 * age);
    } else {
    	bmr = 655 + (4.3 * weight) + (4.7 * height) - (4.7 * age);
    }

    return exercise_coefficient * bmr;
} 