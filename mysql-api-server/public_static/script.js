$(function(){
    let in_name = $('#name')
    let in_age =$('#age')
    let in_city = $('#city')
    let in_submit = $('#submit')
    let table = $('#persons')
     
    function refreshTable(data){
        table.empty()
        table.append(
            `<tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            </tr>`
        )
        for(person of data){
            table.append(
                `
                <tr>
                <td>${person.name}</td>
                <td>${person.age}</td>
                <td>${person.city}</td>
                </tr>`
                
            )
        }
    }
   
    $.get('/add',function(data){
        refreshTable(data)
    })
    in_submit.click(function(){
        $.post('/add',
        {
            name:in_name.val(),
            age:in_age.val(),
            city:in_city.val()
        },
        function(data){
            refreshTable(data)
        }
    )
    })
})

