import { startOfWeek } from "date-fns";

function getMondayFromThree(date = new Date()) {
  // The third day of the month
  const thirdOfMonth = new Date(date.getFullYear(), date.getMonth(), 3);

  // Use startOfWeek to find the Monday before or on the third of the month
  const monday = startOfWeek(thirdOfMonth, { weekStartsOn: 1 }); // 1 means week starts on Monday

  return monday;
}

export const background_color = "#3E3649";

export const mondayFromThree = getMondayFromThree();

export const data = new Array(7).fill(null).map((_, weekIndex) => {
  return new Array(7).fill(null).map((_, dayIndex) => {
    const day = new Date(
      mondayFromThree.getTime() + 86400000 * (weekIndex * 7 + dayIndex)
    );
    const value = Math.random();

    return {
      day: day,
      value: value,
    };
  });
});
