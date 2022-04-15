var width = 800
var height = 510

var axioY = 500
var axioX = 600

var dataCircle
d3.json("data.json").then(function (data) {
    readFile(data)
});

var circleAttributes = [
    {
        x: axioX - 5,
        y: axioY,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 10,
        y: axioY - 30,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 20,
        y: axioY - 60,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 35,
        y: axioY - 85,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 50,
        y: axioY - 110,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 80,
        y: axioY - 135,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 110,
        y: axioY - 150,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 150,
        y: axioY - 150,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 188,
        y: axioY - 135,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 210,
        y: axioY - 110,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 225,
        y: axioY - 85,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 235,
        y: axioY - 60,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 245,
        y: axioY - 30,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 250,
        y: axioY,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 290,
        y: axioY - 10,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 280,
        y: axioY - 50,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 270,
        y: axioY - 80,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 255,
        y: axioY - 110,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 235,
        y: axioY - 140,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 205,
        y: axioY - 170,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 155,
        y: axioY - 180,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 105,
        y: axioY - 175,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 60,
        y: axioY - 160,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 25,
        y: axioY - 130,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 5,
        y: axioY - 100,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX + 10,
        y: axioY - 70,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX + 25,
        y: axioY - 40,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX + 35,
        y: axioY - 5,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX + 75,
        y: axioY - 10,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX + 60,
        y: axioY - 50,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX + 45,
        y: axioY - 85,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX + 30,
        y: axioY - 120,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX,
        y: axioY - 155,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 35,
        y: axioY - 185,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 100,
        y: axioY - 205,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 165,
        y: axioY - 210,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 220,
        y: axioY - 200,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 260,
        y: axioY - 175,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 290,
        y: axioY - 140,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 310,
        y: axioY - 100,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 325,
        y: axioY - 60,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 335,
        y: axioY - 20,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 375,
        y: axioY - 35,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 360,
        y: axioY - 75,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 345,
        y: axioY - 115,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 320,
        y: axioY - 160,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 280,
        y: axioY - 200,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 235,
        y: axioY - 230,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 170,
        y: axioY - 240,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 95,
        y: axioY - 240,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 10,
        y: axioY - 220,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX + 30,
        y: axioY - 180,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX + 60,
        y: axioY - 140,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX + 80,
        y: axioY - 100,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX + 100,
        y: axioY - 60,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX + 120,
        y: axioY - 20,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX + 150,
        y: axioY - 30,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX + 130,
        y: axioY - 80,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX + 110,
        y: axioY - 125,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX + 90,
        y: axioY - 160,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX + 60,
        y: axioY - 200,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX + 20,
        y: axioY - 250,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 90,
        y: axioY - 280,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 180,
        y: axioY - 280,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 255,
        y: axioY - 260,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 310,
        y: axioY - 230,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 345,
        y: axioY - 190,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 375,
        y: axioY - 140,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 400,
        y: axioY - 100,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 420,
        y: axioY - 60,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 460,
        y: axioY - 80,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 440,
        y: axioY - 120,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 420,
        y: axioY - 160,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 380,
        y: axioY - 220,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 340,
        y: axioY - 260,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 280,
        y: axioY - 300,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 190,
        y: axioY - 320,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX - 80,
        y: axioY - 320,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX + 50,
        y: axioY - 290,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX + 100,
        y: axioY - 230,
        r: 20,
        color: 'gray'
    },
    {
        x: axioX + 130,
        y: axioY - 180,
        r: 20,
        color: 'gray'
    }

]


colorsByPolitical = [
    {
        name: "PDT",
        color: "#ff0000"
    },
    {
        name: "PT",
        color: "#cc0000"
    },
    {
        name: "PSDB",
        color: "#0080ff"
    },
    {
        name: "PDB",
        color: "color"
    },
    {
        name: "MDB",
        color: "#30914d"
    },
    {
        name: "PODEMOS",
        color: "#2da933"
    },
    {
        name: "CIDADANIA",
        color: "#ec008c"
    },
    {
        name: "PSL",
        color: "#0f0073"
    },
    {
        name: "PROS",
        color: "#ff5460"
    },
    {
        name: "PP",
        color: "#7dc9ff"
    },
    {
        name: "PSD",
        color: "#ffa500"
    },
    {
        name: "DEM",
        color: "#02233D"
    },
    {
        name: "REDE",
        color: "#379e8d"
    },
    {
        name: "REPUBLICANOS",
        color: "#005daa"
    },
    {
        name: "PL",
        color: "#0f0073"
    }
]
function readFile(data) {
    var i = 0;
    var arrayData = []
    data.forEach(element => {
        if (element.CodigoParlamentar != "" && !arrayData.find(el => el.CodigoParlamentar == element.CodigoParlamentar)) {
            arrayData.push(element)
        }
    });

    arrayData.sort(function (a, b) {
        return a.UfParlamentar < b.UfParlamentar ? -1 : a.UfParlamentar > b.UfParlamentar ? 1 : 0
    })

    arrayData.forEach((element, index) => {
        element.x = circleAttributes[index].x
        element.y = circleAttributes[index].y
        colorsByPolitical.forEach((el, index) => {
            if (el.name === element.SiglaPartidoParlamentar) {
                element.color = colorsByPolitical[index].color
                console.log(colorsByPolitical)
            }
        })

    })
    createCircle(arrayData)
    return arrayData
}


var svg = d3.select('body')
    .select('#svg-center')
    .append('svg')
    .attr('width', width)
    .attr('height', height)

function createCircle(arrayData) {
    var circle = svg.selectAll('circle')
        .data(arrayData)
        .enter()
        .append('circle')
        .attr('cx', function (arrayData) { return arrayData.x })
        .attr('cy', function (arrayData) { return arrayData.y })
        .attr('r', 10)
        .attr('stroke', 'black')
        .attr('fill', function (arrayData) { return arrayData.color })
        .on('mouseover', handleMouseOver)
        .on('mouseout', handleMouseOut)
        .on('click', function () {
            var index = circle.nodes().indexOf(this)
            d3.select('#info').select('p').remove()
            var div = d3.select('#info')
                .append('p')
                .text(arrayData[index].NomeParlamentar)
            div.append('p')
                .text("Partido:  " + arrayData[index].SiglaPartidoParlamentar)
            div.append('p')
                .text("UF:  " + arrayData[index].UfParlamentar)
            div.append('img')
                .attr('src', arrayData[index].UrlFotoParlamentar)
                .attr('widht', 300)
                .attr('height', 300)
        })

}

function handleMouseOver() {
    d3.select(this)
        .attr("stroke", "rgba(35, 31, 32, 0.5)")
        .attr("stroke-width", 6);
}

function handleMouseOut() {
    d3.select(this)
        .attr("stroke", 'black')
        .attr("stroke-width", null)
}
