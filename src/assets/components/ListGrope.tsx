function ListGrope(){

const list = ["emmanuel", "esther", "davide", "vivian"];

 return( <>
    <h1>List</h1>
    {list.length === 0 && <h1> no list fund</h1>}
    <ul className="ListGroupe">
        {list.map((list) => (<li className= "ListGrope" > { list}</li> ))}
    </ul>
 </>
 )

}

export default ListGrope