// Used thus api to search query for step 2.

// const entity_name = 'Python'
const competitors_list = ['R', 'Java',
    'Javascript', 'Ruby', 'C', 'Js', 'Php', 'Go', 'Matlab'
]
// const entity_name = 'Toyota'
// const competitors_list = ['Honda', 'Nissan', 'Competition', 'Chevrolet', 'Subaru', 'Frontier', 'Lexus', 'Ford', 'Hybrid']

const entity_name = 'Prada'
// const competitors_list  = ['Gucci', 'Vuitton', 'Fendi', 'Nada', 'Homme', 'Burberry', 'Sweeney', 'Chanel', 'Miu']


for(let i = 0 ; i < competitors_list.length; i++){
    setTimeout(() => {
        fetch(`https://google-search3.p.rapidapi.com/api/v1/search/q="${entity_name} ${competitors_list[i]}"&num=100`, {
        "method": "GET",
        "headers": {
            "x-user-agent": "desktop",
            "x-proxy-location": "US",
            "x-rapidapi-host": "google-search3.p.rapidapi.com",
            "x-rapidapi-key": "7f8125dcb0msh08515a300803345p1fc8ecjsn17b9538f872f"
        }
    })
    .then(response => {
        return response.json()
    })
    .then(res => {
        console.log(JSON.stringify(res))})
    .catch(err => {
        console.error(err);
    });
    }, i *1000)
}

