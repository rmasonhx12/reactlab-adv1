function DessertsList(props) {
 // requirement 1 -- display list of deserts less than 500 calories
 const lowCalorieDeserts = props.deserts
 .filter((desert) => {
  return desert.calories < 500;
 })

 // requirement 2 -- sort list of deserts using sor() method
 .sort(( a, b ) => {
  return a.calories - b.calories;
 })
 // chain map operator to display results
 .map((desert) => {
  return (
    <li>{desert.name} - {desert.calories} calories</li>
  );
 });

 return <ul>{lowCalorieDeserts}</ul>
}
export default DessertsList;
