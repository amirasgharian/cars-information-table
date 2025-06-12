function fetchCarsData() {
  const cars = [
    { name: "آئودی", model: "A4", year: 2020, color: "سفید" },
    { name: "آئودی", model: "Q7", year: 2021, color: "مشکی" },
    { name: "بی ام و", model: "X5", year: 2019, color: "آبی" },
    { name: "بی ام و", model: "i8", year: 2018, color: "قرمز" },
    { name: "بی ام و", model: "M5", year: 2022, color: "مشکی" },
    { name: "بنز", model: "C200", year: 2022, color: "نقره‌ای" },
    { name: "بنز", model: "E300", year: 2021, color: "سفید" },
    { name: "پراید", model: "111", year: 2015, color: "سفید" },
    { name: "پراید", model: "131", year: 2016, color: "خاکستری" },
    { name: "سمند", model: "LX", year: 2018, color: "مشکی" },
    { name: "سمند", model: "EF7", year: 2019, color: "سفید" },
    { name: "تویوتا", model: "کرولا", year: 2020, color: "قرمز" },
    { name: "تویوتا", model: "کمری", year: 2019, color: "مشکی" },
    { name: "هیوندای", model: "سوناتا", year: 2021, color: "خاکستری" },
    { name: "هیوندای", model: "النترا", year: 2020, color: "آبی" },
    { name: "پژو", model: "206", year: 2017, color: "نقره‌ای" },
    { name: "پژو", model: "405", year: 2015, color: "سفید" },
    { name: "پژو", model: "پارس", year: 2018, color: "مشکی" },
    { name: "زانتیا", model: "2000", year: 2010, color: "مشکی" },
    { name: "میتسوبیشی", model: "ASX", year: 2021, color: "قرمز" },
    { name: "کیا", model: "سراتو", year: 2020, color: "آبی" },
    { name: "کیا", model: "اسپورتیج", year: 2021, color: "سفید" },
    { name: "چری", model: "تیگو 7", year: 2021, color: "نقره‌ای" },
    { name: "لیفان", model: "X60", year: 2017, color: "خاکستری" },
    { name: "ام وی ام", model: "X22", year: 2018, color: "مشکی" },
  ];

  globalCars = structuredClone(cars) ;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cars);
    }, 500);
  });
}
