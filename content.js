async function collapseAll() {
    console.log("Started to collapse all diff...")
    let toCollapse = $('[aria-label="Hide file contents"');
    while (toCollapse.length>0) {
        console.log("new phase...");
        toCollapse.click();
        await new Promise(r => setTimeout(r, 100));
        toCollapse = $('[aria-label="Hide file contents"');
        console.log("phase done...");
    }
    console.log("All collapsed!");
}

collapseAll();