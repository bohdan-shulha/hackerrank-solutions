function compareTriplets(a, b) {
    let aliceScore = 0;
    let bobScore = 0;

    for (let i = 0; i < a.length; i++) {
        const alice = a[i];
        const bob = b[i];

        if (alice > bob) {
            aliceScore += 1;
        } else if (alice < bob) {
            bobScore += 1;
        }
    }

    return [aliceScore, bobScore];
}
