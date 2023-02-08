function writer (productTitle, price, descr) {
    document.write(`
<div>
<h2>${productTitle} ${price}</h2>
<p>${descr}</p>
</div>
    `);
}

writer('milk', 23, 'some milk');


