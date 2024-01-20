const getWorkTime = (previousDate: Date) => {
  const currentDate = new Date().getTime();

  const timeDifferenceMilliseconds = currentDate - previousDate.getTime();

  const millisecondsInOneYear = 365.25 * 24 * 60 * 60 * 1000;
  const differenceYears = timeDifferenceMilliseconds / millisecondsInOneYear;

  return Math.floor(differenceYears);
};

export default getWorkTime;
