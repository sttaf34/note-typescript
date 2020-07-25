{
  const factorial = (aNumber: number): number => {
    if (aNumber === 0) {
      return 1
    }
    return aNumber * factorial(aNumber - 1)
  }

  console.log(factorial(3))
}
