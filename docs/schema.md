# Schema Design

`pk` = Primary Key
`ref: >` = Many to one
`ref: <` = One to many
`ref: -` = One to one


Table user{
    id int [pk]
    username varchar(32) [not null, unique]
    email varchar(32) [not null, unique]
    phone int 
    age int
    address varchar(255) [not null]
}

Table component_categories{
    id int [pk]
    categories varchar(32)
}

// Table product_status{
//     id int [pk]
//     status varchar(32)
// }

Table delivery_status{
    id int [pk]
    delivery_status varchar(32)
}


Table condition{
    id int [pk]
    condition varchar(64)
}
Table post {
    id int [pk]
    seller_id id [ref: - user.id]
    description varchar(255) [not null]
    
    categories categories [ref:- component_categories.categories]
    condition condition [ref: - condition.condition, not null]
    post_date date [not null]
    

    cost int 
}

Table order {
  id int [pk]
  post_id id [ref: - post.id]
  seller seller_id [ref: - user.id]
  buyer buyer_id [ref: - user.id]
  delivery delivery_status [ref: - delivery_status.delivery_status]
  completion date
  }