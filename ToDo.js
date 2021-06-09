let list = []
$(function(){
    //load json list from local storage if it exists
    let local_list = localStorage.getItem('list')

    //display list
    if(local_list){
        console.log(local_list)
         list = local_list.split(',')
        for(let i=0; i<list.length;i++){
            $('div#ToDolist').append(`<p>${list[i]} <button onclick='deleteItem(${i})'>delete</button></p>`)
        }
    }
    else{
        console.log('no list found')
    }
    //add to list
    $('button#add').click(function(){
        let item = $('input#item').val()
        list.push(item)
        console.log(list)
        localStorage.setItem('list',list)
        $('div#ToDolist').empty()
        
        for(let i=0; i<list.length;i++){
            
            $('div#ToDolist').append(`<p>${list[i]} <button onclick='deleteItem(${i})'>delete</button></p>`)
        }
    })
})
//delete item
function deleteItem(pos){
    console.log("DELETE")
    list.splice(pos,1)
    console.log(list)
    localStorage.setItem('list',list)
    $('div#ToDolist').empty()
    for(let i=0; i<list.length;i++){
        $('div#ToDolist').append(`<p>${list[i]} <button onclick='deleteItem(${i})'>delete</button></p>`)
    }
}