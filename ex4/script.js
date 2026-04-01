let n = 4;

for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
}

for (let i = 0; i < 3; i++) {
    console.log(" ".repeat(n - 1) + "*");
}