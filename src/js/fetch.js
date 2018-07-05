const Fetch = () => {


  const natGasData = 'https://data.cityofnewyork.us/api/views/uedp-fegm/rows.json?accessType=DOWNLOAD';

    fetch(natGasData).then(function(response) {
        return response.json();
      }).then(function(json) {
        console.log(json.meta.view);

        // Meta Data
        var metaData = json.meta.view;


        // D3 examples

        // Pie Chart
        const pieChart = d3.select('#app').append('div').attr('class', 'pieChart');


        

        // // Add Title
        pieChart.html(`<h1>${ metaData.name }</h1>`);

        pieChart
          .select('h1')
          .data(json)
          .enter().append('span')
            .text(function(d) { return "I'm number " + d + '!'});
      });

    }
    export default Fetch;