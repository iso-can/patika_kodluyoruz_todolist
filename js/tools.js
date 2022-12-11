function confirmSingleRemove()
{
	let e = confirm("Görevi silmek istediğinizden Emin misiniz ?");
	if (e) 
	{
		$(".successRemove").toast("show");
		return true;
	}
	else
	{
		$(".cancelRemove").toast("show");
		return false;
	}	
}

function confirmMultiRemove()
{
	let e = confirm("Seçili görevleri silmek istediğinizden Emin misiniz ?");
	if (e) 
	{
		$(".successMultipleRemove").toast("show");
		return true;
	}
	else
	{
		$(".cancelRemove").toast("show");
		return false;
	}	
}

function showSelectsRemoveButton(list)
{
	if(list.length>1)
	{
		$('#removeSelectedButton').show();
	}
	else
	{
		$('#removeSelectedButton').hide();
	}
}

function emptyCheck(val)
{
	if(val.trim() == "")
	{
		$(".errorAdd").toast("show");
		return false;	
	}
	else
	{
		$(".successAdd").toast("show");
		return true;
	}	
}