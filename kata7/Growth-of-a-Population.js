//My Solution
function nbYear(p0, percent, aug, p) {
    let years = 0, population = p0;
    while(population < p){
      population += (population * (percent/100)) + aug;
      years++;
    }
    return years;
}

