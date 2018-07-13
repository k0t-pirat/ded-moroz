var customSelect, i, j, oldSelect, selectedItem, optionList, optionItem;
//customSelect - блок, заменяющий select для стилизации; i, j - итераторы; oldSelect - select, который заменяют; optionList - список, заменяющий выпадющий список у select,
//				optionItem - элемент нового выпадающего списка; selectedItem - выбранный элемент (блок, заменяющий select box)
customSelect =  document.getElementsByClassName('custom-select');

for (i = 0; i < customSelect.length; i++){
	oldSelect = customSelect[i].getElementsByTagName('select')[0];
	
	selectedItem = document.createElement('div');
	selectedItem.setAttribute('class', 'select-selected');
	selectedItem.innerHTML = oldSelect.options[oldSelect.selectedIndex].innerHTML;
	customSelect[i].appendChild(selectedItem);
	
	optionList = document.createElement('ul');
	optionList.setAttribute('class', 'select-items select-hide');
	
	for (j = 0; j < oldSelect.length; j++) {
		optionItem = document.createElement('li');
		optionItem.innerHTML = oldSelect.options[j].innerHTML;
		optionItem.addEventListener('click', function(evt) {								//при клике на optionItem 
			var optionItemLocal, i, k, oldSelectLocal, selectedItemLocal;
			oldSelectLocal = this.parentNode.parentNode.getElementsByTagName('select')[0];	//обратиться к текущему select
			selectedItemLocal = this.parentNode.previousSibling;							//обратиться к текущему selectedItem
			
			for (i = 0; i < oldSelectLocal.length; i++) {									//пройтись по всем option текущего select
				if (oldSelectLocal.options[i].innerHTML == this.innerHTML) {				//находим option, текст в котором совпадает с текстом optionItem, по которому нажали
					oldSelectLocal.selectedIndex = i;										//устанавливаем значение select, соответствующее выбранному option
					selectedItemLocal.innerHTML = this.innerHTML;							//текст выбранного элемента (тот, который вместо select box) установить равным optionItem, по которому нажали
					optionItemLocal = this.parentNode.getElementsByClassName('same-as-selected');	//обратиться к элементу, который был выбран
					
					for (k = 0; k < optionItemLocal.length; k++) {
						optionItemLocal[k].removeAttribute('class');						//убрать класс в элементе, который был выбран
					}
					this.setAttribute('class', 'same-as-selected');							//определить optionItem, по которому нажали, как выбранный элемент
					break;
				}
			}
			selectedItemLocal.click();
		});
		optionList.appendChild(optionItem);
	}
	customSelect[i].appendChild(optionList);
	selectedItem.addEventListener('click', function(evt) {
		evt.stopPropagation();
		closeAllSelect(this);
		this.nextSibling.classList.toggle('select-hide');
		this.classList.toggle('select-arrow-active');
	});
}

function closeAllSelect (elmnt) {
	var optionList, selectedItem, i, arrNo = [];
	optionList = document.getElementsByClassName('select-items');
	selectedItem = document.getElementsByClassName('select-selected');
	
	for (i = 0; i < selectedItem.length; i++) {
		if (elmnt == selectedItem[i]) {
			arrNo.push(i);
		}
		else {
			selectedItem[i].classList.remove('select-arrow-active');
		}
	}
	
	for (i = 0; i < optionList.length; i++) {
		if (arrNo.indexOf(i)) {
			optionList[i].classList.add('select-hide');
		}
	}
}

document.addEventListener('click', closeAllSelect);