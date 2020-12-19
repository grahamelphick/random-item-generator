let items = [];
console.log(items);

$("#new-item").click(function() {
    $("#first-item").append(" <br><br><input> ");
});


$("#randomise").click(function() {
    $("input").each(function(){
        items.push($(this).val());
    });
    console.log(items);
    let randomItem = Math.floor(Math.random() * (items.length));
    console.log(randomItem);
    $("#result").append(items[randomItem] + ("<br><br>"));
});





  // console.log("randomise btn clicked");
    // let newItem = $("input").each();
    // console.log(newItem);
    // items.push(newItem);
    // console.log(items);