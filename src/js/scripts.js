// TODO: Dig into require.js implementation for module loading.
// import * as buttonModule from './buttons.js';

(function ($, window, document, undefined) {
// Nasa API Key 'yhG4Rzeqh1mjBC5fyOBec2tCsKcDcqXSqLvY8f4F
  
  const solarSystemData = [
    // {
    //   'planet' : 'Mercury',
    //   'distanceFromSun' : 57.9, // 10(6)km's
    //   'lengthOfDay' : 87.96, // earth days
    //   'orbitalPeriod' : 1408.8, // earth hours
    //   'diameter' : 4878, // km's
    //   'numberOfMoons' : 0
    // },
    {
      'planet' : 'Mercury',
      'distanceFromSun' : {
        'title' : 'Distance From Sun',
        'data' : 57.9, // 10(6)km's
      },
      'lengthOfDay' : {
        'title' : 'Length of Day',
        'data' : 4222.6	, // earth hours
      },
      'orbitalPeriod' : {
        'title' : 'Orbital Period',
        'data' : 88.0, // earth days
      },
      'diameter' : {
        'title' : 'Diameter',
        'data' : 4879, // km's
      },
      'numberOfMoons' : {
        'title' : 'Number of Moons',
        'data' : 0
      }
    },
    {
      'planet' : 'Venus',
      'distanceFromSun' : {
        'title' : 'Distance From Sun',
        'data' : 108.2,
      },
      'lengthOfDay' : {
        'title' : 'Length of Day',
        'data' : 2802.0,
      },
      'orbitalPeriod' : {
        'title' : 'Orbital Period',
        'data' : 224.7, 
      },
      'diameter' : {
        'title' : 'Diameter',
        'data' : 12104,
      },
      'numberOfMoons' : {
        'title' : 'Number of Moons',
        'data' : 0
      }
    },
    {
      'planet' : 'Earth',
      'distanceFromSun' : {
        'title' : 'Distance From Sun',
        'data' : 149.6, 
      },
      'lengthOfDay' : {
        'title' : 'Length of Day',
        'data' : 24.00, 
      },
      'orbitalPeriod' : {
        'title' : 'Orbital Period',
        'data' : 365.2, 
      },
      'diameter' : {
        'title' : 'Diameter',
        'data' : 12756,
      },
      'numberOfMoons' : {
        'title' : 'Number of Moons',
        'data' : 1
      }
    },
    {
      'planet' : 'Mars',
      'distanceFromSun' : {
        'title' : 'Distance From Sun',
        'data' : 227.9, // 10(6)km's
      },
      'lengthOfDay' : {
        'title' : 'Length of Day',
        'data' : 24.7, // earth days
      },
      'orbitalPeriod' : {
        'title' : 'Orbital Period',
        'data' : 687.0,
      },
      'diameter' : {
        'title' : 'Diameter',
        'data' : 6792,
      },
      'numberOfMoons' : {
        'title' : 'Number of Moons',
        'data' : 2
      }
    },
    {
      'planet' : 'Jupiter',
      'distanceFromSun' : {
        'title' : 'Distance From Sun',
        'data' : 778.6,
      },
      'lengthOfDay' : {
        'title' : 'Length of Day',
        'data' : 9.9,
      },
      'orbitalPeriod' : {
        'title' : 'Orbital Period',
        'data' : 4331,
      },
      'diameter' : {
        'title' : 'Diameter',
        'data' : 142984,
      },
      'numberOfMoons' : {
        'title' : 'Number of Moons',
        'data' : 67
      }
    },
    {
      'planet' : 'Saturn',
      'distanceFromSun' : {
        'title' : 'Distance From Sun',
        'data' : 1433.5,
      },
      'lengthOfDay' : {
        'title' : 'Length of Day',
        'data' : 10.7,
      },
      'orbitalPeriod' : {
        'title' : 'Orbital Period',
        'data' : 10747,
      },
      'diameter' : {
        'title' : 'Diameter',
        'data' : 120536,
      },
      'numberOfMoons' : {
        'title' : 'Number of Moons',
        'data' : 0
      }
    },
    {
      'planet' : 'Uranus',
      'distanceFromSun' : {
        'title' : 'Distance From Sun',
        'data' : 2872.5,
      },
      'lengthOfDay' : {
        'title' : 'Length of Day',
        'data' : 17.2,
      },
      'orbitalPeriod' : {
        'title' : 'Orbital Period',
        'data' : 30589,
      },
      'diameter' : {
        'title' : 'Diameter',
        'data' : 51118,
      },
      'numberOfMoons' : {
        'title' : 'Number of Moons',
        'data' : 0
      }
    },
    {
      'planet' : 'Neptune',
      'distanceFromSun' : {
        'title' : 'Distance From Sun',
        'data' : 2872.5,
      },
      'lengthOfDay' : {
        'title' : 'Length of Day',
        'data' : 16.1,
      },
      'orbitalPeriod' : {
        'title' : 'Orbital Period',
        'data' : 59800,
      },
      'diameter' : {
        'title' : 'Diameter',
        'data' : 49528,
      },
      'numberOfMoons' : {
        'title' : 'Number of Moons',
        'data' : 0
      }
    }
  ]


  //////////////////////////////////////////////////////////////////////////////

  // DOM elements
  //
  const header = d3.select('header');
  const content = d3.select('.content');
  const footer = d3.select('footer');
  const chart = d3.select('#chart');

  // header
  const title = 'PLANETS';


  ///////////////////////////
  // Maximum number of ... //
  ///////////////////////////

  // distanceFromSun
  const distanceFromSun = solarSystemData.map((data) => {
    return data.distanceFromSun.data;
  })
  const maxDistanceFromSun = Math.max.apply(null, distanceFromSun);
  console.log(`Maximum number from [distanceFromSun]: ${ maxDistanceFromSun }`);

  // lengthOfDay
  const lengthOfDay = solarSystemData.map((data) => {
    return data.lengthOfDay.data;
  })
  const maxLengthOfDay = Math.max.apply(null, lengthOfDay);
  console.log(`Maximum number from [lengthOfDay]: ${ maxLengthOfDay }`);

  // orbitalPeriod
  const orbitalPeriod = solarSystemData.map((data) => {
    return data.orbitalPeriod.data;
  })
  const maxOrbitalPeriod = Math.max.apply(null, orbitalPeriod);
  console.log(`Maximum number from [orbitalPeriod]: ${ maxOrbitalPeriod }`);

  // diameter
  const diameter = solarSystemData.map((data) => {
    return data.diameter.data;
  })
  const maxDiameter = Math.max.apply(null, diameter);
  console.log(`Maximum number from [diameter]: ${ maxDiameter }`);

  // numberOfMoons
  const numberOfMoons = solarSystemData.map((data) => {
    return data.numberOfMoons.data;
  })
  const maxNumberOfMoons = Math.max.apply(null, numberOfMoons);
  console.log(`Maximum number from [numberOfMoons]: ${ maxNumberOfMoons }`);



  ///////////
  // chart //
  ///////////

  const width = 1200;
  const height = 300;
  // var x = 0;

  // function maxData() {
  //   if (this == 'distanceFromSun')
  //   {
  //     x = maxDistanceFromSun;
  //     console.log(x);
  //   }
  //   if (this =='lengthOfDay')
  //   {
  //     x = maxLengthOfDay;
  //     console.log(x);
  //   }
  //   if (this == 'orbitalPeriod')
  //   {
  //     x = maxOrbitalPeriod;
  //     console.log(x);
  //   }
  //   if (this == 'diameter')
  //   {
  //     x = maxDiameter;
  //     console.log(x);
  //   }
  //   if (this == 'numberOfMoons')
  //   {
  //     x = maxNumberOfMoons;
  //     console.log(x);
  //   }
  //   return x
  // }



  const xScale = d3
    .scaleLinear()
    .domain([0, width])
    .range([0,  width])
    .clamp(true);

  const yScale = d3
    .scaleBand()
    .domain(solarSystemData.map(function(d) {
      // console.log('d', d.planet);
      return d.planet;
    }))
    .range([0, height]);


  // axis
  const svg = chart.append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('position', 'absolute')
    .style('top', 0);
    
    svg.append('g').call(d3.axisBottom(xScale));
    svg.append('g').call(d3.axisLeft(yScale));

  // Function that swaps data
  function render(subject) { 

    console.log('hit');
    const bars = d3.select('#chart')
      .selectAll('li')
      .data(solarSystemData, function(d) {
        return d.planet
      })

      bars.enter()
        .append('li')
          .attr('class', 'bar')
          .style('width', 0)
          .style('height', function(d) {
            return yScale.bandwidth() + 'px';
          })

        .merge(bars)
          .transition()
          .style('width', (d) => {
            // var maxNumber = d[subject].data;
            // console.log(typeof maxNumber);

            // maxNumber.map((item) => {
            //   console.log(item);
            // });
            // maxNumber.map((item) => {
            //   var returnMax = Math.max.apply(null, item);
            //   console.log(returnMax);
            // });
            // var returnMax = Math.max.apply(null, maxNumber)
            // console.log(returnMax);

            // return x + 'px';

            // if (subject == 'distanceFromSun')
            // {
            //   d = maxDistanceFromSun;
            //   console.log(d);
            // }
            // if (subject =='lengthOfDay')
            // {
            //   d = maxLengthOfDay;
            //   console.log(d);
            // }
            // if (subject == 'orbitalPeriod')
            // {
            //   d = maxOrbitalPeriod;
            //   console.log(d);
            // }
            // if (subject == 'diameter')
            // {
            //   d = maxDiameter;
            //   console.log(x);
            // }
            // if (subject == 'numberOfMoons')
            // {
            //   d = maxNumberOfMoons;
            //   console.log(x);
            // }


            return xScale(d[subject].data) + 'px';
          })
      
          .text((d) => {
            const display = `Planet: ${d.planet} : ${d[subject].data}`;
            return display;
          });
  }

  render('numberOfMoons', maxNumberOfMoons);
      
  // app layout
  header.html(`<h1 class='title'>${title}</h1>`);
  content;
  footer.append('nav').attr('class', 'navigation');



  // // Buttons -- TODO: Turn into common function
  footer
    .select('nav')
    .append('button')
    .attr('class', 'btn')
    .text('Distance From Sun')
    .on('click', function() { render('distanceFromSun') });

  footer
    .select('nav')
    .append('button')
    .attr('class', 'btn')
    .text('Length of Day')
    .on('click', function() { render('lengthOfDay') });

  footer
    .select('nav')
    .append('button')
    .attr('class', 'btn')
    .text('Orbital Period')
    .on('click', function() { render('orbitalPeriod') });

  footer
    .select('nav')
    .append('button')
    .attr('class', 'btn')
    .text('Diameter')
    .on('click', function() { render('diameter') });

  footer
    .select('nav')
    .append('button')
    .attr('class', 'btn')
    .text('Number of Moons')
    .on('click', function() { render('numberOfMoons') });


})(jQuery, window, document);