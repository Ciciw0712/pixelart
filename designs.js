// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function(event){
    event.preventDefault();
    const height = $('#inputHeight').val();
    const width = $('#inputWidth').val();
    makeGrid(height,width);
    // console.log("Height = " + height + " and Width = " + width);
});
function makeGrid(m,n) {
    $('tr').remove();
    for(var i = 1; i<=m; i++) {
        $("#pixelCanvas").append('<tr id=table' + i + '></tr>');
        for(var j = 1 ; j <= n; j++){
            $('#table' + i).append('<td></td>');
        }
    }
    // Add color to table
    $('td').click(function addColor(){
        let color = $('#colorPicker').val();
        console.log("clicking")
    
        if ($(this).attr('style')){
            $(this).removeAttr('style')
        } else {
            $(this).attr('style','background-color:' + color);
        }
    })
}

