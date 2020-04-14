// https://covid19-server.chrismichael.now.sh/api/v1/AllReports

fetch('https://corona.lmao.ninja/all').then(res=>res.json()).then(data=>{
            console.log(data)

            document.getElementById('info').innerHTML+=`

                <div class="card-header">
                    Latest Highlights
                </div>
                <div class="card-body">
                    <h5 class="card-title">Total Cases : ${data.cases}</h5>
                    <p class="card-text">Today Cases : ${data.todayCases}</p>
                    <p class="card-text">Recovered : ${data.recovered}</p>
                    <p class="card-text">Today Deaths : ${data.todayDeaths}</p>
                    <p class="card-text">Deaths : ${data.deaths}</p>
                    <!--<a href="#" class="btn btn-primary">Go somewhere</a>-->
                </div>
                <div class="card-footer text-muted">
                    <p> Last Refreshed : ${Date(data.Date)} </p>
                    <p> Last Updated : ${Date(data.Date)} </p>
                </div>


            `

        }).catch(e=>{
            console.log(e)
        })

fetch('https://corona.lmao.ninja/countries?sort=country').then(res=>res.json()).then(data=>{
            console.log(data)

            let todayDate = new Date();
        
            data.reverse().map(obj=>{
                document.getElementById('data').innerHTML += `
                    <tr>
                        <th>${obj.country}</th>
                        <td>${obj.todayCases}</td>
                        <td>${obj.cases}</td>
                        <td>${obj.todayDeaths}</td>
                        <td>${obj.deaths}</td>
                        <td>${obj.recovered}</td>
                    </tr>
                `
            })
        }).catch(e=>{
            console.log(e)
        })