function sendEmail() {
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/',
    data: {
      title: $('input[name="title"]').val(),
      content: $('input[name="content"]').val()
    },
    success: function(data){
      $('#title').val("")
      $('#content').val("")
      $('#todos').append(`
        <body>
          <form action="#" method="post" name="sign up for beta form">
            <div class="header">
              <img src="images/hacktiv8-logo.png" alt="">
               <p>SUBSCRIBE</p>
            </div>
            <div class="description">
              <p>Milkshake is almost ready. If you're interested in testing it out, then sign up below to get exclusive access.</p>
            </div>
            <div class="input">
              <input type="text" class="button" id="email" name="email" placeholder="name@email.com">
              <button type="submit" class="button" id="submit" onclick="sendEmail()">SUBSCRIBE</button>
            </div>
          </form>
        </body>
      `)
    }
  })
}
