if(localStorage["firstRun"] == null)
{
	localStorage.setItem('list', JSON.stringify([
		{id : 0 , text : "Gıda Alışverişi"},
		{id : 1 , text : "Alınacak Kitaplar"},
		{id : 2 , text : "Yapılacaklar"}
		]
	));
	localStorage["firstRun"] = true;
}

let getAllStorge = () => {
	if(localStorage.getItem('list') == "[]")
		return [];
	else
		return JSON.parse(localStorage.getItem('list'));
};

let getByIdIndexStorge = (id) => {
	let list = getAllStorge();
	return list.findIndex((item)=> { return item.id == id});
};

let identificationNum = () => {
	let list = getAllStorge();
	if(localStorage.getItem('list') == "[]")
		return 0;
	else
		return list[list.length-1].id + 1
};

let addStorge = (text) => {
	let list = getAllStorge();
	list.push({id : identificationNum(), text : text});
	localStorage.setItem('list', JSON.stringify(list));
};

let removeStorge = (id) => {
	let list = getAllStorge();
	list.splice(getByIdIndexStorge(id),1);
	localStorage.setItem('list', JSON.stringify(list));
};

let multipleRemoveStorge = (listId) => {
	let list = getAllStorge();
	listId = listId.sort((a, b) => {return b - a});
	listId.forEach((id)=>{
		list.splice(getByIdIndexStorge(id),1);
	});
	localStorage.setItem('list', JSON.stringify(list));
};
