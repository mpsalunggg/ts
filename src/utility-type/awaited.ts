const promise: Promise<number> = new Promise((res, _rej) => {
  setTimeout(() => {
    res(1);
  }, 1000);
});

type AwaitedType = Awaited<typeof promise>;

// Example 2
async function getValue() {
  return 42;
}

type Result = Awaited<ReturnType<typeof getValue>>;