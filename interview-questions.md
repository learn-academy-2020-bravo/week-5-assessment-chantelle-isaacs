# ASSESSMENT 5: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own there is always something more to learn.   

1. Rails follows an MVC pattern. What does that mean?

  Your answer:
  MVC is Model, View, Controller and has to do with how a user sees data, interacts with it, and how data is stored. 

  Researched answer:
Model–view–controller (usually known as MVC) is a software design pattern commonly used for developing user interfaces that divides the related program logic into three interconnected elements. This is done to separate internal representations of information from the ways information is presented to and accepted from the user.[


2. What does it mean if an application has CRUD? What does CRUD stand for?

  Your answer: CRUD is the bare necessities (the simple bear necessities) of a functioning website - it stands for Create, Read, Update, Delete. This means that a user should be able to create information, read that information, edit/update that information, and delete that information.

  Researched answer:
  In computer programming, create, read, update, and delete (CRUD) are the four basic functions of persistent storage.



3. What is a migration? Why would you use one?

  Your answer: a migration is what you do to add information to tables or to push through the creation of a new model to your database. You do this so all the information has locations to be stored. Migrations can also be used to change or update 

  Researched answer:
Rails Migration allows you to use Ruby to define changes to your database schema, making it possible to use a version control system to keep things synchronized with the actual code.


4. Describe a possible relationship between a model called Person and a model called Computer. Based on your description, which model would hold the foreign key?

  Your answer: model Person has many Computers, while model Computer belongs to model Person. Model Computer would hold the foreign key of it's Person

  It's also possible to have it as the reverse - Model Computer could have many users, or People, while a Person's access belongs to a single Computer - in which case the Person would hold the foreign key of it's assigned Computer

  Researched answer:
  Rails supports six types of associations:

      -belongs_to
      -has_one
      -has_many
      -has_many :through
      -has_one :through
      -has_and_belongs_to_many


5. What is object-relational mapping?

  Your answer: totally don't remember... something about how everything is an object? 

  Researched answer:
  ORM (Object-relational mapping) is a programming technique for converting data between incompatible systems using object-oriented programming languages. ORM is a tool that allows developers to write SQL queries using Rails.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes -- A RESTful route is a route that provides mapping between HTTP verbs (get, post, put, delete, patch) to controller CRUD actions (create, read, update, delete). Instead of relying solely on the URL to indicate what site to visit, a RESTful route also depends on the HTTP verb and the URL
- JSON -- JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate.
- API -- An application programming interface (API) is a computing interface which defines interactions between multiple software intermediaries. It defines the kinds of calls or requests that can be made, how to make them, the data formats that should be used, the conventions to follow, etc.
- Endpoints -- An API endpoint is a point at which an application program interface (API) -- the code that allows two software programs to communicate with each other -- connects with the software program. APIs work by sending requests for information from a web application or web server and receiving a response.
- Strong params --With strong parameters, Action Controller parameters are forbidden to be used in Active Model mass assignments until they have been permitted. This means that you'll have to make a conscious decision about which attributes to permit for mass update. This is a better security practice to help prevent accidentally allowing users to update sensitive model attributes.
