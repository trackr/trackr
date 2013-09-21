App.DataWrapper.TaskEntries = function(json_data) {
  data = [];
  for(var i = 0; i < json_data.length; i++) {
    data.push({ 
      value: json_data[i].duration_in_min,
      color: json_data[i].color
    });
  }
  return data;
};
