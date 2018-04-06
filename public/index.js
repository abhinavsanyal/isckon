$(document).ready(function() {


  let domain = "https://warm-chamber-42673.herokuapp.com";


  $.ajax({
    type: 'get',
    url: domain+'/api/bhakts',
    success: function(data) {
    
      for (let i = 0; i < data.length; i++) {
      let li = document.createElement('li');
      let liContent = document.createTextNode(data[i].fullname + ' ' + data[i].contact + ' ' + data[i].email);
      let liEditButton = document.createElement('a');
      let liEditButtonContent = document.createTextNode('Edit');
      liEditButton.href = "#";
      liEditButton.appendChild(liEditButtonContent);
      let liDeleteButton = document.createElement('a');
      let liDeleteButtonContent = document.createTextNode('Delete');
      liDeleteButton.href = '#';
      liDeleteButton.className = 'delete';
      liDeleteButton.appendChild(liDeleteButtonContent);
      let liHiddenInput = document.createElement('input');
      liHiddenInput.type = 'hidden';
      liHiddenInput.name = 'id';
      liHiddenInput.id = 'id';
      liHiddenInput.value = data[i]['_id'];
      // liHiddenInput.className = '';
      li.appendChild(liContent);
      li.appendChild(liEditButton);
      li.appendChild(liDeleteButton);
      li.appendChild(liHiddenInput);
      $('.wrap').append(li);
      }

      $('.delete').click(function(e){
        e.preventDefault();
    
        let id = $(this).siblings('input').val();
        let payload = {
          id: id
        }

        $.ajax({
          type: 'delete',
          url: domain+'/api/bhakts',
          contentType: 'application/json',
          dataType: 'json',
          data: JSON.stringify(payload),
          success: function(data) {
             console.log(data);
    
          }
        });
      });
    }
  });




  $('.add').click(function(e) {
    e.preventDefault();
    let name = $('.name').val();
    let contact = $('.contact').val();
    let email = $('.email').val();
    let body = {
      fullname: name,
      contact: contact,
      email: email,
    };
    $.ajax({
      type: 'post',
      url: domain+'/api/bhakts',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify(body),
      success: function(data) {
        // console.log(data);

      }
    });

  });

 

});