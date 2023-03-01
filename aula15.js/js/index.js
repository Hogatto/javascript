function recursiva(max) {
    if (max >= 10) return
    max += 1;
    console.log(max)
    recursiva(max)
}

recursiva(0)