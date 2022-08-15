**Important** Notes for the NodeJs Application (in order to start/work) :

1. Run command on cmd -> npm install

2. First need to create a database in MongoDB named "cmscart".

3. Database "cmscart" should contain folowing collections - "users" , "pages" , "products" , "categories".

4. Collection "pages" should have one "home" item present with information ->

{
	"title" : "Home",
  	"slug" : "home", 
	"content" : "Welcome to the home page.", 
	"sorting" : 0
}

5. Collection "users" should contain at least one user item with admin value set to 1 ->

{
	 "admin" : 1
}

example : To set the admin value of any user to 1,  we can update the record ->

{ 
	$set : { "admin" : 1 } 
}

6. Internet connection is necessary to load the bootstrap css files for the application.