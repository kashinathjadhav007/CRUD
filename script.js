
var app = new function() 
{

  this.el = document.getElementById('names');
  this.names = [ ];

  this.Count = function(data) 
  {
    var el   = document.getElementById('counter');
    var name = 'name';

    if (data)
     {
      if (data > 1) 
      {
        name = 'names';
      }
      el.innerHTML = data + ' ' + name ;
    } 
    else 
    {
      el.innerHTML = 'No ' + name;
    }
  };

  
  this.Fetchdata = function() 
  {
    var data = '';

    if (this.names.length > 0) {
      for (i = 0; i < this.names.length; i++) {
        data += '<tr>';
        data += '<td>' + this.names[i] + '</td>';
        data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
        data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
        data += '</tr>';
      }
    }

    this.Count(this.names.length);
    return this.el.innerHTML = data;
  };

  this.Add = function ()
   {
    el = document.getElementById('add-name');
    var nname = el.value;

    if (nname) 
    {

      this.names.push(nname);
      el.value = '';
      this.Fetchdata();
    }
  };

  this.Edit = function (item)
   {
    var el = document.getElementById('edit-name');
    el.value = this.names[item];
    document.getElementById('spoiler').style.display = 'block';
    self = this;

    document.getElementById('saveEdit').onsubmit = function() 
    {
      var nname = el.value;

      if (nname) 
      {
        self.names.splice(item, 1,nname.trim());
        self.Fetchdata();

       
      }
    }
  };

  //delete function
  this.Delete = function (item) 
  {
    this.names.splice(item, 1);
    this.Fetchdata();
  };
  
}

app.Fetchdata();
