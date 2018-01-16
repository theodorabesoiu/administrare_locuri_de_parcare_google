/*global $*/

// READ recods on page load
$(document).ready(function () {
    readRecords(); // calling function
});

// READ records
function readRecords() {
    $.get("/products/", {}, function (data, status) {
        data.forEach(function(value) {
            var row = '<tr id="row_id_'+ value.id +'">'
            			+ displayColumns(value)
        				+ '</tr>';
            $('#articles').append(row);
        });
    });
}

function displayColumns(value) {
    return 	'<td>'+value.id+'</td>'
            + '<td class="category_id">'+value.category.name+'</td>'
            + '<td class="owner">'+value.owner+'</td>'
			+ '<td class="adress">'+value.adress+'</td>'
			+ '<td class="price">'+value.price+'</td>'
			+ '<td class="reserved">'+value.reserved+'</td>'
			+ '<td class="latitudine">'+value.latitudine+'</td>'
			+ '<td class="longitudine">'+value.longitudine+'</td>'
			+ '<td align="center">'
			+	'<button onclick="viewRecord('+ value.id +')" class="btn btn-edit">Update</button>'
			+ '</td>'
			+ '<td align="center">'
			+	'<button onclick="deleteRecord('+ value.id +')" class="btn btn-danger">Delete</button>'
			+ '</td>';
}

function addRecord() {
    $('#id').val('');
    $('#category_id').val('');
    $('#owner').val('');
    $('#adress').val('');
    $('#price').val('');
    $('#reserved').val('');
    $('#latitudine').val('');
    $('#longitudine').val('');
    $('#myModalLabel').html('Add New Product');
}

function viewRecord(id) {
    var url = "/products/" + id;
    
    $.get(url, {}, function (data, status) {
        //bind the values to the form fields
        $('#category_id').val(data.category_id);
        $('#owner').val(data.owner);
        $('#adress').val(data.adress);
        $('#price').val(data.price);
        $('#reserved').val(data.reserved);
        $('#latitudine').val(data.latitudine);
        $('#longitudine').val(data.longitudine);
        $('#id').val(id);
        $('#myModalLabel').html('Edit Product');
        
        $('#add_new_record_modal').modal('show');
    });
}

function saveRecord() {
    //get data from the html form
    var formData = $('#record_form').serializeObject();
    
    //decide if it's an edit or create
    if(formData.id) {
        updateRecord(formData);
    } else {
        createRecord(formData);
    }
}

function createRecord(formData) {
    $.ajax({
        url: '/products/',
        type: 'POST',
        accepts: {
            json: 'application/json'
        },
        data: formData,
        success: function(data) {
            $('#add_new_record_modal').modal('hide');
            
            var row = '<tr id="row_id_'+ data.id +'">'
            			+ displayColumns(data)
        				+ '</tr>';
            $('#articles').append(row);
        } 
    });
}

function updateRecord(formData) {
    $.ajax({
        url: '/products/'+formData.id,
        type: 'PUT',
        accepts: {
            json: 'application/json'
        },
        data: formData,
        success: function(data) {
            $('#row_id_'+formData.id+'>td.category_id').html(formData.category_id);
            $('#row_id_'+formData.id+'>td.owner').html(formData.name);
            $('#row_id_'+formData.id+'>td.adress').html(formData.description);
            $('#row_id_'+formData.id+'>td.price').html(formData.name);
            $('#row_id_'+formData.id+'>td.reserved').html(formData.name);
            $('#row_id_'+formData.id+'>td.longitudine').html(formData.name);
            $('#row_id_'+formData.id+'>td.latitudine').html(formData.name);
            $('#add_new_record_modal').modal('hide');
        } 
    });
}

function deleteRecord(id) {
    $.ajax({
        url: '/products/'+id,
        type: 'DELETE',
        success: function(data) {
            $('#row_id_'+id).remove();
        }
    });
}