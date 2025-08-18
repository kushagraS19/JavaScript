function ListItem(){

  let foodItems = ["Dal", "Hari Vegetables", "Milk", "Roti", "Sab khao Bc"];
  
  {foodItems.push('chawal')}
  return <ul className="list-group">
        
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>;
}

export default ListItem;