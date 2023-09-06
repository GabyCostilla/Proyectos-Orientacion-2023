const ConteoRegresivo = (a) => {
    if (a < 0) {
    return true
    }
    console.log(a)
    return ConteoRegresivo(a - 1)
}

ConteoRegresivo(10)