const n = 100;

for(let i = 0; i <= n; i++){
    console.log((i % 3 === 0 && i % 5 === 0) ? 'ChaussettesSales' : i % 3 === 0 ? 'Chaussettes' : i % 5 === 0 ? 'Sales' : i)
}