# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?
    $ rails new app_name -d postgresql -T
    obvs change app_name to whatever your heart desires ;) 


2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get -  the HTTP verb we are sending to the server via the URL
library - this is the url
:id - the param that will be input by the user
book - name of the controller
show - name of the method found in the controller

3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

We're gonna do a migration! We need to modify the database to include a column for our foriegn keys
    First, we need to generate a migration : $ rails generate migration add_foreign_key_to_table
    Then, in our text editor, we find the migration file and add:
        $ def change
        add_column :table_name, :foreign_key, :integer
        end
    Then we need to make sure we create the association between the two models



4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

$ rails generate model Person shirt:string pants:string shoes:string
$ rails db:migrate




5. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?
for generating a Rails model - the model name is PascalCase and singular. 
for the table that is generated with this command - snake_case