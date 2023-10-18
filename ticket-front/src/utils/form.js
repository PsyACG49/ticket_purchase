export const manageDataLocations = (data) => {
  console.log(data);
  let newLocationsArray = data.reduce((acc, item) => {
    let dates = [];
    data.forEach((element) => {
      if (item.location === element.location) {
        dates.push({
          date: element.date,
          price: element.price,
          address: element.address,
          schedule: element.schedule,
          active: element.active,
        });
      }
    });
    acc.push({
      location: item.location,
      info: dates,
    });
    return acc;
  }, []);

  let hash = {};

  let fil = newLocationsArray.filter(function (current) {
    let exists = !hash[current.location];
    hash[current.location] = true;
    return exists;
  });

  console.log(fil);

  return fil;
};
