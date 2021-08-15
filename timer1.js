let args = process.argv.slice(2).map((x) => +x);

if (args.length === 0) {
  return;
}
for (const element of args) {
  if (element < 0 || typeof element !== "number") {
  } else {
    setTimeout(() => {
      // process.stdout.write("\x07");
      process.stdout.write(element + "*\n");
    }, element * 1000);
  }
}
